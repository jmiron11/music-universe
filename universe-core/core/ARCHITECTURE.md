Tasks:
1. Get all users currently connected with Spotify (check tokens table).
2. For each user: 
    Every X seconds, check currently playing.
    If it is a _new_ track, and progress > 50% then add the listen.
    It is a new track if:
        a. track is not the same as the last song listened to by user.
        b. if it is the same track, we saw progress in the track decrease.



TODO:
1. Read tokens table from mysql.