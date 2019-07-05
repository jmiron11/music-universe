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
-- Table 'loved_tracks'
-- 
-- ---

DROP TABLE IF EXISTS `loved_tracks`;
    
CREATE TABLE `loved_tracks` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `track_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'loved_albums'
-- 
-- ---

DROP TABLE IF EXISTS `loved_albums`;
    
CREATE TABLE `loved_albums` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `album_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'loved_artists'
-- 
-- ---

DROP TABLE IF EXISTS `loved_artists`;
    
CREATE TABLE `loved_artists` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `artist_id` INTEGER NULL DEFAULT NULL,
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
ALTER TABLE `loved_tracks` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `loved_tracks` ADD FOREIGN KEY (track_id) REFERENCES `track` (`id`);
ALTER TABLE `loved_albums` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `loved_albums` ADD FOREIGN KEY (album_id) REFERENCES `album` (`id`);
ALTER TABLE `loved_artists` ADD FOREIGN KEY (user_id) REFERENCES `user` (`id`);
ALTER TABLE `loved_artists` ADD FOREIGN KEY (artist_id) REFERENCES `artist` (`id`);

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
-- ALTER TABLE `loved_tracks` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `loved_albums` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `loved_artists` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
-- INSERT INTO `profile_highlight` (`id`,`user_id`,`artist_id`,`album_id`,`track_id`) VALUES
-- ('','','','','');
-- INSERT INTO `profile_bio` (`id`,`bio`,`user_id`) VALUES
-- ('','','');
-- INSERT INTO `album_art` (`id`,`path_medium`,`path_small`,`album_id`) VALUES
-- ('','','','');
-- INSERT INTO `settings` (`id`,`timezone`,`user_id`) VALUES
-- ('','','');
-- INSERT INTO `loved_tracks` (`id`,`user_id`,`track_id`) VALUES
-- ('','','');
-- INSERT INTO `loved_albums` (`id`,`user_id`,`album_id`) VALUES
-- ('','','');
-- INSERT INTO `loved_artists` (`id`,`user_id`,`artist_id`) VALUES
-- ('','','');