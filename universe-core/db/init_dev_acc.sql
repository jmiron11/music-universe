use universe;

INSERT INTO user (id, username, email, password_hash) VALUES (1, "dev", "dev@universe.fm", "pbkdf2:sha256:150000$YcJ9mRZP$909099448ef8dd73deaf2393f4414d37c4856c8737318fd2e41fb0c8c1894b74");
INSERT INTO token (access_token, token_type, refresh_token, user_id) VALUES ("BQBuUzwjyqatdUn2gIXEjOV8iU9EmFxBlagFfA08BHpmDWDEl3-gDe3dxFXCcRA_YorZAAgG2wtw0H5lyZN8in7ZjTzzeLeaLIaIwzE2ijzQaPOVx4TLH-UrAy7zV_un5EWmEuCDlb8DG12erb5Qwre6", "Bearer", "AQB54wRr5bVUNtEo3XSpO7uYs3v_Q27EX-C57srbG-eItSmp6l82IK3fqjZqcFThDXhMP9aFqn-HuQGnNL4VCEL2ao9OMeskl39CbC8k5hKsesrYeyB69Ed9krTkZPto7bX-rQ", 1);