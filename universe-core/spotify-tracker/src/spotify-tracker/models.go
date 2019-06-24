package main

type Token struct {
	id            int    `json:"id"`
	access_token  string `json:"access_token"`
	refresh_token string `json:"refresh_token"`
	user_id       int    `json:"user_id"`
}
