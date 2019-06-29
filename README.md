#  Music-universe / <Insert Name>.fm

## An open-source music community infrastructure.
This project seeks to build upon the initial work of Last.fm and Libre.fm with more of a focus on the music community rather than data (although, we have data too).
1. Understanding and sharing the music you listen to.
2. Building music communities around artists, albums, and genres.
3. Discovering music through suggesting and receiving suggestions from others.

The project is currently broken into parts:
* Universe-frontend: The front-end website served backed by flask with a few react.js components.
* Universe-core: The core software retrieving and processing data for users and building a music catalog. Data is currently sourced from Spotify/Musicbrainz.
* nginx: A seperate web server used right now to serve static images for the site. The images it serves should be moved to a CDN if the site reaches any actual load.

## Status
Still early on in development, currently supports:
- User registration
- Connecting and automatically tracking Spotify listens.
- Complete backend for user profile.
- User profile frontend with bios, highlighted music, and listen stats (Top tracks, artists, and albums over time, recently listened tracks)

Currently working on:
- Building out image serving infrastructure to support: artist and album arts on site.
