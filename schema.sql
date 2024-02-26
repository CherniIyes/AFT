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
-- Table `aft`.`cows`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`cows` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cow_number` VARCHAR(50) NULL DEFAULT NULL,
  `cow_race` VARCHAR(50) NULL DEFAULT NULL,
  `artificial_insemination_date` DATE NULL DEFAULT NULL,
  `artificial_insemination_triggered` ENUM('Yes', 'No') NULL DEFAULT 'No',
  `return_in_heat_control_date` DATE NULL DEFAULT NULL,
  `pregnancy_detection_date` DATE NULL DEFAULT NULL,
  `drying_off_date` DATE NULL DEFAULT NULL,
  `calving_and_delivery_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
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
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`milk`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`milk` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `price` INT NOT NULL,
  `quantity` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`sells`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`sells` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(4000) NOT NULL,
  `product details` VARCHAR(4000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- Table `aft`.`article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `part_name` VARCHAR(100) NOT NULL,
  `content` TEXT NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
