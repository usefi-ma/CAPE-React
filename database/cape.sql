-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 18, 2023 at 04:15 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cape`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
CREATE TABLE IF NOT EXISTS `banner` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `BannerTitle` varchar(1000) NOT NULL,
  `EventTitle` varchar(1000) NOT NULL,
  `Date` varchar(200) NOT NULL,
  `BannerLink` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Description` mediumtext NOT NULL,
  `Image` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`Id`, `BannerTitle`, `EventTitle`, `Date`, `BannerLink`, `Description`, `Image`) VALUES
(1, 'Canadian association of police education', 'C.A.P.E. 2023 CONFERENCE', 'June 20th-22nd 2023', 'https://www.cape-educators.ca/2023-conference/', 'In partnership with Calgary Police Service & Bow Valley College', 'image-73267c47-d5f0-4904-b0ee-49940b4dc6c6.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `executive`
--

DROP TABLE IF EXISTS `executive`;
CREATE TABLE IF NOT EXISTS `executive` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(45) NOT NULL,
  `JobTitle` varchar(45) NOT NULL,
  `Organization` varchar(45) NOT NULL,
  `Description` text NOT NULL,
  `Image` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=183 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `executive`
--

INSERT INTO `executive` (`Id`, `FullName`, `JobTitle`, `Organization`, `Description`, `Image`) VALUES
(181, 'Dave Tutte', 'President', 'Halton Regional Police', 'Staff Sergeant Dave Tutte has been with the Halton Regional Police Service for 14 years. Dave started his career working in Patrol in the City of Burlington, from there Dave was assigned to the Tactical Rescue Unit where he was a team leader and on the rappel team.\r\n\r\nIn January 2016 Dave was promoted to the rank of Sergeant and was assigned to the Regional Community Mobilization Bureau.  While in this role, Dave was responsible for the service delivery for Mental Health, as well as Diversity and Inclusion.  Dave was later seconded to the Community Safety and Well-being project.\r\n\r\nIn July 2018 Dave moved to the Training Bureau and in March 2019 was promoted to the rank of Staff Sergeant and has been fortunate to stay posted in the Training/Recruiting Bureau since. In addition to his training and recruiting duties, Dave has also been a Hostage Negotiator since 2015.\r\n\r\nDave has been a member of the OACP Education, Training and Professional Development committee since 2018 and currently Dave is the co-chair of the OACP Innovation and Technology sub-committee, and the vice-chair of the Incident Command sub-committee.  Dave is also a member of the C.P.K.N Innovation and Learning National Advisory committee and a member of the Program Advisory committees for Georgian and Humber College.  Dave has been the President of the Canadian Association of Police Educators since 2021.', 'image-0ec44533-f426-4273-96a1-b47a037f0b18.jpeg'),
(182, 'Dominique Germain', 'Vice-President', 'Algonquin College', 'Dominique Germain holds a master’s degree in social work from the University of Ottawa. She has 20 years of professional experience in social work, including mental health, addiction, crisis intervention, counseling, risk and threat assessment, sexual abuse and truancy. During her career, Ms. Germain has not only worked in child protection and as a social worker, she has also been a member of the City of Ottawa Emergency Response Team, was Lead on multidisciplinary intervention teams, liaison with the Ottawa Police, CHEO, Royal Ottawa and Montfort all the while leading a team of social workers and teaching part time in the Social Service Worker program at Collège La Cité.   In 2014, Ms. Germain became a permanent professor in this program and was soon appointed program coordinator. In 2017, she won the position of Director of the Institute of Emergency and Legal Services at Collège La Cité.\r\n\r\nOver the years, Ms. Germain has continued to be highly involved in the community: she is a past United Way volunteer, 10 year member of the Suicide Prevention Network Steering Committee, 8 year member of the Ottawa Urban Schools Steering Committee, active member of the First Responders Mental Health Council, active administrator for Montfort Renaissance, active member of the Montfort Hospital Association and current vice-president of the Canadian Association of Police Educators. Dominique is a strong advocate for education and mental health and believes in being the voice for those who do not have one. Her ambitions, career and volunteer work, combined with 3 young adult children at home all pursuing post-secondary studies, keep this dynamic francophone woman on her toes!', 'image-83213df9-776c-471b-a7d6-774e458cff7e.png');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
CREATE TABLE IF NOT EXISTS `members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(45) NOT NULL,
  `JobTitle` varchar(45) NOT NULL,
  `Organization` varchar(45) NOT NULL,
  `Description` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `FullName`, `JobTitle`, `Organization`, `Description`) VALUES
(1, 'Mark', 'Mendoza', 'Bow Valley', 'Bow Valley Bow Valley Bow Valley Bow ValleyBo'),
(2, 'Mahya', 'Yousesfi', 'Bow Valley', 'Bow Valley Bow Valley Bow Valley Bow ValleyBo'),
(3, 'Kale', 'White', 'Bow Valley', 'Bow Valley Bow Valley Bow Valley Bow ValleyBo'),
(4, 'MMM', 'Mendoza', 'Bow Valley', 'Bow Valley Bow Valley Bow Valley Bow ValleyBo'),
(5, 'MMM', 'Mendoza', 'Bow Valley', 'Bow Valley Bow Valley Bow Valley Bow ValleyBo'),
(6, 'MMM', 'Mendoza', 'Bow Valley', 'Bow Valley Bow Valley Bow Valley Bow ValleyBo'),
(7, 'MMM', 'Mendoza', 'Bow Valley', 'Bow Valley Bow Valley Bow Valley Bow ValleyBo');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Id`, `FullName`, `Email`, `Password`) VALUES
(5, 'Mahya', 'usefi.ma@gmail.com', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
