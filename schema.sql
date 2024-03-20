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
  `content` VARCHAR(10000) NOT NULL,
  `Author` VARCHAR(450) NOT NULL,
  `img` VARCHAR(1000) NOT NULL,
  `date` DATE NOT NULL,
  `title` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`cows`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`cows` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cow_number` VARCHAR(50) NULL DEFAULT NULL,
  `cow_race` VARCHAR(50) NULL DEFAULT NULL,
  `artificial_insemination_triggered` ENUM('Yes', 'No') NULL DEFAULT 'No',
  `artificial_insemination_date` VARCHAR(100) NULL DEFAULT NULL,
  `return_in_heat_control_date` VARCHAR(100) NULL DEFAULT NULL,
  `pregnancy_detection_date` VARCHAR(100) NULL DEFAULT NULL,
  `drying_off_date` VARCHAR(100) NULL DEFAULT NULL,
  `calving_and_delivery_date` VARCHAR(100) NULL DEFAULT NULL,
  `userId` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
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
  `userId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`milk`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`milk` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `day` VARCHAR(45) NULL DEFAULT NULL,
  `price` VARCHAR(45) NULL DEFAULT NULL,
  `quantity` VARCHAR(45) NULL DEFAULT NULL,
  `userId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 43
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`sales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`sales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product` VARCHAR(45) NOT NULL,
  `product_details` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `date` VARCHAR(450) NOT NULL,
  `userId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aft`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aft`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(1000) NOT NULL,
  `education` VARCHAR(5000) NULL DEFAULT NULL,
  `projects` VARCHAR(5000) NULL DEFAULT NULL,
  `background` VARCHAR(5000) NULL DEFAULT NULL,
  `is_banned` VARCHAR(45) NULL DEFAULT 'false',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
