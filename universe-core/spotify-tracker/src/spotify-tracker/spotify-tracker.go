package main

import (
	"fmt"
)

// Main-thread: Read in tokens table. For each token in the users table create a mapping of:
// token to goroutine.

// On an interval: Check that all tokens in the tokens table map to a goroutine.
// If not, spawn a goroutine.

func main() {
	cfg := ReadConfig("config.json")
	db := GetTokensDbOrKill(cfg.TOKEN_DB_TYPE, cfg.TOKEN_DB_DSN)
	tkns := GetAllTokens(db)
	for _, token := range tkns {
		fmt.Printf(token.refresh_token)
	}
	CloseTokensDb(db)
}
