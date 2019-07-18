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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add ECellUser',6,'add_customuser'),(22,'Can change ECellUser',6,'change_customuser'),(23,'Can delete ECellUser',6,'delete_customuser'),(24,'Can view ECellUser',6,'view_customuser'),(25,'Can add campus ambassador profile',7,'add_campusambassadorprofile'),(26,'Can change campus ambassador profile',7,'change_campusambassadorprofile'),(27,'Can delete campus ambassador profile',7,'delete_campusambassadorprofile'),(28,'Can view campus ambassador profile',7,'view_campusambassadorprofile'),(29,'Can add event',8,'add_event'),(30,'Can change event',8,'change_event'),(31,'Can delete event',8,'delete_event'),(32,'Can view event',8,'view_event'),(33,'Can add sponsor',9,'add_sponsor'),(34,'Can change sponsor',9,'change_sponsor'),(35,'Can delete sponsor',9,'delete_sponsor'),(36,'Can view sponsor',9,'view_sponsor'),(37,'Can add mentor',10,'add_mentor'),(38,'Can change mentor',10,'change_mentor'),(39,'Can delete mentor',10,'delete_mentor'),(40,'Can view mentor',10,'view_mentor'),(41,'Can add startup',11,'add_startup'),(42,'Can change startup',11,'change_startup'),(43,'Can delete startup',11,'delete_startup'),(44,'Can view startup',11,'view_startup');
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2019-07-18 03:45:50.508401','6','Ankit Tibrewal',3,'',10,4),(2,'2019-07-18 03:45:50.516472','5','Dr. Shameem S',3,'',10,4),(3,'2019-07-18 03:45:50.518972','4','Vineet Budki',3,'',10,4),(4,'2019-07-18 03:45:50.523322','3','Tushar Vadera',3,'',10,4),(5,'2019-07-18 03:45:50.526194','2','VAIBHAV SURYA',3,'',10,4),(6,'2019-07-18 03:45:50.527724','1','SHRAVAN PUNNA',3,'',10,4),(7,'2019-07-18 03:46:16.684085','7','SHRAVAN PUNNA',3,'',10,4),(8,'2019-07-18 13:00:29.576821','5','eBeta',3,'',11,4),(9,'2019-07-18 13:00:29.579126','4','Lokus News',3,'',11,4),(10,'2019-07-18 13:00:29.581452','3','Innolat Technologies pvt. Ltd.',3,'',11,4),(11,'2019-07-18 13:00:29.583990','2','Polllzy',3,'',11,4),(12,'2019-07-18 13:00:29.586160','1','SmileBots',3,'',11,4),(13,'2019-07-18 13:19:52.852966','18','36Inc.',3,'',11,4),(14,'2019-07-18 13:19:52.859546','16','Department of Women & Child Development.',3,'',11,4),(15,'2019-07-18 13:19:52.861825','13','36Inc',3,'',11,4),(16,'2019-07-18 13:19:52.863220','12','Department of Women & Child Development',3,'',11,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(8,'events','event'),(10,'mentors','mentor'),(5,'sessions','session'),(9,'sponsors','sponsor'),(11,'startups','startup'),(7,'users','campusambassadorprofile'),(6,'users','customuser');
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-07-14 13:19:41.946373'),(2,'contenttypes','0002_remove_content_type_name','2019-07-14 13:19:41.998047'),(3,'auth','0001_initial','2019-07-14 13:19:42.058560'),(4,'auth','0002_alter_permission_name_max_length','2019-07-14 13:19:42.175773'),(5,'auth','0003_alter_user_email_max_length','2019-07-14 13:19:42.183040'),(6,'auth','0004_alter_user_username_opts','2019-07-14 13:19:42.193032'),(7,'auth','0005_alter_user_last_login_null','2019-07-14 13:19:42.202399'),(8,'auth','0006_require_contenttypes_0002','2019-07-14 13:19:42.207247'),(9,'auth','0007_alter_validators_add_error_messages','2019-07-14 13:19:42.214693'),(10,'auth','0008_alter_user_username_max_length','2019-07-14 13:19:42.222808'),(11,'auth','0009_alter_user_last_name_max_length','2019-07-14 13:19:42.231139'),(12,'auth','0010_alter_group_name_max_length','2019-07-14 13:19:42.243218'),(13,'auth','0011_update_proxy_permissions','2019-07-14 13:19:42.251255'),(14,'users','0001_initial','2019-07-14 13:19:42.341675'),(15,'admin','0001_initial','2019-07-14 13:19:42.530796'),(16,'admin','0002_logentry_remove_auto_add','2019-07-14 13:19:42.606351'),(17,'admin','0003_logentry_add_action_flag_choices','2019-07-14 13:19:42.618817'),(18,'events','0001_initial','2019-07-14 13:19:42.645425'),(19,'events','0002_event_ecell_user','2019-07-14 13:19:42.681260'),(20,'mentors','0001_initial','2019-07-14 13:19:42.739793'),(21,'mentors','0002_mentor_ecell_user','2019-07-14 13:19:42.778803'),(22,'sessions','0001_initial','2019-07-14 13:19:42.826452'),(23,'sponsors','0001_initial','2019-07-14 13:19:42.861346'),(24,'sponsors','0002_sponsor_ecell_user','2019-07-14 13:19:42.903077'),(25,'startups','0001_initial','2019-07-14 13:19:42.959663'),(26,'startups','0002_startup_ecell_user','2019-07-14 13:19:43.006501'),(27,'sponsors','0003_auto_20190718_1317','2019-07-18 13:17:47.851823');
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
INSERT INTO `django_session` VALUES ('sly8vlwt8724sho1hkdwvi7ypp51z1rj','NDg2MWQzYjVjZmJiMmU5ZWY2ZTk3M2RmMzc0ODIxZDJhNDVjYTU4NTp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9pZCI6IjQiLCJfYXV0aF91c2VyX2hhc2giOiI3NjVlYjVmNmE1N2MwYmE5ZGU2Mjg1ZGFhNjAyN2VkNzRkZmUzNzA4In0=','2019-08-01 03:39:12.192562');
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
  `icon` varchar(100) DEFAULT NULL,
  `email` varchar(254) DEFAULT NULL,
  `flag` tinyint(1) NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `modified_at` datetime(6) NOT NULL,
  `ecell_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `events_event_ecell_user_id_8815d510_fk_users_customuser_id` (`ecell_user_id`),
  CONSTRAINT `events_event_ecell_user_id_8815d510_fk_users_customuser_id` FOREIGN KEY (`ecell_user_id`) REFERENCES `users_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_event`
--

LOCK TABLES `events_event` WRITE;
/*!40000 ALTER TABLE `events_event` DISABLE KEYS */;
INSERT INTO `events_event` VALUES (1,'IGNITION','E-hall','2018-08-01','10:00 am','\"Ignition\" is a business model competition that will connect ideas of entrepreneurs with investors. This will help the startups to gain traction and also provide an opportunity to be funded by some of the top investors in india. A business model competition aims to connect the new start-ups with investors by creating a direct channel between them.','static/uploads/events/ig111.png.jpeg','static/uploads/events/ig111.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:18.768700','2019-07-18 12:50:18.768959',NULL),(2,'START-UP CAMP','To be decided...','2018-09-09','TBD','In a startup nothing happens unless you make it happen. Startup camp promotes entrepreneurship among students and also provides a start-up initiative activity amongst the growing startups in and around Chhattisgarh. Several high scale and low scale startups in and around Chhattisgarh are invited and provided with an opportunity to publicize their products/services and grab some interns for their companies. The investors attend the pitches of the startups and on recognizing a potential startup, provide seed funding to those startups.','static/uploads/events/sc111.png.jpeg','static/uploads/events/sc111.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:18.813463','2019-07-18 12:50:18.813548',NULL),(3,'CRICNOMETRICA','To be decided...','2018-09-08','TBD','Cricnometrica is an event designed to provide a stage for entertainment as well as a platform to showcase the individuals or teams knowledge of the game of cricket. A team game comprising of three rounds which range from pen paper to slide-shows and leads finally to virtual bidding to create a team of their own. The team with the maximum points at the end of the third round is declared as the winner.','static/uploads/events/cr111_LMmMc9z.png.jpeg','static/uploads/events/cr111_LMmMc9z.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:18.862284','2019-07-18 12:50:18.862339',NULL),(4,'B-QUIZ','To be decided...','2018-09-08','TBD','Get your cortex fixed cause this quiz spins your head around. Let\'s explore some of the de facto of business quizzing. Guide your cerebrum\'s way to this b-quiz that will catapult you into the world of business facts and figures.','static/uploads/events/bq111.png.jpeg','static/uploads/events/bq111.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:23.917828','2019-07-18 12:50:23.917892',NULL),(5,'WALLSTREET','To be decided...','2018-09-08','TBD','A virtual share market contest for the brokers out there. Invest money and take home big. The winner keeps it all. Challenge your mind’s trafficking power and run away with the best bet in this virtual stock broking exchange.','static/uploads/events/wallstreet_FwBl6yR111.png.jpeg','static/uploads/events/wallstreet_FwBl6yR111.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:23.967612','2019-07-18 12:50:23.967672',NULL),(6,'UTKRISHTH','To be decided...','2018-09-08','TBD','This event acknowledges the grass root works and aims at promoting low scale entrepreneurs from villages for the progress of nation. The event aims at felicitating the potential rural startup ideas to promote the entrepreneurial spirit at the grass root levels.','static/uploads/events/uk111.png.jpeg','static/uploads/events/uk111.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:24.052238','2019-07-18 12:50:24.052304',NULL),(7,'ENTROPY','To be decided...','2018-09-08','TBD','Giving wings to ideas and ground to the unknown, this session is to guide, inspire and bring out the best from the budding comrades. Words, if they hit the adrenaline rush can make you do wonders. This speaker session can make you look beyond the ordinary in order to be above the ordinary.','static/uploads/events/en111.png.jpeg','static/uploads/events/en111.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:24.098685','2019-07-18 12:50:24.098748',NULL),(8,'E-Gathering','To be decided...','2018-09-08','TBD','Like to end the E summit 18 on a high, the closing ceremony called the E-Gathering will feature a musical performance and a stand-up performance which will be revealed soon.','static/uploads/events/eg111.png.jpeg','static/uploads/events/eg111.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:24.145833','2019-07-18 12:50:24.145918',NULL),(9,'B-Case Study','To be decided...','2018-09-08','TBD','B-Case Study (Business Case Study ) is an event designed to act as a solution provider for the erupting real life scenarios in the business domain. A team event comprising of three rounds with range from pen paper to a final report submission. The reports being presented before the judges and the team with maximum awarded points is declared as the winner.','static/uploads/events/bc111.png.jpeg','static/uploads/events/bc111.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:24.190705','2019-07-18 12:50:24.190766',NULL),(10,'B Model','E-Hall','2019-06-29','TBD','An awesome opportunity to showcase your business model.','static/uploads/events/Frame_1.png.jpeg','static/uploads/events/Frame_1.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:24.228352','2019-07-18 12:50:24.228438',NULL),(11,'INNOVATION EXPO','TPO Terrace','2019-06-29','TBD','A stepping stone for your future startup ideas.','static/uploads/events/Frame.png.jpeg','static/uploads/events/Frame.png.jpeg','ecell@nitrr.ac.in',1,2019,'2019-07-18 12:50:24.287621','2019-07-18 12:50:24.287715',NULL);
/*!40000 ALTER TABLE `events_event` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentors_mentor`
--

