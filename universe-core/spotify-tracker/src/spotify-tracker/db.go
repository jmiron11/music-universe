package main

import (
	"database/sql"
)
import _ "github.com/go-sql-driver/mysql"

func GetDbOrKill(token_db_type, token_db_dsn string) *sql.DB {
	// Open a connection to the db.
	db, err := sql.Open(token_db_type, token_db_dsn)
	if err != nil {
		panic(err.Error())
	}
	// Check that we can communicate with the db.
	err = db.Ping()
	if err != nil {
		panic(err.Error())
	}
	return db
}

func CloseDb(db *sql.DB) {
	db.Close()
}

// Retrieves all tokens from the `tokens` table in the specified db.
// Tokens are returned as a slice of models.Token objects.
func GetAllTokens(db *sql.DB) []Token {
	results, err := db.Query("SELECT * FROM token")
	defer results.Close()
	if err != nil {
		panic(err.Error())
	}

	var tkns []Token
	i := 0
	for results.Next() {
		tkns = append(tkns, Token{})
		err = results.Scan(&tkns[i].id, &tkns[i].access_token, &tkns[i].token_type, &tkns[i].refresh_token, &tkns[i].user_id)
		if err != nil {
			panic(err.Error()) // proper error handling instead of panic in your app
		}
		i += 1
	}
	return tkns
}

func GetArtistIdOrNeg1(db *sql.DB, name string) int {
	results, err := db.Query("SELECT id FROM artist WHERE name = ? LIMIT 1", name)
	defer results.Close()

	if err != nil {
		panic(err.Error())
	}

	id := -1
	for results.Next() {
		err = results.Scan(&id)
		if err != nil {
			panic(err.Error())
		}

	}

	return id
}

func WriteArtistGetId(db *sql.DB, name string) int {
	return -1
}

func GetAlbumIdOrNeg1(db *sql.DB, artist_id int, name string) int {
	results, err := db.Query("SELECT id FROM album WHERE name = ? AND artist_id = ? LIMIT 1", name, artist_id)
	defer results.Close()

	if err != nil {
		panic(err.Error())
	}

	id := -1
	for results.Next() {
		err = results.Scan(&id)
		if err != nil {
			panic(err.Error())
		}

	}

	return id
}

func WriteAlbumGetId(db *sql.DB, artist_id int, name string) int {
	return -1
}

func GetTrackIdOrNeg1(db *sql.DB, artist_id int, album_id int, name string) int {
	results, err := db.Query("SELECT id FROM track WHERE name = ? AND artist_id = ? AND album_id = ? LIMIT 1", name, artist_id, album_id)
	defer results.Close()

	if err != nil {
		panic(err.Error())
	}

	id := -1
	for results.Next() {
		err = results.Scan(&id)
		if err != nil {
			panic(err.Error())
		}
	}

	return id
}

func WriteTrackGetId(db *sql.DB, artist_id int, album_id int, name string) int {
	return -1
}

func WriteNewListen(db *sql.DB, listen *Listen) {

}
