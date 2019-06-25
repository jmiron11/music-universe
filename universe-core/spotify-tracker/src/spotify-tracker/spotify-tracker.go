package main

import (
	"database/sql"
	"fmt"
	"log"
	"sync"
	"time"

	"github.com/zmb3/spotify"
)

// Main-thread: Read in tokens table. For each token in the users table create a mapping of:
// token to goroutine.

// On an interval: Check that all tokens in the tokens table map to a goroutine.
// If not, spawn a goroutine.
type LastWritten struct {
	last_recorded_play CurrentlyPlaying
	written            bool
}

func IsSameTrack(cp1 *CurrentlyPlaying, cp2 *CurrentlyPlaying) bool {
	return cp1.artist == cp2.artist && cp1.album == cp2.album && cp1.track == cp2.track
}

// Return true if track is past 50% or 2 minutes.
func SufficientProgress(currently_playing *CurrentlyPlaying) bool {
	return float32(currently_playing.progress_ms)/float32(currently_playing.duration_ms) > 0.5 || currently_playing.progress_ms > 120000
}

// The following conditions must be met for it to be a new listen
// 1. The track is past 2min or 50% of the song.
// 2. The track is not the same as the last song written OR the track is the same but we cleared the written variable.
// We clear the written variable if the track is the same
func IsNewListen(currently_playing *CurrentlyPlaying, last_written *LastWritten) bool {
	// True condition: If we are past 2min or 50% of the song

	if SufficientProgress(currently_playing) {
		if !IsSameTrack(currently_playing, &last_written.last_recorded_play) {
			return true
		} else if last_written.written == false {
			return true
		}
	}
	return false
}

func ClearWrittenOnProgressDecrease(currently_playing *CurrentlyPlaying, last_written *LastWritten) {
	if IsSameTrack(currently_playing, &last_written.last_recorded_play) && currently_playing.progress_ms < last_written.last_recorded_play.progress_ms {
		last_written.written = false
		fmt.Printf("Clearing the last written")
	}
}

func UpdateAndGetTrackIds(listen_db *sql.DB, currently_playing *CurrentlyPlaying) (int, int, int) {
	// Updating the music catalog is done in the following order:
	// 1. Check for the artist, add if neccessary.
	// 2. Check for the album, add album object with artist id if neccessary.
	// 3. Check for the track, add track object with album/artist id if neccessary.
	var artist_id, album_id, track_id int
	artist_id = GetArtistIdOrNeg1(listen_db, currently_playing.artist)
	if artist_id == -1 {
		artist_id = WriteArtistGetId(listen_db, currently_playing.artist)
	}

	// Update DB (if neccessary) and retrieve track id.
	album_id = GetAlbumIdOrNeg1(listen_db, artist_id, currently_playing.album)
	if album_id == -1 {
		album_id = WriteAlbumGetId(listen_db, artist_id, currently_playing.artist)
	}

	track_id = GetTrackIdOrNeg1(listen_db, artist_id, album_id, currently_playing.track)
	if track_id == -1 {
		track_id = WriteTrackGetId(listen_db, artist_id, album_id, currently_playing.track)
	}

	return track_id, album_id, artist_id
}

func CheckUserCurrentListen(client *spotify.Client, listen_db *sql.DB, user_id int, last_written *LastWritten) {
	currently_playing := GetUserCurrentlyPlayingTrack(client)

	ClearWrittenOnProgressDecrease(&currently_playing, last_written)

	if IsNewListen(&currently_playing, last_written) {
		track_id, album_id, artist_id := UpdateAndGetTrackIds(listen_db, &currently_playing)

		// TODO(justinmiron): Use the time returned by spotify instead of time.Now()
		// Processing time and network delays can impact the timestamp.
		listen := Listen{-1, time.Now(), track_id, user_id}
		log.Printf("Writing listen entry for <%s: %d, %s: %d, %s: %d>",
			currently_playing.track, track_id, currently_playing.artist, artist_id,
			currently_playing.album, album_id)
		WriteNewListen(listen_db, &listen)

		// Mark that we have written a new entry.
		last_written.last_recorded_play = currently_playing
		last_written.written = true
	}
}

func TrackUser(wg *sync.WaitGroup, token Token, listen_db *sql.DB, interval_s int) {
	defer wg.Done()

	client := GetClientFromToken(&token)
	ticker := time.NewTicker(time.Duration(interval_s) * time.Second)
	quit := make(chan struct{})
	go func() {
		// State maintained over each call to determine if the same track is seen in subsequent calls.
		var last_written LastWritten
		last_written.written = false
		for {
			select {
			case <-ticker.C:
				CheckUserCurrentListen(&client, listen_db, token.user_id, &last_written)
			case <-quit:
				ticker.Stop()
				fmt.Println("Ticker stopped")
				return
			}
		}
	}()

	<-quit
}

func main() {
	cfg := ReadConfig("config.json")
	token_db := GetDbOrKill(cfg.TOKEN_DB_TYPE, cfg.TOKEN_DB_DSN)
	listen_db := GetDbOrKill(cfg.TOKEN_DB_TYPE, cfg.TOKEN_DB_DSN) // TODO(justinmiron): Specify config option for seperate db
	tkns := GetAllTokens(token_db)

	var wg sync.WaitGroup
	for _, token := range tkns {
		wg.Add(1)
		go TrackUser(&wg, token, listen_db, cfg.TRACK_INTERVAL_SECONDS)
	}

	wg.Wait()

	CloseDb(token_db)
	CloseDb(listen_db)
}
