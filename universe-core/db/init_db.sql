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

-- ---
-- Test Data
-- ---

-- INSERT INTO `user` (`id`,`username`,`email`,`password_hash`) VALUES
-- ('','','','');
-- INSERT INTO `token` (`id`,`access_token`,`token_type`,`refresh_token`,`user_id`) VALUES
-- ('','','','','');
-- INSERT INTO `track` (`id`,`name`,`artist_id`,`album_id`) VALUES
-- ('','','','');
-- INSERT INTO `artist` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `album` (`id`,`name`,`artist_id`) VALUES
-- ('','','');
-- INSERT INTO `listen` (`id`,`time`,`track_id`,`user_id`) VALUES
-- ('','','','');
-- INSERT INTO `user_listen` (`id`,`user_id`,`track_id`,`progress`) VALUES
-- ('','','','');