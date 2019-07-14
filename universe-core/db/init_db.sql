-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'user'
-- 
-- ---

DROP TABLE IF EXISTS `user`;
    
CREATE TABLE `user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(64) NULL DEFAULT NULL,
  `email` VARCHAR(120) NULL DEFAULT NULL,
  `password_hash` VARCHAR(128) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'token'
-- 
-- ---

DROP TABLE IF EXISTS `token`;
    
CREATE TABLE `token` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `access_token` VARCHAR(155) NULL DEFAULT NULL,
  `token_type` VARCHAR(20) NULL DEFAULT NULL,
  `refresh_token` VARCHAR(155) NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'track'
-- 
-- ---

DROP TABLE IF EXISTS `track`;
    
CREATE TABLE `track` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `artist_id` INTEGER NULL DEFAULT NULL,
  `album_id` INTEGER NULL DEFAULT NULL,
  `spotify_id` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'artist'
-- 
-- ---

DROP TABLE IF EXISTS `artist`;
    
CREATE TABLE `artist` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `spotify_id` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'album'
-- 
-- ---

DROP TABLE IF EXISTS `album`;
    
CREATE TABLE `album` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `artist_id` INTEGER NULL DEFAULT NULL,
  `spotify_id` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'listen'
-- 
-- ---

DROP TABLE IF EXISTS `listen`;
    
CREATE TABLE `listen` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `time` DATETIME NULL DEFAULT NULL,
  `track_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'user_listen'
-- 
-- ---

DROP TABLE IF EXISTS `user_listen`;
    
CREATE TABLE `user_listen` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `track_id` INTEGER NULL DEFAULT NULL,
  `progress` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'profile_highlight'
-- 
-- ---

DROP TABLE IF EXISTS `profile_highlight`;
    
CREATE TABLE `profile_highlight` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `artist_id` INTEGER NULL DEFAULT NULL,
  `album_id` INTEGER NULL DEFAULT NULL,
  `track_id` INTEGER NULL DEFAULT NULL,
  `note` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'profile_bio'
-- 
-- ---

DROP TABLE IF EXISTS `profile_bio`;
    
CREATE TABLE `profile_bio` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `bio` VARCHAR(500) NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'album_art'
-- 
-- ---

DROP TABLE IF EXISTS `album_art`;
    
CREATE TABLE `album_art` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `path_medium` VARCHAR(300) NULL DEFAULT NULL,
  `path_small` VARCHAR(300) NULL DEFAULT NULL,
  `album_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'settings'
-- 
-- ---

DROP TABLE IF EXISTS `settings`;
    
CREATE TABLE `settings` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `timezone` VARCHAR(50) NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'profile_image'
-- 
-- ---

DROP TABLE IF EXISTS `profile_image`;
    
CREATE TABLE `profile_image` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `path` VARCHAR(300) NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'artist_art'
-- 
-- ---

DROP TABLE IF EXISTS `artist_art`;
    
CREATE TABLE `artist_art` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `path_medium` VARCHAR(300) NULL DEFAULT NULL,
  `path_small` VARCHAR(300) NULL DEFAULT NULL,
  `artist_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'follow'
-- 
-- ---

DROP TABLE IF EXISTS `follow`;
    
CREATE TABLE `follow` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `from_id` INTEGER NULL DEFAULT NULL,
  `to_id` INTEGER NULL DEFAULT NULL,
  `is_following` INTEGER NULL DEFAULT NULL,
  `first_time_followed` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'message_thread'
-- 
-- ---

DROP TABLE IF EXISTS `message_thread`;
    
CREATE TABLE `message_thread` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `posted_by` INTEGER NULL DEFAULT NULL,
  `posted_to` INTEGER NULL DEFAULT NULL,
  `text` VARCHAR(500) NULL DEFAULT NULL,
  `is_public` bit NULL DEFAULT NULL,
  `is_read` bit NULL DEFAULT NULL,
  `refer_track_id` INTEGER NULL DEFAULT NULL,
  `refer_album_id` INTEGER NULL DEFAULT NULL,
  `refer_artist_id` INTEGER NULL DEFAULT NULL,
  `time_posted` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'loved_music'
