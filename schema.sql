-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema aft
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema aft
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `aft` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `aft` ;

-- -----------------------------------------------------
-- Table `aft`.`article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `part_name` VARCHAR(100) NOT NULL,
  `content` TEXT NOT NULL,
  `image_url` VARCHAR(2505) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `articalimg` VARCHAR(2005) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`article2`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`article2` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `part_name` VARCHAR(100) NOT NULL,
  `content` TEXT NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `articalimg` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`cows`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`cows` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cow_number` VARCHAR(50) NULL DEFAULT NULL,
  `cow_race` VARCHAR(50) NULL DEFAULT NULL,
  `artificial_insemination_date` VARCHAR(100) NULL DEFAULT NULL,
  `artificial_insemination_triggered` ENUM('Yes', 'No') NULL DEFAULT 'No',
  `return_in_heat_control_date` VARCHAR(100) NULL DEFAULT NULL,
  `pregnancy_detection_date` VARCHAR(100) NULL DEFAULT NULL,
  `drying_off_date` VARCHAR(100) NULL DEFAULT NULL,
  `calving_and_delivery_date` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`expenses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`expenses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `handwork` INT NULL DEFAULT NULL,
  `fodder` INT NULL DEFAULT NULL,
  `bills` INT NULL DEFAULT NULL,
  `medicalexpenses` INT NULL DEFAULT NULL,
  `hay` INT NULL DEFAULT NULL,
  `date` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`milk`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`milk` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `day` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `quantity` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`sales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`sales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(4000) NOT NULL,
  `product details` VARCHAR(4000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`user` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
