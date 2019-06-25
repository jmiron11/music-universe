package main

import (
	"database/sql"
	"fmt"
	"sync"
	"time"

	"github.com/zmb3/spotify"
)

// Main-thread: Read in tokens table. For each token in the users table create a mapping of:
// token to goroutine.

// On an interval: Check that all tokens in the tokens table map to a goroutine.
// If not, spawn a goroutine.

func CheckUserCurrentListen(client *spotify.Client) {
	currently_playing := GetUserCurrentlyPlayingTrack(client)
	if currently_playing != nil {
		fmt.Printf("%s\n", currently_playing.Item.Name)
	}
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
				CheckUserCurrentListen(&client)
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
