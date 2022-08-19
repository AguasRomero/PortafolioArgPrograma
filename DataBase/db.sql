-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.6.8-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `portafoliodb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `portafoliodb`;

CREATE TABLE IF NOT EXISTS `perfil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` char(50) DEFAULT '0',
  `fotoPerfil` char(50) DEFAULT '0',
  `fotoFondo` char(50) DEFAULT '0',
  `acercaDe` char(50) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE IF NOT EXISTS `acceso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` char(50) NOT NULL DEFAULT '',
  `constraseña` char(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE IF NOT EXISTS `educacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Institucion` char(50) DEFAULT NULL,
  `Titulo` char(50) DEFAULT NULL,
  `anoIngreso` year(4) DEFAULT NULL,
  `anoEgreso` year(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `educacion_FK` FOREIGN KEY (`id`) REFERENCES `perfil` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE IF NOT EXISTS `experiencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empresa` char(50) DEFAULT NULL,
  `puesto` char(50) DEFAULT NULL,
  `anoIngreso` year(4) DEFAULT NULL,
  `anoEgreso` year(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `experiencia_FK` FOREIGN KEY (`id`) REFERENCES `perfil` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE IF NOT EXISTS `proyectos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proyecto` char(50) DEFAULT '0',
  `descripcion` char(200) DEFAULT '0',
  `anoCreacion` year(4) DEFAULT 0000,
  `fotoProyecto` char(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `proyectos_FK` FOREIGN KEY (`id`) REFERENCES `perfil` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
