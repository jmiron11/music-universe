#  Music-universe / \<Insert Name\>.fm

## An open-source music community infrastructure.
This project seeks to build upon the work of last.fm and libre.fm. It expands upon the social aspect and the music tracking aspects. The goal is to create a service that allows us to share and communicate about music with friends and strangers, and to understand our own music tastes. 

I'm also baking a Web API into the project that allows users to access ALL of their internal music data.

The project is currently broken into parts:
* Universe-frontend: The front-end website served backed by flask with a few react.js components.
* Universe-core: The core software retrieving and processing data for users and building a music catalog. Data is currently sourced from Spotify/Musicbrainz.
* nginx: A seperate web server used right now to serve static images for the site. The images it serves should be moved to a CDN if the site reaches any actual load.