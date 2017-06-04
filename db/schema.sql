DROP DATABASE IF EXISTS `dingdong`;
CREATE DATABASE IF NOT EXISTS `dingdong`;

USE dingdong;

CREATE TABLE IF NOT EXISTS `users_stylists` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `type` INTEGER NOT NULL,
  `name` VARCHAR(35) NOT NULL,
  `password` VARCHAR(35) NOT NULL,
  `billingaddress` TEXT DEFAULT NULL,
  `phonenumber` VARCHAR(30) DEFAULT NULL,
  `email` VARCHAR(30) DEFAULT NULL,
  `longitude` DOUBLE DEFAULT NULL,
  `latitude` DOUBLE DEFAULT NULL,
  `site_url` VARCHAR(35) DEFAULT NULL,
  `gender` VARCHAR(8) DEFAULT NULL,
  `image_url` VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `recipients` (
  `messageId` INTEGER NOT NULL AUTO_INCREMENT,
  `id` INTEGER NOT NULL,
  `name` VARCHAR(35) NOT NULL,
  PRIMARY KEY (`messageId`)
);

CREATE TABLE IF NOT EXISTS `services` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `servicename` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS `stylists_services` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_services` INTEGER NOT NULL ,
  `id_users_stylists` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS `bookings` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_users` INTEGER NOT NULL,
  `id_stylists` INTEGER NOT NULL,
  `isconfirmed` INTEGER NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `location` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_sender` INTEGER NOT NULL,
  `id_recipient` INTEGER NOT NULL,
  `subjectHeading` VARCHAR(45) NOT NULL,
  `body` VARCHAR(150) NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `location` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `stylists_services` ADD FOREIGN KEY (id_services) REFERENCES `services` (`id`);
ALTER TABLE `stylists_services` ADD FOREIGN KEY (id_users_stylists) REFERENCES `users_stylists` (`id`);
ALTER TABLE `recipients` ADD FOREIGN KEY (id) REFERENCES `users_stylists` (`id`);
ALTER TABLE `recipients` ADD FOREIGN KEY (messageId) REFERENCES `messages` (`id`);

commit;


