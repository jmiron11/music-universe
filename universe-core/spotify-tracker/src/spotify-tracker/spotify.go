package main

import (
	"fmt"

	"github.com/zmb3/spotify"
)

const redirectURI = "http://localhost:5000/authcallback"

type CurrentlyPlaying struct {
	is_playing  bool   `json:"is_playing"`
	track       string `json:"track"`
	artist      string `json:"artist"`
	album       string `json:"album"`
	duration_ms int    `json:"duration_ms"`
	progress_ms int    `json:"progress_ms"`
}

func GetTruncated(s string, max_size int) string {
	if len(s) > max_size {
		return s[:max_size-3] + "..."
	} else {
		return s
	}
}

func CreateCurrentlyPlaying(cp *spotify.CurrentlyPlaying) CurrentlyPlaying {
	var new_cp CurrentlyPlaying
	new_cp.is_playing = true
	new_cp.track = GetTruncated(cp.Item.Name, 100)
	new_cp.artist = GetTruncated(cp.Item.Artists[0].Name, 100)
	new_cp.album = GetTruncated(cp.Item.Album.Name, 100)
	new_cp.progress_ms = cp.Progress
	new_cp.duration_ms = cp.Item.Duration

	return new_cp
}

func GetUserCurrentlyPlayingTrack(client *spotify.Client) CurrentlyPlaying {
	currently_playing, err := client.PlayerCurrentlyPlaying()

	if err != nil {
		fmt.Printf("Error retrieving currently played song: %s\n", err)
		return CurrentlyPlaying{false, "", "", "", 0, 0}
	} else {

		return CreateCurrentlyPlaying(currently_playing)
	}
}

func GetClientFromToken(token *Token) spotify.Client {
	oauth_token := token.ToOAuth2()
	auth := spotify.NewAuthenticator(redirectURI, spotify.ScopeUserTopRead, spotify.ScopePlaylistReadPrivate, spotify.ScopeUserReadPlaybackState)
	return auth.NewClient(&oauth_token)
}
