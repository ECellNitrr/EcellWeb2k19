-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: edb
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

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
-- Table structure for table `android_app_app`
--

DROP TABLE IF EXISTS `android_app_app`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `android_app_app` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `log` varchar(256) NOT NULL,
  `link` varchar(200) NOT NULL,
  `version` int(11) NOT NULL,
  `flag` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `android_app_app`
--

LOCK TABLES `android_app_app` WRITE;
/*!40000 ALTER TABLE `android_app_app` DISABLE KEYS */;
/*!40000 ALTER TABLE `android_app_app` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add ECellUser',6,'add_customuser'),(22,'Can change ECellUser',6,'change_customuser'),(23,'Can delete ECellUser',6,'delete_customuser'),(24,'Can view ECellUser',6,'view_customuser'),(25,'Can add campus ambassador profile',7,'add_campusambassadorprofile'),(26,'Can change campus ambassador profile',7,'change_campusambassadorprofile'),(27,'Can delete campus ambassador profile',7,'delete_campusambassadorprofile'),(28,'Can view campus ambassador profile',7,'view_campusambassadorprofile'),(29,'Can add event',8,'add_event'),(30,'Can change event',8,'change_event'),(31,'Can delete event',8,'delete_event'),(32,'Can view event',8,'view_event'),(33,'Can add event register',9,'add_eventregister'),(34,'Can change event register',9,'change_eventregister'),(35,'Can delete event register',9,'delete_eventregister'),(36,'Can view event register',9,'view_eventregister'),(37,'Can add sponsor',10,'add_sponsor'),(38,'Can change sponsor',10,'change_sponsor'),(39,'Can delete sponsor',10,'delete_sponsor'),(40,'Can view sponsor',10,'view_sponsor'),(41,'Can add mentor',11,'add_mentor'),(42,'Can change mentor',11,'change_mentor'),(43,'Can delete mentor',11,'delete_mentor'),(44,'Can view mentor',11,'view_mentor'),(45,'Can add startup',12,'add_startup'),(46,'Can change startup',12,'change_startup'),(47,'Can delete startup',12,'delete_startup'),(48,'Can view startup',12,'view_startup'),(49,'Can add member',13,'add_member'),(50,'Can change member',13,'change_member'),(51,'Can delete member',13,'delete_member'),(52,'Can view member',13,'view_member'),(53,'Can add speaker',14,'add_speaker'),(54,'Can change speaker',14,'change_speaker'),(55,'Can delete speaker',14,'delete_speaker'),(56,'Can view speaker',14,'view_speaker'),(57,'Can add app',15,'add_app'),(58,'Can change app',15,'change_app'),(59,'Can delete app',15,'delete_app'),(60,'Can view app',15,'view_app'),(61,'Can add c a_ requests',16,'add_ca_requests'),(62,'Can change c a_ requests',16,'change_ca_requests'),(63,'Can delete c a_ requests',16,'delete_ca_requests'),(64,'Can view c a_ requests',16,'view_ca_requests');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ca_portal_ca_requests`
--

DROP TABLE IF EXISTS `ca_portal_ca_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ca_portal_ca_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `screenshot` varchar(100) NOT NULL,
  `social_platform` varchar(2) NOT NULL,
  `status_flag` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ca_portal_ca_requests_user_id_54b4058b_fk_users_customuser_id` (`user_id`),
  CONSTRAINT `ca_portal_ca_requests_user_id_54b4058b_fk_users_customuser_id` FOREIGN KEY (`user_id`) REFERENCES `users_customuser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_portal_ca_requests`
--

LOCK TABLES `ca_portal_ca_requests` WRITE;
/*!40000 ALTER TABLE `ca_portal_ca_requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `ca_portal_ca_requests` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2019-07-26 12:52:59.856083','15','Saavn',3,'',10,1),(2,'2019-07-26 12:53:00.248113','14','Resonance',3,'',10,1),(3,'2019-07-26 12:53:00.501748','13','The Music Cafe',3,'',10,1),(4,'2019-07-26 12:53:01.161642','12','Infibeam.com',3,'',10,1),(5,'2019-07-26 12:53:01.344506','11','Veg Centre',3,'',10,1),(6,'2019-07-26 12:53:01.520867','10','OYO Rooms',3,'',10,1),(7,'2019-07-26 12:53:01.636827','9','94.3 My FM',3,'',10,1),(8,'2019-07-26 12:53:01.763865','8','36Inc',3,'',10,1),(9,'2019-07-26 12:53:01.879990','7','Think Raipur',3,'',10,1),(10,'2019-07-26 12:53:02.006856','6','Chhattisgarh Tourism',3,'',10,1),(11,'2019-07-26 12:53:02.133688','5','Bank Of Maharashtra',3,'',10,1),(12,'2019-07-26 12:53:02.260955','4','Department of Women & Child Development',3,'',10,1),(13,'2019-07-26 12:53:02.388010','3','Department of Women & Child Development',3,'',10,1),(14,'2019-07-26 12:53:02.514961','2','36Inc',3,'',10,1),(15,'2019-07-26 12:53:02.642123','1','Department of Women & Child Development',3,'',10,1),(16,'2019-07-26 12:58:32.299043','32','The College Fever',3,'',10,1),(17,'2019-07-26 12:58:32.524241','31','Meenakshi\'s Salon and Academy',3,'',10,1),(18,'2019-07-26 12:58:32.651225','30','Saavn',3,'',10,1),(19,'2019-07-26 12:58:32.778020','29','Resonance',3,'',10,1),(20,'2019-07-26 12:58:33.181619','28','The Music Cafe',3,'',10,1),(21,'2019-07-26 12:58:33.308975','27','Infibeam.com',3,'',10,1),(22,'2019-07-26 12:58:33.446839','26','Veg Centre',3,'',10,1),(23,'2019-07-26 12:58:33.573682','25','OYO Rooms',3,'',10,1),(24,'2019-07-26 12:58:33.700949','24','94.3 My FM',3,'',10,1),(25,'2019-07-26 12:58:33.827906','23','36Inc',3,'',10,1),(26,'2019-07-26 12:58:33.955026','22','Think Raipur',3,'',10,1),(27,'2019-07-26 12:58:34.093193','21','Chhattisgarh Tourism',3,'',10,1),(28,'2019-07-26 12:58:34.220239','20','Bank Of Maharashtra',3,'',10,1),(29,'2019-07-26 12:58:34.347283','19','Department of Women & Child Development',3,'',10,1),(30,'2019-07-26 12:58:34.474181','18','Department of Women & Child Development',3,'',10,1),(31,'2019-07-26 12:58:34.601155','17','36Inc',3,'',10,1),(32,'2019-07-26 12:58:34.806958','16','Department of Women & Child Development',3,'',10,1),(33,'2019-07-26 13:37:49.252967','11','INNOVATION EXPO',3,'',8,1),(34,'2019-07-26 13:37:49.484029','10','B Model',3,'',8,1),(35,'2019-07-26 13:37:49.611257','9','B-Case Study',3,'',8,1),(36,'2019-07-26 13:37:49.738260','8','E-Gathering',3,'',8,1),(37,'2019-07-26 13:37:49.865462','7','ENTROPY',3,'',8,1),(38,'2019-07-26 13:37:49.992223','6','UTKRISHTH',3,'',8,1),(39,'2019-07-26 13:37:50.362586','5','WALLSTREET',3,'',8,1),(40,'2019-07-26 13:37:50.489481','4','B-QUIZ',3,'',8,1),(41,'2019-07-26 13:37:50.616629','3','CRICNOMETRICA',3,'',8,1),(42,'2019-07-26 13:37:50.743716','2','START-UP CAMP',3,'',8,1),(43,'2019-07-26 13:37:50.870761','1','IGNITION',3,'',8,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(15,'android_app','app'),(3,'auth','group'),(2,'auth','permission'),(16,'ca_portal','ca_requests'),(4,'contenttypes','contenttype'),(8,'events','event'),(9,'events','eventregister'),(11,'mentors','mentor'),(5,'sessions','session'),(14,'speakers','speaker'),(10,'sponsors','sponsor'),(12,'startups','startup'),(13,'team','member'),(7,'users','campusambassadorprofile'),(6,'users','customuser');
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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-07-26 11:20:50.258556'),(2,'contenttypes','0002_remove_content_type_name','2019-07-26 11:20:54.438032'),(3,'auth','0001_initial','2019-07-26 11:20:58.210464'),(4,'auth','0002_alter_permission_name_max_length','2019-07-26 11:21:08.032443'),(5,'auth','0003_alter_user_email_max_length','2019-07-26 11:21:08.163984'),(6,'auth','0004_alter_user_username_opts','2019-07-26 11:21:08.419780'),(7,'auth','0005_alter_user_last_login_null','2019-07-26 11:21:08.673101'),(8,'auth','0006_require_contenttypes_0002','2019-07-26 11:21:08.805788'),(9,'auth','0007_alter_validators_add_error_messages','2019-07-26 11:21:08.986871'),(10,'auth','0008_alter_user_username_max_length','2019-07-26 11:21:09.216845'),(11,'auth','0009_alter_user_last_name_max_length','2019-07-26 11:21:09.397232'),(12,'auth','0010_alter_group_name_max_length','2019-07-26 11:21:09.715233'),(13,'auth','0011_update_proxy_permissions','2019-07-26 11:21:09.848847'),(14,'users','0001_initial','2019-07-26 11:21:13.423445'),(15,'admin','0001_initial','2019-07-26 11:21:27.103696'),(16,'admin','0002_logentry_remove_auto_add','2019-07-26 11:21:31.475737'),(17,'admin','0003_logentry_add_action_flag_choices','2019-07-26 11:21:31.613222'),(18,'android_app','0001_initial','2019-07-26 11:21:32.745917'),(19,'ca_portal','0001_initial','2019-07-26 11:21:33.539736'),(20,'ca_portal','0002_ca_requests_user','2019-07-26 11:21:35.006521'),(21,'events','0001_initial','2019-07-26 11:21:39.174045'),(22,'events','0002_auto_20190726_1100','2019-07-26 11:21:44.591444'),(23,'mentors','0001_initial','2019-07-26 11:21:49.937285'),(24,'mentors','0002_mentor_ecell_user','2019-07-26 11:21:51.674596'),(25,'sessions','0001_initial','2019-07-26 11:21:55.002271'),(26,'speakers','0001_initial','2019-07-26 11:21:56.585328'),(27,'sponsors','0001_initial','2019-07-26 11:21:57.390262'),(28,'sponsors','0002_sponsor_ecell_user','2019-07-26 11:21:58.919702'),(29,'startups','0001_initial','2019-07-26 11:22:01.951087'),(30,'startups','0002_startup_ecell_user','2019-07-26 11:22:03.617640'),(31,'team','0001_initial','2019-07-26 11:22:06.617473'),(32,'team','0002_member_year','2019-07-26 13:23:47.969599');
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
INSERT INTO `django_session` VALUES ('9zknlt78gkdw47ei5k6ek3cjjvxx2e44','ZjlmYTFmMzk2MDgwZDE0ZGQwYzgwODAwNjc2MTU4MjBmNjdkMzY5MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI2MTI3OTIwY2NjMDcxMmZlODdmZDU2M2VkMWFkOGMzODdkNzVlZDBjIn0=','2019-08-09 12:14:52.051499');
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
  `date` date DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_event`
--

LOCK TABLES `events_event` WRITE;
/*!40000 ALTER TABLE `events_event` DISABLE KEYS */;
INSERT INTO `events_event` VALUES (12,'IGNITION','E-hall','2018-08-01','10:00 am','\"Ignition\" is a business model competition that will connect ideas of entrepreneurs with investors. This will help the startups to gain traction and also provide an opportunity to be funded by some of the top investors in india. A business model competition aims to connect the new start-ups with investors by creating a direct channel between them.','static/uploads/events/cover/ig111.png','static/uploads/events/icon/ig111.png',NULL,1,2019,'2019-07-26 13:38:06.046435','2019-07-26 13:38:06.046499',NULL),(13,'START-UP CAMP','To be decided...','2018-09-09','TBD','In a startup nothing happens unless you make it happen. Startup camp promotes entrepreneurship among students and also provides a start-up initiative activity amongst the growing startups in and around Chhattisgarh. Several high scale and low scale startups in and around Chhattisgarh are invited and provided with an opportunity to publicize their products/services and grab some interns for their companies. The investors attend the pitches of the startups and on recognizing a potential startup, provide seed funding to those startups.','static/uploads/events/cover/sc111.png','static/uploads/events/icon/sc111.png',NULL,1,2019,'2019-07-26 13:38:14.032085','2019-07-26 13:38:14.032140',NULL),(14,'CRICNOMETRICA','To be decided...','2018-09-08','TBD','Cricnometrica is an event designed to provide a stage for entertainment as well as a platform to showcase the individuals or teams knowledge of the game of cricket. A team game comprising of three rounds which range from pen paper to slide-shows and leads finally to virtual bidding to create a team of their own. The team with the maximum points at the end of the third round is declared as the winner.','static/uploads/events/cover/cr111_wKu2qYt.png','static/uploads/events/icon/cr111_wKu2qYt.png',NULL,1,2019,'2019-07-26 13:38:21.254730','2019-07-26 13:38:21.254784',NULL),(15,'B-QUIZ','To be decided...','2018-09-08','TBD','Get your cortex fixed cause this quiz spins your head around. Let\'s explore some of the de facto of business quizzing. Guide your cerebrum\'s way to this b-quiz that will catapult you into the world of business facts and figures.','static/uploads/events/cover/bq111.png','static/uploads/events/icon/bq111.png',NULL,1,2019,'2019-07-26 13:38:28.778598','2019-07-26 13:38:28.778651',NULL),(16,'WALLSTREET','To be decided...','2018-09-08','TBD','A virtual share market contest for the brokers out there. Invest money and take home big. The winner keeps it all. Challenge your mind’s trafficking power and run away with the best bet in this virtual stock broking exchange.','static/uploads/events/cover/wallstreet_FwBl6yR111.png','static/uploads/events/icon/wallstreet_FwBl6yR111.png',NULL,1,2019,'2019-07-26 13:38:38.916571','2019-07-26 13:38:38.916624',NULL),(17,'UTKRISHTH','To be decided...','2018-09-08','TBD','This event acknowledges the grass root works and aims at promoting low scale entrepreneurs from villages for the progress of nation. The event aims at felicitating the potential rural startup ideas to promote the entrepreneurial spirit at the grass root levels.','static/uploads/events/cover/uk111.png','static/uploads/events/icon/uk111.png',NULL,1,2019,'2019-07-26 13:38:48.703142','2019-07-26 13:38:48.703196',NULL),(18,'ENTROPY','To be decided...','2018-09-08','TBD','Giving wings to ideas and ground to the unknown, this session is to guide, inspire and bring out the best from the budding comrades. Words, if they hit the adrenaline rush can make you do wonders. This speaker session can make you look beyond the ordinary in order to be above the ordinary.','static/uploads/events/cover/en111.png','static/uploads/events/icon/en111.png',NULL,1,2019,'2019-07-26 13:38:55.298656','2019-07-26 13:38:55.298710',NULL),(19,'E-Gathering','To be decided...','2018-09-08','TBD','Like to end the E summit 18 on a high, the closing ceremony called the E-Gathering will feature a musical performance and a stand-up performance which will be revealed soon.','static/uploads/events/cover/eg111.png','static/uploads/events/icon/eg111.png',NULL,1,2019,'2019-07-26 13:39:02.570581','2019-07-26 13:39:02.570635',NULL),(20,'B-Case Study','To be decided...','2018-09-08','TBD','B-Case Study (Business Case Study ) is an event designed to act as a solution provider for the erupting real life scenarios in the business domain. A team event comprising of three rounds with range from pen paper to a final report submission. The reports being presented before the judges and the team with maximum awarded points is declared as the winner.','static/uploads/events/cover/bc111.png','static/uploads/events/icon/bc111.png',NULL,1,2019,'2019-07-26 13:39:09.840846','2019-07-26 13:39:09.840901',NULL),(21,'B Model','E-Hall','2019-06-29','TBD','An awesome opportunity to showcase your business model.','static/uploads/events/cover/Frame_1.png','static/uploads/events/icon/Frame_1.png',NULL,1,2019,'2019-07-26 13:39:14.451160','2019-07-26 13:39:14.451212',NULL),(22,'INNOVATION EXPO','TPO Terrace','2019-06-29','TBD','A stepping stone for your future startup ideas.','static/uploads/events/cover/Frame.png','static/uploads/events/icon/Frame.png',NULL,1,2019,'2019-07-26 13:39:19.490019','2019-07-26 13:39:19.490071',NULL);
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
INSERT INTO `mentors_mentor` VALUES (1,'SHRAVAN PUNNA','','placeholder@gmail.com','Consultant at Deloitte','Competent Communicator for displaying excellence in public speaking and a competent leader','static/uploads/mentors/IMG_20190525_162104.jpg',1,2018,'2019-07-26 13:44:25.544443','2019-07-26 13:44:25.544515',NULL),(2,'VAIBHAV SURYA','','placeholder@gmail.com','Digital Marketing Manager at Oppo','Digital sumo is a leading digital marketing agency in MP & CG .They are advance digital advertising company which provides digital & social media marketing training and services to their clients so they will perform extraordinary in their business. They are innovative digital marketing service provider mainly focus on small –medium business enterprises ,marketing professionals & marketing students.\r\nThey are top 3 SEO,SEM & PPC advertsing agency in indore mainly works with various startups in  Healthcare ,Education,E-commerce ,Fashion & many more.','static/uploads/mentors/IMG_20190525_162119.jpg',1,2018,'2019-07-26 13:44:31.348031','2019-07-26 13:44:31.348061',NULL),(3,'Tushar Vadera','0','tushar@innolat.com','CEO - Innolat','CEO - Innolat','static/uploads/mentors/IMG_20190525_161131.jpg',1,2017,'2019-07-26 13:44:35.959696','2019-07-26 13:44:35.959760',NULL),(4,'Vineet Budki','0','ineet.budki@guiddoo.com','Founder & CEO - Guiddoo World','Founder & CEO - Guiddoo World','static/uploads/mentors/IMG_20190525_161951.jpg',1,2017,'2019-07-26 13:44:41.264986','2019-07-26 13:44:41.265047',NULL),(5,'Dr. Shameem S','9876543210','hello@ecell.nitrr.ac.in','Technical University of Munich (Germany)','Great Lakes Institute of Management','static/uploads/mentors/IMG_20190525_162044.jpg',1,2017,'2019-07-26 13:44:45.936236','2019-07-26 13:44:45.936295',NULL),(6,'Ankit Tibrewal','','placeholder@gmail.com','Bharti Airtel Ltd','Financial exec with broad experience in all aspects of accounting, auditing and financial management. Rich experience with real estate, financial consulting. Interested in early-stage startups as well as companies\r\n\r\nSpecialties: Finance & Accounting, Purchasing, Investment, Government Liasion.','static/uploads/mentors/IMG_20190525_134021_1558814989205.jpg',1,2018,'2019-07-26 13:44:50.755345','2019-07-26 13:44:50.755406',NULL);
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
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `speakers_speaker`
--

