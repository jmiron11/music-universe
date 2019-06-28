package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	"github.com/zmb3/spotify"

	"universe"
)

// Main-thread: Read in tokens table. For each token in the users table create a mapping of:
// token to goroutine.

// On an interval: Check that all tokens in the tokens table map to a goroutine.
// If not, spawn a goroutine.
type LastWritten struct {
	last_recorded_play *spotify.CurrentlyPlaying
	written            bool
}

func IsSameTrack(cp1 *spotify.CurrentlyPlaying, cp2 *spotify.CurrentlyPlaying) bool {
	return universe.GetArtist(cp1) == universe.GetArtist(cp2) && universe.GetAlbum(cp1) == universe.GetAlbum(cp2) && universe.GetTrack(cp1) == universe.GetTrack(cp2)
}

// Return true if track is past 50% or 2 minutes.
func SufficientProgress(cp *spotify.CurrentlyPlaying) bool {
	return float32(universe.GetProgress(cp))/float32(universe.GetCurrentTrackDuration(cp)) > 0.5 || universe.GetProgress(cp) > 120000
}

// The following conditions must be met for it to be a new listen
// 1. The track is past 2min or 50% of the song.
// 2. The track is not the same as the last song written OR the track is the same but we cleared the written variable.
// We clear the written variable if the track is the same
func IsNewListen(currently_playing *spotify.CurrentlyPlaying, last_written *LastWritten) bool {
	// True condition: If we are past 2min or 50% of the song

	if SufficientProgress(currently_playing) {
		if !IsSameTrack(currently_playing, last_written.last_recorded_play) {
			return true
		} else if last_written.written == false {
			return true
		}
	}
	return false
}

func ClearWrittenOnProgressDecrease(currently_playing *spotify.CurrentlyPlaying, last_written *LastWritten) {
	if IsSameTrack(currently_playing, last_written.last_recorded_play) && universe.GetProgress(currently_playing) < universe.GetProgress(last_written.last_recorded_play) {
		last_written.written = false
	}
}

func UpdateDbWriteListen(listen_db *sql.DB, currently_playing *spotify.CurrentlyPlaying, user_id int) {
	// Updating the music catalog is done in the following order:
	// 1. Check for the artist, add if neccessary.
	// 2. Check for the album, add album object with artist id if neccessary.
	// 3. Check for the track, add track object with album/artist id if neccessary.
	track, artist, album := universe.ModelsFromCurrentlyPlaying(currently_playing)
	exists := universe.GetArtistFromDb(listen_db, &artist)
	if !exists {
		universe.WriteArtist(listen_db, &artist)
	}

	album.Artist_id = artist.Id
	track.Artist_id = artist.Id

	exists = universe.GetAlbumFromDb(listen_db, &album)
	if !exists {
		universe.WriteAlbum(listen_db, &album)
	}

	track.Album_id = album.Id

	exists = universe.GetTrackFromDb(listen_db, &track)
	if !exists {
		universe.WriteTrack(listen_db, &track)
	}

	// TODO(justinmiron): Use the time returned by spotify instead of time.Now()
	// Processing time and network delays can impact the timestamp.
	listen := universe.Listen{-1, time.Now(), track.Id, user_id}

	log.Printf("Writing listen entry for <%s: %d, %s: %d, %s: %d>",
		track.Name, track.Id, artist.Name, artist.Id,
		album.Name, album.Id)
	universe.WriteNewListen(listen_db, &listen)
}

func CheckUserCurrentListen(client *spotify.Client, listen_db *sql.DB, user_id int, last_written *LastWritten, first bool) {
	currently_playing := universe.GetUserCurrentlyPlayingTrack(client)
	if currently_playing == nil {
		fmt.Printf("Failed to retrieve currently playing track of user: %d", user_id)
		return
	}

	if first {
		UpdateDbWriteListen(listen_db, currently_playing, user_id)
		last_written.last_recorded_play = currently_playing
		last_written.written = true
	} else {
		ClearWrittenOnProgressDecrease(currently_playing, last_written)

		if IsNewListen(currently_playing, last_written) {
			UpdateDbWriteListen(listen_db, currently_playing, user_id)

			// Mark that we have written a new entry.
			last_written.last_recorded_play = currently_playing
			last_written.written = true
		}
	}

}

func TrackUser(wg *sync.WaitGroup, token universe.Token, listen_db *sql.DB, interval_s int) {
	defer wg.Done()

	client := universe.GetClientFromToken(&token)
	ticker := time.NewTicker(time.Duration(interval_s) * time.Second)
	quit := make(chan struct{})
	go func() {
		// State maintained over each call to determine if the same track is seen in subsequent calls.
		var last_written LastWritten
		last_written.written = false
		first := true
		for {
			select {
			case <-ticker.C:
				CheckUserCurrentListen(&client, listen_db, token.User_id, &last_written, first)
			case <-quit:
				ticker.Stop()
				fmt.Println("Ticker stopped")
				return
			}

			if first {
				first = false
			}
		}
	}()

	<-quit
}

func main() {
	args := os.Args[1:]
	if len(args) != 1 {
		fmt.Println("Usage: ./spotify-tracker <path to confg file>")
		os.Exit(-1)
	}

	cfg := ReadConfig(args[0])
	token_db := universe.GetDbOrKill(cfg.TOKEN_DB_TYPE, cfg.TOKEN_DB_DSN)
	listen_db := universe.GetDbOrKill(cfg.TOKEN_DB_TYPE, cfg.TOKEN_DB_DSN) // TODO(justinmiron): Specify config option for seperate db
	tkns := universe.GetAllTokens(token_db)

	var wg sync.WaitGroup
	for _, token := range tkns {
		wg.Add(1)
		go TrackUser(&wg, token, listen_db, cfg.TRACK_INTERVAL_SECONDS)
	}

	wg.Wait()

	universe.CloseDb(token_db)
	universe.CloseDb(listen_db)
}
