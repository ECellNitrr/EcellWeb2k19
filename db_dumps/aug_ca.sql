-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: ecellfinal
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

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
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add ECellUser',6,'add_customuser'),(22,'Can change ECellUser',6,'change_customuser'),(23,'Can delete ECellUser',6,'delete_customuser'),(24,'Can view ECellUser',6,'view_customuser'),(25,'Can add campus ambassador profile',7,'add_campusambassadorprofile'),(26,'Can change campus ambassador profile',7,'change_campusambassadorprofile'),(27,'Can delete campus ambassador profile',7,'delete_campusambassadorprofile'),(28,'Can view campus ambassador profile',7,'view_campusambassadorprofile'),(29,'Can add event',8,'add_event'),(30,'Can change event',8,'change_event'),(31,'Can delete event',8,'delete_event'),(32,'Can view event',8,'view_event'),(33,'Can add event register',9,'add_eventregister'),(34,'Can change event register',9,'change_eventregister'),(35,'Can delete event register',9,'delete_eventregister'),(36,'Can view event register',9,'view_eventregister'),(37,'Can add sponsor',10,'add_sponsor'),(38,'Can change sponsor',10,'change_sponsor'),(39,'Can delete sponsor',10,'delete_sponsor'),(40,'Can view sponsor',10,'view_sponsor'),(41,'Can add mentor',11,'add_mentor'),(42,'Can change mentor',11,'change_mentor'),(43,'Can delete mentor',11,'delete_mentor'),(44,'Can view mentor',11,'view_mentor'),(45,'Can add startup',12,'add_startup'),(46,'Can change startup',12,'change_startup'),(47,'Can delete startup',12,'delete_startup'),(48,'Can view startup',12,'view_startup'),(49,'Can add member',13,'add_member'),(50,'Can change member',13,'change_member'),(51,'Can delete member',13,'delete_member'),(52,'Can view member',13,'view_member'),(53,'Can add speaker',14,'add_speaker'),(54,'Can change speaker',14,'change_speaker'),(55,'Can delete speaker',14,'delete_speaker'),(56,'Can view speaker',14,'view_speaker'),(57,'Can add app',15,'add_app'),(58,'Can change app',15,'change_app'),(59,'Can delete app',15,'delete_app'),(60,'Can view app',15,'view_app'),(61,'Can add task',16,'add_task'),(62,'Can change task',16,'change_task'),(63,'Can delete task',16,'delete_task'),(64,'Can view task',16,'view_task'),(65,'Can add submit task',17,'add_submittask'),(66,'Can change submit task',17,'change_submittask'),(67,'Can delete submit task',17,'delete_submittask'),(68,'Can view submit task',17,'view_submittask');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caportal_submittask`
--

DROP TABLE IF EXISTS `caportal_submittask`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `caportal_submittask` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proof_checker` varchar(500) NOT NULL,
  `proof_pic` varchar(100) NOT NULL,
  `status` varchar(500) NOT NULL,
  `msg` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  `proof_by_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `caportal_submittask_task_id_proof_by_id_90c9c226_uniq` (`task_id`,`proof_by_id`),
  KEY `caportal_submittask_proof_by_id_8e675bb1_fk_users_customuser_id` (`proof_by_id`),
  CONSTRAINT `caportal_submittask_proof_by_id_8e675bb1_fk_users_customuser_id` FOREIGN KEY (`proof_by_id`) REFERENCES `users_customuser` (`id`),
  CONSTRAINT `caportal_submittask_task_id_9e5ad39f_fk_caportal_task_id` FOREIGN KEY (`task_id`) REFERENCES `caportal_task` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caportal_submittask`
--

LOCK TABLES `caportal_submittask` WRITE;
/*!40000 ALTER TABLE `caportal_submittask` DISABLE KEYS */;
INSERT INTO `caportal_submittask` VALUES (1,'','static/uploads/caportal/0_4B3AepA.png','accepted','','2019-07-31 21:49:19.472881','2019-07-31 21:49:54.630959',2,1);
/*!40000 ALTER TABLE `caportal_submittask` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caportal_task`
--

DROP TABLE IF EXISTS `caportal_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `caportal_task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `description` longtext NOT NULL,
  `platform` varchar(100) NOT NULL,
  `madeby` varchar(500) NOT NULL,
  `url` varchar(200) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caportal_task`
--

LOCK TABLES `caportal_task` WRITE;
/*!40000 ALTER TABLE `caportal_task` DISABLE KEYS */;
INSERT INTO `caportal_task` VALUES (1,'test is test','test','whatsapp','ADMIN IS ADMIN','https://www.google.com/?gws_rd=ssl','2019-07-31 21:46:25.342861','2019-07-31 21:46:25.342924',0);
/*!40000 ALTER TABLE `caportal_task` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2019-07-31 21:45:25.615994','1','admin@gmail.com',2,'[{\"changed\": {\"fields\": [\"first_name\", \"last_name\", \"contact\", \"user_type\"]}}]',6,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(15,'android_app','app'),(3,'auth','group'),(2,'auth','permission'),(17,'caportal','submittask'),(16,'caportal','task'),(4,'contenttypes','contenttype'),(8,'events','event'),(9,'events','eventregister'),(11,'mentors','mentor'),(5,'sessions','session'),(14,'speakers','speaker'),(10,'sponsors','sponsor'),(12,'startups','startup'),(13,'team','member'),(7,'users','campusambassadorprofile'),(6,'users','customuser');
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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-07-31 21:14:31.875775'),(2,'contenttypes','0002_remove_content_type_name','2019-07-31 21:14:32.107649'),(3,'auth','0001_initial','2019-07-31 21:14:32.315661'),(4,'auth','0002_alter_permission_name_max_length','2019-07-31 21:14:32.936468'),(5,'auth','0003_alter_user_email_max_length','2019-07-31 21:14:32.950253'),(6,'auth','0004_alter_user_username_opts','2019-07-31 21:14:32.964205'),(7,'auth','0005_alter_user_last_login_null','2019-07-31 21:14:32.971249'),(8,'auth','0006_require_contenttypes_0002','2019-07-31 21:14:32.975073'),(9,'auth','0007_alter_validators_add_error_messages','2019-07-31 21:14:33.003658'),(10,'auth','0008_alter_user_username_max_length','2019-07-31 21:14:33.017067'),(11,'auth','0009_alter_user_last_name_max_length','2019-07-31 21:14:33.035643'),(12,'auth','0010_alter_group_name_max_length','2019-07-31 21:14:33.055315'),(13,'auth','0011_update_proxy_permissions','2019-07-31 21:14:33.075389'),(14,'users','0001_initial','2019-07-31 21:14:33.359747'),(15,'admin','0001_initial','2019-07-31 21:14:34.391694'),(16,'admin','0002_logentry_remove_auto_add','2019-07-31 21:14:34.714259'),(17,'admin','0003_logentry_add_action_flag_choices','2019-07-31 21:14:34.725338'),(18,'android_app','0001_initial','2019-07-31 21:14:34.787897'),(19,'caportal','0001_initial','2019-07-31 21:14:34.854934'),(20,'caportal','0002_auto_20190730_1648','2019-07-31 21:14:35.089256'),(21,'caportal','0003_submittask','2019-07-31 21:14:35.163703'),(22,'caportal','0004_auto_20190730_1711','2019-07-31 21:14:35.627752'),(23,'caportal','0005_auto_20190730_1715','2019-07-31 21:14:35.659698'),(24,'caportal','0006_auto_20190731_1943','2019-07-31 21:14:35.688746'),(25,'caportal','0007_auto_20190731_2114','2019-07-31 21:14:35.705068'),(26,'events','0001_initial','2019-07-31 21:14:35.828460'),(27,'events','0002_auto_20190730_1618','2019-07-31 21:14:36.301883'),(28,'events','0003_remove_event_ecell_user','2019-07-31 21:14:36.825447'),(29,'events','0004_event_ecell_user','2019-07-31 21:14:36.940560'),(30,'events','0005_auto_20190731_0219','2019-07-31 21:14:37.305848'),(31,'events','0006_auto_20190731_1943','2019-07-31 21:14:37.523556'),(32,'mentors','0001_initial','2019-07-31 21:14:37.611985'),(33,'mentors','0002_mentor_ecell_user','2019-07-31 21:14:37.748986'),(34,'sessions','0001_initial','2019-07-31 21:14:37.974796'),(35,'speakers','0001_initial','2019-07-31 21:14:38.093157'),(36,'sponsors','0001_initial','2019-07-31 21:14:38.158880'),(37,'sponsors','0002_sponsor_ecell_user','2019-07-31 21:14:38.291116'),(38,'startups','0001_initial','2019-07-31 21:14:38.515602'),(39,'startups','0002_startup_ecell_user','2019-07-31 21:14:38.665948'),(40,'team','0001_initial','2019-07-31 21:14:38.905455'),(41,'team','0002_member_team_type','2019-07-31 21:14:39.019159'),(42,'team','0003_remove_member_team_type','2019-07-31 21:14:39.125862');
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
INSERT INTO `django_session` VALUES ('in3be7nrxhvzuvuxm63f7021j7z9cicv','YzQ0ZTBhMDM4ZDI3NGM3MTE3NzE5Zjc3MzhlNzE0MzZkZTIxNzk1NTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4N2ZlOGU3YTY1M2MzNTliZjc0YWZiMTY2MTY0YmFjYTdiMTY1NjZhIn0=','2019-08-14 21:44:40.693807');
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
INSERT INTO `events_event` VALUES (12,'IGNITION','E-hall','2018-08-01','10:00 am','\"Ignition\" is a business model competition that will connect ideas of entrepreneurs with investors. This will help the startups to gain traction and also provide an opportunity to be funded by some of the top investors in india. A business model competition aims to connect the new start-ups with investors by creating a direct channel between them.','static/uploads/events/cover/ig111.png','static/uploads/events/icon/ig111.png','bmodel.ecellnitrr@gmail.com',1,2019,'2019-07-26 13:38:06.046435','2019-07-31 18:29:42.194285',NULL),(13,'START-UP CAMP','To be decided...','2018-09-09','TBD','In a startup nothing happens unless you make it happen. Startup camp promotes entrepreneurship among students and also provides a start-up initiative activity amongst the growing startups in and around Chhattisgarh. Several high scale and low scale startups in and around Chhattisgarh are invited and provided with an opportunity to publicize their products/services and grab some interns for their companies. The investors attend the pitches of the startups and on recognizing a potential startup, provide seed funding to those startups.','static/uploads/events/cover/sc111.png','static/uploads/events/icon/sc111.png',NULL,1,2019,'2019-07-26 13:38:14.032085','2019-07-26 13:38:14.032140',NULL),(14,'CRICNOMETRICA','To be decided...','2018-09-08','TBD','Cricnometrica is an event designed to provide a stage for entertainment as well as a platform to showcase the individuals or teams knowledge of the game of cricket. A team game comprising of three rounds which range from pen paper to slide-shows and leads finally to virtual bidding to create a team of their own. The team with the maximum points at the end of the third round is declared as the winner.','static/uploads/events/cover/cr111_wKu2qYt.png','static/uploads/events/icon/cr111_wKu2qYt.png',NULL,1,2019,'2019-07-26 13:38:21.254730','2019-07-26 13:38:21.254784',NULL),(15,'B-QUIZ','To be decided...','2018-09-08','TBD','Get your cortex fixed cause this quiz spins your head around. Let\'s explore some of the de facto of business quizzing. Guide your cerebrum\'s way to this b-quiz that will catapult you into the world of business facts and figures.','static/uploads/events/cover/bq111.png','static/uploads/events/icon/bq111.png',NULL,1,2019,'2019-07-26 13:38:28.778598','2019-07-26 13:38:28.778651',NULL),(16,'WALLSTREET','To be decided...','2018-09-08','TBD','A virtual share market contest for the brokers out there. Invest money and take home big. The winner keeps it all. Challenge your mind’s trafficking power and run away with the best bet in this virtual stock broking exchange.','static/uploads/events/cover/wallstreet_FwBl6yR111.png','static/uploads/events/icon/wallstreet_FwBl6yR111.png',NULL,1,2019,'2019-07-26 13:38:38.916571','2019-07-26 13:38:38.916624',NULL),(17,'UTKRISHTH','To be decided...','2018-09-08','TBD','This event acknowledges the grass root works and aims at promoting low scale entrepreneurs from villages for the progress of nation. The event aims at felicitating the potential rural startup ideas to promote the entrepreneurial spirit at the grass root levels.','static/uploads/events/cover/uk111.png','static/uploads/events/icon/uk111.png',NULL,1,2019,'2019-07-26 13:38:48.703142','2019-07-26 13:38:48.703196',NULL),(18,'ENTROPY','To be decided...','2018-09-08','TBD','Giving wings to ideas and ground to the unknown, this session is to guide, inspire and bring out the best from the budding comrades. Words, if they hit the adrenaline rush can make you do wonders. This speaker session can make you look beyond the ordinary in order to be above the ordinary.','static/uploads/events/cover/en111.png','static/uploads/events/icon/en111.png',NULL,1,2019,'2019-07-26 13:38:55.298656','2019-07-26 13:38:55.298710',NULL),(19,'E-Gathering','To be decided...','2018-09-08','TBD','Like to end the E summit 18 on a high, the closing ceremony called the E-Gathering will feature a musical performance and a stand-up performance which will be revealed soon.','static/uploads/events/cover/eg111.png','static/uploads/events/icon/eg111.png',NULL,1,2019,'2019-07-26 13:39:02.570581','2019-07-26 13:39:02.570635',NULL),(20,'B-Case Study','To be decided...','2018-09-08','TBD','B-Case Study (Business Case Study ) is an event designed to act as a solution provider for the erupting real life scenarios in the business domain. A team event comprising of three rounds with range from pen paper to a final report submission. The reports being presented before the judges and the team with maximum awarded points is declared as the winner.','static/uploads/events/cover/bc111.png','static/uploads/events/icon/bc111.png',NULL,1,2019,'2019-07-26 13:39:09.840846','2019-07-26 13:39:09.840901',NULL),(22,'INNOVATION EXPO','TPO Terrace','2019-06-29','TBD','A stepping stone for your future startup ideas.','static/uploads/events/cover/Frame.png','static/uploads/events/icon/Frame.png',NULL,1,2019,'2019-07-26 13:39:19.490019','2019-07-26 13:39:19.490071',NULL);
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
INSERT INTO `speakers_speaker` VALUES (1,'Daniel Ramamoorthy','Startup Coach',NULL,'static/uploads/speakers/Daniel Ramamoorthy.jpg','eight@nitrr.ac.in','','An eclectic person who is a box of wonder, excelling the entrepreneurial domain: from being an entrepreneur and a motivational speaker, coaching others to being a world famous host and speaker!',2018,'https://www.linkedin.com/in/iamdanram/',1,'2019-07-26 12:33:41.945407','2019-07-26 13:13:41.690866'),(2,'Kumar Gaurav','Founder Cashaa',NULL,'static/uploads/speakers/Kumar Gaurav.jpg','nine@nitrr.ac.in','','Honored with an extraordinary status by the US government, holding a place in 100 influential people in the world of blockchain, Mr Kumar Gaurav, Founder of Cashaa has set the bar high and stood out of the crowd.',2018,'https://www.linkedin.com/in/kgauravitc',1,'2019-07-26 12:33:46.417348','2019-07-26 13:13:41.908903'),(3,'Nandini Vaidyanathan','CARMa CONNECT',NULL,'static/uploads/speakers/Nandini Vaidyanathan.jpg','ten@nitrr.ac.in','','An academician turned entrepreneurial mentor, founder of CARMa CONNECT, this visionary lady has created an eco-system to nourish the spirit of entrepreneurship.',2018,'https://www.linkedin.com/in/nandinivaidyanathan',1,'2019-07-26 12:33:49.340917','2019-07-26 13:13:42.036401'),(4,'Dr Gopichand Katragadda','Chief Technology Officer at Tata Sons',NULL,'static/uploads/speakers/Dr Gopichand Katragadda.jpg','eleven@nitrr.ac.in','','Dr Gopichand Katragadda is the group chief technology officer at Tata Sons. In this role, Dr Katragadda drives technology and innovation for the Tata group leveraging cross-company synergies. He also serves as a director on the boards of select Tata companies.',2018,'https://in.linkedin.com/in/gopichand-katragadda-2b1a0b7',1,'2019-07-26 12:33:51.485742','2019-07-26 13:13:42.175042'),(5,'Rishabh Dev','Managing Director at Mapplinks and Mapplinks Academy',NULL,'static/uploads/speakers/Rishabh Dev.jpg','four@nitrr.ac.in','','ES17 had Mr. Rishabh Dev – The Growth Hacking Bogeyman, a serial entrepreneur, presently the director of Mapplinks, India, who regularly enlightens enthusiasts with growth hacking and digital marketing. Not only growth hacking, but also many diverse fields intrigued him. His approach towards finding the optimal solutions for his clients is commendable.',2017,'https://www.linkedin.com/in/rishabhdev/',1,'2019-07-26 12:33:55.502522','2019-07-28 12:03:03.377122'),(6,'Abi Aryan','The London School of Economics and Political Science (LSE)',NULL,'static/uploads/speakers/Abi Aryan.jpg','three@nitrr.ac.in','','Ms. Abi, a perfect instance of beauty with brains, graduated from London School of Economics and Political Science and has a deep interest in AI and Blockchain. She has worked as a strategist with AI companies globally and is the founder of Delegano and Director at Women Who Code, Delhi. Having a great experience as TED speaker, Abi also worked on Augmented Reality and Bit coin / Block chain companies in U.K.',2017,'https://www.linkedin.com/in/abi-aryan-168131112/',1,'2019-07-26 12:33:59.629016','2019-07-28 12:03:21.460646'),(7,'Rahul Tyagi','Vice President - Training at Lucideus',NULL,'static/uploads/speakers/Rahul Tyagi.jpg','five@nitrr.ac.in','','Rahul being a perfect combination of intelligence and dedication, at present is the co- founder of Lucideus. Handling the toughest of the cyberspace issues with a magical ease is what makes Rahul stand out from the rest and also he speaks regularly at prestigious platforms like Exhibition India group, IPPAI, DCD convergence, Security Watch India, Micro Finance in Asia.  Recently, he has been honored with Fortune India\'s 40 under40 2018.',2017,'https://www.linkedin.com/in/iamrahultyagi/',1,'2019-07-26 12:34:01.717905','2019-07-28 12:03:31.342882'),(8,'Mr. Saransh Roy','Associate at Invest India',NULL,'static/uploads/speakers/Mr. Saransh Roy.jpg','saranshroy@gmail.com','','Mr. Roy is an associate at Invest India, Startup India Hub. Saransh being a versatile individual, addresses people on the need to empower the country’s economy by creating jobs rather than seeking one and the governmental policies guarding startup related agendas.  Apart from this, he has an expertise in dealing with Intellectual Property Rights, including issues like credit guarantee, tax exemption laws and others.',2017,'https://www.linkedin.com/in/saransh-roy-01b966a2/',1,'2019-07-26 12:34:03.458521','2019-07-28 12:03:41.889792'),(9,'Harjeet Khanduja','Vice President Human Resource at Reliance JIO Infocomm',NULL,'static/uploads/speakers/Harjeet Khanduja.jpg','three@nitrr.ac.in','','Currently, Mr. Harjeet is the Vice President Human Resources at Reliance Jio. He has smartly led various HR projects in India, Canada as well as U.S.A. for various market giants like Reliance, Tata, Piramal, just to name a few. With a vivacious personality, Harjeet has not only led HR, but also been a blogger, poet and an international speaker, addressing people on the practicalities of dealing with the pre and post startup essentials.  We at E-Summit 2017 witnessed this great, humorous and intellectual person.',2017,'https://www.linkedin.com/in/harjeetkhanduja/',1,'2019-07-26 12:34:08.219708','2019-07-28 12:04:01.641743'),(10,'Anil Joshi','Managing Partner, Unicorn India Ventures',NULL,'static/uploads/speakers/Anil Joshi.jpg','two@ecell.nitrr.ac.in','','Anil Joshi is the Managing Partner at Unicorn India Ventures, a SEBI approved venture fund under AIF-I Category. The man with his vision has helped in closing approximately 60 start-up deals with over INR 100 crs investments and has served on the Board of five companies and is involved with various incubation centers as a mentor in India and outside India.',2016,'https://www.linkedin.com/in/aniljoshi74/',1,'2019-07-26 12:34:11.297937','2019-07-28 12:04:24.522020'),(11,'Ravi Ranjan','NASSCOM 10000 Startups',NULL,'static/uploads/speakers/Ravi Ranjan.jpg','one@hello.com','','Ravi Ranjan is the head of Nasscom, 10000 startups, Kolkata. He is one of those Indians who has played an influential role in giving the ground to many startups. It is aimed at incubating, funding and supporting 10,000 technology start-ups in India over the next ten years. The person with an inventive bend for entrepreneurship is the person who has taken to himself to bring the best startups in Indian market.',2016,'https://www.linkedin.com/in/raviranjan2/',1,'2019-07-26 12:34:15.864983','2019-07-28 12:04:34.846124'),(12,'Aditi Chourasia','Co-Founder and CEO EngineerBabu',NULL,'static/uploads/speakers/Aditi Chourasia.jpg','hello@ebabu.com','','The lady with the spirit of a real entrepreneur has always aimed to scale new heights. The co-founder of Engineer Babu, she has always preached that startup doesn’t mean money and there should be a good idea and passion to accomplish your task. She is a true inspiration and a symbol of women empowerment.',2016,'https://www.linkedin.com/in/aditichaurasia/',1,'2019-07-26 12:34:18.400453','2019-07-28 12:04:52.475250'),(13,'Anup Kalbalia','Tech Lead at Directi',NULL,'static/uploads/speakers/Anup Kalbalia.jpg','anup.kalbalia@gmail.com','','The tech geek with an experience of working in various programming languages like Delphi, C and Java, has built enterprise applications using different technologies like TCP sockets, HTTP, Restful Web Services etc. Being the Tech Lead at Directi, he has always visioned to create a pool of budding entrepreneurs who can make a difference to society.',2016,'https://www.linkedin.com/in/anupkalbalia/',1,'2019-07-26 12:34:21.943703','2019-07-28 12:05:00.687681'),(14,'Kumaran Brothers','AppGodimensions',NULL,'static/uploads/speakers/Kumaran Brothers.jpg','apps.godimensions@gmail.com','','Hailing from Chennai, two brothers Shravan Kumaran(12) and Sanjay Kumaran(10) went onto become the youngest Indian entrepreneurs as well as CEO of GoDimensions in 2012.\r\nBrothers have developed a number of mobile applications for android as well as iOS and aim that within a few years about 50% of the apps in the market should be owned by them. They also created VR based headsets called GoVR. The brothers were a part of E- Summit 2015 and since then, they are unstoppable.',2015,'https://twitter.com/AppGodimensions',1,'2019-07-26 12:34:25.974852','2019-07-28 12:05:25.248459'),(15,'Prateek Sethi','Communication Designer and Creative Director at Trip Creative Services',NULL,'static/uploads/speakers/Prateek Sethi.jpg','prateek@wearetrip.in','','Prateek has been the Communication Designer and Creative Director at Trip Creative Services, since 2009. Graduated from National Institute of Design, Ahmedabad, he has worked on animation and effects for various leading television channels and shows. He is a very creative person with an imaginative approach towards his projects and also is a talented speaker.',2015,'https://www.facebook.com/prateeksethi',1,'2019-07-26 12:34:28.636652','2019-07-28 12:05:40.586957');
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
) ENGINE=InnoDB AUTO_INCREMENT=1090 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sponsors_sponsor`
--