-- 
-- ---

DROP TABLE IF EXISTS `loved_music`;
    
CREATE TABLE `loved_music` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `track_id` INTEGER NULL DEFAULT NULL,
  `album_id` INTEGER NULL DEFAULT NULL,
  `artist_id` INTEGER NULL DEFAULT NULL,
  `first_time_loved` DATETIME NULL DEFAULT NULL,
  `last_time_loved` DATETIME NULL DEFAULT NULL,
  `is_loved` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'note_music'
-- 
-- ---

DROP TABLE IF EXISTS `note_music`;
    
CREATE TABLE `note_music` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `track_id` INTEGER NULL DEFAULT NULL,
  `album_id` INTEGER NULL DEFAULT NULL,
  `artist_id` INTEGER NULL DEFAULT NULL,
  `time_noted` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'profile_layout'
-- 
-- ---

DROP TABLE IF EXISTS `profile_layout`;
    
CREATE TABLE `profile_layout` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `layout` VARCHAR(500) NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'profile_piece'
-- 
-- ---

DROP TABLE IF EXISTS `profile_piece`;
    
CREATE TABLE `profile_piece` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `piece_type` VARCHAR(30) NULL DEFAULT NULL,
  `piece_options` VARCHAR(500) NULL DEFAULT NULL,
  `refer_track_id` INTEGER NULL DEFAULT NULL,
  `refer_artist_id` INTEGER NULL DEFAULT NULL,
  `refer_album_id` INTEGER NULL DEFAULT NULL,
  `pieceText` VARCHAR(500) NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `token` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `track` ADD FOREIGN KEY (artist_id) REFERENCES `artist` (`id`);
