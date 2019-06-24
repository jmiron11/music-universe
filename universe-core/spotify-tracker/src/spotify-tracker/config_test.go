package main

import "testing"

func TestReadConfig(t *testing.T) {
	cfg := ReadConfig("config_test.json")
	if cfg.TOKEN_DB_TYPE != "mysql" {
		t.Errorf("Incorrect token db type, got: %s, want: %s", cfg.TOKEN_DB_TYPE, "mysql")
	}
	if cfg.TOKEN_DB_DSN != "user:password@/fakedb" {
		t.Errorf("Incorrect token db type, got: %s, want: %s", cfg.TOKEN_DB_DSN, "user:password@/fakedb")
	}
}
