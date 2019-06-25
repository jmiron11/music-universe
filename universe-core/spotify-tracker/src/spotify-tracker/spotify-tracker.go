package main

import (
	"database/sql"
	"fmt"
)

// Main-thread: Read in tokens table. For each token in the users table create a mapping of:
// token to goroutine.

// On an interval: Check that all tokens in the tokens table map to a goroutine.
// If not, spawn a goroutine.

func TrackUser(token Token, listen_db *sql.DB) {
	client := GetClientFromToken(&token)
	currently_playing := GetUserCurrentlyPlayingTrack(&client)
	fmt.Printf("%s\n", currently_playing.Item.Name)
}

func main() {
	cfg := ReadConfig("config.json")
	token_db := GetDbOrKill(cfg.TOKEN_DB_TYPE, cfg.TOKEN_DB_DSN)
	listen_db := GetDbOrKill(cfg.TOKEN_DB_TYPE, cfg.TOKEN_DB_DSN) // TODO(justinmiron): Specify config option for seperate db
	tkns := GetAllTokens(token_db)

	for _, token := range tkns {
		TrackUser(token, listen_db)
	}

	CloseDb(token_db)
	CloseDb(listen_db)
}
