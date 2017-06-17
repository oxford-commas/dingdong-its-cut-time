# DROP DATABASE IF EXISTS `dingdong`;
# CREATE DATABASE IF NOT EXISTS `dingdong`;

# USE dingdong;

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
  `image_url` VARCHAR(100) DEFAULT NULL,
  `aboutMe` VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `recipients` (
  `messageId` INTEGER NOT NULL,
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
  `isComplete` INTEGER NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `location` TEXT NOT NULL,
  `detail` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `bookings_styles` (
  `id_booking` INTEGER NOT NULL,
  `id_style` INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_sender` INTEGER NOT NULL,
  `id_recipient` INTEGER NOT NULL,
  `body` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `stylists_services` ADD FOREIGN KEY (id_services) REFERENCES `services` (`id`) ON DELETE CASCADE;
ALTER TABLE `stylists_services` ADD FOREIGN KEY (id_users_stylists) REFERENCES `users_stylists` (`id`) ON DELETE CASCADE;
ALTER TABLE `bookings` ADD FOREIGN KEY (id_users) REFERENCES `users_stylists` (`id`) ON DELETE CASCADE;
ALTER TABLE `bookings` ADD FOREIGN KEY (id_stylists) REFERENCES `users_stylists` (`id`) ON DELETE CASCADE;
ALTER TABLE `recipients` ADD FOREIGN KEY (id) REFERENCES `users_stylists` (`id`) ON DELETE CASCADE;
ALTER TABLE `recipients` ADD FOREIGN KEY (messageId) REFERENCES `messages` (`id`) ON DELETE CASCADE;
ALTER TABLE `bookings_styles` ADD FOREIGN KEY (id_booking) REFERENCES `bookings` (`id`) ON DELETE CASCADE;
ALTER TABLE `bookings_styles` ADD FOREIGN KEY (id_style) REFERENCES `services` (`id`) ON DELETE CASCADE;

commit;


