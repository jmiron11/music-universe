package main

import (
	"database/sql"
)
import _ "github.com/go-sql-driver/mysql"

var tokens_table = "token"

func GetTokensDbOrKill(token_db_type, token_db_dsn string) *sql.DB {
	// Open a connection to the db.
	db, err := sql.Open(token_db_type, token_db_dsn)
	if err != nil {
		panic(err.Error())
	}

	// Check that we can communicate with the db.
	err = db.Ping()
	if err != nil {
		panic(err.Error()) // proper error handling instead of panic in your app
	}
	return db
}

func GetAllTokens(db *sql.DB) []Token {
	results, err := db.Query("SELECT * FROM token")
	if err != nil {
		panic(err.Error())
	}

	var tkns []Token
	i := 0
	for results.Next() {
		tkns = append(tkns, Token{})
		err = results.Scan(&tkns[i].id, &tkns[i].access_token, &tkns[i].refresh_token, &tkns[i].user_id)
		if err != nil {
			panic(err.Error()) // proper error handling instead of panic in your app
		}
		i += 1
	}
	return tkns
}

func CloseTokensDb(db *sql.DB) {
	db.Close()
}
