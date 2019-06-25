package main

import (
	"fmt"

	"github.com/zmb3/spotify"
)

const redirectURI = "http://localhost:5000/authcallback"

func GetUserCurrentlyPlayingTrack(client *spotify.Client) *spotify.CurrentlyPlaying {
	currently_playing, err := client.PlayerCurrentlyPlaying()

	if err != nil {
		fmt.Printf("Error retrieving currently played song: %s\n", err)
		return nil
	} else {
		return currently_playing
	}
}

func GetClientFromToken(token *Token) spotify.Client {
	oauth_token := token.ToOAuth2()
	auth := spotify.NewAuthenticator(redirectURI, spotify.ScopeUserTopRead, spotify.ScopePlaylistReadPrivate, spotify.ScopeUserReadPlaybackState)
	return auth.NewClient(&oauth_token)
}
