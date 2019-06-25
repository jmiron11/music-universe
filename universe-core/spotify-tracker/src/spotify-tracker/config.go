package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Configuration struct {
	TOKEN_DB_TYPE          string
	TOKEN_DB_DSN           string
	TRACK_INTERVAL_SECONDS int
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