LOCK TABLES `sponsors_sponsor` WRITE;
/*!40000 ALTER TABLE `sponsors_sponsor` DISABLE KEYS */;
INSERT INTO `sponsors_sponsor` VALUES (999,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/Department of Women & Child Development.jpeg','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-27 11:34:50.601413','2019-07-27 11:34:50.601460',NULL),(1000,'36Inc','Incubation partner','static/uploads/sponsors/36Inc.jpeg','','https://www.facebook.com/36inc/','ATS',1,2018,'2019-07-27 11:34:51.192425','2019-07-27 11:34:51.192482',NULL),(1003,'Bank Of Maharashtra','Bank Of Maharashtra is our Banking Partner','static/uploads/sponsors/Bank Of Maharashtra.jpeg','8827544244','https://www.bankofmaharashtra.in/','ATS',1,2017,'2019-07-27 11:34:52.861748','2019-07-27 11:34:52.861806',NULL),(1004,'Chhattisgarh Tourism','Tourism Partner','static/uploads/sponsors/Chhattisgarh Tourism.jpeg','','https://twitter.com/GoChhattisgarh?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor','ATS',1,2018,'2019-07-27 11:34:53.280599','2019-07-27 11:34:53.280655',NULL),(1005,'Think Raipur','In association with Think Raipur','static/uploads/sponsors/Think Raipur.jpeg','8827544244','https://dare2compete.com/o/think-raipur-raipur-smart-city-limited-25381','ATS',1,2017,'2019-07-27 11:34:53.638137','2019-07-27 11:34:53.638198',NULL),(1006,'36Inc','Incubation Partner','static/uploads/sponsors/36Inc.jpeg','9685164762','https://36inc.in/','ATS',1,2017,'2019-07-27 11:34:54.878335','2019-07-27 11:34:54.878393',NULL),(1007,'94.3 My FM','Our Radio Partner','static/uploads/sponsors/94.3 My FM.jpeg','81030 29146','http://myfmindia.com/','ATS',1,2017,'2019-07-27 11:34:55.441335','2019-07-27 11:34:55.441415',NULL),(1008,'OYO Rooms','Title Partner','static/uploads/sponsors/OYO Rooms.jpeg','','https://www.oyorooms.com/','ATS',1,2017,'2019-07-27 11:34:55.851819','2019-07-27 11:34:55.851881',NULL),(1009,'Veg Centre','Food Partner','static/uploads/sponsors/Veg Centre.jpeg','+91 77140 699','https://m.facebook.com/VegCentre/','ATS',1,2016,'2019-07-27 11:34:56.255916','2019-07-27 11:34:56.255974',NULL),(1010,'Infibeam.com','Associative Partner','static/uploads/sponsors/Infibeam.com.jpeg','','https://www.infibeam.com/','ATS',1,2015,'2019-07-27 11:34:56.818696','2019-07-27 11:34:56.818748',NULL),(1011,'The Music Cafe','Food Partner','static/uploads/sponsors/The Music Cafe.jpeg','91099 93102','https://m.facebook.com/TheMusicCafeRaipur/','ATS',1,2016,'2019-07-27 11:34:57.476991','2019-07-27 11:34:57.477050',NULL),(1012,'Resonance','Education Partner','static/uploads/sponsors/Resonance.jpeg','','https://www.resonance.ac.in/','ATS',1,2015,'2019-07-27 11:34:58.038145','2019-07-27 11:34:58.038200',NULL),(1013,'Saavn','Music Partner','static/uploads/sponsors/Saavn.jpeg','','https://www.jiosaavn.com/','ATS',1,2015,'2019-07-27 11:34:58.439718','2019-07-27 11:34:58.439798',NULL),(1014,'Meenakshi\'s Salon and Academy','Grooming Partner','static/uploads/sponsors/Meenakshi\'s Salon and Academy.jpeg','77140 04013','https://m.facebook.com/meenakshisalon/','ATS',1,2016,'2019-07-27 11:34:59.201056','2019-07-27 11:34:59.201125',NULL),(1015,'The College Fever','Event Booking Partner','static/uploads/sponsors/The College Fever.jpeg','7760686052','https://www.thecollegefever.com','ATS',1,2016,'2019-07-27 11:35:00.013692','2019-07-27 11:35:00.013758',NULL),(1016,'TRIPPY','Travel Partner','static/uploads/sponsors/TRIPPY.jpeg','','http://www.trippycar.com/','PLS',1,2018,'2019-07-27 11:35:00.619514','2019-07-27 11:35:00.619582',NULL),(1017,'Konsole Group','Digital Outreach Partner','static/uploads/sponsors/Konsole Group.jpeg','','http://www.konsolegroup.com/','PLS',1,2018,'2019-07-27 11:35:01.321460','2019-07-27 11:35:01.321501',NULL),(1018,'INH News','Electronic Media Partner','static/uploads/sponsors/INH News.jpeg','','https://www.facebook.com/inhnewsindia/','PLS',1,2018,'2019-07-27 11:35:02.058049','2019-07-27 11:35:02.058111',NULL),(1019,'Hotel Babylon International','Hospitality Partner','static/uploads/sponsors/Hotel Babylon International.jpeg','','http://hotelbabylon.in/','PLS',1,2018,'2019-07-27 11:35:03.017174','2019-07-27 11:35:03.017238',NULL),(1020,'Bisleri Fonzo','Beverage Partner','static/uploads/sponsors/Bisleri Fonzo.jpeg','','https://www.bisleri.com/product/fonzo','PLS',1,2018,'2019-07-27 11:35:03.495069','2019-07-27 11:35:03.495130',NULL),(1021,'CSPDCL','CSPDCL is our Platinum Sponsor','static/uploads/sponsors/CSPDCL.jpeg','8827544244','https://cspdcl.co.in/cseb/(S(ftnnym4waxjjv3qe24eafhdv))/frmHome.aspx','PLS',1,2017,'2019-07-27 11:35:04.053776','2019-07-27 11:35:04.053837',NULL),(1022,'Chhattisgarh Tourism','Chhattisgarh Tourism is our Platinum Sonsor','static/uploads/sponsors/Chhattisgarh Tourism.jpeg','077142 24600','http://visitcg.in/','PLS',1,2017,'2019-07-27 11:35:05.019947','2019-07-27 11:35:05.020007',NULL),(1023,'IBC 24','IBC24 is our Electronic Media Partner','static/uploads/sponsors/IBC 24.jpeg','077140 08700','http://www.ibc24.in','PLS',1,2017,'2019-07-27 11:35:05.908576','2019-07-27 11:35:05.908638',NULL),(1024,'ZONE','ZONE by the PARK hotels is our Platinum Sponsor','static/uploads/sponsors/ZONE.jpeg','077143 20000','http://www.zonebythepark.com','PLS',1,2017,'2019-07-27 11:35:06.240837','2019-07-27 11:35:06.240893',NULL),(1025,'T.I.M.E','Platinum Partner','static/uploads/sponsors/T.I.M.E.jpeg','','https://www.time4education.com/','PLS',1,2015,'2019-07-27 11:35:06.673867','2019-07-27 11:35:06.673928',NULL),(1026,'The Trophy House','Memento Partner','static/uploads/sponsors/The Trophy House.jpeg','','http://www.thetrophyhouse.in/','GDS',1,2018,'2019-07-27 11:35:07.921484','2019-07-27 11:35:07.921544',NULL),(1027,'WILLMAN','Stationary Partner','static/uploads/sponsors/WILLMAN.jpeg','','https://willman-paper-mart.business.site/','GDS',1,2018,'2019-07-27 11:35:08.388562','2019-07-27 11:35:08.388617',NULL),(1028,'Orange Le Spirit Cafe','Food Partner','static/uploads/sponsors/Orange Le Spirit Cafe.jpeg','','https://www.facebook.com/orangelespirit/','GDS',1,2018,'2019-07-27 11:35:09.105763','2019-07-27 11:35:09.105820',NULL),(1029,'CHIPS Chhattisgarh','CHIPS Chhattisgarh is our Gold Sponsor','static/uploads/sponsors/CHIPS Chhattisgarh.jpeg','(771) 4066205','http://www.chips.gov.in','GDS',1,2017,'2019-07-27 11:35:09.657236','2019-07-27 11:35:09.657297',NULL),(1030,'Avinash Group','Avinash Group is our Gold Sponsor','static/uploads/sponsors/Avinash Group.jpeg','077140 33425','http://www.avinashgroup.com','GDS',1,2017,'2019-07-27 11:35:10.679735','2019-07-27 11:35:10.679795',NULL),(1031,'Lalganga Colors Mall','Lalganga Colors Mall is our Gold Sponsor','static/uploads/sponsors/Lalganga Colors Mall.jpeg','077140 69999','http://www.lalgangabuilders.com/portal/portfolio/colors-mall','GDS',1,2017,'2019-07-27 11:35:11.822849','2019-07-27 11:35:11.822923',NULL),(1032,'TheHitavada','Print Media Partner','static/uploads/sponsors/TheHitavada.jpeg','','http://www.ehitavada.com/','GDS',1,2018,'2019-07-27 11:35:12.393795','2019-07-27 11:35:12.393873',NULL),(1033,'CSIDC','Industrial Partner','static/uploads/sponsors/CSIDC.jpeg','','https://csidc.in/home2/index.php/en/','GDS',1,2016,'2019-07-27 11:35:13.101441','2019-07-27 11:35:13.101503',NULL),(1034,'CHIPS','Technology Partner','static/uploads/sponsors/CHIPS.jpeg','771 4014158','http://www.chips.gov.in/','GDS',1,2016,'2019-07-27 11:35:13.605427','2019-07-27 11:35:13.605465',NULL),(1035,'Oyo Rooms','Hospitality Partner','static/uploads/sponsors/Oyo Rooms.jpeg','','https://www.oyorooms.com','GDS',1,2016,'2019-07-27 11:35:14.123218','2019-07-27 11:35:14.123273',NULL),(1036,'ATKT.IN','Event Publicity Partner','static/uploads/sponsors/ATKT.IN.jpeg','','https://www.facebook.com/ATKT.in/','TLS',1,2018,'2019-07-27 11:35:14.470535','2019-07-27 11:35:14.470591',NULL),(1037,'Vedam Spa & Salon','Spa & Salon Partner','static/uploads/sponsors/Vedam Spa & Salon.jpeg','','https://www.justdial.com/Raipur-Chhattisgarh/Vedam-Spa-Unisex-Salon-Beside-Jai-Jawan-Petrol-Pump-Raipur-HO/9999PX771-X771-180516161332-E3Y7_BZDET','TLS',1,2018,'2019-07-27 11:35:14.899486','2019-07-27 11:35:14.899549',NULL),(1038,'YourStory','Campus Publicity Partner','static/uploads/sponsors/YourStory.jpeg','','http://yourstory.com','TLS',1,2018,'2019-07-27 11:35:15.249623','2019-07-27 11:35:15.249681',NULL),(1039,'Nai Dunia','Print Media Partner','static/uploads/sponsors/Nai Dunia.jpeg','7314711000','https://naidunia.jagran.com/','TLS',1,2017,'2019-07-27 11:35:15.660244','2019-07-27 11:35:15.660307',NULL),(1040,'Dev Creator\'s of Memories','Photography Partner','static/uploads/sponsors/Dev Creator\'s of Memories.jpeg','','https://ecell.nitrr.ac.in/','TLS',1,2018,'2019-07-27 11:35:16.289519','2019-07-27 11:35:16.289576',NULL),(1041,'Hello Intern','Partner','static/uploads/sponsors/Hello Intern.jpeg','','https://www.hellointern.com/','TLS',1,2017,'2019-07-27 11:35:16.843370','2019-07-27 11:35:16.843432',NULL),(1042,'IndiaMart','Partner','static/uploads/sponsors/IndiaMart.jpeg','','https://www.indiamart.com/','TLS',1,2015,'2019-07-27 11:35:17.238011','2019-07-27 11:35:17.238067',NULL),(1043,'PT Education','Title Partner','static/uploads/sponsors/PT Education.jpeg','','https://ptraipur.com/','TLS',1,2015,'2019-07-27 11:35:17.643434','2019-07-27 11:35:17.643495',NULL),(1044,'Shopper\'s Stop','Title Partner','static/uploads/sponsors/Shopper\'s Stop.jpeg','','https://www.shoppersstop.com/','TLS',1,2015,'2019-07-27 11:35:18.003588','2019-07-27 11:35:18.003650',NULL),(1045,'Career Launcher','Career Partner','static/uploads/sponsors/Career Launcher.jpeg','','https://www.careerlauncher.com/','TLS',1,2015,'2019-07-27 11:35:18.372306','2019-07-27 11:35:18.372363',NULL),(1046,'Pagal Guy','Partner','static/uploads/sponsors/Pagal Guy.jpeg','','https://www.pagalguy.com/','TLS',1,2015,'2019-07-27 11:35:19.038470','2019-07-27 11:35:19.038532',NULL),(1047,'My FM 94.3','FM Partner','static/uploads/sponsors/My FM 94.3.jpeg','','http://myfmindia.com/','TLS',1,2016,'2019-07-27 11:35:19.475143','2019-07-27 11:35:19.475202',NULL),(1048,'Chhattisgarh Tourism','Tourism Partner','static/uploads/sponsors/Chhattisgarh Tourism.jpeg','771 4224600','http://visitcg.in/','TLS',1,2016,'2019-07-27 11:35:19.934232','2019-07-27 11:35:19.934289',NULL),(1049,'Venture Catalysts','Investment Partner','static/uploads/sponsors/Venture Catalysts.jpeg','','http://venturecatalysts.in/raipur/','PRS',1,2018,'2019-07-27 11:35:20.293939','2019-07-27 11:35:20.293996',NULL),(1050,'Zoodify','Communication Partner','static/uploads/sponsors/Zoodify.jpeg','','https://ecell.nitrr.ac.in/','PRS',1,2018,'2019-07-27 11:35:20.792355','2019-07-27 11:35:20.792413',NULL),(1051,'Sams Pizza','Sams Pizza is our Pizza Partner','static/uploads/sponsors/Sams Pizza.jpeg','077140 00053','https://www.samspizza.in','PRS',1,2017,'2019-07-27 11:35:21.558517','2019-07-27 11:35:21.558581',NULL),(1052,'Raipur Development Authority','RDA is our Event Partner','static/uploads/sponsors/Raipur Development Authority.jpeg','077730 99888','http://www.rdaraipur.com','PRS',1,2017,'2019-07-27 11:35:22.113187','2019-07-27 11:35:22.113227',NULL),(1053,'RiON','RiON is our Recreation Partner','static/uploads/sponsors/RiON.jpeg','081091 22345','https://www.facebook.com/profile.php?id=100009219539017','PRS',1,2017,'2019-07-27 11:35:22.574083','2019-07-27 11:35:22.574122',NULL),(1054,'Happily Unmarried','Happily Unmaried is our Merchandise Partner','static/uploads/sponsors/Happily Unmarried.jpeg','1800 3000 588','https://www.happilyunmarried.com','PRS',1,2017,'2019-07-27 11:35:23.017482','2019-07-27 11:35:23.017523',NULL),(1055,'Zebronics','Zebronics is our Multimedia Partner','static/uploads/sponsors/Zebronics.jpeg','081091 22345','https://zebronics.com','PRS',1,2017,'2019-07-27 11:35:24.597290','2019-07-27 11:35:24.597352',NULL),(1056,'Sky Ventures','Sky Ventures is our Travel Partner','static/uploads/sponsors/Sky Ventures.jpeg','8827544244','http://www.skyventure.in/','PRS',1,2017,'2019-07-27 11:35:24.988851','2019-07-27 11:35:24.988909',NULL),(1057,'Benchmark Group','Benchmark Group is our digital outreach partner.','static/uploads/sponsors/Benchmark Group.jpeg','081031 30039','http://benchmarksgroup.com/','PRS',1,2017,'2019-07-27 11:35:25.400715','2019-07-27 11:35:25.400753',NULL),(1058,'qM Print','qM Print is our Printing Partner','static/uploads/sponsors/qM Print.jpeg','077140 99444','http://www.qmprint.com/','PRS',1,2017,'2019-07-27 11:35:26.565294','2019-07-27 11:35:26.565352',NULL),(1059,'Shri Krishna IAS','Shri Krishna IAS is our coaching partner','static/uploads/sponsors/Shri Krishna IAS.jpeg','8827544244','http://shrikrishnaias.com/','PRS',1,2017,'2019-07-27 11:35:27.349636','2019-07-27 11:35:27.349678',NULL),(1060,'Souled Store','Souled Store is our Gift Partner','static/uploads/sponsors/Souled Store.jpeg','022 3965 3110','https://www.thesouledstore.com/','PRS',1,2017,'2019-07-27 11:35:27.724638','2019-07-27 11:35:27.724696',NULL),(1061,'Goose Burps','Goose Burps is our Cafe Partner','static/uploads/sponsors/Goose Burps.jpeg','9676996769','http://gooseburps.com/','PRS',1,2017,'2019-07-27 11:35:28.469793','2019-07-27 11:35:28.469834',NULL),(1062,'Samishu','Samishu is our food partner','static/uploads/sponsors/Samishu.jpeg','8827544244','https://www.justdial.com/raipur-chhattisgarh/Samishu-Jain-Thali-Services-Near-police-thana-Purani-Basti-Raipur/9999PX771-X771-170713214339-P5D5_BZDET?utm_source=adwords&utm_medium=codered&gclid=Cj0KCQ','PRS',1,2017,'2019-07-27 11:35:28.812861','2019-07-27 11:35:28.812899',NULL),(1063,'Lasting Impressions','Lasting Impressions is our Photography Partner','static/uploads/sponsors/Lasting Impressions.jpeg','077140 88110','https://www.justdial.com/Raipur-chhattisgarh/Impression-Graphix-We-Do-It-Best-Opposite-Khalsa-School-Pandri/9999PX771-X771-140119185038-N2J1_BZDET','PRS',1,2017,'2019-07-27 11:35:29.151514','2019-07-27 11:35:29.151570',NULL),(1064,'Vennington Court','Vennington Court is our Hospitality Partner','static/uploads/sponsors/Vennington Court.jpeg','9522220862','http://venningtoncourt.com/','PRS',1,2017,'2019-07-27 11:35:29.772548','2019-07-27 11:35:29.772586',NULL),(1065,'ATKT.IN','ATKT.IN is our online media partner','static/uploads/sponsors/ATKT.IN.jpeg','081091 22345','http://atkt.in/','PRS',1,2017,'2019-07-27 11:35:30.215692','2019-07-27 11:35:30.215749',NULL),(1066,'AB Classes','Event Partner','static/uploads/sponsors/AB Classes.jpeg','098317 40080','http://www.abclasses.co.in','PRS',1,2017,'2019-07-27 11:35:30.588863','2019-07-27 11:35:30.588917',NULL),(1067,'MOBILE10x','Technical Incubation Partner','static/uploads/sponsors/MOBILE10x.jpeg','','https://www.mobile10x.in/hub/mobile10x-raipur-hub','PRS',1,2018,'2019-07-27 11:35:31.067285','2019-07-27 11:35:31.067345',NULL),(1068,'HEADSTART','Ecosystem Partner','static/uploads/sponsors/HEADSTART.jpeg','','http://www.headstart.in/','PRS',1,2018,'2019-07-27 11:35:31.423996','2019-07-27 11:35:31.424052',NULL),(1069,'Seeta Travels','Travel Partner','static/uploads/sponsors/Seeta Travels.jpeg','','https://m.indiamart.com/seeta-tour-travels/aboutus.html','PRS',1,2016,'2019-07-27 11:35:31.837162','2019-07-27 11:35:31.837218',NULL),(1070,'The Trohpy House','The Trophy House is our Memento Partner','static/uploads/sponsors/The Trohpy House.jpeg','081091 22345','https://www.justdial.com/Raipur-chhattisgarh/The-Trophy-House-Oppo-Amantran-Mens-Parlour-Satti-Bazar-Sadar-Bazar/9999PX771-X771-130608021706-S2W3_BZDET','PRS',1,2017,'2019-07-27 11:35:32.182348','2019-07-27 11:35:32.182421',NULL),(1071,'Blooms And Grooms','Our Partner','static/uploads/sponsors/Blooms And Grooms.jpeg','9753953461','http://www.directoryworld.in/flower-shop-raipur/','PRS',1,2017,'2019-07-27 11:35:32.998023','2019-07-27 11:35:32.998080',NULL),(1072,'Sam\'s Kreations','Salon Partner','static/uploads/sponsors/Sam\'s Kreations.jpeg','097642 11228','https://www.justdial.com/Raipur-Chhattisgarh/Sams-Kreations-The-Unisex-Salon-And-Academy-Opposite-Shiv-Sena-Office-Behind-Pragati-College-Choubey-Colony/9999PX771-X771-150205193119-A9V1_BZDET','PRS',1,2017,'2019-07-27 11:35:35.248787','2019-07-27 11:35:35.248846',NULL),(1073,'Senov Tech','Partner','static/uploads/sponsors/Senov Tech.jpeg','070003 87001','https://www.justdial.com/Raipur-Chhattisgarh/Senov-Tech-Devendra-Nagar/9999PX771-X771-180910174138-K6X7_BZDET','PRS',1,2017,'2019-07-27 11:35:35.608401','2019-07-27 11:35:35.608456',NULL),(1074,'Your Story','Campus Publicity Partner','static/uploads/sponsors/Your Story.jpeg','','https://yourstory.com','PRS',1,2017,'2019-07-27 11:35:36.151299','2019-07-27 11:35:36.151358',NULL),(1075,'Appu Sweets','Food partner','static/uploads/sponsors/Appu Sweets.jpeg','','https://appu-sweets.business.site/','PRS',1,2015,'2019-07-27 11:35:36.653355','2019-07-27 11:35:36.653416',NULL),(1076,'Interview Street','Partner','static/uploads/sponsors/Interview Street.jpeg','','https://www.hackerrank.com/interviewstreet','PRS',1,2015,'2019-07-27 11:35:36.995175','2019-07-27 11:35:36.995232',NULL),(1077,'The Signage','R&D partner','static/uploads/sponsors/The Signage.jpeg','9835 19 3084','http://www.thesignage.co.in/','PRS',1,2016,'2019-07-27 11:35:37.657944','2019-07-27 11:35:37.658006',NULL),(1078,'Hotel Maurya','Hospitality Partner','static/uploads/sponsors/Hotel Maurya.jpeg','771 4200500','https://www.themayurahotels.com/','PRS',1,2016,'2019-07-27 11:35:37.975544','2019-07-27 11:35:37.975584',NULL),(1079,'Hotel Aditya','Hospitality Partner','static/uploads/sponsors/Hotel Aditya.jpeg','771-4032941','http://hoteladityaraipur.com/','PRS',1,2016,'2019-07-27 11:35:38.703886','2019-07-27 11:35:38.703942',NULL),(1080,'Celebration Group','Hospitality Partner','static/uploads/sponsors/Celebration Group.jpeg','9425203151','http://www.celebrationworld.in','PRS',1,2016,'2019-07-27 11:35:39.198818','2019-07-27 11:35:39.198877',NULL),(1081,'Hello Intern','Internship Partner','static/uploads/sponsors/Hello Intern.jpeg','40-49492040','https://www.hellointern.com/','PRS',1,2016,'2019-07-27 11:35:39.874804','2019-07-27 11:35:39.874863',NULL),(1082,'Eyedea','Advertising Partner','static/uploads/sponsors/Eyedea.jpeg','81203 10001','https://m.facebook.com/adevents10/','PRS',1,2016,'2019-07-27 11:35:40.781634','2019-07-27 11:35:40.781674',NULL),(1083,'Moshik\'s','Food Partner','static/uploads/sponsors/Moshik\'s.jpeg','8982712308','http://moshiks.in','PRS',1,2016,'2019-07-27 11:35:41.280838','2019-07-27 11:35:41.280896',NULL),(1084,'It\'s Me Cafe','Food Partner','static/uploads/sponsors/It\'s Me Cafe.jpeg','91099 93110','https://m.facebook.com/itsmecaferaipur/','PRS',1,2016,'2019-07-27 11:35:41.764390','2019-07-27 11:35:41.764439',NULL),(1085,'Your Story','Campus Publicity Partner','static/uploads/sponsors/Your Story.jpeg','','https://yourstory.com/','PRS',1,2016,'2019-07-27 11:35:42.253910','2019-07-27 11:35:42.253972',NULL),(1086,'IBC 24','Media Partner','static/uploads/sponsors/IBC 24.jpeg','771-4008700','https://www.ibc24.in/','PRS',1,2016,'2019-07-27 11:35:42.672321','2019-07-27 11:35:42.672381',NULL),(1087,'ACB India Limited','Energy Partner','static/uploads/sponsors/ACB India Limited.jpeg','0124-2719000','http://www.acbindia.com/','PRS',1,2016,'2019-07-27 11:35:43.227913','2019-07-27 11:35:43.227976',NULL),(1088,'Benchmark Group','Digital Marketing Partner','static/uploads/sponsors/Benchmark Group.jpeg','','http://benchmarksgroup.com/','PRS',1,2016,'2019-07-27 11:35:43.654155','2019-07-27 11:35:43.654198',NULL),(1089,'Dare 2 Compete','','static/uploads/sponsors/0.png','','https://dare2compete.com/','ATS',1,2018,'2019-07-28 05:34:51.660233','2019-07-28 05:37:49.656081',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=218 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_customuser`
--

LOCK TABLES `users_customuser` WRITE;
/*!40000 ALTER TABLE `users_customuser` DISABLE KEYS */;
INSERT INTO `users_customuser` VALUES (1,'pbkdf2_sha256$150000$JJr8Bwcta6BK$kLF8j/+W0iQftPwv74k/mojNLQukzZVK7SJ4c9nssVA=','2019-07-31 21:44:40.000000',1,1,1,'2019-07-19 09:53:55.000000','admin@gmail.com','admin','is admin','admin@gmail.com',NULL,0,'8940073123',0,0,0,0,0,0,'',0,'OCO',NULL,NULL,'2019-07-31 21:45:25.601678','2019-07-19 09:53:55.499054'),(2,'pbkdf2_sha256$150000$HbpzRd2B4jYh$hMinEPEfz/JVwFlmKaTxFNJMVdZxfHyWXaqcd8pbTGQ=',NULL,0,0,1,'2019-07-21 05:28:23.103363','naveennvrgup@gmail.com','naveen','sundar','naveennvrgup@gmail.com','6378',1,'8940073123',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.599199','2019-07-21 05:28:23.103910'),(7,'pbkdf2_sha256$150000$fLHgr3CD6rCk$jQ9rO+4I++aCVOzfnQPvTyjmxKQuV46DeP3y4tqisdo=',NULL,0,0,1,'2019-07-21 06:41:47.559098','mehakmetha41@gmail.com','Mehak','Mehta','mehakmetha41@gmail.com','9129',1,'8296883679',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.604337','2019-07-21 06:41:47.559520'),(8,'pbkdf2_sha256$150000$g9bzY0vqiWCA$Su2t+7iyvEgmp7a2KGkz3N7PHrXUk1QRbV3paQS/5OI=',NULL,0,0,1,'2019-07-21 06:46:01.046082','sagarshah2326@gmail.com','Sagar','Shah','sagarshah2326@gmail.com','7887',1,'9979906255',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.608095','2019-07-21 06:46:01.046764'),(9,'pbkdf2_sha256$150000$M0Q9qFmFs09a$bmjk8jpgDd9mOzuIgKYwHAWwIsP6SWjcbcPJVoDJOb8=',NULL,0,0,1,'2019-07-21 06:46:19.061453','rahulworld108@gmail.com','Rahul','Kumar','rahulworld108@gmail.com','8655',1,'7282866888',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.612048','2019-07-21 06:46:19.061878'),(10,'pbkdf2_sha256$150000$juGY8qeNWjnY$QdSSO+XUxhXYRlEOFIenDu+391yfKKOh3I7hAz1ONSM=',NULL,0,0,1,'2019-07-21 06:47:25.895734','nishu181099@gmail.com','nishu','chandravashi','nishu181099@gmail.com','4437',1,'8435249197',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.614228','2019-07-21 06:47:25.896463'),(11,'pbkdf2_sha256$150000$Z8ojN8gm8Kko$1WDEJNFEiwwSkKAuRnDVkCrZUb/hJb0SuUaSbHLusiY=',NULL,0,0,1,'2019-07-21 06:49:03.210812','gautamaastha45@gmail.com','Aastha','Gautam','gautamaastha45@gmail.com','3024',1,'6264542238',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.618201','2019-07-21 06:49:03.211282'),(12,'pbkdf2_sha256$150000$lCFQeiDLIz6C$J3YzpC3FyKQsQCi2Te3ZNYCD/AZEOyJIvjamXncecmo=',NULL,0,0,1,'2019-07-21 06:49:50.149247','v.roughuse.j@gmail.com','MURUGESH','VIJAY','v.roughuse.j@gmail.com','3039',1,'7291848877',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.622821','2019-07-21 06:49:50.149839'),(13,'pbkdf2_sha256$150000$XvdMNsVN10hw$Kfj953DYsP8bKMSyJGSQkohisoT7t9RvxRwQZq70+yk=',NULL,0,0,1,'2019-07-21 06:51:37.174442','usaidk55@gmail.com','Mohammad','Usaid','usaidk55@gmail.com','6095',1,'9926487699',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.627387','2019-07-21 06:51:37.174866'),(14,'pbkdf2_sha256$150000$1v8B4AczziCt$iayCHawmtsmXFHE6PeZOODOsyxBMd8kLvOhJhK3adiA=',NULL,0,0,1,'2019-07-21 06:52:39.553250','sonubiswal2k@gmail.com','Sanmaya','Biswal','sonubiswal2k@gmail.com','8058',1,'7327040347',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.632492','2019-07-21 06:52:39.553657'),(15,'pbkdf2_sha256$150000$WHJLq452Tfse$6oEswj4oATzRynb1W3D0C8TcTCSvntTVcrC7PTTuSOM=',NULL,0,0,1,'2019-07-21 06:52:43.062512','pawankalecse@gmail.com','Pawan','Kale','pawankalecse@gmail.com','6504',1,'8698633458',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.637350','2019-07-21 06:52:43.062945'),(16,'pbkdf2_sha256$150000$tJjgVThr0Vkj$fQ5b+gUFnjRkwJhaNV/J+tv0HEjIJdyNIZNMzFbaynk=',NULL,0,0,1,'2019-07-21 06:52:57.826479','maahirsharma2001@gmail.com','Maahir','Sharma','maahirsharma2001@gmail.com','5730',1,'7011765137',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.642808','2019-07-21 06:52:57.827006'),(17,'pbkdf2_sha256$150000$qwHVB2BS0Fqx$jdF9hYH/AarIHj/eUulOs/TFKF4tLwT6vVvplqIkkJk=',NULL,0,0,1,'2019-07-21 06:54:27.699598','2112chandansharma@gmail.com','Chandan','Sharma','2112chandansharma@gmail.com','2169',1,'8815246814',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.647370','2019-07-21 06:54:27.700132'),(18,'pbkdf2_sha256$150000$vZUimcuf0M3A$07GHdE+mB3POUe1q7nl0y78YodIQWX4QqUnPfqluyXQ=',NULL,0,0,1,'2019-07-21 06:57:46.734099','arshad2690@gmail.com','Arshad','Mohammed','arshad2690@gmail.com','9245',1,'7842425788',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.651356','2019-07-21 06:57:46.734512'),(19,'pbkdf2_sha256$150000$qoaBBHqkHlWM$s3lIKzLh0snzRmiY3utU36WEM42g+6RxPscqwoRs3fY=',NULL,0,0,1,'2019-07-21 06:59:17.320180','vaibhavjoshi2499@gmail.com','Vaibhav','Joshi','vaibhavjoshi2499@gmail.com','4992',1,'9165128668',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.655607','2019-07-21 06:59:17.320641'),(20,'pbkdf2_sha256$150000$mT8EvBEAD1gk$AwPZbaxSNHT/iPTp2ex3MYs7kdzqdHxTEHqau/9UdP0=',NULL,0,0,1,'2019-07-21 06:59:27.008055','shanthakumarv7@gmail.com','Shantha','Kumar V','shanthakumarv7@gmail.com','5604',1,'8072009700',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.660193','2019-07-21 06:59:27.008468'),(21,'pbkdf2_sha256$150000$3MZI86KQBHJY$pQxXDirlLP8qUVBf2YOucmRtj8ow4PzPdS8kPd+zIW4=',NULL,0,0,1,'2019-07-21 07:02:35.323112','mohnishgoyal26@gmail.com','Mohnish','Goyal','mohnishgoyal26@gmail.com','1842',1,'9461779608',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.664600','2019-07-21 07:02:35.323610'),(22,'pbkdf2_sha256$150000$Mdh0szjQvjMR$2iRKllX/DUbapH+xoGPqhWv9j4ZCl3oVZS6g48bjXJA=',NULL,0,0,1,'2019-07-21 07:04:08.926759','aishwarya.srilko18@gmail.com','Aishwarya','Srivastava','aishwarya.srilko18@gmail.com','3165',1,'7905561910',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.669209','2019-07-21 07:04:08.927179'),(23,'pbkdf2_sha256$150000$BvRQboTiuIpS$xZN2SKMuXsiY96Q6OnbIZKDemhArP+V58exYRqZapWA=',NULL,0,0,1,'2019-07-21 07:04:39.654037','adityadeshmukh168@gmail.com','Aditya','Deshmukh','adityadeshmukh168@gmail.com','2914',1,'9584913846',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.674351','2019-07-21 07:04:39.654468'),(24,'pbkdf2_sha256$150000$jcZuLBbwNugG$y6DJwY6zgVk93nwhvx1g1Z0+30VVQJjehV+NQ45s8RM=',NULL,0,0,1,'2019-07-21 07:05:47.118939','mukundgarg1331@gmail.com','Mukund','Garg','mukundgarg1331@gmail.com','2821',1,'8265816417',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.678402','2019-07-21 07:05:47.119369'),(25,'pbkdf2_sha256$150000$yok9Erbkn7a4$kys3proDuF4c8qtOhdBBy1H1N0DjXhXrWUOIIejzkVw=',NULL,0,0,1,'2019-07-21 07:06:04.577748','chamul91@gmail.com','Praneet Amul Akash','Cherukuri','chamul91@gmail.com','2348',1,'7207820217',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.682496','2019-07-21 07:06:04.578457'),(26,'pbkdf2_sha256$150000$ns0dqXL5kals$HVLnAfuaVXqh8FTPE0xVwdDtagsv0o2KMjmH4LvsWv0=',NULL,0,0,1,'2019-07-21 07:06:23.971847','pashwaniaji123@gmail.com','ASHWANI','PRATAP SINGH','pashwaniaji123@gmail.com','9862',1,'6388810545',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.686277','2019-07-21 07:06:23.972389'),(27,'pbkdf2_sha256$150000$eO4U9zJHDGQE$nvhen1403+D3ZaRWiEhdjKSUAW5FZbRLD5m61JMrcqo=',NULL,0,0,1,'2019-07-21 07:14:48.983394','pinaki7ghosh@gmail.com','PINAKI','GHOSH','pinaki7ghosh@gmail.com','3483',1,'8240287622',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.690114','2019-07-21 07:14:48.983862'),(28,'pbkdf2_sha256$150000$GcAOtfVR4n0y$Dm3Hrm7/PaDAlx5HTOSLD3Y5bW7ocBvuGSBwGpzq62E=',NULL,0,0,1,'2019-07-21 07:15:27.449818','suryapakki7@gmail.com','Surya','Sathwik','suryapakki7@gmail.com','9145',1,'9491600080',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.695885','2019-07-21 07:15:27.450224'),(29,'pbkdf2_sha256$150000$NYYcsfRslNxj$XrV/u1s9nEkRdbiTWr6B3N0Bzew5DJiLafs30c2hrAg=',NULL,0,0,1,'2019-07-21 07:16:55.537399','mustijabahmad@gmail.com','Mustijab','Ahmad','mustijabahmad@gmail.com','3381',1,'8979560158',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.700825','2019-07-21 07:16:55.537806'),(30,'pbkdf2_sha256$150000$ukZPFBtiI6Gl$IHLA/U9gYah7hTr8qmOfXT0wxvUgGZZr5aLsTG1Vf9k=',NULL,0,0,1,'2019-07-21 07:20:39.138058','ayush.971712@gmail.com','Ayush','Thakur','ayush.971712@gmail.com','8498',1,'9667071356',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.705490','2019-07-21 07:20:39.138485'),(31,'pbkdf2_sha256$150000$xy16X0u1rjFS$nFhzLpsFojxOOjlAyz8WMhvviBUQMrCIHk2AWwzRGSM=',NULL,0,0,1,'2019-07-21 07:26:00.237257','ajayshyam88@gmail.com','Ajay','Shyam','ajayshyam88@gmail.com','5543',1,'7032052823',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.711437','2019-07-21 07:26:00.237671'),(32,'pbkdf2_sha256$150000$3Kkkuk9Et7qB$oq5UlaShhqlCXADCxKOU68ECAeCuahDrilFn/jh1Lmc=',NULL,0,0,1,'2019-07-21 07:26:41.966603','abhishekaman356@gmail.com','Abhishek','Aman','abhishekaman356@gmail.com','8168',1,'7677431813',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.716935','2019-07-21 07:26:41.967020'),(33,'pbkdf2_sha256$150000$dQKNLcUiRYko$qfc48PQWz1cf1mxFfJZMkdvJNj/NHD2i/uLDtWPJWtg=',NULL,0,0,1,'2019-07-21 07:31:25.542741','sgdon142@gmail.com','Sparsh','Gupta','sgdon142@gmail.com','7741',1,'8279454261',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.721466','2019-07-21 07:31:25.543285'),(34,'pbkdf2_sha256$150000$bA66gg1YVJTP$2M8da/sXtbpNOnT98JgjQh3tPBYdOV9JnmG1jy7YF2o=',NULL,0,0,1,'2019-07-21 07:33:08.760492','harshvardhanhvv@gmail.com','Harshvardhan','Verma','harshvardhanhvv@gmail.com','6688',1,'8233812748',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.726143','2019-07-21 07:33:08.760934'),(35,'pbkdf2_sha256$150000$IWVsYg1MZ4dg$EbJ8NgTjYhDFScrwibLoa7/d7c2EcoKXCDumjOFHKK0=',NULL,0,0,1,'2019-07-21 07:38:39.014335','mrityunjaykr2040@gmail.com','MRITYUNJAY','KUMAR','mrityunjaykr2040@gmail.com','8649',1,'6204891471',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.730687','2019-07-21 07:38:39.014862'),(36,'pbkdf2_sha256$150000$sN8VKOUat97E$Eg6x0+DHzG5nPABgT+8V9nTcQY/C9hJVkRdWVOJxoGg=',NULL,0,0,1,'2019-07-21 07:42:27.468901','sethhritik22081999@gmail.com','Hritik','Seth','sethhritik22081999@gmail.com','1789',1,'7617833706',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.736209','2019-07-21 07:42:27.469428'),(37,'pbkdf2_sha256$150000$zmSARzcU5nD8$/M3S+tJfc0kiP1B8Nqr/KD6OMKy7SlkCFFMkZbfYuTk=',NULL,0,0,1,'2019-07-21 07:53:31.923875','surajtiwari688@gmail.com','Suraj','Tiwari','surajtiwari688@gmail.com','9370',1,'9093420925',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.742319','2019-07-21 07:53:31.924481'),(38,'pbkdf2_sha256$150000$BqFE7OHRm9L7$WfSFgCxcjgLYMPIjUIpBcPgvRxdCF13kgICI2cMjB+0=',NULL,0,0,1,'2019-07-21 07:57:05.207808','saraswathi825@gmai.com','Akshitha','ANNARAM','saraswathi825@gmai.com','2656',1,'9398847723',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.747285','2019-07-21 07:57:05.208446'),(39,'pbkdf2_sha256$150000$iJvWEaEyZbdQ$TA0mjKCmZWHSKPxqvIFRb6w/YpqkouJ4UOhWBs0FJWs=',NULL,0,0,1,'2019-07-21 08:10:50.439251','saumitramishra100@outlook.com','SAUMITRA','MISHRA','saumitramishra100@outlook.com','1767',1,'7355935698',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.751342','2019-07-21 08:10:50.439806'),(40,'pbkdf2_sha256$150000$iR9fjtFYIObR$xEvTqr+mLhBWOE2+C7n1GrnChgiCiKpeNThN31Esar4=',NULL,0,0,1,'2019-07-21 08:15:15.072085','shover@mail.com','ram','ramu','shover@mail.com','8902',0,'9205112898',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-21 08:15:15.072764','2019-07-21 08:15:15.072805'),(67,'pbkdf2_sha256$150000$8k0gbc6ZC7U5$1hy5qZETFR/UUB+po5X+eIOGd3kJDL0Cn25t7lIVsPc=',NULL,0,0,1,'2019-07-21 08:21:25.237400','kshriram610@gmail.com','Shriram','Kumar','kshriram610@gmail.com','9697',1,'7693034560',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.755198','2019-07-21 08:21:25.237845'),(77,'pbkdf2_sha256$150000$H4y51vMGQt5U$OauIfY6oTVW8SVn5fwvsJjwgKqGX5K6uAteMCFsG5w4=',NULL,0,0,1,'2019-07-21 08:51:52.894903','kapilmathur206@gmail.com','Kaushal','Kumar','kapilmathur206@gmail.com','2055',1,'8750298553',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.760506','2019-07-21 08:51:52.895399'),(78,'pbkdf2_sha256$150000$0VhPO8B1qLOP$t89n2lpMmNG0dwgcNqJfQql/4UDrLuHQDcca/VXRSWk=',NULL,0,0,1,'2019-07-21 08:53:42.162348','lalwanishefali2@gmail.com','Shefali','Lalwani','lalwanishefali2@gmail.com','7948',1,'9112872048',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.765503','2019-07-21 08:53:42.162769'),(79,'pbkdf2_sha256$150000$R1MxAQd4ZETd$1GBH140M6jTwzV/qedT+cEP6ei9ySHMt3O8p6+6QsgE=',NULL,0,0,1,'2019-07-21 09:11:44.773694','sehgalnishtha123@gmail.com','Nishtha','Sehgal','sehgalnishtha123@gmail.com','6415',1,'6264423932',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.770135','2019-07-21 09:11:44.774139'),(80,'pbkdf2_sha256$150000$n6yxHv2HYjS8$NIjKP225tFQViVlwVOQnh4oH+Cre0mVv78T7NYzrHrg=',NULL,0,0,1,'2019-07-21 09:30:04.839471','saraswathi825@gmail.com','Akshitha','ANNARAM','saraswathi825@gmail.com','7083',1,'9398847723',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.775111','2019-07-21 09:30:04.839885'),(81,'pbkdf2_sha256$150000$bRRpK0jr4aqv$bWNawLQ49wfIUYWPzFNY2NAsazSY0gQeKXYUFsGl/yo=',NULL,0,0,1,'2019-07-21 09:31:28.590941','mithlesh399pal@gmail.com','Mithlesh','Pal','mithlesh399pal@gmail.com','9014',1,'8982887185',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.779223','2019-07-21 09:31:28.591352'),(82,'pbkdf2_sha256$150000$cd5sQkbgcT5h$evcLtOwN3IGaQVvQIBmbGhSPkNvWttJKyqdPqh5m9TY=',NULL,0,0,1,'2019-07-21 10:06:26.251963','shahilkumarshriwastav@gmail.com','Shahil kumar','Shriwastav','shahilkumarshriwastav@gmail.com','4505',1,'7549580996',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.783102','2019-07-21 10:06:26.252406'),(83,'pbkdf2_sha256$150000$IOQmATfPCcZg$zTHgWeUHXDXIX8NMl6Y18xK/gl8V8HLVL7NXTrJJmAI=',NULL,0,0,1,'2019-07-21 10:32:20.514552','riteshbhaiya4@gmail.com','Ritesh','Bhaiya','riteshbhaiya4@gmail.com','1897',1,'8770955250',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.789636','2019-07-21 10:32:20.514969'),(84,'pbkdf2_sha256$150000$nngjhknOOXgl$6J/n0P8a0T9nlA1SRLMWvSD0NZBxc+rDa9UltsWYDWk=',NULL,0,0,1,'2019-07-21 10:33:21.874517','soumyarahangdale2212@gmail.com','Soumya','Rahangdale','soumyarahangdale2212@gmail.com','3775',1,'6265244652',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.794311','2019-07-21 10:33:21.875167'),(85,'pbkdf2_sha256$150000$cz2mVuxGofP5$XqPwF7xPn/Yz+CU8hxxt1LikoGiTkZ3vI0GAo43gaLA=',NULL,0,0,1,'2019-07-21 10:34:06.149792','rajatmishra9984@gmail.com','Rajat Kumar','Mishra','rajatmishra9984@gmail.com','2430',1,'6394740784',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.798487','2019-07-21 10:34:06.150236'),(86,'pbkdf2_sha256$150000$qkZH81RtoChi$R1R1mLzIEOkDi8eZjjf+PfmvQFy4A4Hq5gmcPVmIkrY=',NULL,0,0,1,'2019-07-21 10:34:21.083535','chandrakarsuyash@gmail.com','Suyash','Chandrakar','chandrakarsuyash@gmail.com','8085',1,'7000186457',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.803001','2019-07-21 10:34:21.083936'),(87,'pbkdf2_sha256$150000$bBUOeNbYQNWC$5ouxZNTgV4ofmsaelTXZ7iIFDQ9Vd8i+P7pXTehS5YM=',NULL,0,0,1,'2019-07-21 10:35:51.966472','goyalyashraj2000@gmail.com','Yashraj','Goyal','goyalyashraj2000@gmail.com','5205',1,'9522195954',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.806871','2019-07-21 10:35:51.966878'),(88,'pbkdf2_sha256$150000$SSI6c3GkrQiF$ph7juiuKNH3m4JT1IiCGz7f+zdXc5YsfQrH0JPaV0E4=',NULL,0,0,1,'2019-07-21 10:41:54.986209','himanshu98kurrey@gmail.com','Himanshu','Kurrey','himanshu98kurrey@gmail.com','9933',1,'6267056273',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.811449','2019-07-21 10:41:54.986620'),(89,'pbkdf2_sha256$150000$4eOERwh6EJZB$LrcGkW0I9v+jJLSGtcbTynRa3+yNVzwEBh//s4SVRjw=',NULL,0,0,1,'2019-07-21 10:43:42.431564','rishabchoubey2900@gmail.com','Rishab','Choubey','rishabchoubey2900@gmail.com','2371',1,'9926500103',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.815986','2019-07-21 10:43:42.431989'),(90,'pbkdf2_sha256$150000$R47aa9WC5rFT$a6n4AiZcIKNg8Zv3F8vycrllgBsp24Ysh9fTpj3Tm44=',NULL,0,0,1,'2019-07-21 10:43:49.331982','deepalisen100@gmail.com','Deepali','Sen','deepalisen100@gmail.com','4304',1,'8982794600',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.821359','2019-07-21 10:43:49.332400'),(91,'pbkdf2_sha256$150000$jyU3Gn9vHY85$juw9gJVs7jH63z7Hc/kK7iMI3NsElkt/JpV7Btd5c10=',NULL,0,0,1,'2019-07-21 10:44:35.149887','mmmanishmishra2210@gmail.com','Manish','Mishra','mmmanishmishra2210@gmail.com','1603',0,'7024333092',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-21 10:44:35.150274','2019-07-21 10:44:35.150295'),(92,'pbkdf2_sha256$150000$iYJ17lJzIq25$UwvHAFqv3Fo3h5kHJ1dUUZH620oPx4p92COipJOyvkk=',NULL,0,0,1,'2019-07-21 10:44:37.762102','mashirdav123@gmail.com','Mashir','Nizami','mashirdav123@gmail.com','4405',1,'9540824126',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.825644','2019-07-21 10:44:37.762557'),(93,'pbkdf2_sha256$150000$zY7oMbUgSFZD$26CnptFy9xVzwqXY8XBftfmxq0HkDOhMpTpF+v1efLY=',NULL,0,0,1,'2019-07-21 10:46:23.207052','manikpurivibhu@gmail.com','Vibhu','Manikpuri','manikpurivibhu@gmail.com','1795',1,'7225839190',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.830351','2019-07-21 10:46:23.207483'),(94,'pbkdf2_sha256$150000$0J6pao20cFxu$BKOm+RTz331d7t5bfod8X7ZP0DKdpDPm7S/5Qo0plzU=',NULL,0,0,1,'2019-07-21 10:47:37.857416','soumya.apj@gmail.com','Soumya','Sen','soumya.apj@gmail.com','3240',1,'8435719664',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.835405','2019-07-21 10:47:37.857896'),(95,'pbkdf2_sha256$150000$s3eOaghlAwrs$l3xM+nC1clUG2N7YDUekdLX+B8sELsnzrU6zclCFcWo=',NULL,0,0,1,'2019-07-21 10:48:35.479314','devyani.set@ssipmt.com','Devyani','Seth','devyani.set@ssipmt.com','1892',1,'9131453272',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.839639','2019-07-21 10:48:35.479792'),(96,'pbkdf2_sha256$150000$zcIIfmM0sSbi$SWb3KWUaBBtYmmjZ+Q2+m2qeCbL8a4nfCBkXLZX8AZk=',NULL,0,0,1,'2019-07-21 10:49:52.361542','tejaswanibhonsle@yahoo.com','Tejaswani','Bhonsle','tejaswanibhonsle@yahoo.com','2304',1,'7000711327',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.844802','2019-07-21 10:49:52.361997'),(97,'pbkdf2_sha256$150000$RVqEn53So7JG$UUy+T8gFN7AJfxok9WDZ+Rmig87gTo60YfQAB94xUSw=',NULL,0,0,1,'2019-07-21 10:50:12.286580','sahuvinita2605@gmail.com','Vinita','Sahu','sahuvinita2605@gmail.com','3164',1,'7000321529',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.849678','2019-07-21 10:50:12.286990'),(98,'pbkdf2_sha256$150000$4CnUnxT3HofS$rUVI3J1epeUtB+F3zouTyu48+U+58I/mXsLg7vno7J4=',NULL,0,0,1,'2019-07-21 10:50:32.697577','nilamverma01192@gmail.com','Nilam','Verma','nilamverma01192@gmail.com','1192',1,'7225868214',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.854287','2019-07-21 10:50:32.698012'),(99,'pbkdf2_sha256$150000$0rQm86S36Yqk$1CBLIlegkIyabVdDkBgPczjfwOt8p2Gyqu6LPfZgb4E=',NULL,0,0,1,'2019-07-21 10:53:10.118298','sonuabhishek337@gmail.com','G','Abhishek','sonuabhishek337@gmail.com','2021',1,'6264477337',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.859370','2019-07-21 10:53:10.118710'),(100,'pbkdf2_sha256$150000$scbrwDPE6Rk0$ZFtlPTVr/NhwQJCi0FWZDnJbhXTRCML3WpumtoOTMLc=',NULL,0,0,1,'2019-07-21 10:53:38.128780','shashankvaishnav1898@gmail.com','Shashank','Vaishnav','shashankvaishnav1898@gmail.com','7695',1,'8770831225',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.864863','2019-07-21 10:53:38.129230'),(101,'pbkdf2_sha256$150000$6WvY5td4gHR8$C56VhSodDOGNcErpYW5Q6ZXIDGBtWctnRlP6e/Px8u0=',NULL,0,0,1,'2019-07-21 10:54:00.513392','cs60381@gmail.com','Chandan','Kumar','cs60381@gmail.com','5877',1,'8178773420',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.871386','2019-07-21 10:54:00.513793'),(102,'pbkdf2_sha256$150000$Se0oJOqwVMMk$b0/aDlo/Q+fB3nhbkV/cK6GGPog+lqtSpVjiv3Hg6ok=',NULL,0,0,1,'2019-07-21 10:55:41.492904','ankitpathak150119999@gmail.com','Ankit','Pathak','ankitpathak150119999@gmail.com','3412',1,'9179880033',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.877250','2019-07-21 10:55:41.493406'),(103,'pbkdf2_sha256$150000$SKn97ZoRLaU4$jxhKM3NtkD3TbxR/IezXEp/8O9Aa91i+fd4dGxjeALo=',NULL,0,0,1,'2019-07-21 10:57:00.335263','paritosh.singh213@gmail.com','Paritosh','Singh','paritosh.singh213@gmail.com','9186',1,'9907738866',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.881332','2019-07-21 10:57:00.335677'),(104,'pbkdf2_sha256$150000$afRFthDu71Ap$ZwuRXsACzgBCWvvg95DqdP4siSmj+ajmCQEKs5Not0c=',NULL,0,0,1,'2019-07-21 10:59:18.794824','abhinavpateel40@gmail.com','Abhinav','Patel','abhinavpateel40@gmail.com','9529',1,'9617590258',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.885121','2019-07-21 10:59:18.795249'),(105,'pbkdf2_sha256$150000$V330PyiYwJiz$4uKcMhctt52S8/xPTKCekHDmDRLiiHF3T/lm4aa43Xw=',NULL,0,0,1,'2019-07-21 11:04:01.140603','shrutisinghal035@gmail.com','Shruti','Singhal','shrutisinghal035@gmail.com','2931',1,'9131740233',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.889453','2019-07-21 11:04:01.141086'),(106,'pbkdf2_sha256$150000$uxYVkLxrMlrZ$DdcIvXep4fyqqa++EsgB+WKtfwgn0IB2PtYLZzRY4BM=',NULL,0,0,1,'2019-07-21 11:06:47.410863','rameshmishra.korba001@gmail.com','Manish','Mishra','rameshmishra.korba001@gmail.com','6290',1,'7024333092',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.893480','2019-07-21 11:06:47.411351'),(107,'pbkdf2_sha256$150000$QlY4jg9VN0mP$fNEGtUtJ2sjrL9hCNKzW5CwKQ0YwJEUbQ79z54m2++8=',NULL,0,0,1,'2019-07-21 11:09:52.929405','singh.pushpraj088@gmail.com','Pushpraj','Singh','singh.pushpraj088@gmail.com','5377',1,'7723095237',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.897385','2019-07-21 11:09:52.929878'),(108,'pbkdf2_sha256$150000$e5QqyYpeskTr$p6hU73/ahjKQqbrbdfLLEE8yuvD+wbYK93uyYVuK/5k=',NULL,0,0,1,'2019-07-21 11:12:41.713431','mdmonis128@gmail.com','Md','Monis','mdmonis128@gmail.com','4803',1,'7067245904',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.901323','2019-07-21 11:12:41.713850'),(109,'pbkdf2_sha256$150000$W0rijYwhaOFl$xK5L/UPAFc1jKfhGqQJg5nZOqJjrV6tGqcuX0tdrzyM=',NULL,0,0,1,'2019-07-21 11:16:57.943494','immrishabh@gmail.com','Rishabh','Vishwakarma','immrishabh@gmail.com','3470',1,'7987212744',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.906012','2019-07-21 11:16:57.943912'),(110,'pbkdf2_sha256$150000$XwY3huSjHnj9$EkF22/gCoO570knPG3EnpnzMVFeCeeJ/fGsuuEtOJlg=',NULL,0,0,1,'2019-07-21 11:25:45.195764','labeebmt123@gmail.com','Labeeb','MT','labeebmt123@gmail.com','5841',1,'8281438136',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.910912','2019-07-21 11:25:45.196250'),(111,'pbkdf2_sha256$150000$azDGh4LjuJyq$VxIlfu6MmHmy4uL1Pcgi120eLtIUIhBgt7j+o/g4WUw=',NULL,0,0,1,'2019-07-21 11:28:19.373634','akankshaverma251999@gmail.com','akanksha','verma','akankshaverma251999@gmail.com','3495',0,'9893991907',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-21 11:28:19.374052','2019-07-21 11:28:19.374074'),(112,'pbkdf2_sha256$150000$r9vm7wHuIiai$XJN00kEua2jE6zNpZ35ATsDF4K+2J8981vWUf3NdzUQ=',NULL,0,0,1,'2019-07-21 11:34:00.542311','sourabh942000@gmail.com','Sourabh','Pradhan','sourabh942000@gmail.com','5149',1,'9098422528',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.915977','2019-07-21 11:34:00.542738'),(113,'pbkdf2_sha256$150000$NGAf26IXjOIA$Z0T3J2PVJfdjFeUNC7AbAiE4dlRyfyNgVNEXKR+f1/E=',NULL,0,0,1,'2019-07-21 11:49:53.556352','monishsingh26@gmail.com','Monish','Singh','monishsingh26@gmail.com','2047',1,'8982390790',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.921240','2019-07-21 11:49:53.556791'),(114,'pbkdf2_sha256$150000$OX8c3BXAF04V$Jb7G9ppYq1kbVQUNYDat9Jg0p4ml3g0A093x47AKBdw=',NULL,0,0,1,'2019-07-21 11:54:43.010992','shivamth072@gmail.com','Shivam','Thakur','shivamth072@gmail.com','8782',1,'7024772093',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.925508','2019-07-21 11:54:43.011401'),(115,'pbkdf2_sha256$150000$xnps21NCEQGS$ohsq0ocGU1LNI0hCfVMaum8GWk7P50hn/TG+z+W2smE=',NULL,0,0,1,'2019-07-21 11:57:12.757165','shivam.raipur1234@gmail.com','Shivam','Sahu','shivam.raipur1234@gmail.com','3002',1,'9516251235',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.929805','2019-07-21 11:57:12.757650'),(116,'pbkdf2_sha256$150000$dUSDvugsfuqr$ihAcRSjNHGGQPBHVDM0pfN8qPqT/4eC0H1iVeJ9E7MU=',NULL,0,0,1,'2019-07-21 12:08:23.043853','h046404@gmail.com','B','HARISH','h046404@gmail.com','1050',1,'9074996450',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.934032','2019-07-21 12:08:23.044270'),(117,'pbkdf2_sha256$150000$GBPtHqwhuvjG$sgMygRJFWFtPHbDIiKAg4tXmn/CCbGCO/y+q4VEbUvs=',NULL,0,0,1,'2019-07-21 12:09:16.181572','dewanganabhijeet99@gmail.com','Abhijeet','Dewangan','dewanganabhijeet99@gmail.com','4767',0,'9303931140',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-21 12:09:16.181984','2019-07-21 12:09:16.182006'),(118,'pbkdf2_sha256$150000$YiCPVNpvUeUD$ctETI4/hWcfeKvhuvKAfyGcZ5h9k2V4K6cIfPB6o0XA=',NULL,0,0,1,'2019-07-21 12:10:33.775267','rashiseth6@gmail.com','Rashi','Seth','rashiseth6@gmail.com','7831',1,'9454193166',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.937986','2019-07-21 12:10:33.775673'),(119,'pbkdf2_sha256$150000$S4LozLjtUCV1$NhB9N+JWRSbuPR76gWb8jRE72Hn4AfDY7tC2FVp7CIE=',NULL,0,0,1,'2019-07-21 12:11:24.710841','shuklaabhishek0057@gmail.com','Abhishek','Shukla','shuklaabhishek0057@gmail.com','7955',1,'9670211004',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.946495','2019-07-21 12:11:24.711258'),(120,'pbkdf2_sha256$150000$yKOsC4VxDNuf$5fWI/G3+wWf7OKdkwwoq/+hbjkRIX5avSD4ni7wzuQE=',NULL,0,0,1,'2019-07-21 12:13:17.939791','sksarthak88@gmail.com','Sarthak','Kumar','sksarthak88@gmail.com','5953',1,'8544110021',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.952014','2019-07-21 12:13:17.940372'),(121,'pbkdf2_sha256$150000$x1qaSuMu0VLp$xDRLGBhKV5K/ZaNB3XzA/xhrai7ij9M736dSjH8xLpw=',NULL,0,0,1,'2019-07-21 12:16:13.699613','vipul.badwaik@gmail.com','Vipul','Badwaik','vipul.badwaik@gmail.com','2663',1,'7999208661',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.957649','2019-07-21 12:16:13.700100'),(122,'pbkdf2_sha256$150000$o1Zrkx09m72X$cH8Z2jonviwiVEiWQrbrJzeHXgpm6XPjBogEBdAgnpw=',NULL,0,0,1,'2019-07-21 12:20:15.528249','yashaswi.agrawal2000@gmail.com','Yashaswi','Agrawal','yashaswi.agrawal2000@gmail.com','8355',1,'7999169771',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.961653','2019-07-21 12:20:15.528792'),(123,'pbkdf2_sha256$150000$PmQydoiI62bp$38ZDNa3BbJxtwHTC3PaEgzONFkUaCWaRIa4Ay/l/ppE=',NULL,0,0,1,'2019-07-21 12:23:54.759606','daminideep69@gmail.com','Shubhangi','Deep','daminideep69@gmail.com','9199',1,'9893168075',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.965591','2019-07-21 12:23:54.760160'),(124,'pbkdf2_sha256$150000$CLUDLlIpr6Lw$Z8z4hWaEuvV7W18q69gkkbxT79Gb5yNWnPH6d8AHTkg=',NULL,0,0,1,'2019-07-21 12:25:28.908724','akankshasrivastavanda@gmail.com','Akanksha','Srivastava','akankshasrivastavanda@gmail.com','5191',1,'9113185230',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.970938','2019-07-21 12:25:28.909152'),(125,'pbkdf2_sha256$150000$1bgy7xnMpgLw$PrE0M+7Cdke91SmW0w6ewlZ1/jVVRIc/yG4jFqDEorQ=',NULL,0,0,1,'2019-07-21 12:27:38.935133','akashshukla1442@gmail.com','Akash','Shukla','akashshukla1442@gmail.com','9270',1,'9284991769',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.976559','2019-07-21 12:27:38.935550'),(126,'pbkdf2_sha256$150000$ev1ZbmKekAjR$yFh0FZ8WgeKmbLMQFrh8irpTyL3YudaBQ/g4gvwlA68=',NULL,0,0,1,'2019-07-21 12:30:40.257964','yashi.18ben1017@abes.ac.in','Yashi','Srivastav','yashi.18ben1017@abes.ac.in','1018',1,'9870407915',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.981465','2019-07-21 12:30:40.258368'),(127,'pbkdf2_sha256$150000$QGdOnynz3HAI$FKv3S2EmISY2d9JJVfz4ixa7lZ/f5szKcamytjUbR3I=',NULL,0,0,1,'2019-07-21 12:44:06.162494','ananyajhawork@gmail.com','Ananya','Jha','ananyajhawork@gmail.com','9059',1,'6232717802',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.986969','2019-07-21 12:44:06.162933'),(128,'pbkdf2_sha256$150000$3bkmvxAVjuJD$6vHzvQgg52Koot3v4Z4kNUvf713qMhTTRs2HkqkPdlY=',NULL,0,0,1,'2019-07-21 12:50:53.083044','rishabhdewangan98@gmail.com','RISHABH','DEWANGAN','rishabhdewangan98@gmail.com','6842',1,'8818894548',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.992242','2019-07-21 12:50:53.083697'),(129,'pbkdf2_sha256$150000$BCaf9JIMc4m3$ZPjbuR6Ae/DM11/W4khz7ICHUom4DtJCBfksnIYk7y0=',NULL,0,0,1,'2019-07-21 13:22:34.621733','sharmapreksha2608@gmail.com','Preksha','Sharma','sharmapreksha2608@gmail.com','4508',1,'9691232051',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:35.996339','2019-07-21 13:22:34.622422'),(130,'pbkdf2_sha256$150000$cWl0CYnrxgfu$4Qgz1E3xMJFdH7Gq/Afx10wtN8X/15ZLgo66xnbR9H0=',NULL,0,0,1,'2019-07-21 13:25:33.668388','pavangade01@gmail.com','Pavan','Gade','pavangade01@gmail.com','7747',1,'8465036805',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.000522','2019-07-21 13:25:33.668892'),(131,'pbkdf2_sha256$150000$a0csm13WKotz$0vQvJM7WIfe0yEa5avls/aeZkRO1YAwQAiMo5DMdE9U=',NULL,0,0,1,'2019-07-21 13:31:33.040082','yohomoto1@gmail.com','Abhijeet','Dewangan','yohomoto1@gmail.com','2961',1,'9303931140',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.005412','2019-07-21 13:31:33.040572'),(132,'pbkdf2_sha256$150000$WZXfoWvFRyei$IQs8I5+FhxFmifKrCOTq8LiqNcXGFH1xH5NK6gFdaO0=',NULL,0,0,1,'2019-07-21 13:52:23.430352','Vermaadarsh800@gmail.com','Adarsh','Verma','Vermaadarsh800@gmail.com','2924',1,'9651099133',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.009630','2019-07-21 13:52:23.430776'),(133,'pbkdf2_sha256$150000$NJptPars8RYR$J5NyRi/0KmWQRXn5DeLuL+z0K7yoYkz4kJYKsWJc0FA=',NULL,0,0,1,'2019-07-21 14:32:55.121424','samikshas701@gmail.com','Samiksha','Sharma','samikshas701@gmail.com','2031',1,'6267193722',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.014048','2019-07-21 14:32:55.121856'),(134,'pbkdf2_sha256$150000$jcHZavpcn1oy$zEfd3/TgpzgQEGV8PwuyfOGf0fhNm+z008TokhsMx/s=',NULL,0,0,1,'2019-07-21 14:45:00.257706','singhalkritarth@gmail.com','Kritarth','Agrawal','singhalkritarth@gmail.com','1949',1,'6261581926',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.018575','2019-07-21 14:45:00.258156'),(135,'pbkdf2_sha256$150000$o00JZUkrBSSZ$PF9Acu76Vkz2whRQLx4CPT83bps49khl6rXHZ+7l9pc=',NULL,0,0,1,'2019-07-21 14:52:46.261500','abhinavajith1729@gmail.com','ABHINAV','AJITH','abhinavajith1729@gmail.com','7951',1,'9400035962',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.024464','2019-07-21 14:52:46.261912'),(136,'pbkdf2_sha256$150000$oss5CiAjEUJY$SUzKf0KWR9+YU0KVourZ/CxoP6CGKGwpD02WzyJPcas=',NULL,0,0,1,'2019-07-21 14:55:25.318363','sharmaa1198@gmail.com','Aarushi','Sharma','sharmaa1198@gmail.com','3622',1,'9871253202',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.029426','2019-07-21 14:55:25.319258'),(137,'pbkdf2_sha256$150000$TkxENqoXYnJt$p3GIc8+GSZLi4e70TRbpVtqb2maNdZO0cqGf8D9eMS4=',NULL,0,0,1,'2019-07-21 14:55:53.110426','awesome.abhishek.jha@gmail.com','Abhishek Kumar','Jha','awesome.abhishek.jha@gmail.com','3536',1,'8084937540',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.035136','2019-07-21 14:55:53.110775'),(139,'pbkdf2_sha256$150000$XBtLjKBZ6LqK$EMxYV6nz+3StFAQIGopNzz98+SKvvblyu0QwRCBkPxs=',NULL,0,0,1,'2019-07-21 14:59:24.118970','anandrahul792@gmail.com','Rahul','Anand','anandrahul792@gmail.com','2439',1,'8114585804',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.040343','2019-07-21 14:59:24.119385'),(140,'pbkdf2_sha256$150000$lNL7GURhj5Oo$+tN9C4RaeviFOz/12flegR9BJ65Y5pIa6VLWMtoAElY=',NULL,0,0,1,'2019-07-21 15:00:44.117243','maheshchowdary973@gmail.com','Mahesh','Babu','maheshchowdary973@gmail.com','6855',1,'6303103915',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.045605','2019-07-21 15:00:44.117750'),(141,'pbkdf2_sha256$150000$zzCpGHtIRnO3$uAOrQFfJW3KW0rJhyF4yyGIefyBHUTuvbMoRpZmOhio=',NULL,0,0,1,'2019-07-21 15:07:22.308431','hariompalkar@gmail.com','Hariom','Palkar','hariompalkar@gmail.com','5970',1,'7588089697',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.049946','2019-07-21 15:07:22.308964'),(142,'pbkdf2_sha256$150000$iYNVhwIXINgE$JrPS2tOOrZGD30/VUmPcjtQsmvBCmCARKErwnT//AE8=',NULL,0,0,1,'2019-07-21 15:07:57.743725','bhavani.rao0126@gmail.com','T.Bhavani','Rao','bhavani.rao0126@gmail.com','1179',1,'7354142654',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.054286','2019-07-21 15:07:57.744160'),(143,'pbkdf2_sha256$150000$mBxgqhImbbTh$wNkF+H1PGaFf9/8GMnzm8RjjTiJFWZRS4bsrUyztff0=',NULL,0,0,1,'2019-07-21 15:09:36.972238','harshikadewangan141@gmail.com','Harshika','Dewangan','harshikadewangan141@gmail.com','2770',1,'8085977127',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.059020','2019-07-21 15:09:36.972677'),(144,'pbkdf2_sha256$150000$UCmcoQiVW2uy$LBKp0nVDxz8DZNoIOtSkhVGC2KIGpjShwLdFmXuyHxc=',NULL,0,0,1,'2019-07-21 15:12:58.545967','jraparna24@gmail.com','Aparna','Rajput','jraparna24@gmail.com','7080',1,'9691252650',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.063006','2019-07-21 15:12:58.546382'),(145,'pbkdf2_sha256$150000$JQCpQjmhOvUn$phViIJo0TTidEWO/TiG7TVDrhwCPmsLak+cZ3KgYH0I=',NULL,0,0,1,'2019-07-21 15:14:23.266270','dewanganshubham077@gmail.com','Shubham','Dewangan','dewanganshubham077@gmail.com','5826',0,'7987301872',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-21 15:14:23.266718','2019-07-21 15:14:23.266740'),(146,'pbkdf2_sha256$150000$i3Q5LQU8UUJG$6RQ2RVWP3QSKclg8701JyUGVgpgzdQ8IRHVnG6mQPPk=',NULL,0,0,1,'2019-07-21 15:17:51.450286','shayarshrajs1998@gmail.com','Shayarsh Raj','soni','shayarshrajs1998@gmail.com','3302',1,'9755549393',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.067617','2019-07-21 15:17:51.450688'),(147,'pbkdf2_sha256$150000$eEGK4P6KEHmT$V/fRAR5G1daV/kZdQmrnXpJq691n3C1S4iORgn4LdXQ=',NULL,0,0,1,'2019-07-21 15:19:38.797902','tiwari24pramod@gmail.com','Pramod','Tiwari','tiwari24pramod@gmail.com','1028',1,'7879268847',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.072602','2019-07-21 15:19:38.798314'),(148,'pbkdf2_sha256$150000$9WMTzpvAisJS$LhAv5XvrxdYlh5FFeHjMDMSMSg4agJkafMsRYvVEN0o=',NULL,0,0,1,'2019-07-21 15:24:09.175289','nutts200@gmail.com','Aamena','Hussain','nutts200@gmail.com','3121',1,'9174924257',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.078414','2019-07-21 15:24:09.175743'),(149,'pbkdf2_sha256$150000$Yn8HyoUgWn8g$vHMjOz2vxYcK1te3TdLvvEM31iTAy0JhDhI2YZnerZk=',NULL,0,0,1,'2019-07-21 15:24:53.499381','kumarabhay7372@gmail.com','Abhay','Kumar','kumarabhay7372@gmail.com','1415',1,'8299051419',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.083265','2019-07-21 15:24:53.499794'),(150,'pbkdf2_sha256$150000$tWF7J8poYe6H$tSE3UUEqSYf7jiayut/vIPfqxfzCJ1qisqFuKzAz7p4=',NULL,0,0,1,'2019-07-21 15:26:20.569374','dewanganshubham563@gmail.com','Shubham','Dewangan','dewanganshubham563@gmail.com','8250',1,'7987301872',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.087298','2019-07-21 15:26:20.570154'),(151,'pbkdf2_sha256$150000$PtN50c5WnPJu$sX+wIyxtW574LMBYVsON+qSovksJU3xVTfEZS/OJt8E=',NULL,0,0,1,'2019-07-21 15:41:10.925045','Krsitanshu@gmail.com','Sitanshu','Kumar','Krsitanshu@gmail.com','2734',1,'9570156364',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.091986','2019-07-21 15:41:10.925743'),(152,'pbkdf2_sha256$150000$pt7cAIvfjJrW$cEFdZCM1mPAVCUlQnY3RUVD0hPzsOoykDEgPwigARqg=',NULL,0,0,1,'2019-07-21 15:43:09.424769','www.pranay841@gmail.com','Pranay','Kumar Reddy','www.pranay841@gmail.com','6815',1,'7731875898',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.098193','2019-07-21 15:43:09.425263'),(153,'pbkdf2_sha256$150000$Y4Ipvf7i7s78$bZcXmJM+OuA3q83PHHHMeyd9vYFNttkkjCTnf8mknYo=',NULL,0,0,1,'2019-07-21 15:44:55.282762','amber.khan1107@gmail.com','AMBER','KHAN','amber.khan1107@gmail.com','3820',1,'9691232640',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.103601','2019-07-21 15:44:55.283167'),(154,'pbkdf2_sha256$150000$79Z3B2SdW43J$9jMaNY+Pa7vT81T1o5ZnaxMdwLGqwYgrVanBVFVmIl8=',NULL,0,0,1,'2019-07-21 15:58:21.812263','hellsgate810@gmail.com','Sanskar','shukla','hellsgate810@gmail.com','4636',1,'6263657272',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.108409','2019-07-21 15:58:21.812669'),(155,'pbkdf2_sha256$150000$vynnyBNUqz8o$QeDyOda6f8doOR4josewI1hq+/F1FDzy82ynpXlnNT8=',NULL,0,0,1,'2019-07-21 16:08:45.995127','rahul.agarwal606@gmail.com','Rahul','Agarwal','rahul.agarwal606@gmail.com','1160',1,'7772884660',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.112850','2019-07-21 16:08:45.995561'),(156,'pbkdf2_sha256$150000$gAuR12kBvpD5$390V1zKI+IK3GzBLPxuUjrN2cUZJI01C1fOvb/PuV3s=',NULL,0,0,1,'2019-07-21 16:15:52.535913','rahulbundhe8888@gmail.com','RAHUL','BUNDHE','rahulbundhe8888@gmail.com','8340',0,'9011360261',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-21 16:15:52.536291','2019-07-21 16:15:52.536313'),(157,'pbkdf2_sha256$150000$SrqVZGLksomh$ejw1GJxZwYbpCyYGy9h6L56mPKV2gvjjCYdplPtw7G8=',NULL,0,0,1,'2019-07-21 16:28:28.918808','nayak.adarsh.250600@gmail.com','Adarsh','Nayak','nayak.adarsh.250600@gmail.com','7196',1,'9584636836',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.117064','2019-07-21 16:28:28.919225'),(158,'pbkdf2_sha256$150000$udWPeKt5DsWJ$SBrktkNGQtsEpWCM2nRO86aBgJwaIjHluu+2Ve3bXBo=',NULL,0,0,1,'2019-07-21 16:55:35.019443','samyak151999@gmail.com','Samyak','Jain','samyak151999@gmail.com','5043',1,'8329944649',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.121549','2019-07-21 16:55:35.019844'),(159,'pbkdf2_sha256$150000$ASt9wmyonTsn$Y84XZJ2fKnIbNQ+mTqN8/QOTBQ4H6jp+QVRGrNSaIIo=',NULL,0,0,1,'2019-07-21 16:56:10.338006','pallavi1230shanu@gmail.com','Pallavi','Singh','pallavi1230shanu@gmail.com','1365',1,'9691428512',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.126285','2019-07-21 16:56:10.338477'),(160,'pbkdf2_sha256$150000$al7IxH6P5KuX$HfqVoNQnwjZOEd4aiHeKxbz/Na4DQWzxe6InIpNJUnw=',NULL,0,0,1,'2019-07-21 17:01:50.529637','wani.minal@yahoo.in','Minal','Wani','wani.minal@yahoo.in','8869',1,'9096254160',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.131310','2019-07-21 17:01:50.532162'),(161,'pbkdf2_sha256$150000$4UJZWYUM2rWG$sNRWuq+hLlqRXNSQNd8z1qOrQSiu+TjdmBpP5Ys0RuQ=',NULL,0,0,1,'2019-07-21 17:29:25.891876','arindam.bose1999@gmail.com','Arindam','Bose','arindam.bose1999@gmail.com','5911',1,'8085638405',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.135867','2019-07-21 17:29:25.892281'),(162,'pbkdf2_sha256$150000$1IR6U7r863ol$INRIcfvkGWPmuQAqteaXCAVJcmdSzdHIkc9RsTQDxk0=',NULL,0,0,1,'2019-07-21 17:56:18.010940','pratikchaudhary@ieee.org','Pratik','Chaudhary','pratikchaudhary@ieee.org','2583',0,'9662870703',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-21 17:56:18.011415','2019-07-21 17:56:18.011440'),(163,'pbkdf2_sha256$150000$ibzcpa9ao410$/p3Q7qxJvd8sNY3XcR4kWfepfNCiPRFYJZfbSIhn7Ww=',NULL,0,0,1,'2019-07-21 18:04:25.102484','amarjeetyadav7292@gmail.com','Amarjeet','Yadav','amarjeetyadav7292@gmail.com','5922',0,'6263949339',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-21 18:04:25.102910','2019-07-21 18:04:25.102952'),(164,'pbkdf2_sha256$150000$HoNPrteNCWzs$Lv7z6izIdXSSeUNc8wqIi/VDN8CI2GzYDB9FpHv3ayQ=',NULL,0,0,1,'2019-07-21 18:42:31.531605','jitendraksahu23@gmail.com','Jitendra','Kumar Sahu','jitendraksahu23@gmail.com','8408',1,'8120419114',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.140736','2019-07-21 18:42:31.532084'),(165,'pbkdf2_sha256$150000$DG2AWLqJFJzY$1wlUloEL4qtWWtQyrJUrGP7OHI1BsuECAVaipgqSRO8=',NULL,0,0,1,'2019-07-21 18:48:02.401161','rawatkari554@gmail.com','Kartikey','Rawat','rawatkari554@gmail.com','8162',1,'8839256099',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.147078','2019-07-21 18:48:02.401627'),(166,'pbkdf2_sha256$150000$DcuswQH2Cql3$ppeZc5d8bKW3F+g2D8HaAdHSgtNq6AeyLnMHrwBfwvQ=',NULL,0,0,1,'2019-07-22 03:08:03.841900','rahulbundhe@gmail.com','Rahul','Bundhe','rahulbundhe@gmail.com','3744',1,'9011360261',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.151657','2019-07-22 03:08:03.842309'),(167,'pbkdf2_sha256$150000$a38mDZmJP6h4$Kq1bbmlFCfA+qVckAFYKtZOhz7gFw08IhPl/P0Z+ztc=',NULL,0,0,1,'2019-07-22 03:28:27.260333','rvshagrawal@gmail.com','Ravish','Agrawal','rvshagrawal@gmail.com','9744',1,'9229207204',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.156674','2019-07-22 03:28:27.260905'),(168,'pbkdf2_sha256$150000$nYMy9kpVUt2L$CMDhoBWyezFpVdq6JFDDJRQqSM681KKv/Fist75BurQ=',NULL,0,0,1,'2019-07-22 04:35:05.043610','anujbhadoria.anj@gmail.com','Bhanu','Pratap Singh','anujbhadoria.anj@gmail.com','1330',1,'7060531289',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.160768','2019-07-22 04:35:05.044225'),(169,'pbkdf2_sha256$150000$8qwIbWXL6snz$1HyBxg/RkEbpUDC3odiV20BSkuWh2P+BNyAC8MSkwsM=',NULL,0,0,1,'2019-07-22 04:46:51.994860','kavyamiyapuram@gmail.com','Kavya','Miyapuram','kavyamiyapuram@gmail.com','6103',1,'8186845399',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.165273','2019-07-22 04:46:51.995564'),(170,'pbkdf2_sha256$150000$dsY4UdnZO9oj$0De9fj/OdMMN8B+DqZrBKLUx4lErLlgj/kgqschC8to=',NULL,0,0,1,'2019-07-22 04:53:44.681983','archiesengar@gmail.com','Archie','Sengar','archiesengar@gmail.com','2193',1,'7747824177',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.171696','2019-07-22 04:53:44.682419'),(172,'pbkdf2_sha256$150000$WUstbJFg9L2g$Sd35P09i2dacw4rP6htsrmQJBuaEYGvdJ+ywcmV7X04=',NULL,0,0,1,'2019-07-22 05:42:27.082130','pchy.393@gmail.com','Pratik','Chaudhary','pchy.393@gmail.com','1864',0,'9662870703',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-22 05:42:27.082645','2019-07-22 05:42:27.082691'),(173,'pbkdf2_sha256$150000$KKggkygSrCz3$lRCbiC5zdhRxV/n1wQo3H1Kz3s/ba2VWyoryZNKxXEg=',NULL,0,0,1,'2019-07-22 05:44:49.777726','aarizk812@gmail.com','Mohammad','Aariz','aarizk812@gmail.com','6707',1,'8573983838',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.176538','2019-07-22 05:44:49.778307'),(174,'pbkdf2_sha256$150000$rrK8Pa1PkJrO$OfJYtsV/VWKsJWL1gOy7qgo7iX1sozI40F3I3DohHbE=',NULL,0,0,1,'2019-07-22 06:12:44.489563','msahil76640@gmail.com','Sahil','Mishra','msahil76640@gmail.com','4876',1,'8743906997',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.182712','2019-07-22 06:12:44.489985'),(175,'pbkdf2_sha256$150000$bIlC0267E4VE$Qn8o90Pkg6Atq7XwD9xPJ9tz1yXUHo/5w89xaa9KCwU=',NULL,0,0,1,'2019-07-22 06:40:54.481323','vinaykhandelwal999@gmail.com','VINAY','KHANDELWAL','vinaykhandelwal999@gmail.com','6872',0,'9893850647',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-22 06:40:54.481750','2019-07-22 06:40:54.481787'),(176,'pbkdf2_sha256$150000$fctVqKM79Bmu$C+Z4oTXb2yhHRFRMKuc3sdPZDotcMAEUcC/biflYUFQ=',NULL,0,0,1,'2019-07-22 06:58:33.466733','sumanshruti213@gmail.com','Suman','Shruti','sumanshruti213@gmail.com','7950',0,'6201948536',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-22 06:58:33.467307','2019-07-22 06:58:33.467343'),(177,'pbkdf2_sha256$150000$8jltzBMb7OhT$AYzWRoImVlL8dcEwsYnLByC6PFR0mr+ReciCK8EotDY=',NULL,0,0,1,'2019-07-22 07:11:01.165016','sabita.kum321@gmail.com','Sabita','Kumari','sabita.kum321@gmail.com','2306',1,'9931572952',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.188820','2019-07-22 07:11:01.165547'),(178,'pbkdf2_sha256$150000$sJjrBpVSVM9M$B+c8WLzqfj4Mz9Garr2F72htG+D6YqSWqvEE6kYScs4=',NULL,0,0,1,'2019-07-22 08:10:34.079124','me_mahato@rediffmail.com','Suman','Shruti','me_mahato@rediffmail.com','5889',1,'6201948536',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.194930','2019-07-22 08:10:34.079818'),(179,'pbkdf2_sha256$150000$uWX9bUhLqhY5$eaTrdF8YSoGL77y4fq7YtfERQ8Hh/OTFp/RGnLWpJCQ=',NULL,0,0,1,'2019-07-22 08:14:22.663329','pnssoftwares7@gmail.com','Shubham','Maurya','pnssoftwares7@gmail.com','6274',1,'9055667606',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.199784','2019-07-22 08:14:22.663927'),(180,'pbkdf2_sha256$150000$8DKPPiIT5IZV$MUpbC6lhqM7901+Bo7SnPGV3R5yCYlYQZHPym5kdPgw=',NULL,0,0,1,'2019-07-22 08:18:21.418854','prakharpandey224@gmail.com','Prakhar','Pandey','prakharpandey224@gmail.com','9894',1,'8839632022',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.204733','2019-07-22 08:18:21.419299'),(181,'pbkdf2_sha256$150000$C68UUJnrjZv6$/kmZf9ijZsmf33RtBudrxnONPNZyKYlqQoE4OSwDUFM=',NULL,0,0,1,'2019-07-22 09:05:55.476405','utkarshsrhm0@gmail.com','Utkarsh','Sharma','utkarshsrhm0@gmail.com','2746',1,'8410102600',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.209694','2019-07-22 09:05:55.476899'),(182,'pbkdf2_sha256$150000$aT3hMGIKTS2g$HpuwpMzdoC8qRARikvnf8Pz6lKdwxGsQRVAIwvRn+n8=',NULL,0,0,1,'2019-07-22 09:06:23.338014','mastera1999@gmail.com','Amber','Agarwal','mastera1999@gmail.com','1803',1,'8233914085',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.214194','2019-07-22 09:06:23.338435'),(183,'pbkdf2_sha256$150000$JiJkHLoytq38$MtmbFJlVWf5+e5t8S8dnXRZeNQkfceCLe7JD68Jpa/A=',NULL,0,0,1,'2019-07-22 09:59:16.682589','1651999shrishti@gmail.com','Shrishti','Gupta','1651999shrishti@gmail.com','5707',1,'8826297100',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.218737','2019-07-22 09:59:16.683050'),(184,'pbkdf2_sha256$150000$ce084Xt6Hl8M$0KNDcrdds3+xgNEbB7nMv3ucs0jREtj8aIrVJ+0ViXM=',NULL,0,0,1,'2019-07-22 10:29:17.195362','sinha.atul911@gmail.com','ATUL','SINHA','sinha.atul911@gmail.com','3144',1,'7004584232',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.223177','2019-07-22 10:29:17.195820'),(185,'pbkdf2_sha256$150000$pIpuyoFoVLb5$Ay/jPMULi6Ifvs456Iai6EjsUH/iMewhWayW+WCfGsg=',NULL,0,0,1,'2019-07-22 10:34:52.153034','anant.vaish@gmail.com','Anant','Vaish','anant.vaish@gmail.com','9262',1,'7233090239',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.227599','2019-07-22 10:34:52.153609'),(186,'pbkdf2_sha256$150000$0HtD5P2cHO6B$PwnGEX10SCC+bV1u7RdreHk82+oTQ+O54fXdQTJBi6A=',NULL,0,0,1,'2019-07-22 11:38:38.021509','vandanarao.engg@gmail.com','Vandana','N','vandanarao.engg@gmail.com','7768',1,'9340608089',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.234542','2019-07-22 11:38:38.021971'),(187,'pbkdf2_sha256$150000$CWlimDv6RjIo$EXyva6n+gFZ65KqeGKhvMOle4p8LqpgrX0rYlHMLrbo=',NULL,0,0,1,'2019-07-22 13:05:29.953930','yashchichani@gmail.com','Yash','Chichani','yashchichani@gmail.com','4321',1,'9039251793',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.243068','2019-07-22 13:05:29.954422'),(188,'pbkdf2_sha256$150000$XxmEY5G9HvBQ$bmymNMms7Djt1+cNVbjcTIpOR5pS10HOKo54IzNWuxY=',NULL,0,0,1,'2019-07-22 14:54:46.741397','keshkar.amor@gmail.com','Roma','Keshkr','keshkar.amor@gmail.com','7353',1,'9981099089',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.248166','2019-07-22 14:54:46.741823'),(189,'pbkdf2_sha256$150000$I7tQh83nbXI3$VIM+Zv53ZUIzoSIJKJb9hR77kaYOa7gVkAtpMKgE4rI=',NULL,0,0,1,'2019-07-22 16:55:44.063435','handsonnikon@gmail.com','Rajat','Awasthi','handsonnikon@gmail.com','4915',1,'7024132111',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.254559','2019-07-22 16:55:44.064092'),(190,'pbkdf2_sha256$150000$A72nHMAOn6Aj$+1jG+alN8usOoxorSz4E3YrlCDplbIYDDms+StcMEaM=',NULL,0,0,1,'2019-07-22 17:13:37.430981','prasoongupta16031999@gmail.com','Prasoon','Gupta','prasoongupta16031999@gmail.com','9276',1,'7651949816',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.259988','2019-07-22 17:13:37.431454'),(191,'pbkdf2_sha256$150000$psOWf6LWOBUu$cKOxZ9pzRaWed01L2fqVfRkjEFgSpE5giVy7ca1z0bI=',NULL,0,0,1,'2019-07-22 18:01:40.866274','ritwiksinghray@gmail.com','Ritwik','Singh','ritwiksinghray@gmail.com','8989',1,'9534836385',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.264464','2019-07-22 18:01:40.866750'),(192,'pbkdf2_sha256$150000$DxYI758BkdQN$vJ3jXWx4yfbI6fV/VlVnMqMRCK5iPb6JkeS1qtnx+AQ=',NULL,0,0,1,'2019-07-22 19:08:56.766458','naughty.ansh007@gmail.com','Ansh','Srivastava','naughty.ansh007@gmail.com','2580',0,'7007169074',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-22 19:08:56.767007','2019-07-22 19:08:56.767030'),(193,'pbkdf2_sha256$150000$sOMBugYx1BsH$YM+fFKRjDtnmcyrnt4XCwBISW6HLNk/3K21Uv/+lBHU=',NULL,0,0,1,'2019-07-23 02:16:23.886479','jyotisoren0307@gmail.com','jyoti','soren','jyotisoren0307@gmail.com','3735',1,'8329878499',0,0,0,0,0,0,'',1,'CAB',NULL,NULL,'2019-07-23 04:59:36.270341','2019-07-23 02:16:23.886909'),(194,'pbkdf2_sha256$150000$MdfUbsF4httd$lWGpGcaZXwM/ZbzshIW1U4LEoi37Keei8gFiF2IA35I=',NULL,0,0,1,'2019-07-23 04:35:30.515995','samyak15999@gmail.com','Samyak','Jain','samyak15999@gmail.com','5243',0,'8329944649',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-23 04:35:30.516404','2019-07-23 04:35:30.516426'),(195,'pbkdf2_sha256$150000$NMdkE6GD2Pu1$KQJ2u1zYvxTsv8tu3bmALXohgoJI/YyztFALmPSUakU=',NULL,0,0,1,'2019-07-23 05:14:19.594001','narayandivyam@gmail.com','Pratik','Singh','narayandivyam@gmail.com','1808',1,'7974443722',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-23 05:15:10.195355','2019-07-23 05:14:19.594469'),(196,'pbkdf2_sha256$150000$4cJNmLBtMlvq$5fiEzfoLunr9f89Br6lGb8ce0qwQjLivIBUFLMybTVE=',NULL,0,0,1,'2019-07-23 16:20:07.017385','poojitha.kaperla@gmail.com','Poojitha','Kaperla','poojitha.kaperla@gmail.com','1073',0,'9502534755',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-23 16:20:07.018006','2019-07-23 16:20:07.018051'),(197,'pbkdf2_sha256$150000$eeCfWzq3Y3RW$G1s8nW7c6DRHn+y8eEfnzAdo14cn9Rf1gyZ6rcSUTJ8=',NULL,0,0,1,'2019-07-24 11:51:55.901993','kdpisda@gmail.com','Kuldeep','Pisda','kdpisda@gmail.com','9801',0,'9407608477',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-24 11:51:55.902429','2019-07-24 11:51:55.902451'),(198,'pbkdf2_sha256$150000$lhKMEVlPFPQW$Pd6g0vqOaJYyR7eZ8sq8IDM6ZDuYl9J1O1qPXIeKL5I=',NULL,0,0,1,'2019-07-24 14:40:36.822534','knarayanremj@gmail.com','Raunaq','Purohit','knarayanremj@gmail.com','5010',0,'8319766456',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-24 14:40:36.823169','2019-07-24 14:40:36.823192'),(199,'pbkdf2_sha256$150000$OoaRaxRqIucV$Hx/6VyBLzAntcxeh3Ie+sT76leNLVn5QmZfs2wtN2wM=',NULL,0,0,1,'2019-07-24 17:29:55.219549','efklfvk@ekfjk.com','Pratik','Chaudhary','efklfvk@ekfjk.com','8427',0,'1234567890',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-24 17:29:55.219977','2019-07-24 17:29:55.220000'),(200,'pbkdf2_sha256$150000$foc5AJujZQGz$/h5ERYM/fK9trugh5lGOb+QXNLtD/AzS7EQDNWjoj4o=',NULL,0,0,1,'2019-07-24 17:32:17.338336','pchy@gmail.com','Pratik','Chaudhary','pchy@gmail.com','2727',0,'1234567890',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-24 17:32:17.338766','2019-07-24 17:32:17.338788'),(201,'pbkdf2_sha256$150000$ASc4CYT9Jc56$RwqP33Y5c1fbO98mJ2C4ybixEkzq+Fhb7b4zbUIvuMA=',NULL,0,0,1,'2019-07-24 19:43:06.125358','ada@gmail.com','Adarsh','Shrivastava','ada@gmail.com','4780',0,'7024901272',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-24 19:43:06.126148','2019-07-24 19:43:06.126175'),(202,'pbkdf2_sha256$150000$Rop2HF24DYGw$sRrV1D0wJSzmcSY7nna5qeOhxdjI+I1ze6LSuh6WkX8=',NULL,0,0,1,'2019-07-24 19:44:31.540343','kre@gmail.com','rukes','jnj','kre@gmail.com','8177',0,'7974443722',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-24 19:44:31.540890','2019-07-24 19:44:31.540913'),(203,'pbkdf2_sha256$150000$hMo5xlxZ5ukI$028mgIUGsqTJCTQWWuTPz7BEfoquOCBNjo0BnbjIvHc=',NULL,0,0,1,'2019-07-24 19:46:03.022242','retro@gmail.com','retro','retro','retro@gmail.com','3711',0,'7974443722',0,0,0,0,0,0,'',1,'GST',NULL,NULL,'2019-07-24 19:55:48.413750','2019-07-24 19:46:03.022900'),(204,'pbkdf2_sha256$150000$WDgg5JRhkQvC$V0ArYPwPZpUd42ZbRedrYRBYyUeJbW6p5PpYlJwnFcE=',NULL,0,0,1,'2019-07-24 20:30:01.200278','Boyirivarma123@gmail.com','Tilak','varma','Boyirivarma123@gmail.com','1527',0,'9752044884',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-24 20:30:01.200968','2019-07-24 20:30:01.201010'),(205,'pbkdf2_sha256$150000$XbX7XJSiKqVB$jwbhowTIALzfMKOy6UpIBIx5VR5wnfaTv8zOw6KcXIo=',NULL,0,0,1,'2019-07-25 05:07:41.140869','pranjali2301@gmail.com','Pranjali','Yadav','pranjali2301@gmail.com','3885',0,'8529897003',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-25 05:07:41.141480','2019-07-25 05:07:41.141503'),(206,'pbkdf2_sha256$150000$Q6w7QG7qKHNB$w3NTosMX5qxkHDn2GuoB2RtaAL0WLb9xhqBzU4a1V7M=',NULL,0,0,1,'2019-07-25 13:16:50.625363','passionatepurvi07@gmail.com','Purvi','Jain','passionatepurvi07@gmail.com','3704',0,'7999465459',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-25 13:16:50.625827','2019-07-25 13:16:50.625850'),(207,'pbkdf2_sha256$150000$BOfnI2QfsqTN$1LeZnfGp55897QZeWXaZG8j+ZXpKU7Yzk90yB9mV2us=',NULL,0,0,1,'2019-07-25 19:21:41.236760','klhhf@gmail.com','retrety','uiyyu','klhhf@gmail.com','9281',0,'8319766456',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-25 19:21:41.237234','2019-07-25 19:21:41.237259'),(208,'pbkdf2_sha256$150000$0re1fVbSAFAa$Cnawx31/AFsQOpvGHKynKBRrm/RWNs88OK4jftlxm2E=',NULL,0,0,1,'2019-07-26 01:02:34.849616','akki1622144@gmail.com','Akash','Pujari','akki1622144@gmail.com','5901',0,'9630640879',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-26 01:02:34.850092','2019-07-26 01:02:34.850114'),(209,'pbkdf2_sha256$150000$8inht51jknI4$Y3OJU+Mv9FarfvANV6YRpudWwx5XEDSjFR/RR2yQ4Bw=',NULL,0,0,1,'2019-07-26 06:44:04.478024','bhayanisomansh@gmail.com','Somansh','Bhayani','bhayanisomansh@gmail.com','2870',0,'7587186775',0,0,0,0,0,0,'',1,'GST',NULL,NULL,'2019-07-26 06:46:36.238353','2019-07-26 06:44:04.478453'),(210,'pbkdf2_sha256$150000$dJeHcjLjF04I$VgjH+5LgNFhPqzQ0gGJcbLHyV6AG5GPDnjkJxfPo9Uw=',NULL,0,0,1,'2019-07-26 08:32:36.505328','procoder9973@gmail.com','Roushan','Singh','procoder9973@gmail.com','8634',0,'9981869584',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-26 08:32:36.506387','2019-07-26 08:32:36.506432'),(211,'pbkdf2_sha256$150000$83e4EXFidEMG$q8kuygq3Y/u+WgmkkvVtf7PBrkov5PttEf7X/i+3Z3c=',NULL,0,0,1,'2019-07-26 08:43:00.892746','procoder9974@gmail.com','Roushan','Singh','procoder9974@gmail.com','6240',0,'9981869584',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-26 08:43:00.893198','2019-07-26 08:43:00.893217'),(212,'pbkdf2_sha256$150000$63cvs0Ft4Qbn$/eRq1oau85LCqoXtIXX7P2woXnfmwmwJVgRva0nlzQI=',NULL,0,0,1,'2019-07-26 09:03:31.079102','pro@mail.com','Testing','Again','pro@mail.com','4670',0,'9981869584',0,0,0,0,0,0,'',1,'GST',NULL,NULL,'2019-07-26 09:05:31.565850','2019-07-26 09:03:31.079691'),(213,'pbkdf2_sha256$150000$Y9tfVClaC8QZ$MayyYf5Sk95DUQOk0zvUIYRDglNMxsW2Mqd7752nNtE=',NULL,0,0,1,'2019-07-26 09:41:56.215269','sahilkr2nd@gmail.com','Sahil','Shrivastav','sahilkr2nd@gmail.com','1650',0,'7549580996',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-26 09:41:56.215741','2019-07-26 09:41:56.215763'),(214,'pbkdf2_sha256$150000$OA7nuN2F0aDT$1oL5gyEuYxRoN7XyMzY6yOlRPWn5LqUU3kmxptOSNoA=',NULL,0,0,1,'2019-07-26 10:56:26.389980','deveshsahu6262@gmail.com','Devesh','Sahu','deveshsahu6262@gmail.com','2183',0,'9752199891',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-26 10:56:26.390478','2019-07-26 10:56:26.390504'),(215,'pbkdf2_sha256$150000$6CgJ3poQip1c$iMOXOuQSf/OeZe79TWSGbXEg18k8hE+5e4SMlhxN5lg=',NULL,0,0,1,'2019-07-26 16:45:02.111683','harshm5508@gmail.com','Harsh','Maurya','harshm5508@gmail.com','7002',0,'9644615038',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-26 16:45:02.112161','2019-07-26 16:45:02.112183'),(216,'pbkdf2_sha256$150000$5fLU3ktlwP6I$ukjc0ihRumcYV9xePJxdKq5SGFPFsFva16ivNIiiFNo=',NULL,0,0,1,'2019-07-26 18:05:45.490131','sg.basic.16@gmail.com','Shubhangi','Gupta','sg.basic.16@gmail.com','1067',0,'7000731513',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-26 18:05:45.490557','2019-07-26 18:05:45.490579'),(217,'pbkdf2_sha256$150000$wXJ8amkGMeWD$6MPXz2tOoZF7uiQp9sZl79PVKBwHvhe8kkpvrdZXij8=',NULL,0,0,1,'2019-07-27 07:17:19.552129','biprajit.roy.456@gmail.com','Biprajit','Roy','biprajit.roy.456@gmail.com','5960',0,'8348560954',0,0,0,0,0,0,'',0,'GST',NULL,NULL,'2019-07-27 07:17:19.552606','2019-07-27 07:17:19.552654');
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

-- Dump completed on 2019-08-01  3:21:03