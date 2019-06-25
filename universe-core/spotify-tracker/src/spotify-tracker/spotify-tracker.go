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

func CheckUserCurrentListen(client *spotify.Client, listen_db *sql.DB, user_id int) {
	currently_playing := GetUserCurrentlyPlayingTrack(client)

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

	// Create a listen object
	// TODO(justinmiron): Use the time returned by spotify instead of time.Now()
	// Processing time and network delays can impact the timestamp.
	listen := Listen{-1, time.Now(), track_id, user_id}
	log.Printf("Writing listen entry for <%s: %d, %s: %d, %s: %d>",
		currently_playing.track, track_id, currently_playing.artist, artist_id,
		currently_playing.album, album_id)
	WriteNewListen(listen_db, &listen)
}

func TrackUser(wg *sync.WaitGroup, token Token, listen_db *sql.DB, interval_s int) {
	defer wg.Done()

	client := GetClientFromToken(&token)
	ticker := time.NewTicker(time.Duration(interval_s) * time.Second)
	quit := make(chan struct{})
	go func() {
		for {
			select {
			case <-ticker.C:
				CheckUserCurrentListen(&client, listen_db, token.user_id)
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
