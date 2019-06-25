package main

import (
	"time"

	"golang.org/x/oauth2"
)

type Token struct {
	id            int    `json:"id"`
	access_token  string `json:"access_token"`
	token_type    string `json:"token_type"`
	refresh_token string `json:"refresh_token"`
	user_id       int    `json:"user_id"`
}

func (t Token) ToOAuth2() oauth2.Token {
	var oauth_token oauth2.Token
	oauth_token.AccessToken = t.access_token
	oauth_token.RefreshToken = t.refresh_token
	oauth_token.Expiry = time.Now() // Assume the token is already expired.
	oauth_token.TokenType = t.token_type
	return oauth_token
}

type Listen struct {
	id          int       `json:"id"`
	listen_time time.Time `json:"time"`
	track_id    int       `json:"track_id"`
}

type Track struct {
	id        int    `json:"id"`
	name      string `json:"name`
	artist_id int    `json:"artist_id"`
	album_id  int    `json"album_id"`
}

type Artist struct {
	id   int    `json:"id"`
	name string `json:"name"`
}

type Album struct {
	id        int    `json:"id"`
	name      string `json:"name"`
	artist_id int    `json:"artist_id"`
}
