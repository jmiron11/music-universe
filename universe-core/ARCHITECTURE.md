# Universe-core

The universe represents all the data we have about music. The architecture can be broken into several components:

1. Music catalog: This is our own internal database of music, although this may be composed of data from external sources (last.FM, spotify, etc.), it will owned and accessible in our application.
   Requirements:
   * Highly available: Data from the catalog should be readily accessible with little latency.
   * Fault tolerant: The data should be not be lost - initially accomplished through regular snapshots.

2. User listen catalog: This is an internal database of user track listens. It is populated by the the user tracker.

3. User Tracker: This records the tracks that users listen to, and populates the user listen catalog. Initially only applies to Spotify.

   Requirements:
   * Authenticate users with their spotify accounts.
   * Actively polls users Spotify accounts.

4. User registration / sign-in:
   * User management: registration, authentication
   * https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https
   * https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-v-user-logins

4. Web API: This provides programmatic access to the music catalog through a RESTful API.
