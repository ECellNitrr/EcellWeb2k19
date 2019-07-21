-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: ecellweb
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add group',3,'add_group'),(6,'Can change group',3,'change_group'),(7,'Can delete group',3,'delete_group'),(8,'Can view group',3,'view_group'),(9,'Can add permission',2,'add_permission'),(10,'Can change permission',2,'change_permission'),(11,'Can delete permission',2,'delete_permission'),(12,'Can view permission',2,'view_permission'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add ECellUser',6,'add_customuser'),(22,'Can change ECellUser',6,'change_customuser'),(23,'Can delete ECellUser',6,'delete_customuser'),(24,'Can view ECellUser',6,'view_customuser'),(25,'Can add campus ambassador profile',7,'add_campusambassadorprofile'),(26,'Can change campus ambassador profile',7,'change_campusambassadorprofile'),(27,'Can delete campus ambassador profile',7,'delete_campusambassadorprofile'),(28,'Can view campus ambassador profile',7,'view_campusambassadorprofile'),(29,'Can add event',8,'add_event'),(30,'Can change event',8,'change_event'),(31,'Can delete event',8,'delete_event'),(32,'Can view event',8,'view_event'),(33,'Can add event register',9,'add_eventregister'),(34,'Can change event register',9,'change_eventregister'),(35,'Can delete event register',9,'delete_eventregister'),(36,'Can view event register',9,'view_eventregister'),(37,'Can add sponsor',10,'add_sponsor'),(38,'Can change sponsor',10,'change_sponsor'),(39,'Can delete sponsor',10,'delete_sponsor'),(40,'Can view sponsor',10,'view_sponsor'),(41,'Can add mentor',11,'add_mentor'),(42,'Can change mentor',11,'change_mentor'),(43,'Can delete mentor',11,'delete_mentor'),(44,'Can view mentor',11,'view_mentor'),(45,'Can add startup',12,'add_startup'),(46,'Can change startup',12,'change_startup'),(47,'Can delete startup',12,'delete_startup'),(48,'Can view startup',12,'view_startup'),(49,'Can add speaker',13,'add_speaker'),(50,'Can change speaker',13,'change_speaker'),(51,'Can delete speaker',13,'delete_speaker'),(52,'Can view speaker',13,'view_speaker'),(53,'Can add member',14,'add_member'),(54,'Can change member',14,'change_member'),(55,'Can delete member',14,'delete_member'),(56,'Can view member',14,'view_member');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_users_customuser_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_users_customuser_id` FOREIGN KEY (`user_id`) REFERENCES `users_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2019-07-19 10:45:52.262039','1249','DIR-test',1,'[{\"added\": {}}]',14,1),(2,'2019-07-19 10:45:52.510940','1250','DIR-test',1,'[{\"added\": {}}]',14,1),(3,'2019-07-19 10:46:24.559489','1250','DIR-test',3,'',14,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(8,'events','event'),(9,'events','eventregister'),(11,'mentors','mentor'),(5,'sessions','session'),(13,'speakers','speaker'),(10,'sponsors','sponsor'),(12,'startups','startup'),(14,'team','member'),(7,'users','campusambassadorprofile'),(6,'users','customuser');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-07-19 09:44:10.059663'),(2,'contenttypes','0002_remove_content_type_name','2019-07-19 09:44:10.116656'),(3,'auth','0001_initial','2019-07-19 09:44:10.176802'),(4,'auth','0002_alter_permission_name_max_length','2019-07-19 09:44:10.297743'),(5,'auth','0003_alter_user_email_max_length','2019-07-19 09:44:10.306398'),(6,'auth','0004_alter_user_username_opts','2019-07-19 09:44:10.315802'),(7,'auth','0005_alter_user_last_login_null','2019-07-19 09:44:10.324661'),(8,'auth','0006_require_contenttypes_0002','2019-07-19 09:44:10.327381'),(9,'auth','0007_alter_validators_add_error_messages','2019-07-19 09:44:10.335916'),(10,'auth','0008_alter_user_username_max_length','2019-07-19 09:44:10.352357'),(11,'auth','0009_alter_user_last_name_max_length','2019-07-19 09:44:10.363214'),(12,'auth','0010_alter_group_name_max_length','2019-07-19 09:44:10.377574'),(13,'auth','0011_update_proxy_permissions','2019-07-19 09:44:10.385923'),(14,'users','0001_initial','2019-07-19 09:44:10.478681'),(15,'admin','0001_initial','2019-07-19 09:44:10.684576'),(16,'admin','0002_logentry_remove_auto_add','2019-07-19 09:44:10.753231'),(17,'admin','0003_logentry_add_action_flag_choices','2019-07-19 09:44:10.765749'),(18,'events','0001_initial','2019-07-19 09:44:10.808045'),(19,'events','0002_auto_20190719_0944','2019-07-19 09:44:10.907424'),(20,'mentors','0001_initial','2019-07-19 09:44:11.010889'),(21,'mentors','0002_mentor_ecell_user','2019-07-19 09:44:11.047570'),(22,'sessions','0001_initial','2019-07-19 09:44:11.097030'),(23,'speakers','0001_initial','2019-07-19 09:44:11.132521'),(24,'sponsors','0001_initial','2019-07-19 09:44:11.158246'),(25,'sponsors','0002_sponsor_ecell_user','2019-07-19 09:44:11.196090'),(26,'startups','0001_initial','2019-07-19 09:44:11.245694'),(27,'startups','0002_startup_ecell_user','2019-07-19 09:44:11.289058'),(28,'team','0001_initial','2019-07-19 09:44:11.341004'),(29,'team','0002_auto_20190719_1049','2019-07-19 10:49:42.542539'),(30,'team','0003_auto_20190720_1607','2019-07-20 16:07:04.305574'),(31,'users','0002_customuser_applied','2019-07-20 16:07:04.407958');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('2r61adwvp4f1ggf810becdtpqknkvlcz','OWIxNjAwN2RlOGU4YWJhNTMzNzZkYjAwNDk2YjcyZmZkZjk5MWRhMDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiODdmZThlN2E2NTNjMzU5YmY3NGFmYjE2NjE2NGJhY2E3YjE2NTY2YSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2019-08-02 10:45:05.802754'),('q5vdgdoj1da5qsilyh1ksxmiz6yld7wf','YzQ0ZTBhMDM4ZDI3NGM3MTE3NzE5Zjc3MzhlNzE0MzZkZTIxNzk1NTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4N2ZlOGU3YTY1M2MzNTliZjc0YWZiMTY2MTY0YmFjYTdiMTY1NjZhIn0=','2019-08-02 09:54:16.202324');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events_event`
--

DROP TABLE IF EXISTS `events_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `venue` longtext NOT NULL,
  `date` date NOT NULL,
  `time` varchar(10) NOT NULL,
  `details` longtext NOT NULL,
  `cover_pic` varchar(100) DEFAULT NULL,
  `icon` varchar(100) NOT NULL,
  `email` varchar(254) DEFAULT NULL,
  `flag` tinyint(1) NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  `ecell_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `events_event_ecell_user_id_8815d510_fk_users_customuser_id` (`ecell_user_id`),
  CONSTRAINT `events_event_ecell_user_id_8815d510_fk_users_customuser_id` FOREIGN KEY (`ecell_user_id`) REFERENCES `users_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_event`
--

LOCK TABLES `events_event` WRITE;
/*!40000 ALTER TABLE `events_event` DISABLE KEYS */;
INSERT INTO `events_event` VALUES (23,'IGNITION','E-hall','2018-08-01','10:00 am','\"Ignition\" is a business model competition that will connect ideas of entrepreneurs with investors. This will help the startups to gain traction and also provide an opportunity to be funded by some of the top investors in india. A business model competition aims to connect the new start-ups with investors by creating a direct channel between them.','static/uploads/events/ig111.png','static/uploads/events/ig111.png',NULL,1,2019,'2019-07-19 14:36:58.137969','2019-07-19 14:36:58.138032',NULL),(24,'START-UP CAMP','To be decided...','2018-09-09','TBD','In a startup nothing happens unless you make it happen. Startup camp promotes entrepreneurship among students and also provides a start-up initiative activity amongst the growing startups in and around Chhattisgarh. Several high scale and low scale startups in and around Chhattisgarh are invited and provided with an opportunity to publicize their products/services and grab some interns for their companies. The investors attend the pitches of the startups and on recognizing a potential startup, provide seed funding to those startups.','static/uploads/events/sc111.png','static/uploads/events/sc111.png',NULL,1,2019,'2019-07-19 14:36:58.460712','2019-07-19 14:36:58.460792',NULL),(25,'CRICNOMETRICA','To be decided...','2018-09-08','TBD','Cricnometrica is an event designed to provide a stage for entertainment as well as a platform to showcase the individuals or teams knowledge of the game of cricket. A team game comprising of three rounds which range from pen paper to slide-shows and leads finally to virtual bidding to create a team of their own. The team with the maximum points at the end of the third round is declared as the winner.','static/uploads/events/cr111_wKu2qYt.png','static/uploads/events/cr111_wKu2qYt.png',NULL,1,2019,'2019-07-19 14:36:58.810064','2019-07-19 14:36:58.810123',NULL),(26,'B-QUIZ','To be decided...','2018-09-08','TBD','Get your cortex fixed cause this quiz spins your head around. Let\'s explore some of the de facto of business quizzing. Guide your cerebrum\'s way to this b-quiz that will catapult you into the world of business facts and figures.','static/uploads/events/bq111.png','static/uploads/events/bq111.png',NULL,1,2019,'2019-07-19 14:36:58.884262','2019-07-19 14:36:58.884336',NULL),(27,'WALLSTREET','To be decided...','2018-09-08','TBD','A virtual share market contest for the brokers out there. Invest money and take home big. The winner keeps it all. Challenge your mind’s trafficking power and run away with the best bet in this virtual stock broking exchange.','static/uploads/events/wallstreet_FwBl6yR111.png','static/uploads/events/wallstreet_FwBl6yR111.png',NULL,1,2019,'2019-07-19 14:36:58.971451','2019-07-19 14:36:58.971551',NULL),(28,'UTKRISHTH','To be decided...','2018-09-08','TBD','This event acknowledges the grass root works and aims at promoting low scale entrepreneurs from villages for the progress of nation. The event aims at felicitating the potential rural startup ideas to promote the entrepreneurial spirit at the grass root levels.','static/uploads/events/uk111.png','static/uploads/events/uk111.png',NULL,1,2019,'2019-07-19 14:36:59.075022','2019-07-19 14:36:59.075100',NULL),(29,'ENTROPY','To be decided...','2018-09-08','TBD','Giving wings to ideas and ground to the unknown, this session is to guide, inspire and bring out the best from the budding comrades. Words, if they hit the adrenaline rush can make you do wonders. This speaker session can make you look beyond the ordinary in order to be above the ordinary.','static/uploads/events/en111.png','static/uploads/events/en111.png',NULL,1,2019,'2019-07-19 14:36:59.152871','2019-07-19 14:36:59.152934',NULL),(30,'E-Gathering','To be decided...','2018-09-08','TBD','Like to end the E summit 18 on a high, the closing ceremony called the E-Gathering will feature a musical performance and a stand-up performance which will be revealed soon.','static/uploads/events/eg111.png','static/uploads/events/eg111.png',NULL,1,2019,'2019-07-19 14:36:59.601159','2019-07-19 14:36:59.601288',NULL),(31,'B-Case Study','To be decided...','2018-09-08','TBD','B-Case Study (Business Case Study ) is an event designed to act as a solution provider for the erupting real life scenarios in the business domain. A team event comprising of three rounds with range from pen paper to a final report submission. The reports being presented before the judges and the team with maximum awarded points is declared as the winner.','static/uploads/events/bc111.png','static/uploads/events/bc111.png',NULL,1,2019,'2019-07-19 14:36:59.683188','2019-07-19 14:36:59.683247',NULL),(32,'B Model','E-Hall','2019-06-29','TBD','An awesome opportunity to showcase your business model.','static/uploads/events/Frame_1.png','static/uploads/events/Frame_1.png',NULL,1,2019,'2019-07-19 14:36:59.777581','2019-07-19 14:36:59.777680',NULL),(33,'INNOVATION EXPO','TPO Terrace','2019-06-29','TBD','A stepping stone for your future startup ideas.','static/uploads/events/Frame.png','static/uploads/events/Frame.png',NULL,1,2019,'2019-07-19 14:36:59.841192','2019-07-19 14:36:59.841234',NULL);
/*!40000 ALTER TABLE `events_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events_eventregister`
--

DROP TABLE IF EXISTS `events_eventregister`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_eventregister` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NOT NULL,
  `profile_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `events_eventregister_event_id_f42e40ab_fk_events_event_id` (`event_id`),
  KEY `events_eventregister_profile_id_625b7ec7_fk_users_customuser_id` (`profile_id`),
  CONSTRAINT `events_eventregister_event_id_f42e40ab_fk_events_event_id` FOREIGN KEY (`event_id`) REFERENCES `events_event` (`id`),
  CONSTRAINT `events_eventregister_profile_id_625b7ec7_fk_users_customuser_id` FOREIGN KEY (`profile_id`) REFERENCES `users_customuser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_eventregister`
--

LOCK TABLES `events_eventregister` WRITE;
/*!40000 ALTER TABLE `events_eventregister` DISABLE KEYS */;
/*!40000 ALTER TABLE `events_eventregister` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentors_mentor`
--

DROP TABLE IF EXISTS `mentors_mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentors_mentor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `contact` longtext,
  `email` varchar(256) NOT NULL,
  `detail` longtext NOT NULL,
  `description` longtext,
  `profile_pic` varchar(100) DEFAULT NULL,
  `flag` tinyint(1) NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  `ecell_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `mentors_mentor_ecell_user_id_66421a0b_fk_users_customuser_id` (`ecell_user_id`),
  CONSTRAINT `mentors_mentor_ecell_user_id_66421a0b_fk_users_customuser_id` FOREIGN KEY (`ecell_user_id`) REFERENCES `users_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentors_mentor`
--

LOCK TABLES `mentors_mentor` WRITE;
/*!40000 ALTER TABLE `mentors_mentor` DISABLE KEYS */;
INSERT INTO `mentors_mentor` VALUES (1,'SHRAVAN PUNNA','','placeholder@gmail.com','Consultant at Deloitte','Competent Communicator for displaying excellence in public speaking and a competent leader','static/uploads/mentors/IMG_20190525_162104.jpg',1,2018,'2019-07-19 16:47:35.338002','2019-07-19 16:47:35.338121',NULL),(2,'VAIBHAV SURYA','','placeholder@gmail.com','Digital Marketing Manager at Oppo','Digital sumo is a leading digital marketing agency in MP & CG .They are advance digital advertising company which provides digital & social media marketing training and services to their clients so they will perform extraordinary in their business. They are innovative digital marketing service provider mainly focus on small –medium business enterprises ,marketing professionals & marketing students.\r\nThey are top 3 SEO,SEM & PPC advertsing agency in indore mainly works with various startups in  Healthcare ,Education,E-commerce ,Fashion & many more.','static/uploads/mentors/IMG_20190525_162119.jpg',1,2018,'2019-07-19 16:47:35.596670','2019-07-19 16:47:35.596802',NULL),(3,'Tushar Vadera','0','tushar@innolat.com','CEO - Innolat','CEO - Innolat','static/uploads/mentors/IMG_20190525_161131.jpg',1,2017,'2019-07-19 16:47:35.881126','2019-07-19 16:47:35.881272',NULL),(4,'Vineet Budki','0','ineet.budki@guiddoo.com','Founder & CEO - Guiddoo World','Founder & CEO - Guiddoo World','static/uploads/mentors/IMG_20190525_161951.jpg',1,2017,'2019-07-19 16:47:36.161002','2019-07-19 16:47:36.161050',NULL),(5,'Dr. Shameem S','9876543210','hello@ecell.nitrr.ac.in','Technical University of Munich (Germany)','Great Lakes Institute of Management','static/uploads/mentors/IMG_20190525_162044.jpg',1,2017,'2019-07-19 16:47:36.469572','2019-07-19 16:47:36.469659',NULL),(6,'Ankit Tibrewal','','placeholder@gmail.com','Bharti Airtel Ltd','Financial exec with broad experience in all aspects of accounting, auditing and financial management. Rich experience with real estate, financial consulting. Interested in early-stage startups as well as companies\r\n\r\nSpecialties: Finance & Accounting, Purchasing, Investment, Government Liasion.','static/uploads/mentors/IMG_20190525_134021_1558814989205.jpg',1,2018,'2019-07-19 16:47:36.749700','2019-07-19 16:47:36.749802',NULL);
/*!40000 ALTER TABLE `mentors_mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `speakers_speaker`
--

DROP TABLE IF EXISTS `speakers_speaker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `speakers_speaker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `company` varchar(256) NOT NULL,
  `experience` int(11) DEFAULT NULL,
  `profile_pic` varchar(100) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `contact` longtext,
  `description` longtext NOT NULL,
  `year` int(11) NOT NULL,
  `social_media` longtext NOT NULL,
  `flag` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `speakers_speaker`
--

LOCK TABLES `speakers_speaker` WRITE;
/*!40000 ALTER TABLE `speakers_speaker` DISABLE KEYS */;
INSERT INTO `speakers_speaker` VALUES (31,'Daniel Ramamoorthy','Startup Coach',NULL,'static/uploads/speakers/daniel_ramamoorthy_FQLF3P8.jpg','eight@nitrr.ac.in','','An eclectic person who is a box of wonder, excelling the entrepreneurial domain: from being an entrepreneur and a motivational speaker, coaching others to being a world famous host and speaker!',2018,'https://www.linkedin.com/in/iamdanram/',1),(32,'Kumar Gaurav','Founder Cashaa',NULL,'static/uploads/speakers/SAVE_20190526_114248.jpg','nine@nitrr.ac.in','','Honored with an extraordinary status by the US government, holding a place in 100 influential people in the world of blockchain, Mr Kumar Gaurav, Founder of Cashaa has set the bar high and stood out of the crowd.',2018,'https://www.linkedin.com/in/kgauravitc',1),(33,'Nandini Vaidyanathan','CARMa CONNECT',NULL,'static/uploads/speakers/Nandini_Vaidyanathan.jpg','ten@nitrr.ac.in','','An academician turned entrepreneurial mentor, founder of CARMa CONNECT, this visionary lady has created an eco-system to nourish the spirit of entrepreneurship.',2018,'https://www.linkedin.com/in/nandinivaidyanathan',1),(34,'Dr Gopichand Katragadda','Chief Technology Officer at Tata Sons',NULL,'static/uploads/speakers/Dr_Gopichand_Katragadda.jpg','eleven@nitrr.ac.in','','Dr Gopichand Katragadda is the group chief technology officer at Tata Sons. In this role, Dr Katragadda drives technology and innovation for the Tata group leveraging cross-company synergies. He also serves as a director on the boards of select Tata companies.',2018,'https://in.linkedin.com/in/gopichand-katragadda-2b1a0b7',1),(35,'Rishabh Dev','Managing Director at Mapplinks and Mapplinks Academy',NULL,'static/uploads/speakers/IMG_20190526_015319.jpg','four@nitrr.ac.in','','ES17 had Mr. Rishabh Dev – The Growth Hacking Bogeyman, a serial entrepreneur, presently the director of Mapplinks, India, who regularly enlightens enthusiasts with growth hacking and digital marketing. Not only growth hacking, but also many diverse fields intrigued him. His approach towards finding the optimal solutions for his clients is commendable.',2017,'https://www.linkedin.com/in/rishabhdev/',1),(36,'Abi Aryan','The London School of Economics and Political Science (LSE)',NULL,'static/uploads/speakers/IMG_20190526_015236.jpg','three@nitrr.ac.in','','Ms. Abi, a perfect instance of beauty with brains, graduated from London School of Economics and Political Science and has a deep interest in AI and Blockchain. She has worked as a strategist with AI companies globally and is the founder of Delegano and Director at Women Who Code, Delhi. Having a great experience as TED speaker, Abi also worked on Augmented Reality and Bit coin / Block chain companies in U.K.',2017,'https://www.linkedin.com/in/abi-aryan-168131112/',1),(37,'Rahul Tyagi','Vice President - Training at Lucideus',NULL,'static/uploads/speakers/Rahul_Tyagi.jpg','five@nitrr.ac.in','','Rahul being a perfect combination of intelligence and dedication, at present is the co- founder of Lucideus. Handling the toughest of the cyberspace issues with a magical ease is what makes Rahul stand out from the rest and also he speaks regularly at prestigious platforms like Exhibition India group, IPPAI, DCD convergence, Security Watch India, Micro Finance in Asia.  Recently, he has been honored with Fortune India\'s 40 under40 2018.',2017,'https://www.linkedin.com/in/iamrahultyagi/',1),(38,'Mr. Saransh Roy','Associate at Invest India',NULL,'static/uploads/speakers/Mr._Saransh_Roy.webp','saranshroy@gmail.com','','Mr. Roy is an associate at Invest India, Startup India Hub. Saransh being a versatile individual, addresses people on the need to empower the country’s economy by creating jobs rather than seeking one and the governmental policies guarding startup related agendas.  Apart from this, he has an expertise in dealing with Intellectual Property Rights, including issues like credit guarantee, tax exemption laws and others.',2017,'https://www.linkedin.com/in/saransh-roy-01b966a2/',1),(39,'Harjeet Khanduja','Vice President Human Resource at Reliance JIO Infocomm',NULL,'static/uploads/speakers/IMG_20190526_015149.jpg','three@nitrr.ac.in','','Currently, Mr. Harjeet is the Vice President Human Resources at Reliance Jio. He has smartly led various HR projects in India, Canada as well as U.S.A. for various market giants like Reliance, Tata, Piramal, just to name a few. With a vivacious personality, Harjeet has not only led HR, but also been a blogger, poet and an international speaker, addressing people on the practicalities of dealing with the pre and post startup essentials.  We at E-Summit 2017 witnessed this great, humorous and intellectual person.',2017,'https://www.linkedin.com/in/harjeetkhanduja/',1),(40,'Anil Joshi','Managing Partner, Unicorn India Ventures',NULL,'static/uploads/speakers/Anil_Joshi-1.jpg','two@ecell.nitrr.ac.in','','Anil Joshi is the Managing Partner at Unicorn India Ventures, a SEBI approved venture fund under AIF-I Category. The man with his vision has helped in closing approximately 60 start-up deals with over INR 100 crs investments and has served on the Board of five companies and is involved with various incubation centers as a mentor in India and outside India.',2016,'https://www.linkedin.com/in/aniljoshi74/',1),(41,'Ravi Ranjan','NASSCOM 10000 Startups',NULL,'static/uploads/speakers/IMG_20190526_015042.jpg','one@hello.com','','Ravi Ranjan is the head of Nasscom, 10000 startups, Kolkata. He is one of those Indians who has played an influential role in giving the ground to many startups. It is aimed at incubating, funding and supporting 10,000 technology start-ups in India over the next ten years. The person with an inventive bend for entrepreneurship is the person who has taken to himself to bring the best startups in Indian market.',2016,'https://www.linkedin.com/in/raviranjan2/',1),(42,'Aditi Chourasia','Co-Founder and CEO EngineerBabu',NULL,'static/uploads/speakers/Aditi_Chourasia.jpg','hello@ebabu.com','','The lady with the spirit of a real entrepreneur has always aimed to scale new heights. The co-founder of Engineer Babu, she has always preached that startup doesn’t mean money and there should be a good idea and passion to accomplish your task. She is a true inspiration and a symbol of women empowerment.',2016,'https://www.linkedin.com/in/aditichaurasia/',1),(43,'Anup Kalbalia','Tech Lead at Directi',NULL,'static/uploads/speakers/Anup_Kalbalia.jpg','anup.kalbalia@gmail.com','','The tech geek with an experience of working in various programming languages like Delphi, C and Java, has built enterprise applications using different technologies like TCP sockets, HTTP, Restful Web Services etc. Being the Tech Lead at Directi, he has always visioned to create a pool of budding entrepreneurs who can make a difference to society.',2016,'https://www.linkedin.com/in/anupkalbalia/',1),(44,'Kumaran Brothers','AppGodimensions',NULL,'static/uploads/speakers/Kumaran_Brothers.gif','apps.godimensions@gmail.com','','Hailing from Chennai, two brothers Shravan Kumaran(12) and Sanjay Kumaran(10) went onto become the youngest Indian entrepreneurs as well as CEO of GoDimensions in 2012.\r\nBrothers have developed a number of mobile applications for android as well as iOS and aim that within a few years about 50% of the apps in the market should be owned by them. They also created VR based headsets called GoVR. The brothers were a part of E- Summit 2015 and since then, they are unstoppable.',2015,'https://twitter.com/AppGodimensions',1),(45,'Prateek Sethi','Communication Designer and Creative Director at Trip Creative Services',NULL,'static/uploads/speakers/Prateek_Sethi.jpg','prateek@wearetrip.in','','Prateek has been the Communication Designer and Creative Director at Trip Creative Services, since 2009. Graduated from National Institute of Design, Ahmedabad, he has worked on animation and effects for various leading television channels and shows. He is a very creative person with an imaginative approach towards his projects and also is a talented speaker.',2015,'https://www.facebook.com/prateeksethi',1);
/*!40000 ALTER TABLE `speakers_speaker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sponsors_sponsor`
--

DROP TABLE IF EXISTS `sponsors_sponsor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sponsors_sponsor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `details` longtext,
  `pic` varchar(100) DEFAULT NULL,
  `contact` longtext,
  `website` varchar(200) DEFAULT NULL,
  `spons_type` varchar(3) NOT NULL,
  `flag` tinyint(1) NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  `ecell_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sponsors_sponsor_ecell_user_id_0adecc65_fk_users_customuser_id` (`ecell_user_id`),
  CONSTRAINT `sponsors_sponsor_ecell_user_id_0adecc65_fk_users_customuser_id` FOREIGN KEY (`ecell_user_id`) REFERENCES `users_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sponsors_sponsor`
--

LOCK TABLES `sponsors_sponsor` WRITE;
/*!40000 ALTER TABLE `sponsors_sponsor` DISABLE KEYS */;
INSERT INTO `sponsors_sponsor` VALUES (1,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/IMG_20190526_022315.jpg','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-19 10:35:59.661580','2019-07-19 10:35:59.661621',NULL),(2,'36Inc','Incubation partner','static/uploads/sponsors/inc.jpg','','https://www.facebook.com/36inc/','ATS',1,2018,'2019-07-19 10:35:59.736787','2019-07-19 10:35:59.736920',NULL),(3,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/department_of_women_and_child_development_ZhOVA2e.png','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-19 10:35:59.777972','2019-07-19 10:35:59.778010',NULL),(4,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/IMG_20190526_022339.jpg','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-19 10:35:59.835468','2019-07-19 10:35:59.835515',NULL),(5,'Bank Of Maharashtra','Bank Of Maharashtra is our Banking Partner','static/uploads/sponsors/Bank-of-Maharashtra.jpg','8827544244','https://www.bankofmaharashtra.in/','ATS',1,2017,'2019-07-19 10:35:59.896418','2019-07-19 10:35:59.896469',NULL),(6,'Chhattisgarh Tourism','Tourism Partner','static/uploads/sponsors/chhattisgarh_tourism_HxrvutV.jpg','','https://twitter.com/GoChhattisgarh?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor','ATS',1,2018,'2019-07-19 10:35:59.938458','2019-07-19 10:35:59.938532',NULL),(7,'Think Raipur','In association with Think Raipur','static/uploads/sponsors/raipur1-300x200_6bo4LAr.jpg','8827544244','https://dare2compete.com/o/think-raipur-raipur-smart-city-limited-25381','ATS',1,2017,'2019-07-19 10:35:59.978344','2019-07-19 10:35:59.978394',NULL),(8,'36Inc','Incubation Partner','static/uploads/sponsors/logo.png','9685164762','https://36inc.in/','ATS',1,2017,'2019-07-19 10:36:00.063953','2019-07-19 10:36:00.063990',NULL),(9,'94.3 My FM','Our Radio Partner','static/uploads/sponsors/logo200.jpg','81030 29146','http://myfmindia.com/','ATS',1,2017,'2019-07-19 10:36:00.110401','2019-07-19 10:36:00.110461',NULL),(10,'OYO Rooms','Title Partner','static/uploads/sponsors/new-oyo-rooms-logo.jpg','','https://www.oyorooms.com/','ATS',1,2017,'2019-07-19 10:36:00.146267','2019-07-19 10:36:00.146327',NULL),(11,'Veg Centre','Food Partner','static/uploads/sponsors/15-43-09-14242429_248782615517192_8303366919707240772_o.png.jpg','+91 77140 699','https://m.facebook.com/VegCentre/','ATS',1,2016,'2019-07-19 10:36:00.194767','2019-07-19 10:36:00.194819',NULL),(12,'Infibeam.com','Associative Partner','static/uploads/sponsors/INFIBEAM.png','','https://www.infibeam.com/','ATS',1,2015,'2019-07-19 10:36:00.256834','2019-07-19 10:36:00.256925',NULL),(13,'The Music Cafe','Food Partner','static/uploads/sponsors/15-48-30-13087862_1569788553319059_8526539529959833813_n.png.jpg','91099 93102','https://m.facebook.com/TheMusicCafeRaipur/','ATS',1,2016,'2019-07-19 10:36:00.322152','2019-07-19 10:36:00.322207',NULL),(14,'Resonance','Education Partner','static/uploads/sponsors/RESONANCE.png','','https://www.resonance.ac.in/','ATS',1,2015,'2019-07-19 10:36:00.366087','2019-07-19 10:36:00.366166',NULL),(15,'Saavn','Music Partner','static/uploads/sponsors/SAAVN.png','','https://www.jiosaavn.com/','ATS',1,2015,'2019-07-19 10:36:00.402982','2019-07-19 10:36:00.403043',NULL),(16,'Meenakshi\'s Salon and Academy','Grooming Partner','static/uploads/sponsors/00-29-29-13691026_1111282962244411_7097567306176670928_o.png.jpg','77140 04013','https://m.facebook.com/meenakshisalon/','ATS',1,2016,'2019-07-19 10:36:00.456030','2019-07-19 10:36:00.456105',NULL),(17,'The College Fever','Event Booking Partner','static/uploads/sponsors/IMG_20190608_011152.jpg','7760686052','https://www.thecollegefever.com','ATS',1,2016,'2019-07-19 10:36:00.528810','2019-07-19 10:36:00.528857',NULL),(18,'TRIPPY','Travel Partner','static/uploads/sponsors/IMG_20190526_021644.jpg','','http://www.trippycar.com/','PLS',1,2018,'2019-07-19 10:36:00.580858','2019-07-19 10:36:00.580896',NULL),(19,'Konsole Group','Digital Outreach Partner','static/uploads/sponsors/konsole_group.png','','http://www.konsolegroup.com/','PLS',1,2018,'2019-07-19 10:36:00.636404','2019-07-19 10:36:00.636475',NULL),(20,'INH News','Electronic Media Partner','static/uploads/sponsors/inh_news.png','','https://www.facebook.com/inhnewsindia/','PLS',1,2018,'2019-07-19 10:36:00.686347','2019-07-19 10:36:00.686428',NULL),(21,'Hotel Babylon International','Hospitality Partner','static/uploads/sponsors/hotel_babylon_int.jpg','','http://hotelbabylon.in/','PLS',1,2018,'2019-07-19 10:36:00.750756','2019-07-19 10:36:00.750803',NULL),(22,'Bisleri Fonzo','Beverage Partner','static/uploads/sponsors/bisleri_fonzo.jpg','','https://www.bisleri.com/product/fonzo','PLS',1,2018,'2019-07-19 10:36:00.818950','2019-07-19 10:36:00.819069',NULL),(23,'CSPDCL','CSPDCL is our Platinum Sponsor','static/uploads/sponsors/cspdcl-squarelogo-1475152179777.png','8827544244','https://cspdcl.co.in/cseb/(S(ftnnym4waxjjv3qe24eafhdv))/frmHome.aspx','PLS',1,2017,'2019-07-19 10:36:00.862894','2019-07-19 10:36:00.862976',NULL),(24,'Chhattisgarh Tourism','Chhattisgarh Tourism is our Platinum Sonsor','static/uploads/sponsors/39.jpg','077142 24600','http://visitcg.in/','PLS',1,2017,'2019-07-19 10:36:00.930547','2019-07-19 10:36:00.930581',NULL),(25,'IBC 24','IBC24 is our Electronic Media Partner','static/uploads/sponsors/unnamed.png','077140 08700','http://www.ibc24.in','PLS',1,2017,'2019-07-19 10:36:00.996671','2019-07-19 10:36:00.996719',NULL),(26,'ZONE','ZONE by the PARK hotels is our Platinum Sponsor','static/uploads/sponsors/download_469aKB7.jpeg','077143 20000','http://www.zonebythepark.com','PLS',1,2017,'2019-07-19 10:36:01.037913','2019-07-19 10:36:01.037969',NULL),(27,'T.I.M.E','Platinum Partner','static/uploads/sponsors/TIME.png','','https://www.time4education.com/','PLS',1,2015,'2019-07-19 10:36:01.086728','2019-07-19 10:36:01.086794',NULL),(28,'The Trophy House','Memento Partner','static/uploads/sponsors/trophy_house_WQ49Erc.jpg','','http://www.thetrophyhouse.in/','GDS',1,2018,'2019-07-19 10:36:01.165702','2019-07-19 10:36:01.165751',NULL),(29,'WILLMAN','Stationary Partner','static/uploads/sponsors/willman.jpg','','https://willman-paper-mart.business.site/','GDS',1,2018,'2019-07-19 10:36:01.204699','2019-07-19 10:36:01.204749',NULL),(30,'Orange Le Spirit Cafe','Food Partner','static/uploads/sponsors/le_spirit.jpg','','https://www.facebook.com/orangelespirit/','GDS',1,2018,'2019-07-19 10:36:01.244999','2019-07-19 10:36:01.245063',NULL),(31,'CHIPS Chhattisgarh','CHIPS Chhattisgarh is our Gold Sponsor','static/uploads/sponsors/0.png','(771) 4066205','http://www.chips.gov.in','GDS',1,2017,'2019-07-19 10:36:01.291367','2019-07-19 10:36:01.291415',NULL),(32,'Avinash Group','Avinash Group is our Gold Sponsor','static/uploads/sponsors/avi_logo_9mh3kHg.jpg','077140 33425','http://www.avinashgroup.com','GDS',1,2017,'2019-07-19 10:36:01.344891','2019-07-19 10:36:01.344967',NULL),(33,'Lalganga Colors Mall','Lalganga Colors Mall is our Gold Sponsor','static/uploads/sponsors/-Colors_Mall-20000000016341246-500x375.webp','077140 69999','http://www.lalgangabuilders.com/portal/portfolio/colors-mall','GDS',1,2017,'2019-07-19 10:36:01.396547','2019-07-19 10:36:01.396619',NULL),(34,'TheHitavada','Print Media Partner','static/uploads/sponsors/IMG_20190526_021029.jpg','','http://www.ehitavada.com/','GDS',1,2018,'2019-07-19 10:36:01.443471','2019-07-19 10:36:01.443536',NULL),(35,'CSIDC','Industrial Partner','static/uploads/sponsors/01-27-44-ncsidc_logo.png','','https://csidc.in/home2/index.php/en/','GDS',1,2016,'2019-07-19 10:36:01.507174','2019-07-19 10:36:01.507226',NULL),(36,'CHIPS','Technology Partner','static/uploads/sponsors/01-39-16-images.jpg','771 4014158','http://www.chips.gov.in/','GDS',1,2016,'2019-07-19 10:36:01.552401','2019-07-19 10:36:01.552464',NULL),(37,'Oyo Rooms','Hospitality Partner','static/uploads/sponsors/Oyo.jpg','','https://www.oyorooms.com','GDS',1,2016,'2019-07-19 10:36:01.589112','2019-07-19 10:36:01.589148',NULL),(38,'ATKT.IN','Event Publicity Partner','static/uploads/sponsors/atkt.in.png','','https://www.facebook.com/ATKT.in/','TLS',1,2018,'2019-07-19 10:36:01.624509','2019-07-19 10:36:01.624546',NULL),(39,'Vedam Spa & Salon','Spa & Salon Partner','static/uploads/sponsors/vedam_spa.jpg','','https://www.justdial.com/Raipur-Chhattisgarh/Vedam-Spa-Unisex-Salon-Beside-Jai-Jawan-Petrol-Pump-Raipur-HO/9999PX771-X771-180516161332-E3Y7_BZDET','TLS',1,2018,'2019-07-19 10:36:01.665697','2019-07-19 10:36:01.665819',NULL),(40,'YourStory','Campus Publicity Partner','static/uploads/sponsors/your_story.png','','http://yourstory.com','TLS',1,2018,'2019-07-19 10:36:01.707940','2019-07-19 10:36:01.707977',NULL),(41,'Nai Dunia','Print Media Partner','static/uploads/sponsors/jagran-nai-dunia-logo.jpg','7314711000','https://naidunia.jagran.com/','TLS',1,2017,'2019-07-19 10:36:01.757117','2019-07-19 10:36:01.757171',NULL),(42,'Dev Creator\'s of Memories','Photography Partner','static/uploads/sponsors/IMG_20190526_021830.jpg','','https://ecell.nitrr.ac.in/','TLS',1,2018,'2019-07-19 10:36:01.821889','2019-07-19 10:36:01.821923',NULL),(43,'Hello Intern','Partner','static/uploads/sponsors/logo_UxRNWuC.jpg','','https://www.hellointern.com/','TLS',1,2017,'2019-07-19 10:36:01.872436','2019-07-19 10:36:01.872481',NULL),(44,'IndiaMart','Partner','static/uploads/sponsors/INDIAMART.png','','https://www.indiamart.com/','TLS',1,2015,'2019-07-19 10:36:01.914686','2019-07-19 10:36:01.914795',NULL),(45,'PT Education','Title Partner','static/uploads/sponsors/PT_EDUCATION.png','','https://ptraipur.com/','TLS',1,2015,'2019-07-19 10:36:01.960438','2019-07-19 10:36:01.960484',NULL),(46,'Shopper\'s Stop','Title Partner','static/uploads/sponsors/SHOPPERS_STOP.png','','https://www.shoppersstop.com/','TLS',1,2015,'2019-07-19 10:36:02.000886','2019-07-19 10:36:02.000937',NULL),(47,'Career Launcher','Career Partner','static/uploads/sponsors/CAREER_LAUNCHER.png','','https://www.careerlauncher.com/','TLS',1,2015,'2019-07-19 10:36:02.046620','2019-07-19 10:36:02.046695',NULL),(48,'Pagal Guy','Partner','static/uploads/sponsors/PAGAL_GUY.png','','https://www.pagalguy.com/','TLS',1,2015,'2019-07-19 10:36:02.084245','2019-07-19 10:36:02.084289',NULL),(49,'My FM 94.3','FM Partner','static/uploads/sponsors/01-43-46-logo.png','','http://myfmindia.com/','TLS',1,2016,'2019-07-19 10:36:02.146012','2019-07-19 10:36:02.146086',NULL),(50,'Chhattisgarh Tourism','Tourism Partner','static/uploads/sponsors/01-46-14-images.jpg','771 4224600','http://visitcg.in/','TLS',1,2016,'2019-07-19 10:36:02.203578','2019-07-19 10:36:02.203681',NULL),(51,'Venture Catalysts','Investment Partner','static/uploads/sponsors/VENTURE_catalysts.png','','http://venturecatalysts.in/raipur/','PRS',1,2018,'2019-07-19 10:36:02.251434','2019-07-19 10:36:02.251485',NULL),(52,'Zoodify','Communication Partner','static/uploads/sponsors/ZOODIFY.jpg','','https://ecell.nitrr.ac.in/','PRS',1,2018,'2019-07-19 10:36:02.314148','2019-07-19 10:36:02.314224',NULL),(53,'Sams Pizza','Sams Pizza is our Pizza Partner','static/uploads/sponsors/227226_4.jpg','077140 00053','https://www.samspizza.in','PRS',1,2017,'2019-07-19 10:36:02.404529','2019-07-19 10:36:02.404574',NULL),(54,'Raipur Development Authority','RDA is our Event Partner','static/uploads/sponsors/download_0cXiVmi.png','077730 99888','http://www.rdaraipur.com','PRS',1,2017,'2019-07-19 10:36:02.451144','2019-07-19 10:36:02.451227',NULL),(55,'RiON','RiON is our Recreation Partner','static/uploads/sponsors/h.jpg','081091 22345','https://www.facebook.com/profile.php?id=100009219539017','PRS',1,2017,'2019-07-19 10:36:02.512606','2019-07-19 10:36:02.512706',NULL),(56,'Happily Unmarried','Happily Unmaried is our Merchandise Partner','static/uploads/sponsors/happily-unmarried.jpg','1800 3000 588','https://www.happilyunmarried.com','PRS',1,2017,'2019-07-19 10:36:02.584259','2019-07-19 10:36:02.584326',NULL),(57,'Zebronics','Zebronics is our Multimedia Partner','static/uploads/sponsors/1872031c912f86ab1aa6b5b63679430e4732465e.png','081091 22345','https://zebronics.com','PRS',1,2017,'2019-07-19 10:36:02.743189','2019-07-19 10:36:02.743296',NULL),(58,'Sky Ventures','Sky Ventures is our Travel Partner','static/uploads/sponsors/Sky_Venturesdanny-finalorange_20.png','8827544244','http://www.skyventure.in/','PRS',1,2017,'2019-07-19 10:36:02.857589','2019-07-19 10:36:02.857649',NULL),(59,'Benchmark Group','Benchmark Group is our digital outreach partner.','static/uploads/sponsors/7il9AoJ3.jpg','081031 30039','http://benchmarksgroup.com/','PRS',1,2017,'2019-07-19 10:36:02.906741','2019-07-19 10:36:02.906789',NULL),(60,'qM Print','qM Print is our Printing Partner','static/uploads/sponsors/s2.jpg','077140 99444','http://www.qmprint.com/','PRS',1,2017,'2019-07-19 10:36:02.998075','2019-07-19 10:36:02.998110',NULL),(61,'Shri Krishna IAS','Shri Krishna IAS is our coaching partner','static/uploads/sponsors/shri-krishna-ias-faridabad-sector-7a-faridabad-ias-tutorials-uo67d-250.jpg','8827544244','http://shrikrishnaias.com/','PRS',1,2017,'2019-07-19 10:36:03.040230','2019-07-19 10:36:03.040284',NULL),(62,'Souled Store','Souled Store is our Gift Partner','static/uploads/sponsors/download_1_aMwXHdf.png','022 3965 3110','https://www.thesouledstore.com/','PRS',1,2017,'2019-07-19 10:36:03.082806','2019-07-19 10:36:03.082880',NULL),(63,'Goose Burps','Goose Burps is our Cafe Partner','static/uploads/sponsors/goose-burps-telibandha-raipur-chhattisgarh-restaurants-fyksk-250.jpg','9676996769','http://gooseburps.com/','PRS',1,2017,'2019-07-19 10:36:03.161296','2019-07-19 10:36:03.161356',NULL),(64,'Samishu','Samishu is our food partner','static/uploads/sponsors/download_2.png','8827544244','https://www.justdial.com/raipur-chhattisgarh/Samishu-Jain-Thali-Services-Near-police-thana-Purani-Basti-Raipur/9999PX771-X771-170713214339-P5D5_BZDET?utm_source=adwords&utm_medium=codered&gclid=Cj0KCQ','PRS',1,2017,'2019-07-19 10:36:03.227818','2019-07-19 10:36:03.227908',NULL),(65,'Lasting Impressions','Lasting Impressions is our Photography Partner','static/uploads/sponsors/download_3.png','077140 88110','https://www.justdial.com/Raipur-chhattisgarh/Impression-Graphix-We-Do-It-Best-Opposite-Khalsa-School-Pandri/9999PX771-X771-140119185038-N2J1_BZDET','PRS',1,2017,'2019-07-19 10:36:03.272722','2019-07-19 10:36:03.272776',NULL),(66,'Vennington Court','Vennington Court is our Hospitality Partner','static/uploads/sponsors/lobby-area.jpg','9522220862','http://venningtoncourt.com/','PRS',1,2017,'2019-07-19 10:36:03.331270','2019-07-19 10:36:03.331309',NULL),(67,'ATKT.IN','ATKT.IN is our online media partner','static/uploads/sponsors/0_1.png','081091 22345','http://atkt.in/','PRS',1,2017,'2019-07-19 10:36:03.368466','2019-07-19 10:36:03.368544',NULL),(68,'AB Classes','Event Partner','static/uploads/sponsors/download_1.jpeg','098317 40080','http://www.abclasses.co.in','PRS',1,2017,'2019-07-19 10:36:03.411975','2019-07-19 10:36:03.412045',NULL),(69,'MOBILE10x','Technical Incubation Partner','static/uploads/sponsors/mobile10X.jpg','','https://www.mobile10x.in/hub/mobile10x-raipur-hub','PRS',1,2018,'2019-07-19 10:36:03.468713','2019-07-19 10:36:03.468770',NULL),(70,'HEADSTART','Ecosystem Partner','static/uploads/sponsors/headstart.png','','http://www.headstart.in/','PRS',1,2018,'2019-07-19 10:36:03.510136','2019-07-19 10:36:03.510195',NULL),(71,'Seeta Travels','Travel Partner','static/uploads/sponsors/00-05-53-seeta-tour-and-travels-logo-90x90.jpg','','https://m.indiamart.com/seeta-tour-travels/aboutus.html','PRS',1,2016,'2019-07-19 10:36:03.559416','2019-07-19 10:36:03.559487',NULL),(72,'The Trohpy House','The Trophy House is our Memento Partner','static/uploads/sponsors/the-trophy-house-sadar-bazar-raipur-chhattisgarh-trophy-dealers-_tds7Pca.jpg','081091 22345','https://www.justdial.com/Raipur-chhattisgarh/The-Trophy-House-Oppo-Amantran-Mens-Parlour-Satti-Bazar-Sadar-Bazar/9999PX771-X771-130608021706-S2W3_BZDET','PRS',1,2017,'2019-07-19 10:36:03.599731','2019-07-19 10:36:03.599805',NULL),(73,'Blooms And Grooms','Our Partner','static/uploads/sponsors/hl.jpg','9753953461','http://www.directoryworld.in/flower-shop-raipur/','PRS',1,2017,'2019-07-19 10:36:03.666377','2019-07-19 10:36:03.666446',NULL),(74,'Sam\'s Kreations','Salon Partner','static/uploads/sponsors/Untitled-design-90.png','097642 11228','https://www.justdial.com/Raipur-Chhattisgarh/Sams-Kreations-The-Unisex-Salon-And-Academy-Opposite-Shiv-Sena-Office-Behind-Pragati-College-Choubey-Colony/9999PX771-X771-150205193119-A9V1_BZDET','PRS',1,2017,'2019-07-19 10:36:03.813438','2019-07-19 10:36:03.813487',NULL),(75,'Senov Tech','Partner','static/uploads/sponsors/0_2.png','070003 87001','https://www.justdial.com/Raipur-Chhattisgarh/Senov-Tech-Devendra-Nagar/9999PX771-X771-180910174138-K6X7_BZDET','PRS',1,2017,'2019-07-19 10:36:03.852435','2019-07-19 10:36:03.852501',NULL),(76,'Your Story','Campus Publicity Partner','static/uploads/sponsors/unnamed_1.png','','https://yourstory.com','PRS',1,2017,'2019-07-19 10:36:03.899968','2019-07-19 10:36:03.900024',NULL),(77,'Appu Sweets','Food partner','static/uploads/sponsors/APPU_SWEETS.png','','https://appu-sweets.business.site/','PRS',1,2015,'2019-07-19 10:36:03.943790','2019-07-19 10:36:03.943940',NULL),(78,'Interview Street','Partner','static/uploads/sponsors/INTERVIEW_STREET.png','','https://www.hackerrank.com/interviewstreet','PRS',1,2015,'2019-07-19 10:36:03.979224','2019-07-19 10:36:03.979382',NULL),(79,'The Signage','R&D partner','static/uploads/sponsors/15-56-53-logo.jpg','9835 19 3084','http://www.thesignage.co.in/','PRS',1,2016,'2019-07-19 10:36:04.039667','2019-07-19 10:36:04.039729',NULL),(80,'Hotel Maurya','Hospitality Partner','static/uploads/sponsors/00-25-34-9k.jpg','771 4200500','https://www.themayurahotels.com/','PRS',1,2016,'2019-07-19 10:36:04.079086','2019-07-19 10:36:04.079146',NULL),(81,'Hotel Aditya','Hospitality Partner','static/uploads/sponsors/00-31-11-logo.png','771-4032941','http://hoteladityaraipur.com/','PRS',1,2016,'2019-07-19 10:36:04.125011','2019-07-19 10:36:04.125070',NULL),(82,'Celebration Group','Hospitality Partner','static/uploads/sponsors/01-18-35-2Q.jpg','9425203151','http://www.celebrationworld.in','PRS',1,2016,'2019-07-19 10:36:04.163290','2019-07-19 10:36:04.163373',NULL),(83,'Hello Intern','Internship Partner','static/uploads/sponsors/IMG_20190608_012104.jpg','40-49492040','https://www.hellointern.com/','PRS',1,2016,'2019-07-19 10:36:04.220455','2019-07-19 10:36:04.220528',NULL),(84,'Eyedea','Advertising Partner','static/uploads/sponsors/01-26-23-27913032_352022865282008_1578909573893575563_o.jpg','81203 10001','https://m.facebook.com/adevents10/','PRS',1,2016,'2019-07-19 10:36:04.307486','2019-07-19 10:36:04.307530',NULL),(85,'Moshik\'s','Food Partner','static/uploads/sponsors/00-10-29-Moshik3.png','8982712308','http://moshiks.in','PRS',1,2016,'2019-07-19 10:36:04.364907','2019-07-19 10:36:04.364963',NULL),(86,'It\'s Me Cafe','Food Partner','static/uploads/sponsors/00-13-46-13442184_1753202664923219_795024462093761144_n.png.jpg','91099 93110','https://m.facebook.com/itsmecaferaipur/','PRS',1,2016,'2019-07-19 10:36:04.404320','2019-07-19 10:36:04.404373',NULL),(87,'Your Story','Campus Publicity Partner','static/uploads/sponsors/01-36-01-images.jpg','','https://yourstory.com/','PRS',1,2016,'2019-07-19 10:36:04.448749','2019-07-19 10:36:04.448817',NULL),(88,'IBC 24','Media Partner','static/uploads/sponsors/IMG_20190608_015311.jpg','771-4008700','https://www.ibc24.in/','PRS',1,2016,'2019-07-19 10:36:04.515375','2019-07-19 10:36:04.515440',NULL),(89,'ACB India Limited','Energy Partner','static/uploads/sponsors/IMG_20190608_015005.jpg','0124-2719000','http://www.acbindia.com/','PRS',1,2016,'2019-07-19 10:36:04.597216','2019-07-19 10:36:04.597275',NULL),(90,'Benchmark Group','Digital Marketing Partner','static/uploads/sponsors/01-30-31-logo_7711aa24688fdfb2eb886de5dc83d884_3x.png','','http://benchmarksgroup.com/','PRS',1,2016,'2019-07-19 10:36:04.657908','2019-07-19 10:36:04.657963',NULL);
/*!40000 ALTER TABLE `sponsors_sponsor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `startups_startup`
--

DROP TABLE IF EXISTS `startups_startup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `startups_startup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(256) DEFAULT NULL,
  `pic` varchar(100) DEFAULT NULL,
  `contact` longtext,
  `url` varchar(200) NOT NULL,
  `founder` varchar(256) NOT NULL,
  `address` longtext,
  `flag` tinyint(1) NOT NULL,
  `details` longtext NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  `ecell_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `startups_startup_ecell_user_id_292a8049_fk_users_customuser_id` (`ecell_user_id`),
  CONSTRAINT `startups_startup_ecell_user_id_292a8049_fk_users_customuser_id` FOREIGN KEY (`ecell_user_id`) REFERENCES `users_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `startups_startup`
--

LOCK TABLES `startups_startup` WRITE;
/*!40000 ALTER TABLE `startups_startup` DISABLE KEYS */;
INSERT INTO `startups_startup` VALUES (1,'SmileBots',NULL,'static/uploads/startups/sime.png',NULL,'https://smilebots.com/','Smilebots',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About Smilebots</strong>: We help Companies and Startups solve real problems using cutting-edge Technology.</p>\r\n\r\n<p><strong>Internships are available for the following domains:</strong></p>\r\n\r\n<ol><li>Data Science</li><li>Machine Learning</li><li>Artificial Intelligence</li><li>Blockchain</li></ol>\r\n\r\n<p><strong>Skills Required:</strong> Fluency in any coding language for above mentioned domains which may incluce python, ruby, solidity,javascript, Hadoop etc. Past experience and projects will play a crucial role.</p>\r\n\r\n<p><strong>Minimum Stipend:</strong> Performance based, upto max 10k/month</p>\r\n\r\n<p><strong>Starting Month:</strong> Immediately</p>\r\n\r\n<p><strong>Email:</strong> achal@smilebots.com</p>\r\n\r\n<p><strong>Mobile No:</strong> +91 93005 08989</p>\r\n\r\n<p><strong>Address:</strong> National Corporate Park, 210B, Great Eastern Rd, Raipur, Chhattisgarh 492001</p></div>',2019,'2019-07-19 16:56:13.927769','2019-07-19 16:56:13.927912',NULL),(2,'Polllzy',NULL,'static/uploads/startups/pollzy.jpeg',NULL,'https://www.polllzy.com/','Polllzy',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About Polllzy:</strong>\r\nWe are social media startup. </p>\r\n\r\n<p><strong>About Internship:</strong>\r\n3rd and 4th year students can apply.</p>\r\n\r\n<p><strong>Skills Required:</strong>\r\nWe are looking for coders who are good in javascript and python.</p>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nNo stipend will provided.</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nDecember</p>\r\n\r\n<p><strong>Duration of internship:</strong>\r\n2 months (can be extended)</p>\r\n\r\n<p><strong>Email:</strong>\r\npolllzy.team@gmail.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n9035028077</p></div>',2019,'2019-07-19 16:56:14.074812','2019-07-19 16:56:14.074893',NULL),(3,'Innolat Technologies pvt. Ltd.',NULL,'static/uploads/startups/download_vNtmU9e.jpeg',NULL,'http://www.innolat.com/#/home','Innolat Technologies pvt. Ltd.',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About Innolat:</strong></p>\r\n\r\n<p>Innolat is one of the fastest growing EduTech Startups incubated by 36Inc, Govt. of Chhattisgarh.</p>\r\n\r\n<p>Our\r\ntechnology product iLrnn (pronounced as iLearn) is India’s first personalized learning platform to connect\r\nengineering students directly with industry experts and corporate trainer LIVE.</p>\r\n\r\n<p><strong>About Internship:</strong>\r\nInternships are available for both Technical and Non-Technical.</p>\r\n\r\n<p><strong>Skills Required:</strong>\r\nPursuing Engineering / Fresher</p>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nPerformance based.</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nAnytime</p>\r\n\r\n<p><strong>Duration of internship:</strong>\r\nVariable</p>\r\n\r\n<p><strong>Email:</strong>\r\nisha@innolat.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n+91-8861516611</p>\r\n\r\n<p><strong>Address:</strong>\r\n412, Golden Trade Centre, New Rajendra Nagar, Raipur</p></div>',2019,'2019-07-19 16:56:14.279375','2019-07-19 16:56:14.279484',NULL),(4,'Lokus News',NULL,'static/uploads/startups/lokus-2.png',NULL,'http://lokusnews.com/','Lokus News',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>Co Founder:</strong> \r\nPrakhar Lunawat</p>\r\n\r\n<p><strong>About Lokus News:</strong>\r\nWe are a news aggregation platform, focusing on regional news.</p>\r\n\r\n<p><strong>About Internship:</strong></p>\r\n\r\n<ol><li>Operations internship</li><li>Interns need to do a training for 10 days at our office at Station Road, Raipur</li><li>Later they can work from home</li></ol>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nRs. 5000/month</p>\r\n\r\n<p><strong>Duration of internship:</strong>\r\nIntenships are available for a duration of 3 months.</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nNovember</p>\r\n\r\n<p><strong>Email:</strong>\r\nPrakhar@lokusnews.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n9826123498</p></div>',2019,'2019-07-19 16:56:14.887238','2019-07-19 16:56:14.887308',NULL),(5,'eBeta',NULL,'static/uploads/startups/Screenshot_from_2019-05-26_08-25-39.png',NULL,'http://ebeta.in/','eBeta',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About eBeta:</strong>\r\nIts about leisure and health services to senior \r\ncitizens.</p>\r\n\r\n<p><strong>About Internship:</strong></p>\r\n\r\n<ol><li>Sense of Responsibility</li><li>Smart Communication Skills and Presentable. (Both Male &amp; Female)</li></ol>\r\n\r\n<p><strong>Skills Required:</strong>\r\nPatience in handling old age people</p>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nRs. 2000/month</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nNovember</p>\r\n\r\n<p><strong>Email:</strong>\r\nPrakhar@lokusnews.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n9522292122</p>\r\n\r\n<p><strong>Address:</strong>\r\neBeta House, B28, Amrapali Society, behind Colors Mall, Pachpedinaka, Raipur.</p></div>',2019,'2019-07-19 16:56:22.273246','2019-07-19 16:56:22.273306',NULL);
/*!40000 ALTER TABLE `startups_startup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_member`
--

DROP TABLE IF EXISTS `team_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `profile_url` varchar(200) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `member_type` varchar(3) NOT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1731 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_member`
--

LOCK TABLES `team_member` WRITE;
/*!40000 ALTER TABLE `team_member` DISABLE KEYS */;
INSERT INTO `team_member` VALUES (1635,'Dr. R N Patel',NULL,'static/uploads/team/Dr_RN_Patel_ZOWFX4o.jpg','FCT',2018),(1636,'Dr. Samir Bajpai',NULL,'static/uploads/team/Samir_Vajpayee_uMs2Lbb.JPG','HCD',2018),(1637,'Dr. A M Rawani',NULL,'static/uploads/team/Dr_A_M_Rawani_0B2ZpDZ.jpg','DIR',2018),(1638,'Aashish Kumar',NULL,'static/uploads/team/aashish.jpg','OCO',2018),(1639,'Rohit Agarwal',NULL,'static/uploads/team/ID_CARD_PIC_-_Rohit_Agarwal.jpg','OCO',2018),(1640,'Siddhanth Mahapatra',NULL,'static/uploads/team/siddanth_mahapatra.jpg','OCO',2018),(1641,'Prateek Verma',NULL,'static/uploads/team/Screenshot_2018-01-11-07-27-33-1114344348_-_Prateek_Verma_reeLrZh.jpg','OCO',2018),(1642,'Rashmi dewangan',NULL,'static/uploads/team/IMG_20180711_222304_190_-_Rashmi_Dewangan.jpg','HCO',2018),(1643,'Vedant Rai',NULL,'static/uploads/team/Vedant_-_Vedant_Rai.jpg','HCO',2018),(1644,'Anoop Tiwari',NULL,'static/uploads/team/IMG_1227_-_ANOOP_TIWARI.jpg','HCO',2018),(1645,'Shivangi Tiwari',NULL,'static/uploads/team/20171120202821_IMG_7741_1_20180603013333314_-_Shivangi_Tiwari.jpg','HCO',2018),(1646,'Yash Bonde',NULL,'static/uploads/team/yash_bonde.jpg','HCO',2018),(1647,'Suyash Gupta',NULL,'static/uploads/team/suyash_gupta.jpg','HCO',2018),(1648,'Iket Agrawal',NULL,'static/uploads/team/Iket_Agrawal.jpg','HCO',2018),(1649,'D Rupesh Kumar',NULL,'static/uploads/team/D_Rupesh_kumar.jpg','HCO',2018),(1650,'Prem Singh Shekhawat',NULL,'static/uploads/team/prem_singh_shekawat.jpg','HCO',2018),(1651,'Saransh Mehta',NULL,'static/uploads/team/saransh_mehta.jpg','HCO',2018),(1652,'Kavya Sharma',NULL,'static/uploads/team/kavyasharma.jpg','HCO',2018),(1653,'Dimple Sharma',NULL,'static/uploads/team/dimplesharma.jpg','HCO',2018),(1654,'Aditya Agrawal',NULL,'static/uploads/team/adityaagrawal.jpg','HCO',2018),(1655,'Ankush Agrawal',NULL,'static/uploads/team/ankush_agrawal.jpg','HCO',2018),(1656,'Himanshu Bunkar',NULL,'static/uploads/team/Himanshu_bunkar.jpg','HCO',2018),(1657,'Bharat dadhich',NULL,'','MNG',2018),(1658,'Aastha yadav',NULL,'','MNG',2018),(1659,'Ankur gupta',NULL,'','MNG',2018),(1660,'Deepesh Mitra',NULL,'','MNG',2018),(1661,'Ashly Justin',NULL,'','MNG',2018),(1662,'Devesh Sharma',NULL,'','MNG',2018),(1663,'Kuldeep Pisda',NULL,'','MNG',2018),(1664,'mohith prakash khatri',NULL,'','MNG',2018),(1665,'Rajshree Gavel',NULL,'','MNG',2018),(1666,'Samveg Thaker',NULL,'','MNG',2018),(1667,'Shreyansh Sahare',NULL,'','MNG',2018),(1668,'Siddharth Chandra',NULL,'','MNG',2018),(1669,'Vrihas Pathak',NULL,'','MNG',2018),(1670,'Aayush Shrivastav',NULL,'','MNG',2018),(1671,'Akshat Verma',NULL,'','MNG',2018),(1672,'Gaurav Patel',NULL,'','MNG',2018),(1673,'Mohit Sarin',NULL,'','MNG',2018),(1674,'Samiksha chhattani',NULL,'','MNG',2018),(1675,'Aditya Vikram Dev',NULL,'','MNG',2018),(1676,'chaitanya ashish mishra',NULL,'','MNG',2018),(1677,'Pavan Gupta',NULL,'','MNG',2018),(1678,'Prashant Kumar',NULL,'','MNG',2018),(1679,'Prayansh Ratan Srivastava',NULL,'','MNG',2018),(1680,'Snehal Buldeo',NULL,'','MNG',2018),(1681,'Surbhi Rai',NULL,'','MNG',2018),(1682,'Yash Krishan',NULL,'','MNG',2018),(1683,'Yashwi Shah',NULL,'','MNG',2018),(1684,'Ria',NULL,'','EXC',2018),(1685,'Aashutosh Bansal',NULL,'','EXC',2018),(1686,'Vaishnavi Sharma',NULL,'','EXC',2018),(1687,'Shreya',NULL,'','EXC',2018),(1688,'Shubham Jain',NULL,'','EXC',2018),(1689,'Yashasvi Verma',NULL,'','EXC',2018),(1690,'Aasish vuyyapu',NULL,'','EXC',2018),(1691,'Kartikeya Sharma',NULL,'','EXC',2018),(1692,'Sumit Chatterjee',NULL,'','EXC',2018),(1693,'Aditya Kumar Sahu',NULL,'','EXC',2018),(1694,'Manas Gupta',NULL,'','EXC',2018),(1695,'Raunaq Purohit',NULL,'','EXC',2018),(1696,'Aditya Singh',NULL,'','EXC',2018),(1697,'Bhushan Thakre',NULL,'','EXC',2018),(1698,'Dipanshu Daga',NULL,'','EXC',2018),(1699,'Kuldeep Narayan Minj',NULL,'','EXC',2018),(1700,'Milind Verma',NULL,'','EXC',2018),(1701,'Naveen Sundar',NULL,'','EXC',2018),(1702,'Nishu Chandravanshi',NULL,'','EXC',2018),(1703,'Pratibha Shrivastav',NULL,'','EXC',2018),(1704,'Rushikesh Pupale',NULL,'','EXC',2018),(1705,'Sumit Badsara',NULL,'','EXC',2018),(1706,'Jagannath Swain',NULL,'','EXC',2018),(1707,'Rashmi Poya',NULL,'','EXC',2018),(1708,'Rishabh Vishwakarma',NULL,'','EXC',2018),(1709,'Soumya Banga',NULL,'','EXC',2018),(1710,'Yash Bhojak',NULL,'','EXC',2018),(1711,'Anjaney Jaiswal',NULL,'','EXC',2018),(1712,'Anshul S',NULL,'','EXC',2018),(1713,'Debanshu Mukherjee',NULL,'','EXC',2018),(1714,'Muskan Budhia',NULL,'','EXC',2018),(1715,'Saksham Agarwal',NULL,'','EXC',2018),(1716,'Taniya Bisen',NULL,'','EXC',2018),(1717,'Vishist Pandey',NULL,'','EXC',2018),(1718,'Aayush Jain',NULL,'','EXC',2018),(1719,'Aman Sethi',NULL,'','EXC',2018),(1720,'Avishi Bansal',NULL,'','EXC',2018),(1721,'Drishti Kalwani',NULL,'','EXC',2018),(1722,'Nitesh Kumar',NULL,'','EXC',2018),(1723,'Roma Vardiyani',NULL,'','EXC',2018),(1724,'Shushriya Swarnkar',NULL,'','EXC',2018),(1725,'Suyash Agrawal',NULL,'','EXC',2018),(1726,'Prabhjot Kaur',NULL,'','EXC',2018),(1727,'Pratik Tolambiya',NULL,'','EXC',2018),(1728,'Aman Gupta',NULL,'','EXC',2018),(1729,'Gaurav Singh',NULL,'','EXC',2018),(1730,'Soumya Jaiswal',NULL,'','EXC',2018);
/*!40000 ALTER TABLE `team_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_campusambassadorprofile`
--

DROP TABLE IF EXISTS `users_campusambassadorprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_campusambassadorprofile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `college` varchar(128) NOT NULL,
  `fb_score` int(10) unsigned NOT NULL,
  `tw_score` int(10) unsigned NOT NULL,
  `li_score` int(10) unsigned NOT NULL,
  `wp_score` int(10) unsigned NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `users_campusambassad_user_id_5576f3be_fk_users_cus` FOREIGN KEY (`user_id`) REFERENCES `users_customuser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_campusambassadorprofile`
--

LOCK TABLES `users_campusambassadorprofile` WRITE;
/*!40000 ALTER TABLE `users_campusambassadorprofile` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_campusambassadorprofile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_customuser`
--

DROP TABLE IF EXISTS `users_customuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_customuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `username` varchar(64) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(64) NOT NULL,
  `otp` varchar(4) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `bquiz_score` int(11) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `user_type` varchar(3) NOT NULL,
  `linkedin` varchar(64) DEFAULT NULL,
  `facebook` varchar(64) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  `applied` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_customuser`
--

LOCK TABLES `users_customuser` WRITE;
/*!40000 ALTER TABLE `users_customuser` DISABLE KEYS */;
INSERT INTO `users_customuser` VALUES (1,'pbkdf2_sha256$150000$JJr8Bwcta6BK$kLF8j/+W0iQftPwv74k/mojNLQukzZVK7SJ4c9nssVA=','2019-07-19 10:45:05.798864',1,1,1,'2019-07-19 09:53:55.372338','admin@gmail.com','','','admin@gmail.com',NULL,0,'',0,'','GST',NULL,NULL,'2019-07-19 09:53:55.499027','2019-07-19 09:53:55.499054',0),(2,'pbkdf2_sha256$150000$lTdBXet2DzlW$xUbx9iheyAcvDxb8cCSF4xp66ZnMlgI8rGYJInj9EQ8=',NULL,0,0,1,'2019-07-20 05:44:18.965681','naveen@gmail.com','naveen','sundar','naveen@gmail.com','4204',1,'8940073123',0,'','GST',NULL,NULL,'2019-07-20 16:50:55.430128','2019-07-20 05:44:18.966075',1),(3,'pbkdf2_sha256$150000$3H023s7r9TiG$4PkPjigF7ORrqNGyt7nd+DyxHTuqZozz1g0jlnDmjCg=',NULL,0,0,1,'2019-07-20 05:50:16.925014','naveenw@gmail.com','naveen','sundar','naveenw@gmail.com','8033',0,'8940073123',0,'','GST',NULL,NULL,'2019-07-20 05:50:16.925416','2019-07-20 05:50:16.925437',0),(4,'pbkdf2_sha256$150000$BMPDMbi94qPx$UMZSB7jLyZMt3F1FiEtqtU4F9tUonQKaBUTAKC89GiQ=',NULL,0,0,1,'2019-07-20 06:03:35.766363','naveen2@gmail.com','Naveensundar','saf','naveen2@gmail.com','1605',0,'8940073123',0,'','GST',NULL,NULL,'2019-07-20 06:03:35.767014','2019-07-20 06:03:35.767050',0),(5,'pbkdf2_sha256$150000$uPMWuX3xyOKC$jiSkWLU3OQfbrB67F9dfG8phQrf4Dc2pI3Pb50MYaMk=',NULL,0,0,1,'2019-07-20 06:04:28.233562','naveen3@gmail.com','naveen','sadf','naveen3@gmail.com','7074',0,'8940073123',0,'','GST',NULL,NULL,'2019-07-20 06:04:28.233923','2019-07-20 06:04:28.233945',0),(6,'pbkdf2_sha256$150000$6ctDL9l7l54H$8FfNAxZbHYzPvgMSudbSS0DKJCOrjBRoJ7IKXFwCoUk=',NULL,0,0,1,'2019-07-20 06:05:13.918727','naveen4@gmail.com','Naveensundar','asdf','naveen4@gmail.com','6749',0,'8940073123',0,'','GST',NULL,NULL,'2019-07-20 06:05:13.919308','2019-07-20 06:05:13.919343',0),(7,'pbkdf2_sha256$150000$WeMyf0b8U6pC$nSzidvFi1m88aSTySpYc0DMPz7Dzd3JdiH92wF3Y684=',NULL,0,0,1,'2019-07-20 06:06:03.211778','naveen5@gmail.com','asdfa','sdaf','naveen5@gmail.com','4714',0,'8940073123',0,'','GST',NULL,NULL,'2019-07-20 06:06:03.212247','2019-07-20 06:06:03.212284',0),(8,'pbkdf2_sha256$150000$jLR40k1KMlVe$DYi2kM4kSdTu6sdIqIoFbGiDz8voigW5PH37Qr6I3Ds=',NULL,0,0,1,'2019-07-20 06:12:04.480615','naveen6@gmail.com','naveen','sundar','naveen6@gmail.com','4115',0,'8940073123',0,'','GST',NULL,NULL,'2019-07-20 06:12:04.481123','2019-07-20 06:12:04.481154',0),(9,'pbkdf2_sha256$150000$Ac50HnYTSXPf$AGTUFJLv8q8SJOWClEuS7FZOPVHcwYZ8FdLF6+3lRyY=',NULL,0,0,1,'2019-07-20 08:05:59.022087','abc@gmail.com','bana','jiisd','abc@gmail.com','1008',0,'8940073123',0,'','GST',NULL,NULL,'2019-07-20 18:03:36.118257','2019-07-20 08:05:59.023130',1),(10,'pbkdf2_sha256$150000$AZwX0TaOrVgN$npoOYvxfbidhYVqOMmis6xveK+5Yi4FyZA2/xey5drA=',NULL,0,0,1,'2019-07-20 15:52:58.563085','one@gmail.com','one','two','one@gmail.com','9702',1,'8940073123',0,'','GST',NULL,NULL,'2019-07-21 05:58:35.518760','2019-07-20 15:52:58.563482',1),(11,'pbkdf2_sha256$150000$wiN6sj7WuBul$YFpzPV+4SpRFRYcxDHj2BRcCzm3T1HH0NfzUFvvIqmY=',NULL,0,0,1,'2019-07-21 04:44:22.694419','god@gmail.com','adf','sdfaf','god@gmail.com','5154',1,'8940073123',0,'','GST',NULL,NULL,'2019-07-21 04:45:11.413166','2019-07-21 04:44:22.695105',1),(12,'pbkdf2_sha256$150000$o2rvaOW2UC7J$AuzHrcxEMqTaMh5rAxA1oSxPtBlDr4Dgis8dmcMYGvU=',NULL,0,0,1,'2019-07-21 05:45:32.584380','test@gmail.com','test','user','test@gmail.com','1034',1,'8940073123',0,'','GST',NULL,NULL,'2019-07-21 05:50:38.026423','2019-07-21 05:45:32.585182',1),(13,'pbkdf2_sha256$150000$RzkPAXQHciJu$lt3GB5Eq9PY0XAZoEE/TpRiA6on19aTtq4I2gHYBMBs=',NULL,0,0,1,'2019-07-21 05:46:48.455606','test2@gmail.com','test','user','test2@gmail.com','9186',1,'8940073123',0,'','GST',NULL,NULL,'2019-07-21 05:49:04.565767','2019-07-21 05:46:48.456110',1),(15,'pbkdf2_sha256$150000$XSnGpfTiGbXT$hd124rI5XfimrvyoDKbu/r72sioYXQCglFofA1mAN6Y=',NULL,0,0,1,'2019-07-21 05:51:22.706245','test3@gmail.com','test','user','test3@gmail.com','8527',1,'8940073123',0,'','GST',NULL,NULL,'2019-07-21 05:56:06.657638','2019-07-21 05:51:22.707150',1),(16,'pbkdf2_sha256$150000$WkwI5hZpuG45$bFgmwT9CiLNmX1gzegji7TzQ78V0mObenp7K3nonSlE=',NULL,0,0,1,'2019-07-21 05:53:16.612771','test4@gmail.com','test','user','test4@gmail.com','9373',1,'8940073123',0,'','GST',NULL,NULL,'2019-07-21 05:54:06.474231','2019-07-21 05:53:16.613289',1);
/*!40000 ALTER TABLE `users_customuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_customuser_groups`
--

DROP TABLE IF EXISTS `users_customuser_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_customuser_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customuser_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_customuser_groups_customuser_id_group_id_76b619e3_uniq` (`customuser_id`,`group_id`),
  KEY `users_customuser_groups_group_id_01390b14_fk_auth_group_id` (`group_id`),
  CONSTRAINT `users_customuser_gro_customuser_id_958147bf_fk_users_cus` FOREIGN KEY (`customuser_id`) REFERENCES `users_customuser` (`id`),
  CONSTRAINT `users_customuser_groups_group_id_01390b14_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_customuser_groups`
--

LOCK TABLES `users_customuser_groups` WRITE;
/*!40000 ALTER TABLE `users_customuser_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_customuser_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_customuser_user_permissions`
--

DROP TABLE IF EXISTS `users_customuser_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_customuser_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customuser_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_customuser_user_pe_customuser_id_permission_7a7debf6_uniq` (`customuser_id`,`permission_id`),
  KEY `users_customuser_use_permission_id_baaa2f74_fk_auth_perm` (`permission_id`),
  CONSTRAINT `users_customuser_use_customuser_id_5771478b_fk_users_cus` FOREIGN KEY (`customuser_id`) REFERENCES `users_customuser` (`id`),
  CONSTRAINT `users_customuser_use_permission_id_baaa2f74_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_customuser_user_permissions`
--

LOCK TABLES `users_customuser_user_permissions` WRITE;
/*!40000 ALTER TABLE `users_customuser_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_customuser_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-21 11:32:36