LOCK TABLES `speakers_speaker` WRITE;
/*!40000 ALTER TABLE `speakers_speaker` DISABLE KEYS */;
INSERT INTO `speakers_speaker` VALUES (1,'Daniel Ramamoorthy','Startup Coach',NULL,'static/uploads/speakers/Daniel Ramamoorthy.jpg','eight@nitrr.ac.in','','An eclectic person who is a box of wonder, excelling the entrepreneurial domain: from being an entrepreneur and a motivational speaker, coaching others to being a world famous host and speaker!',2018,'https://www.linkedin.com/in/iamdanram/',1,'2019-07-26 12:33:41.945407','2019-07-26 13:13:41.690866'),(2,'Kumar Gaurav','Founder Cashaa',NULL,'static/uploads/speakers/Kumar Gaurav.jpg','nine@nitrr.ac.in','','Honored with an extraordinary status by the US government, holding a place in 100 influential people in the world of blockchain, Mr Kumar Gaurav, Founder of Cashaa has set the bar high and stood out of the crowd.',2018,'https://www.linkedin.com/in/kgauravitc',1,'2019-07-26 12:33:46.417348','2019-07-26 13:13:41.908903'),(3,'Nandini Vaidyanathan','CARMa CONNECT',NULL,'static/uploads/speakers/Nandini Vaidyanathan.jpg','ten@nitrr.ac.in','','An academician turned entrepreneurial mentor, founder of CARMa CONNECT, this visionary lady has created an eco-system to nourish the spirit of entrepreneurship.',2018,'https://www.linkedin.com/in/nandinivaidyanathan',1,'2019-07-26 12:33:49.340917','2019-07-26 13:13:42.036401'),(4,'Dr Gopichand Katragadda','Chief Technology Officer at Tata Sons',NULL,'static/uploads/speakers/Dr Gopichand Katragadda.jpg','eleven@nitrr.ac.in','','Dr Gopichand Katragadda is the group chief technology officer at Tata Sons. In this role, Dr Katragadda drives technology and innovation for the Tata group leveraging cross-company synergies. He also serves as a director on the boards of select Tata companies.',2018,'https://in.linkedin.com/in/gopichand-katragadda-2b1a0b7',1,'2019-07-26 12:33:51.485742','2019-07-26 13:13:42.175042'),(5,'Rishabh Dev','Managing Director at Mapplinks and Mapplinks Academy',NULL,'static/uploads/speakers/Rishabh Dev.jpg','four@nitrr.ac.in','','ES17 had Mr. Rishabh Dev – The Growth Hacking Bogeyman, a serial entrepreneur, presently the director of Mapplinks, India, who regularly enlightens enthusiasts with growth hacking and digital marketing. Not only growth hacking, but also many diverse fields intrigued him. His approach towards finding the optimal solutions for his clients is commendable.',2018,'https://www.linkedin.com/in/rishabhdev/',1,'2019-07-26 12:33:55.502522','2019-07-26 13:13:42.302484'),(6,'Abi Aryan','The London School of Economics and Political Science (LSE)',NULL,'static/uploads/speakers/Abi Aryan.jpg','three@nitrr.ac.in','','Ms. Abi, a perfect instance of beauty with brains, graduated from London School of Economics and Political Science and has a deep interest in AI and Blockchain. She has worked as a strategist with AI companies globally and is the founder of Delegano and Director at Women Who Code, Delhi. Having a great experience as TED speaker, Abi also worked on Augmented Reality and Bit coin / Block chain companies in U.K.',2018,'https://www.linkedin.com/in/abi-aryan-168131112/',1,'2019-07-26 12:33:59.629016','2019-07-26 13:13:42.430091'),(7,'Rahul Tyagi','Vice President - Training at Lucideus',NULL,'static/uploads/speakers/Rahul Tyagi.jpg','five@nitrr.ac.in','','Rahul being a perfect combination of intelligence and dedication, at present is the co- founder of Lucideus. Handling the toughest of the cyberspace issues with a magical ease is what makes Rahul stand out from the rest and also he speaks regularly at prestigious platforms like Exhibition India group, IPPAI, DCD convergence, Security Watch India, Micro Finance in Asia.  Recently, he has been honored with Fortune India\'s 40 under40 2018.',2018,'https://www.linkedin.com/in/iamrahultyagi/',1,'2019-07-26 12:34:01.717905','2019-07-26 13:13:42.557478'),(8,'Mr. Saransh Roy','Associate at Invest India',NULL,'static/uploads/speakers/Mr. Saransh Roy.jpg','saranshroy@gmail.com','','Mr. Roy is an associate at Invest India, Startup India Hub. Saransh being a versatile individual, addresses people on the need to empower the country’s economy by creating jobs rather than seeking one and the governmental policies guarding startup related agendas.  Apart from this, he has an expertise in dealing with Intellectual Property Rights, including issues like credit guarantee, tax exemption laws and others.',2018,'https://www.linkedin.com/in/saransh-roy-01b966a2/',1,'2019-07-26 12:34:03.458521','2019-07-26 13:13:42.685049'),(9,'Harjeet Khanduja','Vice President Human Resource at Reliance JIO Infocomm',NULL,'static/uploads/speakers/Harjeet Khanduja.jpg','three@nitrr.ac.in','','Currently, Mr. Harjeet is the Vice President Human Resources at Reliance Jio. He has smartly led various HR projects in India, Canada as well as U.S.A. for various market giants like Reliance, Tata, Piramal, just to name a few. With a vivacious personality, Harjeet has not only led HR, but also been a blogger, poet and an international speaker, addressing people on the practicalities of dealing with the pre and post startup essentials.  We at E-Summit 2017 witnessed this great, humorous and intellectual person.',2018,'https://www.linkedin.com/in/harjeetkhanduja/',1,'2019-07-26 12:34:08.219708','2019-07-26 13:13:42.812390'),(10,'Anil Joshi','Managing Partner, Unicorn India Ventures',NULL,'static/uploads/speakers/Anil Joshi.jpg','two@ecell.nitrr.ac.in','','Anil Joshi is the Managing Partner at Unicorn India Ventures, a SEBI approved venture fund under AIF-I Category. The man with his vision has helped in closing approximately 60 start-up deals with over INR 100 crs investments and has served on the Board of five companies and is involved with various incubation centers as a mentor in India and outside India.',2018,'https://www.linkedin.com/in/aniljoshi74/',1,'2019-07-26 12:34:11.297937','2019-07-26 13:13:42.940069'),(11,'Ravi Ranjan','NASSCOM 10000 Startups',NULL,'static/uploads/speakers/Ravi Ranjan.jpg','one@hello.com','','Ravi Ranjan is the head of Nasscom, 10000 startups, Kolkata. He is one of those Indians who has played an influential role in giving the ground to many startups. It is aimed at incubating, funding and supporting 10,000 technology start-ups in India over the next ten years. The person with an inventive bend for entrepreneurship is the person who has taken to himself to bring the best startups in Indian market.',2018,'https://www.linkedin.com/in/raviranjan2/',1,'2019-07-26 12:34:15.864983','2019-07-26 13:13:43.078604'),(12,'Aditi Chourasia','Co-Founder and CEO EngineerBabu',NULL,'static/uploads/speakers/Aditi Chourasia.jpg','hello@ebabu.com','','The lady with the spirit of a real entrepreneur has always aimed to scale new heights. The co-founder of Engineer Babu, she has always preached that startup doesn’t mean money and there should be a good idea and passion to accomplish your task. She is a true inspiration and a symbol of women empowerment.',2018,'https://www.linkedin.com/in/aditichaurasia/',1,'2019-07-26 12:34:18.400453','2019-07-26 13:13:43.206015'),(13,'Anup Kalbalia','Tech Lead at Directi',NULL,'static/uploads/speakers/Anup Kalbalia.jpg','anup.kalbalia@gmail.com','','The tech geek with an experience of working in various programming languages like Delphi, C and Java, has built enterprise applications using different technologies like TCP sockets, HTTP, Restful Web Services etc. Being the Tech Lead at Directi, he has always visioned to create a pool of budding entrepreneurs who can make a difference to society.',2018,'https://www.linkedin.com/in/anupkalbalia/',1,'2019-07-26 12:34:21.943703','2019-07-26 13:13:43.344696'),(14,'Kumaran Brothers','AppGodimensions',NULL,'static/uploads/speakers/Kumaran Brothers.jpg','apps.godimensions@gmail.com','','Hailing from Chennai, two brothers Shravan Kumaran(12) and Sanjay Kumaran(10) went onto become the youngest Indian entrepreneurs as well as CEO of GoDimensions in 2012.\r\nBrothers have developed a number of mobile applications for android as well as iOS and aim that within a few years about 50% of the apps in the market should be owned by them. They also created VR based headsets called GoVR. The brothers were a part of E- Summit 2015 and since then, they are unstoppable.',2018,'https://twitter.com/AppGodimensions',1,'2019-07-26 12:34:25.974852','2019-07-26 13:13:43.472168'),(15,'Prateek Sethi','Communication Designer and Creative Director at Trip Creative Services',NULL,'static/uploads/speakers/Prateek Sethi.jpg','prateek@wearetrip.in','','Prateek has been the Communication Designer and Creative Director at Trip Creative Services, since 2009. Graduated from National Institute of Design, Ahmedabad, he has worked on animation and effects for various leading television channels and shows. He is a very creative person with an imaginative approach towards his projects and also is a talented speaker.',2018,'https://www.facebook.com/prateeksethi',1,'2019-07-26 12:34:28.636652','2019-07-26 13:13:43.599653');
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
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sponsors_sponsor`
--

LOCK TABLES `sponsors_sponsor` WRITE;
/*!40000 ALTER TABLE `sponsors_sponsor` DISABLE KEYS */;
INSERT INTO `sponsors_sponsor` VALUES (33,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/Department of Women & Child Development.jpeg','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-26 12:59:01.144363','2019-07-26 13:10:38.740654',NULL),(34,'36Inc','Incubation partner','static/uploads/sponsors/36Inc.jpeg','','https://www.facebook.com/36inc/','ATS',1,2018,'2019-07-26 12:59:04.987358','2019-07-26 13:10:38.964969',NULL),(35,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/Department of Women & Child Development.jpeg','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-26 12:59:08.730987','2019-07-26 13:10:39.091996',NULL),(36,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/Department of Women & Child Development.jpeg','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-26 12:59:13.068292','2019-07-26 13:10:39.230074',NULL),(37,'Bank Of Maharashtra','Bank Of Maharashtra is our Banking Partner','static/uploads/sponsors/Bank Of Maharashtra.jpeg','8827544244','https://www.bankofmaharashtra.in/','ATS',1,2018,'2019-07-26 12:59:17.781940','2019-07-26 13:10:39.357153',NULL),(38,'Chhattisgarh Tourism','Tourism Partner','static/uploads/sponsors/Chhattisgarh Tourism.jpeg','','https://twitter.com/GoChhattisgarh?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor','ATS',1,2018,'2019-07-26 12:59:21.576158','2019-07-26 13:10:39.484181',NULL),(39,'Think Raipur','In association with Think Raipur','static/uploads/sponsors/Think Raipur.jpeg','8827544244','https://dare2compete.com/o/think-raipur-raipur-smart-city-limited-25381','ATS',1,2018,'2019-07-26 12:59:24.648180','2019-07-26 13:10:39.622212',NULL),(40,'36Inc','Incubation Partner','static/uploads/sponsors/36Inc.jpeg','9685164762','https://36inc.in/','ATS',1,2018,'2019-07-26 12:59:30.259381','2019-07-26 13:10:39.749301',NULL),(41,'94.3 My FM','Our Radio Partner','static/uploads/sponsors/94.3 My FM.jpeg','81030 29146','http://myfmindia.com/','ATS',1,2018,'2019-07-26 12:59:33.875685','2019-07-26 13:10:39.898504',NULL),(42,'OYO Rooms','Title Partner','static/uploads/sponsors/OYO Rooms.jpeg','','https://www.oyorooms.com/','ATS',1,2018,'2019-07-26 12:59:37.456398','2019-07-26 13:10:40.025539',NULL),(43,'Veg Centre','Food Partner','static/uploads/sponsors/Veg Centre.jpeg','+91 77140 699','https://m.facebook.com/VegCentre/','ATS',1,2018,'2019-07-26 12:59:41.868694','2019-07-26 13:10:40.163662',NULL),(44,'Infibeam.com','Associative Partner','static/uploads/sponsors/Infibeam.com.jpeg','','https://www.infibeam.com/','ATS',1,2018,'2019-07-26 12:59:44.951602','2019-07-26 13:10:40.290586',NULL),(45,'The Music Cafe','Food Partner','static/uploads/sponsors/The Music Cafe.jpeg','91099 93102','https://m.facebook.com/TheMusicCafeRaipur/','ATS',1,2018,'2019-07-26 12:59:50.043258','2019-07-26 13:10:40.548833',NULL),(46,'Resonance','Education Partner','static/uploads/sponsors/Resonance.jpeg','','https://www.resonance.ac.in/','ATS',1,2018,'2019-07-26 12:59:52.631905','2019-07-26 13:10:40.753550',NULL),(47,'Saavn','Music Partner','static/uploads/sponsors/Saavn.jpeg','','https://www.jiosaavn.com/','ATS',1,2018,'2019-07-26 13:00:03.240074','2019-07-26 13:10:40.847287',NULL),(48,'Meenakshi\'s Salon and Academy','Grooming Partner','static/uploads/sponsors/Meenakshi\'s Salon and Academy.jpeg','77140 04013','https://m.facebook.com/meenakshisalon/','ATS',1,2018,'2019-07-26 13:00:17.897157','2019-07-26 13:10:40.940905',NULL),(49,'The College Fever','Event Booking Partner','static/uploads/sponsors/The College Fever.jpeg','7760686052','https://www.thecollegefever.com','ATS',1,2018,'2019-07-26 13:00:27.931088','2019-07-26 13:10:41.034642',NULL),(50,'TRIPPY','Travel Partner','static/uploads/sponsors/TRIPPY.jpeg','','http://www.trippycar.com/','PTS',1,2018,'2019-07-26 13:00:37.889595','2019-07-26 13:10:41.128299',NULL),(51,'Konsole Group','Digital Outreach Partner','static/uploads/sponsors/Konsole Group.jpeg','','http://www.konsolegroup.com/','PTS',1,2018,'2019-07-26 13:00:41.672161','2019-07-26 13:10:41.221991',NULL),(52,'INH News','Electronic Media Partner','static/uploads/sponsors/INH News.jpeg','','https://www.facebook.com/inhnewsindia/','PTS',1,2018,'2019-07-26 13:00:45.547345','2019-07-26 13:10:41.315687',NULL),(53,'Hotel Babylon International','Hospitality Partner','static/uploads/sponsors/Hotel Babylon International.jpeg','','http://hotelbabylon.in/','PTS',1,2018,'2019-07-26 13:00:50.937624','2019-07-26 13:10:41.409348',NULL),(54,'Bisleri Fonzo','Beverage Partner','static/uploads/sponsors/Bisleri Fonzo.jpeg','','https://www.bisleri.com/product/fonzo','PTS',1,2018,'2019-07-26 13:00:55.053073','2019-07-26 13:10:41.503023',NULL),(55,'CSPDCL','CSPDCL is our Platinum Sponsor','static/uploads/sponsors/CSPDCL.jpeg','8827544244','https://cspdcl.co.in/cseb/(S(ftnnym4waxjjv3qe24eafhdv))/frmHome.aspx','PTS',1,2018,'2019-07-26 13:00:58.556252','2019-07-26 13:10:41.596713',NULL),(56,'Chhattisgarh Tourism','Chhattisgarh Tourism is our Platinum Sonsor','static/uploads/sponsors/Chhattisgarh Tourism.jpeg','077142 24600','http://visitcg.in/','PTS',1,2018,'2019-07-26 13:01:05.028064','2019-07-26 13:10:41.690351',NULL),(57,'IBC 24','IBC24 is our Electronic Media Partner','static/uploads/sponsors/IBC 24.jpeg','077140 08700','http://www.ibc24.in','PTS',1,2018,'2019-07-26 13:01:13.589774','2019-07-26 13:10:41.784176',NULL),(58,'ZONE','ZONE by the PARK hotels is our Platinum Sponsor','static/uploads/sponsors/ZONE.jpeg','077143 20000','http://www.zonebythepark.com','PTS',1,2018,'2019-07-26 13:01:19.926148','2019-07-26 13:10:41.877736',NULL),(59,'T.I.M.E','Platinum Partner','static/uploads/sponsors/T.I.M.E.jpeg','','https://www.time4education.com/','PTS',1,2018,'2019-07-26 13:01:23.864995','2019-07-26 13:10:41.971503',NULL),(60,'The Trophy House','Memento Partner','static/uploads/sponsors/The Trophy House.jpeg','','http://www.thetrophyhouse.in/','GDS',1,2018,'2019-07-26 13:01:29.282529','2019-07-26 13:10:42.065139',NULL),(61,'WILLMAN','Stationary Partner','static/uploads/sponsors/WILLMAN.jpeg','','https://willman-paper-mart.business.site/','GDS',1,2018,'2019-07-26 13:01:32.620148','2019-07-26 13:10:42.158813',NULL),(62,'Orange Le Spirit Cafe','Food Partner','static/uploads/sponsors/Orange Le Spirit Cafe.jpeg','','https://www.facebook.com/orangelespirit/','GDS',1,2018,'2019-07-26 13:01:36.229125','2019-07-26 13:10:42.252436',NULL),(63,'CHIPS Chhattisgarh','CHIPS Chhattisgarh is our Gold Sponsor','static/uploads/sponsors/CHIPS Chhattisgarh.jpeg','(771) 4066205','http://www.chips.gov.in','GDS',1,2018,'2019-07-26 13:01:39.946802','2019-07-26 13:10:42.346169',NULL),(64,'Avinash Group','Avinash Group is our Gold Sponsor','static/uploads/sponsors/Avinash Group.jpeg','077140 33425','http://www.avinashgroup.com','GDS',1,2018,'2019-07-26 13:01:44.690814','2019-07-26 13:10:42.439874',NULL),(65,'Lalganga Colors Mall','Lalganga Colors Mall is our Gold Sponsor','static/uploads/sponsors/Lalganga Colors Mall.jpeg','077140 69999','http://www.lalgangabuilders.com/portal/portfolio/colors-mall','GDS',1,2018,'2019-07-26 13:01:48.354832','2019-07-26 13:10:42.533504',NULL),(66,'TheHitavada','Print Media Partner','static/uploads/sponsors/TheHitavada.jpeg','','http://www.ehitavada.com/','GDS',1,2018,'2019-07-26 13:01:52.389395','2019-07-26 13:10:42.627231',NULL),(67,'CSIDC','Industrial Partner','static/uploads/sponsors/CSIDC.jpeg','','https://csidc.in/home2/index.php/en/','GDS',1,2018,'2019-07-26 13:01:57.919062','2019-07-26 13:10:42.720911',NULL),(68,'CHIPS','Technology Partner','static/uploads/sponsors/CHIPS.jpeg','771 4014158','http://www.chips.gov.in/','GDS',1,2018,'2019-07-26 13:02:01.638267','2019-07-26 13:10:42.814595',NULL),(69,'Oyo Rooms','Hospitality Partner','static/uploads/sponsors/Oyo Rooms.jpeg','','https://www.oyorooms.com','GDS',1,2018,'2019-07-26 13:02:04.199918','2019-07-26 13:10:42.908243',NULL),(70,'ATKT.IN','Event Publicity Partner','static/uploads/sponsors/ATKT.IN.jpeg','','https://www.facebook.com/ATKT.in/','TLS',1,2018,'2019-07-26 13:02:07.438411','2019-07-26 13:10:43.002022',NULL),(71,'Vedam Spa & Salon','Spa & Salon Partner','static/uploads/sponsors/Vedam Spa & Salon.jpeg','','https://www.justdial.com/Raipur-Chhattisgarh/Vedam-Spa-Unisex-Salon-Beside-Jai-Jawan-Petrol-Pump-Raipur-HO/9999PX771-X771-180516161332-E3Y7_BZDET','TLS',1,2018,'2019-07-26 13:02:10.878512','2019-07-26 13:10:43.095694',NULL),(72,'YourStory','Campus Publicity Partner','static/uploads/sponsors/YourStory.jpeg','','http://yourstory.com','TLS',1,2018,'2019-07-26 13:02:13.010434','2019-07-26 13:10:43.189340',NULL),(73,'Nai Dunia','Print Media Partner','static/uploads/sponsors/Nai Dunia.jpeg','7314711000','https://naidunia.jagran.com/','TLS',1,2018,'2019-07-26 13:02:16.488600','2019-07-26 13:10:43.282966',NULL),(74,'Dev Creator\'s of Memories','Photography Partner','static/uploads/sponsors/Dev Creator\'s of Memories.jpeg','','https://ecell.nitrr.ac.in/','TLS',1,2018,'2019-07-26 13:02:20.482733','2019-07-26 13:10:43.376690',NULL),(75,'Hello Intern','Partner','static/uploads/sponsors/Hello Intern.jpeg','','https://www.hellointern.com/','TLS',1,2018,'2019-07-26 13:02:23.682550','2019-07-26 13:10:43.470358',NULL),(76,'IndiaMart','Partner','static/uploads/sponsors/IndiaMart.jpeg','','https://www.indiamart.com/','TLS',1,2018,'2019-07-26 13:02:27.581879','2019-07-26 13:10:43.564050',NULL),(77,'PT Education','Title Partner','static/uploads/sponsors/PT Education.jpeg','','https://ptraipur.com/','TLS',1,2018,'2019-07-26 13:02:31.656832','2019-07-26 13:10:43.657749',NULL),(78,'Shopper\'s Stop','Title Partner','static/uploads/sponsors/Shopper\'s Stop.jpeg','','https://www.shoppersstop.com/','TLS',1,2018,'2019-07-26 13:02:34.312707','2019-07-26 13:10:43.751454',NULL),(79,'Career Launcher','Career Partner','static/uploads/sponsors/Career Launcher.jpeg','','https://www.careerlauncher.com/','TLS',1,2018,'2019-07-26 13:02:37.480068','2019-07-26 13:10:43.845079',NULL),(80,'Pagal Guy','Partner','static/uploads/sponsors/Pagal Guy.jpeg','','https://www.pagalguy.com/','TLS',1,2018,'2019-07-26 13:02:41.737337','2019-07-26 13:10:43.938759',NULL),(81,'My FM 94.3','FM Partner','static/uploads/sponsors/My FM 94.3.jpeg','','http://myfmindia.com/','TLS',1,2018,'2019-07-26 13:02:45.479234','2019-07-26 13:10:44.032417',NULL),(82,'Chhattisgarh Tourism','Tourism Partner','static/uploads/sponsors/Chhattisgarh Tourism.jpeg','771 4224600','http://visitcg.in/','TLS',1,2018,'2019-07-26 13:02:48.309956','2019-07-26 13:10:44.170632',NULL),(83,'Venture Catalysts','Investment Partner','static/uploads/sponsors/Venture Catalysts.jpeg','','http://venturecatalysts.in/raipur/','PRS',1,2018,'2019-07-26 13:02:51.179352','2019-07-26 13:10:44.357986',NULL),(84,'Zoodify','Communication Partner','static/uploads/sponsors/Zoodify.jpeg','','https://ecell.nitrr.ac.in/','PRS',1,2018,'2019-07-26 13:02:56.730257','2019-07-26 13:10:44.451688',NULL),(85,'Sams Pizza','Sams Pizza is our Pizza Partner','static/uploads/sponsors/Sams Pizza.jpeg','077140 00053','https://www.samspizza.in','PRS',1,2018,'2019-07-26 13:03:01.534564','2019-07-26 13:10:44.545335',NULL),(86,'Raipur Development Authority','RDA is our Event Partner','static/uploads/sponsors/Raipur Development Authority.jpeg','077730 99888','http://www.rdaraipur.com','PRS',1,2018,'2019-07-26 13:03:04.052410','2019-07-26 13:10:44.639036',NULL),(87,'RiON','RiON is our Recreation Partner','static/uploads/sponsors/RiON.jpeg','081091 22345','https://www.facebook.com/profile.php?id=100009219539017','PRS',1,2018,'2019-07-26 13:03:06.973870','2019-07-26 13:10:44.826376',NULL),(88,'Happily Unmarried','Happily Unmaried is our Merchandise Partner','static/uploads/sponsors/Happily Unmarried.jpeg','1800 3000 588','https://www.happilyunmarried.com','PRS',1,2018,'2019-07-26 13:03:11.440520','2019-07-26 13:10:44.920050',NULL),(89,'Zebronics','Zebronics is our Multimedia Partner','static/uploads/sponsors/Zebronics.jpeg','081091 22345','https://zebronics.com','PRS',1,2018,'2019-07-26 13:03:16.937402','2019-07-26 13:10:45.013750',NULL),(90,'Sky Ventures','Sky Ventures is our Travel Partner','static/uploads/sponsors/Sky Ventures.jpeg','8827544244','http://www.skyventure.in/','PRS',1,2018,'2019-07-26 13:03:20.320855','2019-07-26 13:10:45.107395',NULL),(91,'Benchmark Group','Benchmark Group is our digital outreach partner.','static/uploads/sponsors/Benchmark Group.jpeg','081031 30039','http://benchmarksgroup.com/','PRS',1,2018,'2019-07-26 13:03:24.430827','2019-07-26 13:10:45.201107',NULL),(92,'qM Print','qM Print is our Printing Partner','static/uploads/sponsors/qM Print.jpeg','077140 99444','http://www.qmprint.com/','PRS',1,2018,'2019-07-26 13:03:29.632437','2019-07-26 13:10:45.294773',NULL),(93,'Shri Krishna IAS','Shri Krishna IAS is our coaching partner','static/uploads/sponsors/Shri Krishna IAS.jpeg','8827544244','http://shrikrishnaias.com/','PRS',1,2018,'2019-07-26 13:03:33.458963','2019-07-26 13:10:45.388483',NULL),(94,'Souled Store','Souled Store is our Gift Partner','static/uploads/sponsors/Souled Store.jpeg','022 3965 3110','https://www.thesouledstore.com/','PRS',1,2018,'2019-07-26 13:03:36.944150','2019-07-26 13:10:45.482171',NULL),(95,'Goose Burps','Goose Burps is our Cafe Partner','static/uploads/sponsors/Goose Burps.jpeg','9676996769','http://gooseburps.com/','PRS',1,2018,'2019-07-26 13:03:42.090941','2019-07-26 13:10:45.575852',NULL),(96,'Samishu','Samishu is our food partner','static/uploads/sponsors/Samishu.jpeg','8827544244','https://www.justdial.com/raipur-chhattisgarh/Samishu-Jain-Thali-Services-Near-police-thana-Purani-Basti-Raipur/9999PX771-X771-170713214339-P5D5_BZDET?utm_source=adwords&utm_medium=codered&gclid=Cj0KCQ','PRS',1,2018,'2019-07-26 13:03:45.227895','2019-07-26 13:10:45.669510',NULL),(97,'Lasting Impressions','Lasting Impressions is our Photography Partner','static/uploads/sponsors/Lasting Impressions.jpeg','077140 88110','https://www.justdial.com/Raipur-chhattisgarh/Impression-Graphix-We-Do-It-Best-Opposite-Khalsa-School-Pandri/9999PX771-X771-140119185038-N2J1_BZDET','PRS',1,2018,'2019-07-26 13:03:47.997946','2019-07-26 13:10:45.763181',NULL),(98,'Vennington Court','Vennington Court is our Hospitality Partner','static/uploads/sponsors/Vennington Court.jpeg','9522220862','http://venningtoncourt.com/','PRS',1,2018,'2019-07-26 13:03:52.918235','2019-07-26 13:10:45.856877',NULL),(99,'ATKT.IN','ATKT.IN is our online media partner','static/uploads/sponsors/ATKT.IN.jpeg','081091 22345','http://atkt.in/','PRS',1,2018,'2019-07-26 13:03:56.180990','2019-07-26 13:10:45.950483',NULL),(100,'AB Classes','Event Partner','static/uploads/sponsors/AB Classes.jpeg','098317 40080','http://www.abclasses.co.in','PRS',1,2018,'2019-07-26 13:03:59.046158','2019-07-26 13:10:46.044209',NULL),(101,'MOBILE10x','Technical Incubation Partner','static/uploads/sponsors/MOBILE10x.jpeg','','https://www.mobile10x.in/hub/mobile10x-raipur-hub','PRS',1,2018,'2019-07-26 13:04:01.994295','2019-07-26 13:10:46.137972',NULL),(102,'HEADSTART','Ecosystem Partner','static/uploads/sponsors/HEADSTART.jpeg','','http://www.headstart.in/','PRS',1,2018,'2019-07-26 13:04:04.674149','2019-07-26 13:10:46.231621',NULL),(103,'Seeta Travels','Travel Partner','static/uploads/sponsors/Seeta Travels.jpeg','','https://m.indiamart.com/seeta-tour-travels/aboutus.html','PRS',1,2018,'2019-07-26 13:04:07.437701','2019-07-26 13:10:46.325333',NULL),(104,'The Trohpy House','The Trophy House is our Memento Partner','static/uploads/sponsors/The Trohpy House.jpeg','081091 22345','https://www.justdial.com/Raipur-chhattisgarh/The-Trophy-House-Oppo-Amantran-Mens-Parlour-Satti-Bazar-Sadar-Bazar/9999PX771-X771-130608021706-S2W3_BZDET','PRS',1,2018,'2019-07-26 13:04:09.895333','2019-07-26 13:10:46.418963',NULL),(105,'Blooms And Grooms','Our Partner','static/uploads/sponsors/Blooms And Grooms.jpeg','9753953461','http://www.directoryworld.in/flower-shop-raipur/','PRS',1,2018,'2019-07-26 13:04:15.203755','2019-07-26 13:10:46.512697',NULL),(106,'Sam\'s Kreations','Salon Partner','static/uploads/sponsors/Sam\'s Kreations.jpeg','097642 11228','https://www.justdial.com/Raipur-Chhattisgarh/Sams-Kreations-The-Unisex-Salon-And-Academy-Opposite-Shiv-Sena-Office-Behind-Pragati-College-Choubey-Colony/9999PX771-X771-150205193119-A9V1_BZDET','PRS',1,2018,'2019-07-26 13:04:22.652644','2019-07-26 13:10:46.606351',NULL),(107,'Senov Tech','Partner','static/uploads/sponsors/Senov Tech.jpeg','070003 87001','https://www.justdial.com/Raipur-Chhattisgarh/Senov-Tech-Devendra-Nagar/9999PX771-X771-180910174138-K6X7_BZDET','PRS',1,2018,'2019-07-26 13:04:25.458538','2019-07-26 13:10:46.700034',NULL),(108,'Your Story','Campus Publicity Partner','static/uploads/sponsors/Your Story.jpeg','','https://yourstory.com','PRS',1,2018,'2019-07-26 13:04:29.460455','2019-07-26 13:10:46.793715',NULL),(109,'Appu Sweets','Food partner','static/uploads/sponsors/Appu Sweets.jpeg','','https://appu-sweets.business.site/','PRS',1,2018,'2019-07-26 13:04:32.629086','2019-07-26 13:10:46.887349',NULL),(110,'Interview Street','Partner','static/uploads/sponsors/Interview Street.jpeg','','https://www.hackerrank.com/interviewstreet','PRS',1,2018,'2019-07-26 13:04:36.405543','2019-07-26 13:10:46.981071',NULL),(111,'The Signage','R&D partner','static/uploads/sponsors/The Signage.jpeg','9835 19 3084','http://www.thesignage.co.in/','PRS',1,2018,'2019-07-26 13:04:40.724516','2019-07-26 13:10:47.074771',NULL),(112,'Hotel Maurya','Hospitality Partner','static/uploads/sponsors/Hotel Maurya.jpeg','771 4200500','https://www.themayurahotels.com/','PRS',1,2018,'2019-07-26 13:04:43.688853','2019-07-26 13:10:47.168471',NULL),(113,'Hotel Aditya','Hospitality Partner','static/uploads/sponsors/Hotel Aditya.jpeg','771-4032941','http://hoteladityaraipur.com/','PRS',1,2018,'2019-07-26 13:04:46.966140','2019-07-26 13:10:47.262190',NULL),(114,'Celebration Group','Hospitality Partner','static/uploads/sponsors/Celebration Group.jpeg','9425203151','http://www.celebrationworld.in','PRS',1,2018,'2019-07-26 13:04:50.187219','2019-07-26 13:10:47.355823',NULL),(115,'Hello Intern','Internship Partner','static/uploads/sponsors/Hello Intern.jpeg','40-49492040','https://www.hellointern.com/','PRS',1,2018,'2019-07-26 13:04:53.200620','2019-07-26 13:10:47.449535',NULL),(116,'Eyedea','Advertising Partner','static/uploads/sponsors/Eyedea.jpeg','81203 10001','https://m.facebook.com/adevents10/','PRS',1,2018,'2019-07-26 13:04:58.827724','2019-07-26 13:10:47.543211',NULL),(117,'Moshik\'s','Food Partner','static/uploads/sponsors/Moshik\'s.jpeg','8982712308','http://moshiks.in','PRS',1,2018,'2019-07-26 13:05:03.405059','2019-07-26 13:10:47.636902',NULL),(118,'It\'s Me Cafe','Food Partner','static/uploads/sponsors/It\'s Me Cafe.jpeg','91099 93110','https://m.facebook.com/itsmecaferaipur/','PRS',1,2018,'2019-07-26 13:05:07.201710','2019-07-26 13:10:47.730559',NULL),(119,'Your Story','Campus Publicity Partner','static/uploads/sponsors/Your Story.jpeg','','https://yourstory.com/','PRS',1,2018,'2019-07-26 13:05:10.082335','2019-07-26 13:10:47.824269',NULL),(120,'IBC 24','Media Partner','static/uploads/sponsors/IBC 24.jpeg','771-4008700','https://www.ibc24.in/','PRS',1,2018,'2019-07-26 13:05:13.629519','2019-07-26 13:10:47.917965',NULL),(121,'ACB India Limited','Energy Partner','static/uploads/sponsors/ACB India Limited.jpeg','0124-2719000','http://www.acbindia.com/','PRS',1,2018,'2019-07-26 13:05:17.799157','2019-07-26 13:10:48.011637',NULL),(122,'Benchmark Group','Digital Marketing Partner','static/uploads/sponsors/Benchmark Group.jpeg','','http://benchmarksgroup.com/','PRS',1,2018,'2019-07-26 13:05:21.119882','2019-07-26 13:10:48.105296',NULL),(123,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/Department of Women & Child Development.jpeg','','http://www.wcd.nic.in/','ATS',0,2018,'2019-07-26 13:16:18.733667','2019-07-26 13:16:18.733746',NULL),(124,'36Inc','Incubation partner','static/uploads/sponsors/36Inc.jpeg','','https://www.facebook.com/36inc/','ATS',0,2018,'2019-07-26 13:16:20.642808','2019-07-26 13:16:20.642881',NULL),(125,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/Department of Women & Child Development.jpeg','','http://www.wcd.nic.in/','ATS',0,2018,'2019-07-26 13:16:24.554254','2019-07-26 13:16:24.554317',NULL),(126,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/Department of Women & Child Development.jpeg','','http://www.wcd.nic.in/','ATS',0,2018,'2019-07-26 13:16:30.115937','2019-07-26 13:16:30.116008',NULL),(127,'Bank Of Maharashtra','Bank Of Maharashtra is our Banking Partner','static/uploads/sponsors/Bank Of Maharashtra.jpeg','8827544244','https://www.bankofmaharashtra.in/','ATS',0,2018,'2019-07-26 13:16:33.572547','2019-07-26 13:16:33.572575',NULL),(128,'Chhattisgarh Tourism','Tourism Partner','static/uploads/sponsors/Chhattisgarh Tourism.jpeg','','https://twitter.com/GoChhattisgarh?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor','ATS',0,2018,'2019-07-26 13:16:36.357038','2019-07-26 13:16:36.357105',NULL),(129,'Think Raipur','In association with Think Raipur','static/uploads/sponsors/Think Raipur.jpeg','8827544244','https://dare2compete.com/o/think-raipur-raipur-smart-city-limited-25381','ATS',0,2018,'2019-07-26 13:16:39.098901','2019-07-26 13:16:39.098972',NULL);
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
INSERT INTO `startups_startup` VALUES (1,'SmileBots',NULL,'static/uploads/startups/SmileBots.jpeg',NULL,'https://smilebots.com/','Smilebots',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About Smilebots</strong>: We help Companies and Startups solve real problems using cutting-edge Technology.</p>\r\n\r\n<p><strong>Internships are available for the following domains:</strong></p>\r\n\r\n<ol><li>Data Science</li><li>Machine Learning</li><li>Artificial Intelligence</li><li>Blockchain</li></ol>\r\n\r\n<p><strong>Skills Required:</strong> Fluency in any coding language for above mentioned domains which may incluce python, ruby, solidity,javascript, Hadoop etc. Past experience and projects will play a crucial role.</p>\r\n\r\n<p><strong>Minimum Stipend:</strong> Performance based, upto max 10k/month</p>\r\n\r\n<p><strong>Starting Month:</strong> Immediately</p>\r\n\r\n<p><strong>Email:</strong> achal@smilebots.com</p>\r\n\r\n<p><strong>Mobile No:</strong> +91 93005 08989</p>\r\n\r\n<p><strong>Address:</strong> National Corporate Park, 210B, Great Eastern Rd, Raipur, Chhattisgarh 492001</p></div>',2018,'2019-07-26 13:18:44.033885','2019-07-26 13:18:44.033942',NULL),(2,'Polllzy',NULL,'static/uploads/startups/Polllzy.jpeg',NULL,'https://www.polllzy.com/','Polllzy',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About Polllzy:</strong>\r\nWe are social media startup. </p>\r\n\r\n<p><strong>About Internship:</strong>\r\n3rd and 4th year students can apply.</p>\r\n\r\n<p><strong>Skills Required:</strong>\r\nWe are looking for coders who are good in javascript and python.</p>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nNo stipend will provided.</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nDecember</p>\r\n\r\n<p><strong>Duration of internship:</strong>\r\n2 months (can be extended)</p>\r\n\r\n<p><strong>Email:</strong>\r\npolllzy.team@gmail.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n9035028077</p></div>',2018,'2019-07-26 13:18:47.201601','2019-07-26 13:18:47.201659',NULL),(3,'Innolat Technologies pvt. Ltd.',NULL,'static/uploads/startups/Innolat Technologies pvt. Ltd..jpeg',NULL,'http://www.innolat.com/#/home','Innolat Technologies pvt. Ltd.',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About Innolat:</strong></p>\r\n\r\n<p>Innolat is one of the fastest growing EduTech Startups incubated by 36Inc, Govt. of Chhattisgarh.</p>\r\n\r\n<p>Our\r\ntechnology product iLrnn (pronounced as iLearn) is India’s first personalized learning platform to connect\r\nengineering students directly with industry experts and corporate trainer LIVE.</p>\r\n\r\n<p><strong>About Internship:</strong>\r\nInternships are available for both Technical and Non-Technical.</p>\r\n\r\n<p><strong>Skills Required:</strong>\r\nPursuing Engineering / Fresher</p>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nPerformance based.</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nAnytime</p>\r\n\r\n<p><strong>Duration of internship:</strong>\r\nVariable</p>\r\n\r\n<p><strong>Email:</strong>\r\nisha@innolat.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n+91-8861516611</p>\r\n\r\n<p><strong>Address:</strong>\r\n412, Golden Trade Centre, New Rajendra Nagar, Raipur</p></div>',2018,'2019-07-26 13:18:50.581684','2019-07-26 13:18:50.581742',NULL),(4,'Lokus News',NULL,'static/uploads/startups/Lokus News.jpeg',NULL,'http://lokusnews.com/','Lokus News',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>Co Founder:</strong> \r\nPrakhar Lunawat</p>\r\n\r\n<p><strong>About Lokus News:</strong>\r\nWe are a news aggregation platform, focusing on regional news.</p>\r\n\r\n<p><strong>About Internship:</strong></p>\r\n\r\n<ol><li>Operations internship</li><li>Interns need to do a training for 10 days at our office at Station Road, Raipur</li><li>Later they can work from home</li></ol>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nRs. 5000/month</p>\r\n\r\n<p><strong>Duration of internship:</strong>\r\nIntenships are available for a duration of 3 months.</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nNovember</p>\r\n\r\n<p><strong>Email:</strong>\r\nPrakhar@lokusnews.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n9826123498</p></div>',2018,'2019-07-26 13:18:55.030254','2019-07-26 13:18:55.030286',NULL),(5,'eBeta',NULL,'static/uploads/startups/eBeta.jpeg',NULL,'http://ebeta.in/','eBeta',NULL,1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About eBeta:</strong>\r\nIts about leisure and health services to senior \r\ncitizens.</p>\r\n\r\n<p><strong>About Internship:</strong></p>\r\n\r\n<ol><li>Sense of Responsibility</li><li>Smart Communication Skills and Presentable. (Both Male &amp; Female)</li></ol>\r\n\r\n<p><strong>Skills Required:</strong>\r\nPatience in handling old age people</p>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nRs. 2000/month</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nNovember</p>\r\n\r\n<p><strong>Email:</strong>\r\nPrakhar@lokusnews.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n9522292122</p>\r\n\r\n<p><strong>Address:</strong>\r\neBeta House, B28, Amrapali Society, behind Colors Mall, Pachpedinaka, Raipur.</p></div>',2018,'2019-07-26 13:18:59.975071','2019-07-26 13:18:59.975129',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_member`
--

