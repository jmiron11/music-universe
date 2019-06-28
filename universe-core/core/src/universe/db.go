package universe

import (
	"database/sql"
	"fmt"
)
import _ "github.com/go-sql-driver/mysql"

// TODO(justinmiron): Error handling instead of panic
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
		err = results.Scan(&tkns[i].Id, &tkns[i].Access_token, &tkns[i].Token_type, &tkns[i].Refresh_token, &tkns[i].User_id)
		if err != nil {
			panic(err.Error()) // proper error handling instead of panic in your app
		}
		i += 1
	}
	return tkns
}

// Retrieves an artist from the db, uniquely identified by artist.Name and artist.Spotify_id
func GetArtistFromDb(db *sql.DB, artist *Artist) bool {
	results, err := db.Query("SELECT * FROM artist WHERE name = ? AND spotify_id = ? LIMIT 1", artist.Name, artist.Spotify_id)
	if err != nil {
		panic(err.Error())
	}

	success := false
	for results.Next() {
		err = results.Scan(&artist.Id, &artist.Name, &artist.Spotify_id)
		if err != nil {
			panic(err.Error())
		} else {
			success = true
		}
	}

	return success
}

func WriteArtist(db *sql.DB, artist *Artist) {
	_, err := db.Query("INSERT INTO artist (name, spotify_id) VALUES (?, ?)", artist.Name, artist.Spotify_id)
	if err != nil {
		panic(err.Error())
	}

	GetArtistFromDb(db, artist)
}

func GetAlbumFromDb(db *sql.DB, album *Album) bool {
	results, err := db.Query("SELECT * FROM album WHERE name = ? AND artist_id = ? LIMIT 1", album.Name, album.Artist_id)
	if err != nil {
		panic(err.Error())
	}

	success := false
	for results.Next() {
		err = results.Scan(&album.Id, &album.Name, &album.Artist_id, &album.Spotify_id)
		if err != nil {
			panic(err.Error())
		} else {
			success = true
		}
	}

	return success
}

func WriteAlbum(db *sql.DB, album *Album) {
	_, err := db.Query("INSERT INTO album (name, artist_id, spotify_id) VALUES (?, ?, ?)", album.Name, album.Artist_id, album.Spotify_id)
	if err != nil {
		panic(err.Error())
	}

	GetAlbumFromDb(db, album)
}

func GetTrackFromDb(db *sql.DB, track *Track) bool {
	results, err := db.Query("SELECT * FROM track WHERE name = ? AND artist_id = ? AND album_id = ? LIMIT 1", track.Name, track.Artist_id, track.Album_id)
	if err != nil {
		panic(err.Error())
	}

	success := false
	for results.Next() {
		err = results.Scan(&track.Id, &track.Name, &track.Artist_id, &track.Album_id, &track.Spotify_id)
		if err != nil {
			panic(err.Error())
		} else {
			success = true
		}
	}

	return success
}

func WriteTrack(db *sql.DB, track *Track) {
	_, err := db.Query("INSERT INTO track (name, artist_id, album_id, spotify_id) VALUES (?, ?, ?, ?)", track.Name, track.Artist_id, track.Album_id, track.Spotify_id)
	if err != nil {
		panic(err.Error())
	}

	GetTrackFromDb(db, track)
}

func WriteNewListen(db *sql.DB, listen *Listen) {
	_, err := db.Query("INSERT INTO listen (time, track_id, user_id) VALUES (?, ?, ?)", listen.Listen_time, listen.Track_id, listen.User_id)
	if err != nil {
		panic(err.Error())
	}
}

func GetAlbumsWithNoArt(db *sql.DB) {
	results, err := db.Query("SELECT Al.id, Al.spotify_id FROM album Al LEFT OUTER JOIN album_art Aa on Aa.album_id = Al.id WHERE Aa.album_id is null")

	defer results.Close()
	if err != nil {
		panic(err.Error())
	}

	var album_id int
	var spotify_id *string
	i := 0
	for results.Next() {
		err = results.Scan(&album_id, &spotify_id)
		fmt.Println(album_id)
		if err != nil {
			panic(err.Error()) // proper error handling instead of panic in your app
		}
		i += 1
	}
}