ALTER TABLE `track` ADD FOREIGN KEY (album_id) REFERENCES `album` (`id`);
ALTER TABLE `album` ADD FOREIGN KEY (artist_id) REFERENCES `artist` (`id`);
ALTER TABLE `listen` ADD FOREIGN KEY (track_id) REFERENCES `track` (`id`);
ALTER TABLE `listen` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `user_listen` ADD FOREIGN KEY (id) REFERENCES `user` (`id`);
ALTER TABLE `user_listen` ADD FOREIGN KEY (track_id) REFERENCES `track` (`id`);
ALTER TABLE `profile_highlight` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `profile_highlight` ADD FOREIGN KEY (artist_id) REFERENCES `artist` (`id`);
ALTER TABLE `profile_highlight` ADD FOREIGN KEY (album_id) REFERENCES `album` (`id`);
ALTER TABLE `profile_highlight` ADD FOREIGN KEY (track_id) REFERENCES `track` (`id`);
ALTER TABLE `profile_bio` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `album_art` ADD FOREIGN KEY (album_id) REFERENCES `album` (`id`);
ALTER TABLE `settings` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `profile_image` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `artist_art` ADD FOREIGN KEY (artist_id) REFERENCES `artist` (`id`);
ALTER TABLE `follow` ADD FOREIGN KEY (from_id) REFERENCES `user` (`id`);
ALTER TABLE `follow` ADD FOREIGN KEY (to_id) REFERENCES `user` (`id`);
ALTER TABLE `message_thread` ADD FOREIGN KEY (posted_by) REFERENCES `user` (`id`);
ALTER TABLE `message_thread` ADD FOREIGN KEY (posted_to) REFERENCES `user` (`id`);
ALTER TABLE `message_thread` ADD FOREIGN KEY (refer_track_id) REFERENCES `track` (`id`);
ALTER TABLE `message_thread` ADD FOREIGN KEY (refer_album_id) REFERENCES `album` (`id`);
ALTER TABLE `message_thread` ADD FOREIGN KEY (refer_artist_id) REFERENCES `artist` (`id`);
ALTER TABLE `loved_music` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `loved_music` ADD FOREIGN KEY (track_id) REFERENCES `track` (`id`);
ALTER TABLE `loved_music` ADD FOREIGN KEY (album_id) REFERENCES `album` (`id`);
ALTER TABLE `loved_music` ADD FOREIGN KEY (artist_id) REFERENCES `artist` (`id`);
ALTER TABLE `note_music` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `note_music` ADD FOREIGN KEY (track_id) REFERENCES `track` (`id`);
ALTER TABLE `note_music` ADD FOREIGN KEY (album_id) REFERENCES `album` (`id`);
ALTER TABLE `note_music` ADD FOREIGN KEY (artist_id) REFERENCES `artist` (`id`);
ALTER TABLE `profile_layout` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `profile_piece` ADD FOREIGN KEY (refer_track_id) REFERENCES `track` (`id`);
ALTER TABLE `profile_piece` ADD FOREIGN KEY (refer_artist_id) REFERENCES `artist` (`id`);
ALTER TABLE `profile_piece` ADD FOREIGN KEY (refer_album_id) REFERENCES `album` (`id`);
ALTER TABLE `profile_piece` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `token` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `track` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `artist` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `album` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `listen` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user_listen` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `profile_highlight` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `profile_bio` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `album_art` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `settings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `profile_image` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `artist_art` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `follow` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `message_thread` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `loved_music` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `note_music` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `profile_layout` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `profile_piece` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `user` (`id`,`username`,`email`,`password_hash`) VALUES
-- ('','','','');
-- INSERT INTO `token` (`id`,`access_token`,`token_type`,`refresh_token`,`user_id`) VALUES
-- ('','','','','');
-- INSERT INTO `track` (`id`,`name`,`artist_id`,`album_id`,`spotify_id`) VALUES
-- ('','','','','');
-- INSERT INTO `artist` (`id`,`name`,`spotify_id`) VALUES
-- ('','','');
-- INSERT INTO `album` (`id`,`name`,`artist_id`,`spotify_id`) VALUES
-- ('','','','');
-- INSERT INTO `listen` (`id`,`time`,`track_id`,`user_id`) VALUES
-- ('','','','');
-- INSERT INTO `user_listen` (`id`,`user_id`,`track_id`,`progress`) VALUES
-- ('','','','');
-- INSERT INTO `profile_highlight` (`id`,`user_id`,`artist_id`,`album_id`,`track_id`,`note`) VALUES
-- ('','','','','','');
-- INSERT INTO `profile_bio` (`id`,`bio`,`user_id`) VALUES
-- ('','','');
-- INSERT INTO `album_art` (`id`,`path_medium`,`path_small`,`album_id`) VALUES
-- ('','','','');
-- INSERT INTO `settings` (`id`,`timezone`,`user_id`) VALUES
-- ('','','');
-- INSERT INTO `profile_image` (`id`,`path`,`user_id`) VALUES
-- ('','','');
-- INSERT INTO `artist_art` (`id`,`path_medium`,`path_small`,`artist_id`) VALUES
-- ('','','','');
-- INSERT INTO `follow` (`id`,`from_id`,`to_id`,`is_following`,`first_time_followed`) VALUES
-- ('','','','','');
-- INSERT INTO `message_thread` (`id`,`posted_by`,`posted_to`,`text`,`is_public`,`is_read`,`refer_track_id`,`refer_album_id`,`refer_artist_id`,`time_posted`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `loved_music` (`id`,`user_id`,`track_id`,`album_id`,`artist_id`,`first_time_loved`,`last_time_loved`,`is_loved`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `note_music` (`id`,`user_id`,`track_id`,`album_id`,`artist_id`,`time_noted`) VALUES
-- ('','','','','','');
-- INSERT INTO `profile_layout` (`id`,`layout`,`user_id`) VALUES
-- ('','','');
-- INSERT INTO `profile_piece` (`id`,`piece_type`,`piece_options`,`refer_track_id`,`refer_artist_id`,`refer_album_id`,`pieceText`,`user_id`) VALUES
-- ('','','','','','','','');