LOCK TABLES `team_member` WRITE;
/*!40000 ALTER TABLE `team_member` DISABLE KEYS */;
INSERT INTO `team_member` VALUES (1,'Dr. R N Patel',NULL,'static/uploads/team/Dr_RN_Patel_ZOWFX4o.jpg','FCT',2018),(2,'Dr. Samir Bajpai',NULL,'static/uploads/team/Samir_Vajpayee_uMs2Lbb.JPG','HCD',2018),(3,'Dr. A M Rawani',NULL,'static/uploads/team/Dr_A_M_Rawani_0B2ZpDZ.jpg','DIR',2018),(4,'Aashish Kumar',NULL,'static/uploads/team/aashish.jpg','OCO',2018),(5,'Rohit Agarwal',NULL,'static/uploads/team/ID_CARD_PIC_-_Rohit_Agarwal.jpg','OCO',2018),(6,'Siddhanth Mahapatra',NULL,'static/uploads/team/siddanth_mahapatra.jpg','OCO',2018),(7,'Prateek Verma',NULL,'static/uploads/team/Screenshot_2018-01-11-07-27-33-1114344348_-_Prateek_Verma_reeLrZh.jpg','OCO',2018),(8,'Rashmi dewangan',NULL,'static/uploads/team/IMG_20180711_222304_190_-_Rashmi_Dewangan.jpg','HCO',2018),(9,'Vedant Rai',NULL,'static/uploads/team/Vedant_-_Vedant_Rai.jpg','HCO',2018),(10,'Anoop Tiwari',NULL,'static/uploads/team/IMG_1227_-_ANOOP_TIWARI.jpg','HCO',2018),(11,'Shivangi Tiwari',NULL,'static/uploads/team/20171120202821_IMG_7741_1_20180603013333314_-_Shivangi_Tiwari.jpg','HCO',2018),(12,'Yash Bonde',NULL,'static/uploads/team/yash_bonde.jpg','HCO',2018),(13,'Suyash Gupta',NULL,'static/uploads/team/suyash_gupta.jpg','HCO',2018),(14,'Iket Agrawal',NULL,'static/uploads/team/Iket_Agrawal.jpg','HCO',2018),(15,'D Rupesh Kumar',NULL,'static/uploads/team/D_Rupesh_kumar.jpg','HCO',2018),(16,'Prem Singh Shekhawat',NULL,'static/uploads/team/prem_singh_shekawat.jpg','HCO',2018),(17,'Saransh Mehta',NULL,'static/uploads/team/saransh_mehta.jpg','HCO',2018),(18,'Kavya Sharma',NULL,'static/uploads/team/kavyasharma.jpg','HCO',2018),(19,'Dimple Sharma',NULL,'static/uploads/team/dimplesharma.jpg','HCO',2018),(20,'Aditya Agrawal',NULL,'static/uploads/team/adityaagrawal.jpg','HCO',2018),(21,'Ankush Agrawal',NULL,'static/uploads/team/ankush_agrawal.jpg','HCO',2018),(22,'Himanshu Bunkar',NULL,'static/uploads/team/Himanshu_bunkar.jpg','HCO',2018),(23,'Bharat dadhich',NULL,'','MNG',2018),(24,'Aastha yadav',NULL,'','MNG',2018),(25,'Ankur gupta',NULL,'','MNG',2018),(26,'Deepesh Mitra',NULL,'','MNG',2018),(27,'Ashly Justin',NULL,'','MNG',2018),(28,'Devesh Sharma',NULL,'','MNG',2018),(29,'Kuldeep Pisda',NULL,'','MNG',2018),(30,'mohith prakash khatri',NULL,'','MNG',2018),(31,'Rajshree Gavel',NULL,'','MNG',2018),(32,'Samveg Thaker',NULL,'','MNG',2018),(33,'Shreyansh Sahare',NULL,'','MNG',2018),(34,'Siddharth Chandra',NULL,'','MNG',2018),(35,'Vrihas Pathak',NULL,'','MNG',2018),(36,'Aayush Shrivastav',NULL,'','MNG',2018),(37,'Akshat Verma',NULL,'','MNG',2018),(38,'Gaurav Patel',NULL,'','MNG',2018),(39,'Mohit Sarin',NULL,'','MNG',2018),(40,'Samiksha chhattani',NULL,'','MNG',2018),(41,'Aditya Vikram Dev',NULL,'','MNG',2018),(42,'chaitanya ashish mishra',NULL,'','MNG',2018),(43,'Pavan Gupta',NULL,'','MNG',2018),(44,'Prashant Kumar',NULL,'','MNG',2018),(45,'Prayansh Ratan Srivastava',NULL,'','MNG',2018),(46,'Snehal Buldeo',NULL,'','MNG',2018),(47,'Surbhi Rai',NULL,'','MNG',2018),(48,'Yash Krishan',NULL,'','MNG',2018),(49,'Yashwi Shah',NULL,'','MNG',2018),(50,'Ria',NULL,'','EXC',2018),(51,'Aashutosh Bansal',NULL,'','EXC',2018),(52,'Vaishnavi Sharma',NULL,'','EXC',2018),(53,'Shreya',NULL,'','EXC',2018),(54,'Shubham Jain',NULL,'','EXC',2018),(55,'Yashasvi Verma',NULL,'','EXC',2018),(56,'Aasish vuyyapu',NULL,'','EXC',2018),(57,'Kartikeya Sharma',NULL,'','EXC',2018),(58,'Sumit Chatterjee',NULL,'','EXC',2018),(59,'Aditya Kumar Sahu',NULL,'','EXC',2018),(60,'Manas Gupta',NULL,'','EXC',2018),(61,'Raunaq Purohit',NULL,'','EXC',2018),(62,'Aditya Singh',NULL,'','EXC',2018),(63,'Bhushan Thakre',NULL,'','EXC',2018),(64,'Dipanshu Daga',NULL,'','EXC',2018),(65,'Kuldeep Narayan Minj',NULL,'','EXC',2018),(66,'Milind Verma',NULL,'','EXC',2018),(67,'Naveen Sundar',NULL,'','EXC',2018),(68,'Nishu Chandravanshi',NULL,'','EXC',2018),(69,'Pratibha Shrivastav',NULL,'','EXC',2018),(70,'Rushikesh Pupale',NULL,'','EXC',2018),(71,'Sumit Badsara',NULL,'','EXC',2018),(72,'Jagannath Swain',NULL,'','EXC',2018),(73,'Rashmi Poya',NULL,'','EXC',2018),(74,'Rishabh Vishwakarma',NULL,'','EXC',2018),(75,'Soumya Banga',NULL,'','EXC',2018),(76,'Yash Bhojak',NULL,'','EXC',2018),(77,'Anjaney Jaiswal',NULL,'','EXC',2018),(78,'Anshul S',NULL,'','EXC',2018),(79,'Debanshu Mukherjee',NULL,'','EXC',2018),(80,'Muskan Budhia',NULL,'','EXC',2018),(81,'Saksham Agarwal',NULL,'','EXC',2018),(82,'Taniya Bisen',NULL,'','EXC',2018),(83,'Vishist Pandey',NULL,'','EXC',2018),(84,'Aayush Jain',NULL,'','EXC',2018),(85,'Aman Sethi',NULL,'','EXC',2018),(86,'Avishi Bansal',NULL,'','EXC',2018),(87,'Drishti Kalwani',NULL,'','EXC',2018),(88,'Nitesh Kumar',NULL,'','EXC',2018),(89,'Roma Vardiyani',NULL,'','EXC',2018),(90,'Shushriya Swarnkar',NULL,'','EXC',2018),(91,'Suyash Agrawal',NULL,'','EXC',2018),(92,'Prabhjot Kaur',NULL,'','EXC',2018),(93,'Pratik Tolambiya',NULL,'','EXC',2018),(94,'Aman Gupta',NULL,'','EXC',2018),(95,'Gaurav Singh',NULL,'','EXC',2018),(96,'Soumya Jaiswal',NULL,'','EXC',2018);
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
  `ca_score` int(11) NOT NULL,
  `ca_fb_score` int(11) NOT NULL,
  `ca_tw_score` int(11) NOT NULL,
  `ca_li_score` int(11) NOT NULL,
  `ca_wp_score` int(11) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `applied` tinyint(1) NOT NULL,
  `user_type` varchar(3) NOT NULL,
  `linkedin` varchar(64) DEFAULT NULL,
  `facebook` varchar(64) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_customuser`
--

LOCK TABLES `users_customuser` WRITE;
/*!40000 ALTER TABLE `users_customuser` DISABLE KEYS */;
INSERT INTO `users_customuser` VALUES (1,'pbkdf2_sha256$150000$eYT3SrIkQL1Q$S+VI5QLexjjiKXd3XVqHsKSueTJMy/XsG2vQJuZcjSM=','2019-07-26 12:14:51.921398',1,1,1,'2019-07-26 12:14:41.338730','rushi@gmail.com','','','rushi@gmail.com',NULL,0,'',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-26 12:14:41.403920','2019-07-26 12:14:41.403932');
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

-- Dump completed on 2019-07-26 19:22:04