LOCK TABLES `mentors_mentor` WRITE;
/*!40000 ALTER TABLE `mentors_mentor` DISABLE KEYS */;
INSERT INTO `mentors_mentor` VALUES (8,'SHRAVAN PUNNA',NULL,'','Consultant at Deloitte','Consultant at Deloitte','static/uploads/mentors/SHRAVAN PUNNA.jpeg',1,2018,'2019-07-18 03:47:14.722316','2019-07-18 03:47:14.722379',NULL),(9,'VAIBHAV SURYA',NULL,'','Digital Marketing Manager at Oppo','Digital Marketing Manager at Oppo','static/uploads/mentors/VAIBHAV SURYA.jpeg',1,2018,'2019-07-18 03:47:15.021174','2019-07-18 03:47:15.021283',NULL),(10,'Tushar Vadera',NULL,'','CEO - Innolat','CEO - Innolat','static/uploads/mentors/Tushar Vadera.jpeg',1,2017,'2019-07-18 03:47:15.297530','2019-07-18 03:47:15.297581',NULL),(11,'Vineet Budki',NULL,'','Founder & CEO - Guiddoo World','Founder & CEO - Guiddoo World','static/uploads/mentors/Vineet Budki.jpeg',1,2017,'2019-07-18 03:47:15.605298','2019-07-18 03:47:15.605386',NULL),(12,'Dr. Shameem S',NULL,'','Technical University of Munich (Germany)','Technical University of Munich (Germany)','static/uploads/mentors/Dr. Shameem S.jpeg',1,2017,'2019-07-18 03:47:15.894342','2019-07-18 03:47:15.894391',NULL),(13,'Ankit Tibrewal',NULL,'','Bharti Airtel Ltd','Bharti Airtel Ltd','static/uploads/mentors/Ankit Tibrewal.jpeg',1,2018,'2019-07-18 03:47:16.184273','2019-07-18 03:47:16.184345',NULL);
/*!40000 ALTER TABLE `mentors_mentor` ENABLE KEYS */;
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
  `spons_type` varchar(4) NOT NULL,
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
INSERT INTO `sponsors_sponsor` VALUES (1,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/IMG_20190526_022315.jpg','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-18 13:21:42.322246','2019-07-18 13:21:42.322298',NULL),(2,'36Inc','Incubation partner','static/uploads/sponsors/inc.jpg','','https://www.facebook.com/36inc/','ATS',1,2018,'2019-07-18 13:21:42.355591','2019-07-18 13:21:42.355635',NULL),(3,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/department_of_women_and_child_development_ZhOVA2e.png','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-18 13:21:42.396159','2019-07-18 13:21:42.396224',NULL),(4,'Department of Women & Child Development','Gov Partner','static/uploads/sponsors/IMG_20190526_022339.jpg','','http://www.wcd.nic.in/','ATS',1,2018,'2019-07-18 13:21:42.448313','2019-07-18 13:21:42.448399',NULL),(5,'Bank Of Maharashtra','Bank Of Maharashtra is our Banking Partner','static/uploads/sponsors/Bank-of-Maharashtra.jpg','8827544244','https://www.bankofmaharashtra.in/','ATS',1,2017,'2019-07-18 13:21:42.504379','2019-07-18 13:21:42.504461',NULL),(6,'Chhattisgarh Tourism','Tourism Partner','static/uploads/sponsors/chhattisgarh_tourism_HxrvutV.jpg','','https://twitter.com/GoChhattisgarh?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor','ATS',1,2018,'2019-07-18 13:21:42.541171','2019-07-18 13:21:42.541210',NULL),(7,'Think Raipur','In association with Think Raipur','static/uploads/sponsors/raipur1-300x200_6bo4LAr.jpg','8827544244','https://dare2compete.com/o/think-raipur-raipur-smart-city-limited-25381','ATS',1,2017,'2019-07-18 13:21:42.590252','2019-07-18 13:21:42.590291',NULL),(8,'36Inc','Incubation Partner','static/uploads/sponsors/logo.png','9685164762','https://36inc.in/','ATS',1,2017,'2019-07-18 13:21:42.654305','2019-07-18 13:21:42.654366',NULL),(9,'94.3 My FM','Our Radio Partner','static/uploads/sponsors/logo200.jpg','81030 29146','http://myfmindia.com/','ATS',1,2017,'2019-07-18 13:21:42.707546','2019-07-18 13:21:42.707652',NULL),(10,'OYO Rooms','Title Partner','static/uploads/sponsors/new-oyo-rooms-logo.jpg','','https://www.oyorooms.com/','ATS',1,2017,'2019-07-18 13:21:42.745512','2019-07-18 13:21:42.745571',NULL),(11,'Veg Centre','Food Partner','static/uploads/sponsors/15-43-09-14242429_248782615517192_8303366919707240772_o.png.jpg','+91 77140 699','https://m.facebook.com/VegCentre/','ATS',1,2016,'2019-07-18 13:21:42.785023','2019-07-18 13:21:42.785075',NULL),(12,'Infibeam.com','Associative Partner','static/uploads/sponsors/INFIBEAM.png','','https://www.infibeam.com/','ATS',1,2015,'2019-07-18 13:21:42.817727','2019-07-18 13:21:42.817776',NULL),(13,'The Music Cafe','Food Partner','static/uploads/sponsors/15-48-30-13087862_1569788553319059_8526539529959833813_n.png.jpg','91099 93102','https://m.facebook.com/TheMusicCafeRaipur/','ATS',1,2016,'2019-07-18 13:21:42.864086','2019-07-18 13:21:42.864154',NULL),(14,'Resonance','Education Partner','static/uploads/sponsors/RESONANCE.png','','https://www.resonance.ac.in/','ATS',1,2015,'2019-07-18 13:21:42.897416','2019-07-18 13:21:42.897483',NULL),(15,'Saavn','Music Partner','static/uploads/sponsors/SAAVN.png','','https://www.jiosaavn.com/','ATS',1,2015,'2019-07-18 13:21:42.936058','2019-07-18 13:21:42.936126',NULL),(16,'Meenakshi\'s Salon and Academy','Grooming Partner','static/uploads/sponsors/00-29-29-13691026_1111282962244411_7097567306176670928_o.png.jpg','77140 04013','https://m.facebook.com/meenakshisalon/','ATS',1,2016,'2019-07-18 13:21:42.982192','2019-07-18 13:21:42.982271',NULL),(17,'The College Fever','Event Booking Partner','static/uploads/sponsors/IMG_20190608_011152.jpg','7760686052','https://www.thecollegefever.com','ATS',1,2016,'2019-07-18 13:21:43.033094','2019-07-18 13:21:43.033153',NULL),(18,'TRIPPY','Travel Partner','static/uploads/sponsors/IMG_20190526_021644.jpg','','http://www.trippycar.com/','PLS',1,2018,'2019-07-18 13:21:43.082580','2019-07-18 13:21:43.082641',NULL),(19,'Konsole Group','Digital Outreach Partner','static/uploads/sponsors/konsole_group.png','','http://www.konsolegroup.com/','PLS',1,2018,'2019-07-18 13:21:43.128729','2019-07-18 13:21:43.128832',NULL),(20,'INH News','Electronic Media Partner','static/uploads/sponsors/inh_news.png','','https://www.facebook.com/inhnewsindia/','PLS',1,2018,'2019-07-18 13:21:43.174930','2019-07-18 13:21:43.174984',NULL),(21,'Hotel Babylon International','Hospitality Partner','static/uploads/sponsors/hotel_babylon_int.jpg','','http://hotelbabylon.in/','PLS',1,2018,'2019-07-18 13:21:43.247886','2019-07-18 13:21:43.247941',NULL),(22,'Bisleri Fonzo','Beverage Partner','static/uploads/sponsors/bisleri_fonzo.jpg','','https://www.bisleri.com/product/fonzo','PLS',1,2018,'2019-07-18 13:21:43.288590','2019-07-18 13:21:43.288650',NULL),(23,'CSPDCL','CSPDCL is our Platinum Sponsor','static/uploads/sponsors/cspdcl-squarelogo-1475152179777.png','8827544244','https://cspdcl.co.in/cseb/(S(ftnnym4waxjjv3qe24eafhdv))/frmHome.aspx','PLS',1,2017,'2019-07-18 13:21:43.329116','2019-07-18 13:21:43.329182',NULL),(24,'Chhattisgarh Tourism','Chhattisgarh Tourism is our Platinum Sonsor','static/uploads/sponsors/39.jpg','077142 24600','http://visitcg.in/','PLS',1,2017,'2019-07-18 13:21:43.400797','2019-07-18 13:21:43.400887',NULL),(25,'IBC 24','IBC24 is our Electronic Media Partner','static/uploads/sponsors/unnamed.png','077140 08700','http://www.ibc24.in','PLS',1,2017,'2019-07-18 13:21:43.503218','2019-07-18 13:21:43.503261',NULL),(26,'ZONE','ZONE by the PARK hotels is our Platinum Sponsor','static/uploads/sponsors/download_469aKB7.jpeg','077143 20000','http://www.zonebythepark.com','PLS',1,2017,'2019-07-18 13:21:43.554943','2019-07-18 13:21:43.555011',NULL),(27,'T.I.M.E','Platinum Partner','static/uploads/sponsors/TIME.png','','https://www.time4education.com/','PLS',1,2015,'2019-07-18 13:21:43.620736','2019-07-18 13:21:43.620814',NULL),(28,'The Trophy House','Memento Partner','static/uploads/sponsors/trophy_house_WQ49Erc.jpg','','http://www.thetrophyhouse.in/','GDS',1,2018,'2019-07-18 13:21:43.682272','2019-07-18 13:21:43.682325',NULL),(29,'WILLMAN','Stationary Partner','static/uploads/sponsors/willman.jpg','','https://willman-paper-mart.business.site/','GDS',1,2018,'2019-07-18 13:21:43.718591','2019-07-18 13:21:43.718627',NULL),(30,'Orange Le Spirit Cafe','Food Partner','static/uploads/sponsors/le_spirit.jpg','','https://www.facebook.com/orangelespirit/','GDS',1,2018,'2019-07-18 13:21:43.755120','2019-07-18 13:21:43.755205',NULL),(31,'CHIPS Chhattisgarh','CHIPS Chhattisgarh is our Gold Sponsor','static/uploads/sponsors/0.png','(771) 4066205','http://www.chips.gov.in','GDS',1,2017,'2019-07-18 13:21:43.794206','2019-07-18 13:21:43.794246',NULL),(32,'Avinash Group','Avinash Group is our Gold Sponsor','static/uploads/sponsors/avi_logo_9mh3kHg.jpg','077140 33425','http://www.avinashgroup.com','GDS',1,2017,'2019-07-18 13:21:43.842579','2019-07-18 13:21:43.842648',NULL),(33,'Lalganga Colors Mall','Lalganga Colors Mall is our Gold Sponsor','static/uploads/sponsors/-Colors_Mall-20000000016341246-500x375.webp','077140 69999','http://www.lalgangabuilders.com/portal/portfolio/colors-mall','GDS',1,2017,'2019-07-18 13:21:43.902869','2019-07-18 13:21:43.902958',NULL),(34,'TheHitavada','Print Media Partner','static/uploads/sponsors/IMG_20190526_021029.jpg','','http://www.ehitavada.com/','GDS',1,2018,'2019-07-18 13:21:43.953217','2019-07-18 13:21:43.953294',NULL),(35,'CSIDC','Industrial Partner','static/uploads/sponsors/01-27-44-ncsidc_logo.png','','https://csidc.in/home2/index.php/en/','GDS',1,2016,'2019-07-18 13:21:44.005376','2019-07-18 13:21:44.005461',NULL),(36,'CHIPS','Technology Partner','static/uploads/sponsors/01-39-16-images.jpg','771 4014158','http://www.chips.gov.in/','GDS',1,2016,'2019-07-18 13:21:44.053842','2019-07-18 13:21:44.053909',NULL),(37,'Oyo Rooms','Hospitality Partner','static/uploads/sponsors/Oyo.jpg','','https://www.oyorooms.com','GDS',1,2016,'2019-07-18 13:21:44.108030','2019-07-18 13:21:44.108098',NULL),(38,'ATKT.IN','Event Publicity Partner','static/uploads/sponsors/atkt.in.png','','https://www.facebook.com/ATKT.in/','TLS',1,2018,'2019-07-18 13:21:44.146657','2019-07-18 13:21:44.146754',NULL),(39,'Vedam Spa & Salon','Spa & Salon Partner','static/uploads/sponsors/vedam_spa.jpg','','https://www.justdial.com/Raipur-Chhattisgarh/Vedam-Spa-Unisex-Salon-Beside-Jai-Jawan-Petrol-Pump-Raipur-HO/9999PX771-X771-180516161332-E3Y7_BZDET','TLS',1,2018,'2019-07-18 13:21:44.181787','2019-07-18 13:21:44.181841',NULL),(40,'YourStory','Campus Publicity Partner','static/uploads/sponsors/your_story.png','','http://yourstory.com','TLS',1,2018,'2019-07-18 13:21:44.225723','2019-07-18 13:21:44.225791',NULL),(41,'Nai Dunia','Print Media Partner','static/uploads/sponsors/jagran-nai-dunia-logo.jpg','7314711000','https://naidunia.jagran.com/','TLS',1,2017,'2019-07-18 13:21:44.273239','2019-07-18 13:21:44.273305',NULL),(42,'Dev Creator\'s of Memories','Photography Partner','static/uploads/sponsors/IMG_20190526_021830.jpg','','https://ecell.nitrr.ac.in/','TLS',1,2018,'2019-07-18 13:21:44.322900','2019-07-18 13:21:44.322964',NULL),(43,'Hello Intern','Partner','static/uploads/sponsors/logo_UxRNWuC.jpg','','https://www.hellointern.com/','TLS',1,2017,'2019-07-18 13:21:44.373100','2019-07-18 13:21:44.373164',NULL),(44,'IndiaMart','Partner','static/uploads/sponsors/INDIAMART.png','','https://www.indiamart.com/','TLS',1,2015,'2019-07-18 13:21:44.424789','2019-07-18 13:21:44.424858',NULL),(45,'PT Education','Title Partner','static/uploads/sponsors/PT_EDUCATION.png','','https://ptraipur.com/','TLS',1,2015,'2019-07-18 13:21:44.472545','2019-07-18 13:21:44.472645',NULL),(46,'Shopper\'s Stop','Title Partner','static/uploads/sponsors/SHOPPERS_STOP.png','','https://www.shoppersstop.com/','TLS',1,2015,'2019-07-18 13:21:44.512318','2019-07-18 13:21:44.512403',NULL),(47,'Career Launcher','Career Partner','static/uploads/sponsors/CAREER_LAUNCHER.png','','https://www.careerlauncher.com/','TLS',1,2015,'2019-07-18 13:21:44.547578','2019-07-18 13:21:44.547620',NULL),(48,'Pagal Guy','Partner','static/uploads/sponsors/PAGAL_GUY.png','','https://www.pagalguy.com/','TLS',1,2015,'2019-07-18 13:21:44.593316','2019-07-18 13:21:44.593365',NULL),(49,'My FM 94.3','FM Partner','static/uploads/sponsors/01-43-46-logo.png','','http://myfmindia.com/','TLS',1,2016,'2019-07-18 13:21:44.634139','2019-07-18 13:21:44.634224',NULL),(50,'Chhattisgarh Tourism','Tourism Partner','static/uploads/sponsors/01-46-14-images.jpg','771 4224600','http://visitcg.in/','TLS',1,2016,'2019-07-18 13:21:44.682482','2019-07-18 13:21:44.682541',NULL),(51,'Venture Catalysts','Investment Partner','static/uploads/sponsors/VENTURE_catalysts.png','','http://venturecatalysts.in/raipur/','PRS',1,2018,'2019-07-18 13:21:44.719916','2019-07-18 13:21:44.719967',NULL),(52,'Zoodify','Communication Partner','static/uploads/sponsors/ZOODIFY.jpg','','https://ecell.nitrr.ac.in/','PRS',1,2018,'2019-07-18 13:21:44.763336','2019-07-18 13:21:44.763388',NULL),(53,'Sams Pizza','Sams Pizza is our Pizza Partner','static/uploads/sponsors/227226_4.jpg','077140 00053','https://www.samspizza.in','PRS',1,2017,'2019-07-18 13:21:44.820066','2019-07-18 13:21:44.820128',NULL),(54,'Raipur Development Authority','RDA is our Event Partner','static/uploads/sponsors/download_0cXiVmi.png','077730 99888','http://www.rdaraipur.com','PRS',1,2017,'2019-07-18 13:21:44.856536','2019-07-18 13:21:44.856592',NULL),(55,'RiON','RiON is our Recreation Partner','static/uploads/sponsors/h.jpg','081091 22345','https://www.facebook.com/profile.php?id=100009219539017','PRS',1,2017,'2019-07-18 13:21:44.896096','2019-07-18 13:21:44.896152',NULL),(56,'Happily Unmarried','Happily Unmaried is our Merchandise Partner','static/uploads/sponsors/happily-unmarried.jpg','1800 3000 588','https://www.happilyunmarried.com','PRS',1,2017,'2019-07-18 13:21:44.942647','2019-07-18 13:21:44.942721',NULL),(57,'Zebronics','Zebronics is our Multimedia Partner','static/uploads/sponsors/1872031c912f86ab1aa6b5b63679430e4732465e.png','081091 22345','https://zebronics.com','PRS',1,2017,'2019-07-18 13:21:45.031507','2019-07-18 13:21:45.031551',NULL),(58,'Sky Ventures','Sky Ventures is our Travel Partner','static/uploads/sponsors/Sky_Venturesdanny-finalorange_20.png','8827544244','http://www.skyventure.in/','PRS',1,2017,'2019-07-18 13:21:45.067647','2019-07-18 13:21:45.067718',NULL),(59,'Benchmark Group','Benchmark Group is our digital outreach partner.','static/uploads/sponsors/7il9AoJ3.jpg','081031 30039','http://benchmarksgroup.com/','PRS',1,2017,'2019-07-18 13:21:45.105656','2019-07-18 13:21:45.105749',NULL),(60,'qM Print','qM Print is our Printing Partner','static/uploads/sponsors/s2.jpg','077140 99444','http://www.qmprint.com/','PRS',1,2017,'2019-07-18 13:21:45.184508','2019-07-18 13:21:45.184558',NULL),(61,'Shri Krishna IAS','Shri Krishna IAS is our coaching partner','static/uploads/sponsors/shri-krishna-ias-faridabad-sector-7a-faridabad-ias-tutorials-uo67d-250.jpg','8827544244','http://shrikrishnaias.com/','PRS',1,2017,'2019-07-18 13:21:45.229648','2019-07-18 13:21:45.229749',NULL),(62,'Souled Store','Souled Store is our Gift Partner','static/uploads/sponsors/download_1_aMwXHdf.png','022 3965 3110','https://www.thesouledstore.com/','PRS',1,2017,'2019-07-18 13:21:45.276320','2019-07-18 13:21:45.276368',NULL),(63,'Goose Burps','Goose Burps is our Cafe Partner','static/uploads/sponsors/goose-burps-telibandha-raipur-chhattisgarh-restaurants-fyksk-250.jpg','9676996769','http://gooseburps.com/','PRS',1,2017,'2019-07-18 13:21:45.415088','2019-07-18 13:21:45.415280',NULL),(64,'Samishu','Samishu is our food partner','static/uploads/sponsors/download_2.png','8827544244','https://www.justdial.com/raipur-chhattisgarh/Samishu-Jain-Thali-Services-Near-police-thana-Purani-Basti-Raipur/9999PX771-X771-170713214339-P5D5_BZDET?utm_source=adwords&utm_medium=codered&gclid=Cj0KCQ','PRS',1,2017,'2019-07-18 13:21:45.452337','2019-07-18 13:21:45.452382',NULL),(65,'Lasting Impressions','Lasting Impressions is our Photography Partner','static/uploads/sponsors/download_3.png','077140 88110','https://www.justdial.com/Raipur-chhattisgarh/Impression-Graphix-We-Do-It-Best-Opposite-Khalsa-School-Pandri/9999PX771-X771-140119185038-N2J1_BZDET','PRS',1,2017,'2019-07-18 13:21:45.488345','2019-07-18 13:21:45.488400',NULL),(66,'Vennington Court','Vennington Court is our Hospitality Partner','static/uploads/sponsors/lobby-area.jpg','9522220862','http://venningtoncourt.com/','PRS',1,2017,'2019-07-18 13:21:45.534624','2019-07-18 13:21:45.534713',NULL),(67,'ATKT.IN','ATKT.IN is our online media partner','static/uploads/sponsors/0_1.png','081091 22345','http://atkt.in/','PRS',1,2017,'2019-07-18 13:21:45.571710','2019-07-18 13:21:45.571762',NULL),(68,'AB Classes','Event Partner','static/uploads/sponsors/download_1.jpeg','098317 40080','http://www.abclasses.co.in','PRS',1,2017,'2019-07-18 13:21:45.610752','2019-07-18 13:21:45.610813',NULL),(69,'MOBILE10x','Technical Incubation Partner','static/uploads/sponsors/mobile10X.jpg','','https://www.mobile10x.in/hub/mobile10x-raipur-hub','PRS',1,2018,'2019-07-18 13:21:45.651856','2019-07-18 13:21:45.651917',NULL),(70,'HEADSTART','Ecosystem Partner','static/uploads/sponsors/headstart.png','','http://www.headstart.in/','PRS',1,2018,'2019-07-18 13:21:45.688753','2019-07-18 13:21:45.688821',NULL),(71,'Seeta Travels','Travel Partner','static/uploads/sponsors/00-05-53-seeta-tour-and-travels-logo-90x90.jpg','','https://m.indiamart.com/seeta-tour-travels/aboutus.html','PRS',1,2016,'2019-07-18 13:21:45.722174','2019-07-18 13:21:45.722232',NULL),(72,'The Trohpy House','The Trophy House is our Memento Partner','static/uploads/sponsors/the-trophy-house-sadar-bazar-raipur-chhattisgarh-trophy-dealers-_tds7Pca.jpg','081091 22345','https://www.justdial.com/Raipur-chhattisgarh/The-Trophy-House-Oppo-Amantran-Mens-Parlour-Satti-Bazar-Sadar-Bazar/9999PX771-X771-130608021706-S2W3_BZDET','PRS',1,2017,'2019-07-18 13:21:45.766465','2019-07-18 13:21:45.766562',NULL),(73,'Blooms And Grooms','Our Partner','static/uploads/sponsors/hl.jpg','9753953461','http://www.directoryworld.in/flower-shop-raipur/','PRS',1,2017,'2019-07-18 13:21:45.833259','2019-07-18 13:21:45.833313',NULL),(74,'Sam\'s Kreations','Salon Partner','static/uploads/sponsors/Untitled-design-90.png','097642 11228','https://www.justdial.com/Raipur-Chhattisgarh/Sams-Kreations-The-Unisex-Salon-And-Academy-Opposite-Shiv-Sena-Office-Behind-Pragati-College-Choubey-Colony/9999PX771-X771-150205193119-A9V1_BZDET','PRS',1,2017,'2019-07-18 13:21:45.945711','2019-07-18 13:21:45.945762',NULL),(75,'Senov Tech','Partner','static/uploads/sponsors/0_2.png','070003 87001','https://www.justdial.com/Raipur-Chhattisgarh/Senov-Tech-Devendra-Nagar/9999PX771-X771-180910174138-K6X7_BZDET','PRS',1,2017,'2019-07-18 13:21:45.985476','2019-07-18 13:21:45.985541',NULL),(76,'Your Story','Campus Publicity Partner','static/uploads/sponsors/unnamed_1.png','','https://yourstory.com','PRS',1,2017,'2019-07-18 13:21:46.042526','2019-07-18 13:21:46.042615',NULL),(77,'Appu Sweets','Food partner','static/uploads/sponsors/APPU_SWEETS.png','','https://appu-sweets.business.site/','PRS',1,2015,'2019-07-18 13:21:46.085470','2019-07-18 13:21:46.085531',NULL),(78,'Interview Street','Partner','static/uploads/sponsors/INTERVIEW_STREET.png','','https://www.hackerrank.com/interviewstreet','PRS',1,2015,'2019-07-18 13:21:46.122757','2019-07-18 13:21:46.122798',NULL),(79,'The Signage','R&D partner','static/uploads/sponsors/15-56-53-logo.jpg','9835 19 3084','http://www.thesignage.co.in/','PRS',1,2016,'2019-07-18 13:21:46.176245','2019-07-18 13:21:46.176331',NULL),(80,'Hotel Maurya','Hospitality Partner','static/uploads/sponsors/00-25-34-9k.jpg','771 4200500','https://www.themayurahotels.com/','PRS',1,2016,'2019-07-18 13:21:46.213712','2019-07-18 13:21:46.213771',NULL),(81,'Hotel Aditya','Hospitality Partner','static/uploads/sponsors/00-31-11-logo.png','771-4032941','http://hoteladityaraipur.com/','PRS',1,2016,'2019-07-18 13:21:46.248452','2019-07-18 13:21:46.248506',NULL),(82,'Celebration Group','Hospitality Partner','static/uploads/sponsors/01-18-35-2Q.jpg','9425203151','http://www.celebrationworld.in','PRS',1,2016,'2019-07-18 13:21:46.289967','2019-07-18 13:21:46.290058',NULL),(83,'Hello Intern','Internship Partner','static/uploads/sponsors/IMG_20190608_012104.jpg','40-49492040','https://www.hellointern.com/','PRS',1,2016,'2019-07-18 13:21:46.336485','2019-07-18 13:21:46.336588',NULL),(84,'Eyedea','Advertising Partner','static/uploads/sponsors/01-26-23-27913032_352022865282008_1578909573893575563_o.jpg','81203 10001','https://m.facebook.com/adevents10/','PRS',1,2016,'2019-07-18 13:21:46.405174','2019-07-18 13:21:46.405217',NULL),(85,'Moshik\'s','Food Partner','static/uploads/sponsors/00-10-29-Moshik3.png','8982712308','http://moshiks.in','PRS',1,2016,'2019-07-18 13:21:46.450462','2019-07-18 13:21:46.450538',NULL),(86,'It\'s Me Cafe','Food Partner','static/uploads/sponsors/00-13-46-13442184_1753202664923219_795024462093761144_n.png.jpg','91099 93110','https://m.facebook.com/itsmecaferaipur/','PRS',1,2016,'2019-07-18 13:21:46.501801','2019-07-18 13:21:46.501888',NULL),(87,'Your Story','Campus Publicity Partner','static/uploads/sponsors/01-36-01-images.jpg','','https://yourstory.com/','PRS',1,2016,'2019-07-18 13:21:46.546402','2019-07-18 13:21:46.546463',NULL),(88,'IBC 24','Media Partner','static/uploads/sponsors/IMG_20190608_015311.jpg','771-4008700','https://www.ibc24.in/','PRS',1,2016,'2019-07-18 13:21:46.591209','2019-07-18 13:21:46.591287',NULL),(89,'ACB India Limited','Energy Partner','static/uploads/sponsors/IMG_20190608_015005.jpg','0124-2719000','http://www.acbindia.com/','PRS',1,2016,'2019-07-18 13:21:46.637565','2019-07-18 13:21:46.637675',NULL),(90,'Benchmark Group','Digital Marketing Partner','static/uploads/sponsors/01-30-31-logo_7711aa24688fdfb2eb886de5dc83d884_3x.png','','http://benchmarksgroup.com/','PRS',1,2016,'2019-07-18 13:21:46.683707','2019-07-18 13:21:46.683800',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `startups_startup`
--

LOCK TABLES `startups_startup` WRITE;
/*!40000 ALTER TABLE `startups_startup` DISABLE KEYS */;
INSERT INTO `startups_startup` VALUES (7,'SmileBots',NULL,'static/uploads/startups/sime.png','1234567890','https://ecell.nitrr.ac.in','Smilebots','',1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About Smilebots</strong>: We help Companies and Startups solve real problems using cutting-edge Technology.</p>\r\n\r\n<p><strong>Internships are available for the following domains:</strong></p>\r\n\r\n<ol><li>Data Science</li><li>Machine Learning</li><li>Artificial Intelligence</li><li>Blockchain</li></ol>\r\n\r\n<p><strong>Skills Required:</strong> Fluency in any coding language for above mentioned domains which may incluce python, ruby, solidity,javascript, Hadoop etc. Past experience and projects will play a crucial role.</p>\r\n\r\n<p><strong>Minimum Stipend:</strong> Performance based, upto max 10k/month</p>\r\n\r\n<p><strong>Starting Month:</strong> Immediately</p>\r\n\r\n<p><strong>Email:</strong> achal@smilebots.com</p>\r\n\r\n<p><strong>Mobile No:</strong> +91 93005 08989</p>\r\n\r\n<p><strong>Address:</strong> National Corporate Park, 210B, Great Eastern Rd, Raipur, Chhattisgarh 492001</p></div>',2019,'2019-07-18 13:00:46.530051','2019-07-18 13:00:46.530119',NULL),(8,'Polllzy',NULL,'static/uploads/startups/pollzy.jpeg','1234567890','https://ecell.nitrr.ac.in','Polllzy','',1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About Polllzy:</strong>\r\nWe are social media startup. </p>\r\n\r\n<p><strong>About Internship:</strong>\r\n3rd and 4th year students can apply.</p>\r\n\r\n<p><strong>Skills Required:</strong>\r\nWe are looking for coders who are good in javascript and python.</p>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nNo stipend will provided.</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nDecember</p>\r\n\r\n<p><strong>Duration of internship:</strong>\r\n2 months (can be extended)</p>\r\n\r\n<p><strong>Email:</strong>\r\npolllzy.team@gmail.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n9035028077</p></div>',2019,'2019-07-18 13:00:46.573983','2019-07-18 13:00:46.574072',NULL),(9,'Innolat Technologies pvt. Ltd.',NULL,'static/uploads/startups/download_vNtmU9e.jpeg','1234567890','https://ecell.nitrr.ac.in','Innolat Technologies pvt. Ltd.','',1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About Innolat:</strong></p>\r\n\r\n<p>Innolat is one of the fastest growing EduTech Startups incubated by 36Inc, Govt. of Chhattisgarh.</p>\r\n\r\n<p>Our\r\ntechnology product iLrnn (pronounced as iLearn) is India’s first personalized learning platform to connect\r\nengineering students directly with industry experts and corporate trainer LIVE.</p>\r\n\r\n<p><strong>About Internship:</strong>\r\nInternships are available for both Technical and Non-Technical.</p>\r\n\r\n<p><strong>Skills Required:</strong>\r\nPursuing Engineering / Fresher</p>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nPerformance based.</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nAnytime</p>\r\n\r\n<p><strong>Duration of internship:</strong>\r\nVariable</p>\r\n\r\n<p><strong>Email:</strong>\r\nisha@innolat.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n+91-8861516611</p>\r\n\r\n<p><strong>Address:</strong>\r\n412, Golden Trade Centre, New Rajendra Nagar, Raipur</p></div>',2019,'2019-07-18 13:00:46.610845','2019-07-18 13:00:46.610920',NULL),(10,'Lokus News',NULL,'static/uploads/startups/lokus-2.png','1234567890','https://ecell.nitrr.ac.in','Lokus News','',1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>Co Founder:</strong> \r\nPrakhar Lunawat</p>\r\n\r\n<p><strong>About Lokus News:</strong>\r\nWe are a news aggregation platform, focusing on regional news.</p>\r\n\r\n<p><strong>About Internship:</strong></p>\r\n\r\n<ol><li>Operations internship</li><li>Interns need to do a training for 10 days at our office at Station Road, Raipur</li><li>Later they can work from home</li></ol>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nRs. 5000/month</p>\r\n\r\n<p><strong>Duration of internship:</strong>\r\nIntenships are available for a duration of 3 months.</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nNovember</p>\r\n\r\n<p><strong>Email:</strong>\r\nPrakhar@lokusnews.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n9826123498</p></div>',2019,'2019-07-18 13:00:46.665048','2019-07-18 13:00:46.665118',NULL),(11,'eBeta',NULL,'static/uploads/startups/Screenshot_from_2019-05-26_08-25-39.png','1234567890','https://ecell.nitrr.ac.in','eBeta','',1,'<div id=\"output\" class=\"content markdown-body\"><p><strong>About eBeta:</strong>\r\nIts about leisure and health services to senior \r\ncitizens.</p>\r\n\r\n<p><strong>About Internship:</strong></p>\r\n\r\n<ol><li>Sense of Responsibility</li><li>Smart Communication Skills and Presentable. (Both Male &amp; Female)</li></ol>\r\n\r\n<p><strong>Skills Required:</strong>\r\nPatience in handling old age people</p>\r\n\r\n<p><strong>Minimum Stipend:</strong>\r\nRs. 2000/month</p>\r\n\r\n<p><strong>Starting Month:</strong>\r\nNovember</p>\r\n\r\n<p><strong>Email:</strong>\r\nPrakhar@lokusnews.com</p>\r\n\r\n<p><strong>Mobile:</strong>\r\n9522292122</p>\r\n\r\n<p><strong>Address:</strong>\r\neBeta House, B28, Amrapali Society, behind Colors Mall, Pachpedinaka, Raipur.</p></div>',2019,'2019-07-18 13:00:46.717861','2019-07-18 13:00:46.717967',NULL);
/*!40000 ALTER TABLE `startups_startup` ENABLE KEYS */;
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_customuser`
--

LOCK TABLES `users_customuser` WRITE;
/*!40000 ALTER TABLE `users_customuser` DISABLE KEYS */;
INSERT INTO `users_customuser` VALUES (1,'pbkdf2_sha256$150000$MP7b1VPNV3RS$+HCE9I1nUyxoyFMr5S9ak4M5YLsPmjFI4kEt1Dp1cZ8=',NULL,0,0,1,'2019-07-14 13:45:26.240367','naveen@gmail.com','naveen','sundar','naveen@gmail.com',NULL,0,'8940073123',0,'','GST',NULL,NULL),(2,'pbkdf2_sha256$150000$UZnUfVnVg10m$g6PFhOTU6f7Sok3HV2YEKE8oAKwoOZwWhzN1G/UHI/M=',NULL,0,0,1,'2019-07-14 13:46:22.661419','naveensundar@gmail.com','naveen','sundar','naveensundar@gmail.com',NULL,0,'8940073123',0,'','GST',NULL,NULL),(3,'pbkdf2_sha256$150000$FDwLsjepBEkN$8Jwo3EucHHZ9NMTQrOy6GZ4NcPkV3CVKhZ1Maw/EhUk=',NULL,0,0,1,'2019-07-14 13:48:15.203413','naveen2@gmail.com','naveen','sundar','naveen2@gmail.com',NULL,0,'8940073123',0,'','GST',NULL,NULL),(4,'pbkdf2_sha256$150000$e4CDZWDc14BR$JX7bU2DR/Wx6qcInuHTcE6eds9MziS7UbijtnYSjqrM=','2019-07-18 03:39:12.189829',1,1,1,'2019-07-18 03:38:41.793949','admin@gmail.com','','','admin@gmail.com',NULL,0,'',0,'','GST',NULL,NULL);
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

-- Dump completed on 2019-07-18 18:55:04
