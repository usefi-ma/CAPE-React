-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 27, 2023 at 11:42 PM
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
  `BannerTitle` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `EventTitle` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `Date` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `BannerLink` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Description` mediumtext COLLATE utf8mb4_general_ci NOT NULL,
  `Image` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`Id`, `BannerTitle`, `EventTitle`, `Date`, `BannerLink`, `Description`, `Image`) VALUES
(1, 'Canadian association of police education', 'C.A.P.E. 2023 CONFERENCE', 'June 20th-22nd 2023', 'https://www.cape-educators.ca/2023-conference/', 'In partnership with Calgary Police Service & Bow Valley College', 'image-79c92fad-26d1-49e2-9cfd-d805911d2cd7.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `conference`
--

DROP TABLE IF EXISTS `conference`;
CREATE TABLE IF NOT EXISTS `conference` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `ConferenceTitle` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `Description` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Date` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Image` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `BannerTitle` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `EventVenue` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `BannerImage` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `BannerDescription` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `AboutTitle` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `AboutImage` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `AboutDescription` varchar(2500) COLLATE utf8mb4_general_ci NOT NULL,
  `AdditionalInfo` varchar(3500) COLLATE utf8mb4_general_ci NOT NULL,
  `ContactDescription` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `ContactAddress` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `ContactEmail` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `ContactPhone` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `ContactEventDate` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `MapLocation` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `conference`
--

INSERT INTO `conference` (`Id`, `ConferenceTitle`, `Description`, `Date`, `Image`, `BannerTitle`, `EventVenue`, `BannerImage`, `BannerDescription`, `AboutTitle`, `AboutImage`, `AboutDescription`, `AdditionalInfo`, `ContactDescription`, `ContactAddress`, `ContactEmail`, `ContactPhone`, `ContactEventDate`, `MapLocation`) VALUES
(1, '2023 Annual Conference | Wellness starts from the inside', 'The CAPE Executive team would like to invite you and your colleagues to attend the 2023 CAPE Conference in Calgary, Alberta from June 20th-22nd, in partnership with Calgary Police Service and Bow Valley College...', 'June 20th-June 22nd 2023', 'Conference2023.jpg', '', '', 'EmptyConference.png', '', '', 'EmptyConference.png', '', '', '', '', '', '', '', ''),
(2, '2022 Annual Conference | Life never stops teaching, so never stop learning', 'The CAPE Executive team would like to invite you and your colleagues to attend the 2022 Fall CAPE Conference in Niagara Falls, Ontario. We are excited to have the opportunity to connect, learn and socialize in person for the first time since 2019...', 'October 25th-27th 2022', 'ConferenceBanner.jpg', '', '', 'EmptyConference.png', '', '', 'image-c4a8bd0a-e5f5-4cd6-ba31-9e4224ab4247.jpeg', '', '', '1', '1', '1', '1', '1', '1'),
(3, '2019 Annual Conference | Connecting Research, Technology and Police Training.', '2019 Annual Conference | Connecting Research, Technology and Police Training. Connecting Research, Technology and Police Training. On behalf of all of the CAPE Executive we would like to invite you and your colleagues to attend the 2019 CAPE Conference...', 'Feb 15, 2019', '1.jpg', '1', '1', 'image-5e72a026-968f-4b76-bbc9-cfbe8e689be2.jpeg', '1', '1', 'image-31b1ee39-1531-4c3e-9816-7f844d08c7c7.jpeg', '1', '1', '', '', '', '', '', ''),
(4, 'C.A.P.E. 2018 Conference | Pracademics – Bridging the Gap Between Academia & Police Training', '', 'June 25 – 29, 2018', 'siren.jpg', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(5, 'C.A.P.E. 2017 Conference | Transforming Canada’s Police Training and Education', 'It is the desire of CAPE that the 2017 Conference will accomplish (2) objectives. First as always is to provide an environment to renew, refresh working relationships with Police Trainers and Educators from across Canada. Secondly is to provide an...', 'June 12 - 16', 'frontcar.jpg', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(6, 'C.A.P.E. 2016 Conference | Research, Instructional Design, Interactive Academics & Practical Skills', '', 'May 30 - June 3', 'toronto.jpg', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(7, 'C.A.P.E. 2016 Conference | Effective and Defensible Training Through Collaboration', '', 'May 19 - 22', 'policetape.jpg', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(8, 'C.A.P.E. Conference 2014 | How to Meet the Training Needs of Policing in the Future.', 'The goal of this year’s C.A.P.E. conference is to engage the community of police educators in active discussion around accountability, evidence based training, and technological advancements which will influence the future.', 'May 20 - 23', 'backcar.jpg', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(9, 'test', 'test', 'test', 'image-13cc9fb4-8c6d-4629-a430-3c47614e2b40.jpeg', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(10, 'Test Conferences', 'Test description', '2023 11 2', 'image-eae4c8da-e7b5-440a-8398-837109e97325.jpeg', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(11, 'TestDetail', 'TestDetail', 'TestDetail', 'image-4f3f7260-2c90-4112-8f28-77410f0af3ff.jpeg', 'TestDetail', 'TestDetail', 'image-aef74aeb-31af-4f36-bc0e-62ef57fd01a3.jpeg', 'TestDetail', 'TestDetail', 'image-d07930e0-4f0d-4dbf-9fda-e538c19463c7.jpeg', 'TestDetail', 'TestDetail', 'TestDetail', 'TestDetail', 'TestDetail', 'TestDetail', 'TestDetail', 'TestDetail');

-- --------------------------------------------------------

--
-- Table structure for table `executive`
--

DROP TABLE IF EXISTS `executive`;
CREATE TABLE IF NOT EXISTS `executive` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `JobTitle` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `Organization` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `Description` text COLLATE utf8mb4_general_ci NOT NULL,
  `Image` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=188 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `executive`
--

INSERT INTO `executive` (`Id`, `FullName`, `JobTitle`, `Organization`, `Description`, `Image`) VALUES
(181, 'Dave Tutte', 'President', 'Halton Regional Police', 'Staff Sergeant Dave Tutte has been with the Halton Regional Police Service for 14 years. Dave started his career working in Patrol in the City of Burlington, from there Dave was assigned to the Tactical Rescue Unit where he was a team leader and on the rappel team.\r\n\r\nIn January 2016 Dave was promoted to the rank of Sergeant and was assigned to the Regional Community Mobilization Bureau.  While in this role, Dave was responsible for the service delivery for Mental Health, as well as Diversity and Inclusion.  Dave was later seconded to the Community Safety and Well-being project.\r\n\r\nIn July 2018 Dave moved to the Training Bureau and in March 2019 was promoted to the rank of Staff Sergeant and has been fortunate to stay posted in the Training/Recruiting Bureau since. In addition to his training and recruiting duties, Dave has also been a Hostage Negotiator since 2015.\r\n\r\nDave has been a member of the OACP Education, Training and Professional Development committee since 2018 and currently Dave is the co-chair of the OACP Innovation and Technology sub-committee, and the vice-chair of the Incident Command sub-committee.  Dave is also a member of the C.P.K.N Innovation and Learning National Advisory committee and a member of the Program Advisory committees for Georgian and Humber College.  Dave has been the President of the Canadian Association of Police Educators since 2021.', 'EmptyUser.jpg'),
(182, 'Dominique Germain', 'Vice-President', 'Algonquin College', 'Dominique Germain holds a master’s degree in social work from the University of Ottawa. She has 20 years of professional experience in social work, including mental health, addiction, crisis intervention, counseling, risk and threat assessment, sexual abuse and truancy. During her career, Ms. Germain has not only worked in child protection and as a social worker, she has also been a member of the City of Ottawa Emergency Response Team, was Lead on multidisciplinary intervention teams, liaison with the Ottawa Police, CHEO, Royal Ottawa and Montfort all the while leading a team of social workers and teaching part time in the Social Service Worker program at Collège La Cité.   In 2014, Ms. Germain became a permanent professor in this program and was soon appointed program coordinator. In 2017, she won the position of Director of the Institute of Emergency and Legal Services at Collège La Cité.\r\n\r\nOver the years, Ms. Germain has continued to be highly involved in the community: she is a past United Way volunteer, 10 year member of the Suicide Prevention Network Steering Committee, 8 year member of the Ottawa Urban Schools Steering Committee, active member of the First Responders Mental Health Council, active administrator for Montfort Renaissance, active member of the Montfort Hospital Association and current vice-president of the Canadian Association of Police Educators. Dominique is a strong advocate for education and mental health and believes in being the voice for those who do not have one. Her ambitions, career and volunteer work, combined with 3 young adult children at home all pursuing post-secondary studies, keep this dynamic francophone woman on her toes!', 'image-83213df9-776c-471b-a7d6-774e458cff7e.png'),
(183, 'Lindsay Sutherland', 'Director of Communications', 'Emond Publishing', 'Lindsay Sutherland is currently the Director of Sales & Business Development at Emond Publishing. Lindsay has an honours BA in English Language & Literature from Western University and has been working in educational publishing for many years.\r\n\r\nPrior to her role in sales & business development, Lindsay worked for several years as a Publisher at Emond, overseeing the creation of a number of titles and products prepared for police training and police foundations programs in Canada, including titles that focused on community policing and mobilization, cannabis legislation, interviewing techniques, mental health and cybercrime.\r\nOne of Lindsay’s objectives at Emond is to ensure that the educational resources being utilized in college and university programs align with the training and education goals of police services.  Lindsay also strives to bring resources to market that allow policing professionals to achieve their personal and career goals.\r\n\r\nLindsay has been a member of C.A.P.E since 2016.', 'image-d8e34485-ec5d-4a6b-acdd-f7561524c6cf.jpeg'),
(184, 'Melanie Marchand', 'Co-Treasurer', 'Georgian College', 'Melanie Marchand started her academic journey at the University of Waterloo where she majored in Criminology, Sociology and Legal Studies. Upon graduation she moved to B.C to pursue a Masters in Criminology at Simon Fraser University. Melanie was fortunate to work with some of the top Criminologists in Canada and continued to complete her Ph.D coursework at Simon Fraser and U of T.\r\n\r\nWhile working on her Masters, she worked closely with the RCMP conducting original research on DNA databank offences and crime escalation. Melanie’s research interests include: criminological theory, criminal behaviour and analysis, biology of crime, and crime escalation.\r\n\r\nUpon graduation Melanie returned to Ontario and joined the Honours Bachelor of Police Studies Degree program at Georgian College as professor in the spring of 2003 and has been co-ordinator of the program since 2007.\r\n\r\nMelanie’s teaching promotes student-centred and experiential learning. She believes strongly in active and co-operative learning strategies. Melanie has always had a student-centered approach and believes in supporting students diverse learning styles.\r\n\r\nMelanie has taught a variety of courses within her area of expertise, including: Contemporary Issues in Criminology, Criminal Behaviour and Analysis, Policing and Society, Crime and Punishment, Sociology, Research Methods and Forensic Science.\r\n\r\nMelanie has been a member of CAPE since 2015.', 'image-9752c820-f328-4839-a1e3-ad034dd665d8.jpeg'),
(185, 'Simon Bradford', 'Co-Treasurer', 'Georgian College', 'Staff Sergeant (ret) Simon Bradford spent 31 years in policing both with the Toronto Police Service and the Ontario Provincial Police. During his policing career he completed general, traffic and investigative duties, he also worked at the Ontario Police College, the Ontario Provincial Police Academy and the OPP General Headquarters. His last assignment was as an Acting Inspector assigned to the Integrated Security Unit working on the G8 Summit in Huntsville, Ontario.\r\n\r\nIn 2005, Simon started teaching at Georgian College on a part time basis and in 2010 he was hired as a full-time professor in the Police Studies degree and the Police Foundations program. Simon is currently the program coordinator of the Police Foundations program. In 2009 – 2011 Simon taught part time at Dalhousie University, College of Continuing Education, Certificate in Police Leadership (CPL) Program.\r\n\r\nHe is a graduate of the University of Toronto, St. Francis Xavier University and Athabasca University.\r\n\r\nSimon is a member of the executive of the Canadian Association of Police educators serving as the Treasurer.', 'image-9b954967-2e7f-4a31-8ba2-e4021561314b.jpeg'),
(186, 'Scott Mark', 'Director of Policies and Procedures', 'Bow Valley College', 'Scott Mark began his career as a Police Officer in 2004 with the Canadian Forces Military Police, after completing his Police Studies Diploma at MacEwan University, and Bachelor of Science Degree at the University of Alberta.  After 4 years of service with the Military Police, Scott transferred as an experienced officer to the Calgary Police Service, where he spent approximately 2 years in Patrol and just under 10 years as a Crime Scene Investigator/Forensic Specialist. In that time Scott continued his education by completing a Bachelor of Forensic Identification Degree at Laurentian University, as well as by creating and facilitating professional development courses for Police Officers across Southern Alberta in the field of forensics specifically. Most recently Scott has had the opportunity to work internationally with INTERPOL and the Uganda Police Service by continuing to help develop and provide forensic training for officers world-wide.\r\n\r\nWith a strong passion for education, Scott’s career has since evolved, and transitioned from practitioner to educator.  In 2020 Scott completed his Professional Master of Education Degree at Queen’s University and has become the Law Enforcement Specialization Instructor at the Bow Valley College Justice Studies Program, as well as an online Instructor for the CDI College Law Enforcement Foundations Program. Scott is excited to now also be a part of C.A.P.E. and hopes to continue sharing his passion for policing, forensics, and education.', 'image-16ec92f0-ceeb-4de5-8f6e-f045bf1cfbf8.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `research`
--

DROP TABLE IF EXISTS `research`;
CREATE TABLE IF NOT EXISTS `research` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(300) COLLATE utf8mb4_general_ci NOT NULL,
  `Description` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `Link` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `Image` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `research`
--

INSERT INTO `research` (`Id`, `Title`, `Description`, `Link`, `Image`) VALUES
(1, 'usefi.ma@gmail.com', '1', '1', 'EmptyConference.png'),
(3, 'test', 'test', 'test', 'image-82d7bc84-75af-41c7-b302-31c78c2687ba.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `speaker`
--

DROP TABLE IF EXISTS `speaker`;
CREATE TABLE IF NOT EXISTS `speaker` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(300) COLLATE utf8mb4_general_ci NOT NULL,
  `Organization` varchar(300) COLLATE utf8mb4_general_ci NOT NULL,
  `Image` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `ConferenceId` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `speaker`
--

INSERT INTO `speaker` (`Id`, `FullName`, `Organization`, `Image`, `ConferenceId`) VALUES
(21, 'Mahya yousefissssssssssss', 'Bow Valley', 'image-d763aa4f-6ef3-4294-b2a1-8df9eab2ccc3.jpeg', 11),
(19, 'ganbriella', 'sssssssss', 'image-4f80bb4a-deee-46bb-bb2b-3673b12cbac9.jpeg', 2),
(22, 'Mark Mendoza', 'Bowvalley', 'image-996a008a-b6d4-43aa-8aba-3c3fce1d1687.jpeg', 11),
(20, 'Mahya', 's', 'image-191b7b35-6714-4b74-8fa6-a3e75e881aab.jpeg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sponsor`
--

