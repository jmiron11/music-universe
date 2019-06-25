package main

import (
	"fmt"

	"github.com/zmb3/spotify"
)

const redirectURI = "http://localhost:5000/authcallback"

type CurrentlyPlaying struct {
	is_playing bool   `json:"is_playing"`
	track      string `json:"track"`
	artist     string `json:"artist"`
	album      string `json:"album"`
}

func GetUserCurrentlyPlayingTrack(client *spotify.Client) CurrentlyPlaying {
	currently_playing, err := client.PlayerCurrentlyPlaying()

	if err != nil {
		fmt.Printf("Error retrieving currently played song: %s\n", err)
		return CurrentlyPlaying{false, "", "", ""}
	} else {
		return CurrentlyPlaying{true, currently_playing.Item.Name,
			currently_playing.Item.Artists[0].Name, currently_playing.Item.Album.Name}
	}
}

func GetClientFromToken(token *Token) spotify.Client {
	oauth_token := token.ToOAuth2()
	auth := spotify.NewAuthenticator(redirectURI, spotify.ScopeUserTopRead, spotify.ScopePlaylistReadPrivate, spotify.ScopeUserReadPlaybackState)
	return auth.NewClient(&oauth_token)
}
