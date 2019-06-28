package universe

import (
	"context"
	"fmt"
	"log"

	"github.com/zmb3/spotify"
	"golang.org/x/oauth2/clientcredentials"
)

const redirectURI = "http://localhost:5000/authcallback"

func GetTruncated(s string, max_size int) string {
	if len(s) > max_size {
		return s[:max_size-3] + "..."
	} else {
		return s
	}
}

func GetArtist(cp *spotify.CurrentlyPlaying) string {
	return GetTruncated(cp.Item.Artists[0].Name, 100)
}

func GetAlbum(cp *spotify.CurrentlyPlaying) string {
	return GetTruncated(cp.Item.Album.Name, 100)
}

func GetTrack(cp *spotify.CurrentlyPlaying) string {
	return GetTruncated(cp.Item.Name, 100)
}

func GetProgress(cp *spotify.CurrentlyPlaying) int {
	return cp.Progress
}

func GetCurrentTrackDuration(cp *spotify.CurrentlyPlaying) int {
	return cp.Item.Duration
}

func ModelsFromCurrentlyPlaying(cp *spotify.CurrentlyPlaying) (Track, Artist, Album) {
	var track Track
	var artist Artist
	var album Album

	track.Spotify_id = string(cp.Item.ID)
	track.Name = GetTrack(cp)

	artist.Spotify_id = string(cp.Item.Artists[0].ID)
	artist.Name = GetArtist(cp)

	album.Spotify_id = string(cp.Item.Album.ID)
	album.Name = GetAlbum(cp)

	return track, artist, album
}

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

func GetClientCredentials(config *clientcredentials.Config) spotify.Client {
	token, err := config.Token(context.Background())
	if err != nil {
		log.Fatalf("couldn't get token: %v", err)
	}

	client := spotify.Authenticator{}.NewClient(token)
	return client
}
