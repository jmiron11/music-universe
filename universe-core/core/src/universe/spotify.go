package universe

import (
	"fmt"

	"github.com/zmb3/spotify"
)

const redirectURI = "http://localhost:5000/authcallback"

type CurrentlyPlaying struct {
	Is_playing  bool   `json:"is_playing"`
	Track       string `json:"track"`
	Artist      string `json:"artist"`
	Album       string `json:"album"`
	Duration_ms int    `json:"duration_ms"`
	Progress_ms int    `json:"progress_ms"`
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
	new_cp.Is_playing = true
	new_cp.Track = GetTruncated(cp.Item.Name, 100)
	new_cp.Artist = GetTruncated(cp.Item.Artists[0].Name, 100)
	new_cp.Album = GetTruncated(cp.Item.Album.Name, 100)
	new_cp.Progress_ms = cp.Progress
	new_cp.Duration_ms = cp.Item.Duration

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
