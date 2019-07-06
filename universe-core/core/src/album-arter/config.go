package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Configuration struct {
	ALBUM_DB_TYPE          string
	ALBUM_DB_DSN           string
	ALBUM_ART_BASE_PATH    string
	ARTIST_ART_BASE_PATH   string
	TRACK_INTERVAL_SECONDS int
	CONCURRENT_ALBUMS      int
}

func ReadConfig(filename string) Configuration {
	file, _ := os.Open(filename)
	defer file.Close()
	decoder := json.NewDecoder(file)
	configuration := Configuration{}
	err := decoder.Decode(&configuration)
	if err != nil {
		fmt.Println("error:", err)
	}
	return configuration
}
