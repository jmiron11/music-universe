package main

import (
	"fmt"
	"os"
	"time"

	"github.com/zmb3/spotify"
	"golang.org/x/oauth2/clientcredentials"

	"universe"
)

// 1. Gets all albums that don't have an album art
// 2.

func main() {
	args := os.Args[1:]
	if len(args) != 1 {
		fmt.Println("Usage: ./album-arter <path to confg file>")
		os.Exit(-1)
	}
	cfg := ReadConfig(args[0])

	config := &clientcredentials.Config{
		ClientID:     os.Getenv("SPOTIFY_ALBUMARTER_ID"),
		ClientSecret: os.Getenv("SPOTIFY_ALBUMARTER_SECRET"),
		TokenURL:     spotify.TokenURL,
	}
	client := universe.GetClientCredentials(config)

	album_db := universe.GetDbOrKill(cfg.ALBUM_DB_TYPE, cfg.ALBUM_DB_DSN)

	ticker := time.NewTicker(time.Duration(cfg.TRACK_INTERVAL_SECONDS) * time.Second)

	quit := make(chan struct{})
	go func() {
		for {
			select {
			case <-ticker.C:

				// Albums
				albums := universe.GetAlbumsWithNoArt(album_db, cfg.CONCURRENT_ALBUMS)

				var found bool
				var path_small, path_medium string
				var album_art universe.AlbumArt
				for _, al := range albums {

					found, path_small, path_medium = universe.GetAlbumArtOfAlbum(&client, &al, cfg.ALBUM_ART_BASE_PATH)
					album_art.Album_id = al.Id
					album_art.Path_small = path_small
					album_art.Path_medium = path_medium

					if !found {
						fmt.Printf("Could not find album: %s\n", al.Name)
					} else {
						universe.WriteAlbumArt(album_db, &album_art)
					}
				}

				fmt.Printf("Downloaded %d new album arts\n", len(albums))

				// Artists
				artists := universe.GetArtistsWithNoArt(album_db, cfg.CONCURRENT_ALBUMS)

				var artist_art universe.ArtistArt
				for _, al := range artists {
					found, path_small, path_medium = universe.GetArtistArtOfArtist(&client, &al, cfg.ARTIST_ART_BASE_PATH)
					artist_art.Artist_id = al.Id
					artist_art.Path_small = path_small
					artist_art.Path_medium = path_medium

					if !found {
						fmt.Printf("Could not find artist: %s\n", al.Name)
					} else {
						universe.WriteArtistArt(album_db, &artist_art)
					}
				}

				fmt.Printf("Downloaded %d new artist arts\n", len(artists))

			case <-quit:
				ticker.Stop()
				fmt.Println("Ticker stopped")
				return
			}
		}
	}()

	<-quit
	universe.CloseDb(album_db)
}