DROP TABLE IF EXISTS `sponsor`;
CREATE TABLE IF NOT EXISTS `sponsor` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Image` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `Name` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `Link` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `ConferenceId` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sponsor`
--

INSERT INTO `sponsor` (`Id`, `Image`, `Name`, `Link`, `ConferenceId`) VALUES
(2, 'image-fa0280d4-4c09-4e92-9e1f-7d72b04f9d70.jpeg', 'MAhyaa', 'aaaa', 2),
(3, 'image-ce509a53-25e9-430e-b8ce-2307124eb3a9.jpeg', 'gabriella', 'sdadad', 2),
(4, 'image-82aaf4cc-edef-463e-bb5b-100748d2441f.jpeg', 'Bow Valley', 'Bow Valley', 11),
(5, 'image-91b9e342-bd8e-44e3-9d98-489072bf0c17.jpeg', 'Sait', 'Sait', 11);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Id`, `FullName`, `Email`, `Password`) VALUES
(8, 'Mohammad', 'Zamani.md@gmail.com', '$2b$10$eHDQp36L1m9jqB2fQr//D.GNc3B2zZpnLXhb.hKM.8kzus/wNtd/G'),
(7, 'Mahya', 'usefi.ma@gmail.com', '$2b$10$oodUzCBOlsa6XfsGbTtX/eJRVtNsJAHau17WDMh4/x1AwmdQL0bSe'),
(9, 'Mark Mendoza', 'usef@gmail.com', '$2b$10$Ok0bIx4vDvlnExCJA3Ujxu/7eequSnB2gezzGdsXU5feuEstnpWz2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
