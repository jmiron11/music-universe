package universe

import (
	"time"

	"golang.org/x/oauth2"
)

type Token struct {
	Id            int    `json:"id"`
	Access_token  string `json:"access_token"`
	Token_type    string `json:"token_type"`
	Refresh_token string `json:"refresh_token"`
	User_id       int    `json:"user_id"`
}

func (t Token) ToOAuth2() oauth2.Token {
	var oauth_token oauth2.Token
	oauth_token.AccessToken = t.Access_token
	oauth_token.RefreshToken = t.Refresh_token
	oauth_token.Expiry = time.Now() // Assume the token is already expired.
	oauth_token.TokenType = t.Token_type
	return oauth_token
}

type Listen struct {
	Id          int       `json:"id"`
	Listen_time time.Time `json:"time"`
	Track_id    int       `json:"track_id"`
	User_id     int       `json:user_id"`
}

type Track struct {
	Id         int    `json:"id"`
	Name       string `json:"name`
	Artist_id  int    `json:"artist_id"`
	Album_id   int    `json"album_id"`
	Spotify_id string `json:"spotify_id"`
}

type Artist struct {
	Id         int    `json:"id"`
	Name       string `json:"name"`
	Spotify_id string `json:"spotify_id"`
}

type Album struct {
	Id         int    `json:"id"`
	Name       string `json:"name"`
	Artist_id  int    `json:"artist_id"`
	Spotify_id string `json:"spotify_id"`
}

type AlbumArt struct {
	Id          int    `json:"id"`
	Path_medium string `json:"path_medium"`
	Path_small  string `json:"path_small"`
	Album_id    int    `json:"album_id"`
}
