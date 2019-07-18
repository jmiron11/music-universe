package universe

import (
	"context"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"

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

func DownloadImageToFile(url string, file string) error {
	// Retrieve the image from spotify endpoint.
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	// Create the image file locally
	out, err := os.Create(file)
	if err != nil {
		return err
	}
	defer out.Close()

	// Write the body to file
	_, err = io.Copy(out, resp.Body)
	return err
}

// TODO(justinmiron): Write a version that requests in bulk (reduce # requests).
func GetAlbumArtOfAlbum(client *spotify.Client, album *Album, image_path string) (bool, string, string) {
	spotify_album, err := client.GetAlbum(spotify.ID(album.Spotify_id))

	if err != nil {
		log.Fatalf("failed to retrieve album")
		return false, "", ""
	}

	var path_small, path_medium string
	for _, im := range spotify_album.Images {
		var path_name string
		if im.Width == 300 { // Medium image is currently 300x300
			path_name = image_path + strconv.Itoa(album.Id) + "-" + "medium.jpg"
			path_medium = path_name
			err = DownloadImageToFile(im.URL, path_name)
			if err != nil {
				log.Fatalf("Failing downloading album")
			}
		} else if im.Width == 64 { // Small image is currently 64x64
			path_name = image_path + strconv.Itoa(album.Id) + "-" + "small.jpg"
			path_small = path_name
			err = DownloadImageToFile(im.URL, path_name)
			if err != nil {
				log.Fatalf("Failing downloading album")
			}
		}
	}

	return true, path_small, path_medium
}

func GetArtistArtOfArtist(client *spotify.Client, artist *Artist, image_path string) (bool, string, string) {
	spotify_artist, err := client.GetArtist(spotify.ID(artist.Spotify_id))

	if err != nil {
		log.Fatalf("failed to retrieve album")
		return false, "", ""
	}

	var path_small, path_medium string
	for _, im := range spotify_artist.Images {
		var path_name string
		if im.Width == 320 || im.Width == 300 { // Medium image is currently 300x300
			path_name = image_path + strconv.Itoa(artist.Id) + "-" + "medium.jpg"
			path_medium = path_name
			err = DownloadImageToFile(im.URL, path_name)
			if err != nil {
				log.Fatalf("Failing downloading album")
			}
		} else if im.Width == 160 || im.Width == 64 { // Small image is currently 64x64
			path_name = image_path + strconv.Itoa(artist.Id) + "-" + "small.jpg"
			path_small = path_name
			err = DownloadImageToFile(im.URL, path_name)
			if err != nil {
				log.Fatalf("Failing downloading album")
			}
		}
	}

	return true, path_small, path_medium
}

func GetClientCredentials(config *clientcredentials.Config) spotify.Client {
	token, err := config.Token(context.Background())
	if err != nil {
		log.Fatalf("couldn't get token: %v", err)
	}

	client := spotify.Authenticator{}.NewClient(token)
	return client
}

func GetClosestAlbum(client *spotify.Client, album *Album) string {
	result, err := client.Search("album:"+album.Name, spotify.SearchTypeAlbum)
	if err != nil {
		log.Fatalf("failed to find album: %v", err)
		return ""
	}
	if result.Albums == nil || len(result.Albums.Albums) == 0 {
		return ""
	} else {

		return string(result.Albums.Albums[0].ID)
	}
}

func GetClosestArtist(client *spotify.Client, artist *Artist) string {
	result, err := client.Search("artist:"+artist.Name, spotify.SearchTypeArtist)
	if err != nil {
		log.Fatalf("failed to find artist: %v", err)
		return ""
	}
	if result.Artists == nil || len(result.Artists.Artists) == 0 {
		return ""
	} else {

		return string(result.Artists.Artists[0].ID)
	}
}
