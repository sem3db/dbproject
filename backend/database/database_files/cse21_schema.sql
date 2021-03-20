CREATE DATABASE cse_21;
USE cse_21;

--
-- Table structure for table `admin_login_details`
--

DROP TABLE IF EXISTS `admin_login_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_login_details` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(60) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_login_details`
--

LOCK TABLES `admin_login_details` WRITE;
/*!40000 ALTER TABLE `admin_login_details` DISABLE KEYS */;
INSERT INTO `admin_login_details` VALUES (1,'admin1','admin1@mail.com','$2a$10$06pZbkgva/nrUeIqPD7znunFJzA8ODUSAf8krVfXMPRRYm0P3mWf2','admin','2021-03-03 23:53:26'),(2,'admin2','admin2@mail.com','$2a$10$06pZbkgva/nrUeIqPD7znunFJzA8ODUSAf8krVfXMPRRYm0P3mWf2','admin',NULL),(3,'admin3','admin3@mail.com','$2a$10$06pZbkgva/nrUeIqPD7znunFJzA8ODUSAf8krVfXMPRRYm0P3mWf2','admin','2021-03-03 15:45:45');
/*!40000 ALTER TABLE `admin_login_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `selected_count` decimal(5,0) DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,0),(2,0),(3,0),(4,0),(5,0),(6,0),(7,0),(8,0),(9,0),(10,0),(11,0),(12,0),(13,0),(14,0),(15,0),(16,0),(17,0),(18,0),(19,0),(20,0),(21,0),(22,0),(23,0),(24,0),(25,0),(26,0),(27,0),(28,0),(29,0),(30,0),(31,0),(32,0),(33,0),(34,0),(35,0),(36,0),(37,0),(38,0),(39,0);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(40) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'consumer_electronics','Electronic  devices used in daytoday life'),(2,'kitchen_appliances','Devices useful in kitchen activities'),(3,'workshop equipment ','Tools used in workshops'),(4,'toy','Toys'),(5,'fitness equipment','Equipments used for fitness'),(6,'camping','Camping needs'),(7,'industrial automation','Needy for automation systems'),(8,'musical instruments','Musical instruments and repair items'),(9,'maintenance and safety','Safety tools'),(10,'testing equipment','Testing tools');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `subcat_id` int NOT NULL AUTO_INCREMENT,
  `subcat_name` varchar(40) DEFAULT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`subcat_id`,`category_id`),
  KEY `subcategory_ibfk_1` (`category_id`),
  CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,'laptop',1),(1,'rice cooker',2),(1,'power tool',3),(1,'building toys',4),(1,'strength training',5),(1,'camping cooking supplies',6),(1,'electric motors',7),(1,'stage lighting',8),(1,'safety glasses',9),(1,'test meters & detectors',10),(2,'smart phone',1),(2,'oven',2),(2,'air tool ',3),(2,'rc car',4),(2,'activity tracker',5),(2,'camping lighting',6),(2,'sensors',7),(2,'dj equipment',8),(2,'alarm systems',9),(2,'signal sources & conditioning equipment',10),(3,'dongal',1),(3,'gas cooker/stove/ranger',2),(3,'hand tool',3),(4,'printer&scanner',1),(4,'electric kettle',2),(5,'camera',1),(5,'heater',2);
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `registered_customer`
--

DROP TABLE IF EXISTS `registered_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registered_customer` (
  `reg_customer_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `zip_code` varchar(5) DEFAULT NULL,
  `address_line_1` varchar(30) DEFAULT NULL,
  `address_line_2` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `cart_id` int DEFAULT NULL,
  PRIMARY KEY (`reg_customer_id`),
  KEY `cart_id` (`cart_id`),
  CONSTRAINT `registered_customer_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registered_customer`
--

LOCK TABLES `registered_customer` WRITE;
/*!40000 ALTER TABLE `registered_customer` DISABLE KEYS */;
INSERT INTO `registered_customer` VALUES (1,'kavindu@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','kavindu','ravishka','1111','114','malwatta','Gampaha','western','0332288888',1),(2,'dulaj@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','dulaj','kavinda','2222','224','kotadeniyawa','Negombo','western','0332242342',2),(3,'yasindu@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','yasindu','dilshan','3333','344','main street','Colombo','western','0332265756',3),(4,'dakshitha@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','dakshitha','sooriyaarachchi',NULL,'32/A','jayanthi lane','Wattala','western','0332247859',4),(5,'dave@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','dave','kavinda','1123','45','main street','Galle','southern','2582582587',5),(6,'nipun@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','nipun','fernando','5555','1/2/A','asgiriya','Hikkaduwa','southern','2582582587',6),(7,'dilshan@mail.com','$2a$10$Y5j5EgO/UJXrFXLwDhqch.dl1cXYG7RvYZVfbu1HMbM49zi45YjCK','dilshan','yazi','3456','5','main street','Galle','southern','8989897875',7),(8,'adikari@mail.com','$2a$10$OWDrHoSZX/uFuN/kcKyTy.eE34gbiNJSJ4pouwaE6EbH2NWMdlAe2','kave','adiri','1234','58','side lane','Mathara','southern','0332278596',8),(9,'soori@mail.com','$2a$10$mLhV.ZuUYsmC65bWQyuxde1T2kbPq8zISpB4MB657Ezqql2bOpSX.','dak','soori','5896','256','main street','Ampara','eastern','0332278596',9),(10,'bimal@mail.com','$2a$10$jB5t9G0rn3J8LZiIxmLJPeotJqPU0haQawxzjuq2UqiISKBoY.zhy','bimal','perera','5671','89A','hospital road','Dibulagala','eastern','0332278596',10),(11,'saman@mail.com','$2a$10$WAgVdHxVYWZ0Cb40oJdO.e8sbjoGGXV8w6U5hmBgANrri2eCBLKfu','saman','jaya','5674','25B','main street','Pandicheri','eastern','0332278596',11),(12,'jayanthi@mail.com','$2a$10$mDhinwDRQ2QOHtydcZqPlO/E/EiESrMYDBEkdD1K4/qrhnsZH0fHy','jayanthi','sarala','5678','7D','dikman road','Galgamuwa','eastern','0332278596',12),(13,'hasantha@mail.com','$2a$10$7FSkpkE0W1fvjMK1Bkjpi.LgkvBLsquCaPB6MQkbpD.2/oUAeayPG','hasantha','ruwan','5675','78','main street','Kegalle','sabaragamuwa','0332278596',13),(14,'neel@mail.com','$2a$10$Hv7/iog7.T68hn1mzzxR6eVkSd1cTXNEZXqUwt/GgfUsgw.mPv88S','neel','jayakody','9638','8','cemetry road','Mawanella','sabaragamuwa','0332278596',14),(15,'raman@mail.com','$2a$10$WpWk1i0czMl6W9n8MawLf.pJh9jXPZbCOipfkJ6Vc2ZohWSJob8Ce','raman','balha','5896','9','main street','Kegalle','sabaragamuwa','0332278596',15),(16,'miraj@mail.com','$2a$10$mDhinwDRQ2QOHtydcZqPlO/E/EiESrMYDBEkdD1K4/qrhnsZH0fHy','miraj','tharaka','5841','23','akarangaha','Chilaw','sabaragamuwa','0332278596',16),(17,'vidushal@mail.com','$2a$10$BTX6xLBybrylfNCq5Ady8.PTjNCgGbX.u48qRANMtOmYvS9ebPruO','vidushal','jayakody','2548','41','main street','Jaffna','north','0332278596',17),(18,'piyu@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','piyu','ranawaka','8563','47','round lane','ElepantPass','north','0332278596',18),(19,'rathnaweera@mail.com','$2a$10$mEUzwns4AUx14U7.3KN5CeI4XYItKtAlDKWL4qUvhYzeXfZmHMUTW','anuradha','jayakody','2569','7C','malwatta','Kandy','central','0332278596',19),(20,'sunimal@mail.com','$2a$10$.P/2kVuulZTovgWE4K/py.0YWAjQf4TWuQkwf/HsfU5yuZNj7ifL.','sunimal','perera','5896','24','main street','Mathale','central','0332278596',20),(21,'anura@mail.com','$2a$10$WXpv.QG8sS1BWu7SE4jhsOuUVcsHX0/NszEeUFgFVtjR.FuUHxDam','anura','kumara','5874','53','jaya mawatha','Kandy','central','0332278596',21),(22,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL),(23,'kesara@mail.com','$2a$10$0SZTwODS7VyGocf6Fd6JCOypFKc5aSaLkC79nBKb45SjdXWzM2ssa','kesara','fernando','4344','32/A','jayanthi lane','Wattala','western','0332247829',34),(24,'dhammika@mail.com','$2a$10$KHWKI.h0oCwNiDtHTbzIv.Rf7bedbxd3g3gcyvdK1pUUQkwDRo9nO',NULL,NULL,NULL,NULL,NULL,'Ja-Ela','western','0332247829',35),(25,'lal@mail.com','$2a$10$wUhlNwWrS5zpfsNn.x2Z3uLj1fW1yCv4GZAkZ08Rsgk.ZwPdKVzPW',NULL,NULL,NULL,NULL,NULL,'Ja-Ela','western','0332247829',36),(26,'amal@mail.com','$2a$10$Vh0pJhZ.uS1/G.nL9WUtFel6KBuSa9kUHA/MivXxeUWc9eEx6rveS',NULL,NULL,NULL,NULL,NULL,'Ja-Ela','western','0332247829',37),(27,'rameez@mail.com','$2a$10$/ZQ2bOf1VVmpjvB10M5G9.FP02qNCOqZyFdklC1/Ccus5Upg/28nG','rameezl','fernando','4344','32/A','jayanthi lane','Madagama','western','0332247829',38),(28,'danoj@mail.com','$2a$10$E3c92ccnlKxE65FKye25x.J588s.7oyH3DtRPuVd8qEdOuIwpsGdS','danoj',NULL,NULL,'32/A','jayanthi lane','Madagama','western','0332247829',39);
/*!40000 ALTER TABLE `registered_customer` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `productorder`
--

DROP TABLE IF EXISTS `productorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productorder` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `customer_id` int DEFAULT NULL,
  `customer_type` varchar(15) DEFAULT NULL,
  `payment_method` varchar(15) DEFAULT NULL,
  `total_payment` decimal(10,2) DEFAULT NULL,
  `delivery_status` varchar(10) DEFAULT NULL,
  `delivery_method` varchar(15) DEFAULT NULL,
  `delivery_estimate` date DEFAULT NULL,
  `additional_notes` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  CONSTRAINT `chk_cust_type` CHECK ((`customer_type` in (_utf8mb4'Registered',_utf8mb4'Guest'))),
  CONSTRAINT `chk_deli_meth` CHECK ((`delivery_method` in (_utf8mb4'In_store_pickup',_utf8mb4'Courier',_utf8mb4'Postal'))),
  CONSTRAINT `chk_pay_meth` CHECK ((`payment_method` in (_utf8mb4'CashONDelivery',_utf8mb4'VISA',_utf8mb4'PayPal')))
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productorder`
--

LOCK TABLES `productorder` WRITE;
/*!40000 ALTER TABLE `productorder` DISABLE KEYS */;
INSERT INTO `productorder` VALUES (1,'2021-02-27 13:18:46',1,'Guest','VISA',300000.00,'pending','Postal','2021-03-11',NULL),(2,'2021-02-27 13:18:46',2,'Guest','VISA',400000.00,'pending','Postal','2021-03-11',''),(3,'2021-02-27 13:18:46',2,'Registered','VISA',200000.00,'pending','Postal','2021-03-11',NULL),(4,'2021-02-07 13:18:46',3,'Registered','PayPal',100000.00,'pending','Courier','2021-03-11',NULL),(5,'2021-04-07 13:18:46',3,'Registered','VISA',100000.00,'pending','Postal','2021-03-11',NULL),(6,'2021-05-07 13:18:46',5,'Registered','VISA',100000.00,'pending','Postal','2021-03-11',NULL),(7,'2021-06-07 13:18:46',6,'Registered','VISA',100000.00,'pending','Postal','2021-03-11',NULL),(8,'2021-07-07 13:18:46',7,'Registered','VISA',100000.00,'delivered','Postal','2021-03-11',NULL),(9,'2021-08-07 13:18:46',8,'Registered','VISA',100000.00,'delivered','Postal','2021-03-11',NULL),(10,'2021-09-07 13:18:46',4,'Registered','VISA',100000.00,'delivered','Postal','2021-03-11',NULL),(11,'2021-10-07 13:18:46',3,'Guest','VISA',100000.00,'delivered','Courier','2021-03-11',NULL),(12,'2021-11-07 13:18:46',4,'Guest','VISA',100000.00,'delivered','Courier','2021-03-11',NULL),(13,'2021-12-07 13:18:46',5,'Guest','VISA',400000.00,'delivered','Postal','2021-03-11',NULL),(14,'2021-06-07 13:18:46',10,'Registered','VISA',400000.00,'delivered','Courier','2021-03-11',NULL),(15,'2021-06-07 13:18:46',9,'Registered','PayPal',400000.00,'delivered','Courier','2021-03-11',NULL),(16,'2021-02-27 13:18:46',14,'Registered','VISA',400000.00,'delivered','Courier','2021-03-11',NULL),(17,'2021-02-27 13:18:46',5,'Registered','VISA',400000.00,'delivered','Postal','2021-03-11',NULL),(18,'2021-10-07 13:18:46',21,'Registered','VISA',400000.00,'delivered','Postal','2021-03-11',NULL),(19,'2021-10-07 13:18:46',16,'Registered','VISA',400000.00,'delivered','Courier','2021-03-11',NULL),(20,'2021-05-07 13:18:46',12,'Registered','VISA',400000.00,'delivered','Courier','2021-03-11',NULL),(21,'2021-03-04 00:00:00',NULL,'Guest','CashOnDelivery',NULL,'No','Postal','2021-03-11',' ');
/*!40000 ALTER TABLE `productorder` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `guest_customer`
--

DROP TABLE IF EXISTS `guest_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guest_customer` (
  `guest_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `zip_code` varchar(5) DEFAULT NULL,
  `address_line_1` varchar(30) DEFAULT NULL,
  `address_line_2` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`guest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guest_customer`
--

LOCK TABLES `guest_customer` WRITE;
/*!40000 ALTER TABLE `guest_customer` DISABLE KEYS */;
INSERT INTO `guest_customer` VALUES (1,'danuka@mail.com','0112299999','danuka','sandaruwan','5555','234','ragama','Colombo','western'),(2,'vidura@mail.com','0332278596','vudura','ravihansa','5896','1','wathiruwala','Gampaha','western'),(3,'kasun@mail.com','0332278596','kasun','perrea','5896','2','main street','Negombo','western'),(4,'nisuga@mail.com','0332278596','nisuga','chinthaka','5896','3A','rabawa','Kegalle','sabaragamuwa'),(5,'vinura@mail.com','0332278596','vinura','adhas','5896','85','matale','Kandy','central'),(6,'jaga@mail.com','0332288888','Vidarshna','Jagath','1111','114','malwatta','Gampaha','western'),(7,'ase@mail.com','0332242342','qwe','qwe','2222','224','kotadeniyawa','Negombo','western');
/*!40000 ALTER TABLE `guest_customer` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `supplier_id` int NOT NULL AUTO_INCREMENT,
  `supplier_name` varchar(30) DEFAULT NULL,
  `contact_number` varchar(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`supplier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,'abanse','0112222222','abanse@supply.com'),(2,'dell','0113333333','dell@supply.com'),(3,'lenovo','0114444444','lenovo@supply.com'),(4,'national','0115555555','national@supply.com'),(5,'cannon','0116666666','cannon@supply.com'),(6,'hp','0117777777','hp@supply.com'),(7,'samsung','0118888888','samsung@supply.com'),(8,'huawei','0119999999','huawei@supply.com'),(9,'Makita','0113333333','Makita@supply.com'),(10,'Tacwise ','0112323233','Tacwise@supply.com'),(11,'Lego','0112323234','Lego@supply.com'),(12,'SI-LOC','0112323245','SI-LOC@supply.com'),(13,'Fitbit','0112323465','Fitbit@supply.com'),(14,'TOAKS','0113254554','toaks@supply.com'),(15,'Lumens','0112323435','Lumens@supply.com'),(16,'MITSUBISHI','0114347593','Mitsubishi@supply.com'),(17,'Crestron','0116666634','Crestron@supply.com'),(18,'Pyle','0112685693','Pyle@supply.com'),(19,'DMX','0112344657','DMX@supply.com'),(20,'Bolle','0119585759','Bolle@supply.com'),(21,'DNH ','0112334678','DNH@supply.com'),(22,'Quest ','0113455999','Quest@supply.com'),(23,'Horizon','0112343434','Horizon@gmail.com');
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(60) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `subcat_id` int DEFAULT NULL,
  `description` text,
  `weight` varchar(5) DEFAULT NULL,
  `dimension` varchar(20) DEFAULT NULL,
  `brand` varchar(20) DEFAULT NULL,
  `supplier_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  KEY `subcat_id` (`subcat_id`),
  KEY `supplier_id` (`supplier_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE SET NULL,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`subcat_id`) REFERENCES `subcategory` (`subcat_id`) ON DELETE SET NULL,
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`supplier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Latitude E5440',1,1,'','100g','10x10x20','dell',2),(2,'y9 2020',1,2,NULL,'100g','10x10x20','huawei',8),(3,'inspiron 3000',2,1,'','100g','10x10x20','dell',2),(4,'4l rice cooker',2,1,'','100g','10x10x20','national',4),(5,'s5',1,2,'','100g','10x10x20','samsung',7),(6,'Bam 3G',1,3,'','100g','10x10x20','huawei',8),(7,'15t-dw300',1,1,'','100g','10x10x20','hp',6),(8,'14z-fq000',1,1,'','100g','10x10x20','hp',6),(9,'17t-cg100',1,1,'','100g','10x10x20','hp',6),(11,'A50',1,2,'','100g','10x10x20','samsung',7),(12,'A50s',1,2,'','100g','10x10x20','samsung',7),(14,'XPH12Z ',3,1,NULL,'100g','10x10x20','Makita',9),(15,'DGN50V Nailer',3,2,NULL,'100g','10x10x20','Tacwise',10),(16,'CG100DZA ',3,3,NULL,'100g','10x10x20','Makita',9),(17,'Lego Christmas',4,1,NULL,'100g','10x10x20','Lego',11),(18,'MiniT 2.0',4,2,NULL,'100g','10x10x20','Lego',11),(19,'AX90045',4,2,NULL,'100g','10x10x20','Lego',11),(20,'AXI00002T2',4,2,NULL,'100g','10x10x20','Lego',11),(21,'Hp85235 Savage',4,2,NULL,'100g','10x10x20','Lego',11),(22,'Support Belt',5,1,NULL,'100g','10x10x20','SI-LOC',12),(23,'Pushup Stand 360',5,1,NULL,'100g','10x10x20','SI-LOC',12),(24,'XT Strap Extender',5,1,NULL,'100g','10x10x20','SI-LOC',12),(25,'Charge 4 ',5,2,NULL,'100g','10x10x20','Fitbit',13),(26,'Charge 3',5,2,NULL,'100g','10x10x20','Fitbit',13),(27,'SLV-08 ',6,1,NULL,'100g','10x10x20','TOAKS ',14),(28,'Replacement Triple',6,1,NULL,'100g','10x10x20','TOAKS ',14),(29,'Lamp Module',6,2,NULL,'100g','10x10x20','Lumens',15),(30,'SureFire Flashlight',6,2,NULL,'100g','10x10x20','Lumens',15),(31,'Surefire M951C',6,2,NULL,'100g','10x10x20','Lumens',15),(32,'HA-FF43C-UE',7,1,NULL,'100g','10x10x20','MITSUBISHI',16),(33,'HF-KP23',7,1,NULL,'100g','10x10x20','MITSUBISHI',16),(34,'MSM012A1A',7,1,NULL,'100g','10x10x20','MITSUBISHI',16),(35,'C2N RTHS',7,2,NULL,'100g','10x10x20','Crestron',17),(36,'KSD301',7,2,NULL,'100g','10x10x20','Crestron',17),(37,'PYD1964B.5 6',8,2,NULL,'100g','10x10x20','Pyle',18),(38,'PMXU88BT',8,2,NULL,'100g','10x10x20','Pyle',18),(39,'MX-1',8,2,NULL,'100g','10x10x20','Pyle',18),(40,'Dmx512 Controller',8,1,NULL,'100g','10x10x20','DMX',19),(41,'FB3QS',8,1,NULL,'100g','10x10x20','DMX',19),(42,'TRACPSI Tracker',9,1,NULL,'100g','10x10x20','Bolle',20),(43,'B401',9,1,NULL,'100g','10x10x20','Bolle',20),(44,'B808 ',9,1,NULL,'100g','10x10x20','Bolle',20),(45,'DSP-15EExe',9,2,NULL,'100g','10x10x20','DNH ',21),(46,'PK5500ENG',9,2,NULL,'100g','10x10x20','DNH ',21),(47,'X5',10,1,NULL,'100g','10x10x20','Quest ',22),(48,'IM-5238',10,1,NULL,'100g','10x10x20','Quest ',22),(49,'ACE 300',10,1,NULL,'100g','10x10x20','Quest ',22),(50,'RD6018',10,2,NULL,'100g','10x10x20','Horizon',23),(51,'RD6006',10,2,NULL,'100g','10x10x20','Horizon',23);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `order_product_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `quantity` decimal(5,0) DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `product_offer` decimal(5,2) DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`order_product_id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `order_product_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `productorder` (`order_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (1,4,1,98000.00,0.00,1),(2,1,1,98000.00,0.00,4),(3,1,1,98000.00,0.00,2),(4,1,1,98000.00,0.00,3),(5,1,1,98000.00,0.00,4),(6,2,1,23000.00,0.00,1),(7,2,1,23000.00,0.00,2),(8,2,1,23000.00,0.00,3),(9,3,1,52000.00,0.00,3),(10,3,1,52000.00,0.00,4),(11,7,1,52000.00,0.00,5),(12,8,2,52000.00,0.00,6),(13,3,1,52000.00,0.00,7),(14,4,1,52000.00,0.00,7),(15,7,2,52000.00,0.00,8),(16,6,1,52000.00,0.00,9),(17,2,2,52000.00,0.00,9),(18,8,1,23000.00,0.00,10),(19,8,2,23000.00,0.00,11),(20,6,1,23000.00,0.00,12),(21,1,1,23000.00,0.00,12),(22,7,1,23000.00,0.00,13),(23,8,1,400000.00,0.00,14),(24,22,1,400000.00,0.00,15),(25,18,1,400000.00,0.00,16),(26,30,2,400000.00,0.00,17),(27,25,1,400000.00,0.00,18),(28,40,2,400000.00,0.00,19),(29,8,1,400000.00,0.00,20),(34,4,NULL,18000.00,0.00,21);
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `variant`
--

DROP TABLE IF EXISTS `variant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variant` (
  `variant_id` int NOT NULL,
  `product_id` int NOT NULL,
  `SKU` varchar(30) DEFAULT NULL,
  `image_url` varchar(300) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `offer` decimal(5,2) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `no_stock` decimal(5,0) DEFAULT NULL,
  PRIMARY KEY (`variant_id`,`product_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `variant_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variant`
--

LOCK TABLES `variant` WRITE;
/*!40000 ALTER TABLE `variant` DISABLE KEYS */;
INSERT INTO `variant` VALUES (1,1,'AB1234','/images/11.jpg',150000.00,0.00,'silver','M',44),(1,2,'AB1234','/images/21.jpg',23000.00,0.00,'black','32GB',10),(1,3,'AB1234','/images/31.jpg',52000.00,0.00,'black','M',4),(1,4,'AB1234','/images/41.jpg',18000.00,0.00,'blue','M',NULL),(1,5,'AB1234','/images/51.jpg',50000.00,0.00,'white','64GB',10),(1,6,'AB1234','/images/61.jpg',3500.00,0.00,'white','M',6),(1,7,'AB1234','/images/71.jpg',98000.00,0.00,'black','M',6),(1,8,'AB1234','/images/81.jpg',126000.00,0.00,'white','M',4),(1,9,'AB1234','/images/91.jpg',134000.00,0.00,'black','M',8),(1,11,'AB1234','/images/111.jpg',45000.00,0.00,'black','16GB',20),(1,12,'AB1234','/images/121.jpg',39000.00,0.00,'grey','32GB',24),(1,14,'AB1234','/images/141.jpg',10000.00,0.00,'black','M',10),(1,15,'AB1234','/images/151.jpg',20000.00,0.00,'black','M',20),(1,16,'AB1234','/images/161.jpg',30000.00,0.00,'black','M',10),(1,17,'AB1234','/images/171.jpg',1000.00,0.00,'red','M',20),(1,18,'AB1234','/images/181.jpg',20000.00,0.00,'black','S',10),(1,19,'AB1234','/images/191.jpg',20000.00,0.00,'black','M',6),(1,20,'AB1234','/images/201.jpg',20000.00,0.00,'blue','M',6),(1,21,'AB1234','/images/211.jpg',25000.00,0.00,'blue','S',14),(1,22,'AB1234','/images/221.jpg',30000.00,0.00,'black','M',14),(1,23,'AB1234','/images/231.jpg',20000.00,0.00,'black','M',6),(1,24,'AB1234','/images/241.jpg',20000.00,0.00,'black','M',14),(1,25,'AB1234','/images/251.jpg',10000.00,0.00,'black','S',10),(1,26,'AB1234','/images/261.jpg',17000.00,0.00,'red','M',14),(1,27,'AB1234','/images/271.jpg',20000.00,0.00,'black','M',10),(1,28,'AB1234','/images/281.jpg',15000.00,0.00,'black','M',10),(1,29,'AB1234','/images/291.jpg',15000.00,0.00,'black','S',14),(1,30,'AB1234','/images/301.jpg',15000.00,0.00,'black','S',10),(1,31,'AB1234','/images/311.jpg',15000.00,0.00,'black','S',10),(1,32,'AB1234','/images/321.jpg',20000.00,0.00,'black','S',14),(1,33,'AB1234','/images/331.jpg',10000.00,0.00,'black','S',10),(1,34,'AB1234','/images/341.jpg',20000.00,0.00,'black','S',10),(1,35,'AB1234','/images/351.jpg',10000.00,0.00,'black','S',10),(1,36,'AB1234','/images/361.jpg',20000.00,0.00,'black','S',10),(1,37,'AB1234','/images/371.jpg',100000.00,0.00,'black','M',20),(1,38,'AB1234','/images/381.jpg',200000.00,0.00,'black','M',10),(1,39,'AB1234','/images/391.jpg',100000.00,0.00,'black','M',10),(1,40,'AB1234','/images/401.jpg',20000.00,0.00,'white','S',20),(1,41,'AB1234','/images/411.jpg',10000.00,0.00,'white','S',10),(1,42,'AB1234','/images/421.jpg',8000.00,0.00,'black','M',12),(1,43,'AB1234','/images/431.jpg',5000.00,0.00,'black','M',12),(1,44,'AB1234','/images/441.jpg',13000.00,0.00,'black','M',10),(1,45,'AB1234','/images/451.jpg',15000.00,0.00,'black','M',12),(1,46,'AB1234','/images/461.jpg',17000.00,0.00,'black','M',10),(1,47,'AB1234','/images/471.jpg',23000.00,0.00,'black','M',10),(1,48,'AB1234','/images/481.jpg',25000.00,0.00,'black','M',16),(1,49,'AB1234','/images/491.jpg',12000.00,0.00,'black','M',16),(1,50,'AB1234','/images/501.jpg',14000.00,0.00,'black','M',12),(1,51,'AB1234','/images/511.jpg',21000.00,0.00,'black','M',16),(2,2,'AB1234','/images/22.jpg',23000.00,0.00,'white','32GB',40),(2,18,'AB1234','/images/182.jpg',20000.00,0.00,'red','S',24),(2,25,'AB1234','/images/252.jpg',10000.00,0.00,'red','S',40),(2,29,'AB1234','/images/292.jpg',15000.00,0.00,'red','S',16),(2,41,'AB1234','/images/412.jpg',10000.00,0.00,'red','S',10),(3,18,'AB1234','/images/183.jpg',20000.00,0.00,'blue','S',40),(3,25,'AB1234','/images/253.jpg',10000.00,0.00,'blue','S',40),(3,29,'AB1234','/images/293.jpg',15000.00,0.00,'blue','S',40),(3,41,'AB1234','/images/413.jpg',10000.00,0.00,'blue','S',20),(4,25,'AB1234','/images/254.jpg',10000.00,0.00,'green','S',40),(4,29,'AB1234','/images/294.jpg',15000.00,0.00,'green','S',56),(4,41,'AB1234','/images/414.jpg',10000.00,0.00,'green','S',10),(5,18,'AB1234','/images/185.jpg',25000.00,0.00,'red','M',24),(5,25,'AB1234','/images/251.jpg',15000.00,0.00,'black','M',56),(5,29,'AB1234','/images/291.jpg',20000.00,0.00,'black','M',56),(5,41,'AB1234','/images/415.jpg',20000.00,0.00,'white','M',10),(6,18,'AB1234','/images/186.jpg',25000.00,0.00,'blue','M',56),(6,25,'AB1234','/images/252.jpg',15000.00,0.00,'red','M',56),(6,29,'AB1234','/images/292.jpg',20000.00,0.00,'red','M',40),(6,41,'AB1234','/images/416.jpg',20000.00,0.00,'red','M',10),(7,18,'AB1234','/images/187.jpg',25000.00,0.00,'green','M',40),(7,25,'AB1234','/images/253.jpg',15000.00,0.00,'blue','M',56),(7,29,'AB1234','/images/293.jpg',20000.00,0.00,'blue','M',40),(7,41,'AB1234','/images/417.jpg',20000.00,0.00,'blue','M',10),(8,18,'AB1234','/images/188.jpg',25000.00,0.00,'black','M',24),(8,25,'AB1234','/images/254.jpg',15000.00,0.00,'green','M',56),(8,29,'AB1234','/images/294.jpg',20000.00,0.00,'green','M',40),(8,41,'AB1234','/images/418.jpg',20000.00,0.00,'green','M',10);
/*!40000 ALTER TABLE `variant` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `review_state` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  KEY `order_id` (`order_id`),
  KEY `fk_review_1_idx` (`product_id`),
  CONSTRAINT `fk_review_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `productorder` (`order_id`) ON DELETE SET NULL,
  CONSTRAINT `review_chk_1` CHECK (((`review_state` >= 1) and (`review_state` <= 5)))
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,3,1),(2,1,4,2),(3,2,1,1),(4,3,4,1),(5,4,5,3),(6,1,2,2),(7,5,4,8);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cart_product`
--

DROP TABLE IF EXISTS `cart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_product` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `variant_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` decimal(5,0) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `cart_id` (`cart_id`),
  KEY `variant_id` (`variant_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_product_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`) ON DELETE CASCADE,
  CONSTRAINT `cart_product_ibfk_2` FOREIGN KEY (`variant_id`) REFERENCES `variant` (`variant_id`) ON DELETE CASCADE,
  CONSTRAINT `cart_product_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_product`
--

LOCK TABLES `cart_product` WRITE;
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
INSERT INTO `cart_product` VALUES (4,2,2,1,1),(13,2,1,11,3),(14,2,1,4,1);
/*!40000 ALTER TABLE `cart_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sellar_feedback`
--

DROP TABLE IF EXISTS `sellar_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sellar_feedback` (
  `feedback_id` int NOT NULL AUTO_INCREMENT,
  `review_id` int DEFAULT NULL,
  `feedback_des` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`feedback_id`),
  KEY `review_id` (`review_id`),
  CONSTRAINT `sellar_feedback_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `review` (`review_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sellar_feedback`
--

LOCK TABLES `sellar_feedback` WRITE;
/*!40000 ALTER TABLE `sellar_feedback` DISABLE KEYS */;
INSERT INTO `sellar_feedback` VALUES (1,1,'Thank you'),(2,2,'Thank you'),(3,3,'Tell us about your concerns'),(4,4,'Thank you for the review'),(5,5,'Thank you');
/*!40000 ALTER TABLE `sellar_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_city`
--

DROP TABLE IF EXISTS `main_city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_city` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_city`
--

LOCK TABLES `main_city` WRITE;
/*!40000 ALTER TABLE `main_city` DISABLE KEYS */;
INSERT INTO `main_city` VALUES (1,'Gampaha'),(2,'Ja-Ela'),(3,'Colombo'),(4,'Kaluthara'),(5,'Kurunegala'),(6,'Anuradhapura'),(7,'Jaffna'),(8,'Galle'),(9,'Mathara'),(10,'Ja-Ela'),(11,'Chilaw'),(12,'Puttlam'),(13,'Kandy'),(14,'Kegalle'),(15,'Panadura'),(16,'Mannar');
/*!40000 ALTER TABLE `main_city` ENABLE KEYS */;
UNLOCK TABLES;


--
--Database Users
--

--Create users

CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin_password';

CREATE USER 'customer'@'localhost' IDENTIFIED WITH mysql_native_password BY 'customer_password';

FLUSH PRIVILEGES;


--Privileges for `admin`@`localhost`

GRANT ALL PRIVILEGES ON `cse_21`.* TO `admin`@`localhost`;


--Privileges for `customer`@`localhost`


GRANT ALL PRIVILEGES ON `cse_21`.`cart_product` TO `customer`@`localhost`;

GRANT ALL PRIVILEGES ON `cse_21`.`cart` TO `customer`@`localhost`;

GRANT SELECT ON `cse_21`.`category` TO `customer`@`localhost`;

GRANT ALL PRIVILEGES ON `cse_21`.`guest_customer` TO `customer`@`localhost`;

GRANT SELECT, INSERT, UPDATE, DELETE ON `cse_21`.`order_product` TO `customer`@`localhost`;

GRANT SELECT ON `cse_21`.`product` TO `customer`@`localhost`;

GRANT SELECT, INSERT, UPDATE, DELETE ON `cse_21`.`productorder` TO `customer`@`localhost`;

GRANT SELECT, INSERT, UPDATE ON `cse_21`.`registered_customer` TO `customer`@`localhost`;

GRANT SELECT, INSERT, UPDATE, DELETE ON `cse_21`.`review` TO `customer`@`localhost`;

GRANT SELECT ON `cse_21`.`subcategory` TO `customer`@`localhost`;

GRANT SELECT ON `cse_21`.`variant` TO `customer`@`localhost`;

GRANT SELECT ON `cse_21`.`main_city` TO `customer`@`localhost`;


FLUSH PRIVILEGES;


--
--views
--

--
-- Temporary view structure for view `customerdetails`
--

DROP TABLE IF EXISTS `customerdetails`;
/*!50001 DROP VIEW IF EXISTS `customerdetails`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE VIEW `customerdetails` AS SELECT 
 1 AS `reg_customer_id`,
 1 AS `email`,
 1 AS `first_name`,
 1 AS `last_name`,
 1 AS `address_line_1`,
 1 AS `address_line_2`,
 1 AS `city`,
 1 AS `phone`;
SET character_set_client = @saved_cs_client;


--Triggers

DROP TRIGGER IF EXISTS `cse_21`.`variant_stock_change`;

DELIMITER $$
USE `cse_21`$$
CREATE DEFINER=`root`@`localhost` TRIGGER `variant_stock_change` BEFORE UPDATE ON `variant` FOR EACH ROW BEGIN
	set new.no_stock = old.no_stock + new.no_stock;  
END$$
DELIMITER ;


--
-- Functions and Procedures
--

--
-- Dumping routines for database 'cse_21'
--
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `addNewAdmin`(
in_email varchar
(100),
in_password varchar
(100),
in_user_name varchar
(100),
in_role varchar
(100),
in_last_login datetime
) RETURNS int
    DETERMINISTIC
BEGIN
	INSERT INTO admin_login_details
		(user_name, email_address, password, role, last_login)
	values
		(in_user_name, in_email, in_password, in_role, in_last_login);
	RETURN 1;
	END ;;
DELIMITER ;


DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `addNewRegCustomer`(in_email varchar(100), in_password varchar(255), in_first_name varchar(100), in_last_name varchar(100), in_zip_code varchar(5), in_address_line_1 varchar(30), in_address_line_2 varchar(30), in_city varchar(30), in_state varchar(30), in_phone varchar(10), in_cart_id int ) RETURNS int
    DETERMINISTIC
BEGIN
DECLARE added_id INTEGER;
INSERT INTO registered_customer (email, password, first_name, last_name, zip_code, address_line_1, address_line_2, city, state, phone, cart_id) VALUES(in_email, in_password, in_first_name, in_last_name, in_zip_code, in_address_line_1, in_address_line_2, in_city, in_state, in_phone, in_cart_id);
SELECT LAST_INSERT_ID() into added_id;
RETURN added_id;
END ;;
DELIMITER ;


DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `adminAlreadyRegistered`(`in_email` varchar
(100)) RETURNS int
    DETERMINISTIC
BEGIN
	declare state int;
select exists
(select *
from admin_login_details
where email_address = in_email)
into state;
RETURN state;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `cartItemExists`(usercartid varchar(10), in_variant_id varchar(10), in_product_id varchar(10)) RETURNS int
    DETERMINISTIC
BEGIN
declare entrycount int;

select count(*) into entrycount from cart_product where cart_id = usercartid and variant_id = in_variant_id and product_id = in_product_id;
RETURN entrycount;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `deleteFromCart`(usercartid varchar(10), in_variant_id varchar(10), in_product_id varchar(10)) RETURNS int
    DETERMINISTIC
BEGIN
delete from cart_product where cart_id = usercartid and variant_id = in_variant_id and product_id = in_product_id;
RETURN 1;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `deleteProductById`(in_product_id int) RETURNS int
    DETERMINISTIC
BEGIN
	DELETE FROM product WHERE product_id = in_product_id;
	RETURN 1;
	END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `deleteVariantsByProductId`(in_product_id int) RETURNS int
    DETERMINISTIC
BEGIN
	DELETE FROM variant WHERE product_id = in_product_id;
	RETURN 1;
	END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getAverageRatingForProduct`(in_product_id integer) RETURNS int
    DETERMINISTIC
BEGIN
	declare averagerating integer;
    select avg(review_state) into averagerating from review where review.product_id=in_product_id;

RETURN averagerating;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getcartid`(userid varchar(10)) RETURNS varchar(10) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
DECLARE cartid varchar(10);
SELECT DISTINCT cart_id INTO cartid from registered_customer where reg_customer_id = userid;
RETURN cartid ;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getNextCartId`() RETURNS int
    DETERMINISTIC
BEGIN

DECLARE next_cart_id INTEGER;
SELECT MAX(cart_id) INTO next_cart_id FROM cart;
RETURN next_cart_id ;

END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `increaseCartQuantity`(usercartid varchar(10), in_variant_id varchar(10), in_product_id varchar(10), addQ numeric(5,0)) RETURNS int
    DETERMINISTIC
BEGIN

declare currentQ numeric(5,0);
select distinct quantity into currentQ from cart_product where cart_id =usercartid and variant_id = in_variant_id and product_id = in_product_id;

update cart_product set quantity = quantity + addQ where cart_id =usercartid and variant_id = in_variant_id and product_id = in_product_id;

RETURN 1;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `initOrder`(
_cutomerid int,
_customertype varchar(15),
_paymethod varchar(15), 
_totalpayment decimal(10,2),
_delstat varchar(10),
_delmethod varchar(15),
_estim datetime, 
_note varchar(300)) RETURNS int
    DETERMINISTIC
BEGIN
	INSERT INTO `cse_21`.`productorder`
(`order_date`,
`customer_id`,
`customer_type`,
`payment_method`, 
`total_payment`,
`delivery_status`,
`delivery_method`,
`delivery_estimate`,
`additional_notes`)
VALUES
(date(now()),
_cutomerid,
_customertype,
_paymethod,
_totalpayment,
_delstat,
_delmethod,
_estim,
_note); 
RETURN last_insert_id();
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `insertNewCart`() RETURNS int
    DETERMINISTIC
BEGIN
INSERT INTO cart(selected_count) VALUES (0);
RETURN 1;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `insertToCart`(in_cart_id varchar(10), in_variant_id varchar(10), in_product_id varchar(10), in_quantity decimal(5,0)) RETURNS int
    DETERMINISTIC
BEGIN
insert into cart_product(cart_id,variant_id,product_id,quantity) values(in_cart_id,in_variant_id,in_product_id,in_quantity);
RETURN 1;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `isMainCity`(_city varchar(30)) RETURNS int
    DETERMINISTIC
BEGIN
	if lower(_city) in  (select lower(city_name) from main_city) then
		return 1;
	else
		return 0;
	end if;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `updateCartQuantity`(usercartid varchar(10), in_variant_id varchar(10), in_product_id varchar(10), newQ numeric(5,0)) RETURNS int
    DETERMINISTIC
BEGIN
update cart_product set quantity = newQ where cart_id =usercartid and variant_id = in_variant_id and product_id = in_product_id;

RETURN 1;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`admin`@`localhost` FUNCTION `userAlreadyRegistered`(`in_email` VARCHAR(100)) RETURNS int
    DETERMINISTIC
BEGIN

DECLARE state INTEGER;

SELECT EXISTS(SELECT * FROM registered_customer WHERE email = in_email) INTO state;


RETURN state;

END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `addToCart`(userid varchar(10),in_variant_id varchar(10), in_product_id varchar(10), in_quantity decimal(5,0))
BEGIN
	declare usercartid varchar(10);
    declare exist int;
    
    SET usercartid = (Select getcartid(userid));
    set exist = (select cartItemExists(usercartid,in_variant_id,in_product_id));
    
    if exist < 1 
		then select insertToCart(usercartid,in_variant_id,in_product_id,in_quantity) as submitstate;
    else
		
        update cart_product set quantity = in_quantity where product_id = in_product_id and variant_id = in_variant_id and cart_id = usercartid;
    end if;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `changeCartQuantity`(userid varchar(10), in_variant_id varchar(10), in_product_id varchar(10), newQ numeric(5,0))
BEGIN
declare usercartid varchar(10);

set usercartid = (select getcartid(userid));

select  updateCartQuantity(usercartid,in_variant_id,in_product_id,newQ) as updatestate;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProduct`(in in_product_id int)
BEGIN
	select deleteVariantsByProductId(in_product_id);
	select deleteProductById(in_product_id);
	END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCartItems`(IN userid  varchar(10))
BEGIN
	declare usercartid varchar(10);
    
    SET usercartid = (Select getcartid(userid));
    
    SELECT tbl.ID as cart_row_id,variant.price as price,variant.offer as offer, tbl.quantity as quantity from (variant join (SELECT ID,product_id,variant_id,quantity from cart_product where cart_id=usercartid) as tbl on (variant.variant_id= tbl.variant_id and variant.product_id=tbl.product_id));
    SELECT product.product_name as productname, product.brand as brand from (product join (SELECT product_id from cart_product where cart_id=usercartid) as tbl on (product.product_id = tbl.product_id));
    SELECT image.product_image as image_path  from (image join (SELECT product_id,variant_id from cart_product where cart_id=usercartid) as tbl on (image.variant_id= tbl.variant_id and image.product_id=tbl.product_id));
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCatSubcatSupIds`(in in_category_name varchar(100), in in_subcat_name varchar(100), in in_supplier_name varchar(100))
BEGIN
	SELECT category_id FROM category where category_name=in_category_name;
    SELECT subcat_id FROM subcategory where subcat_name=in_subcat_name;
    SELECT supplier_id FROM supplier where supplier_name=in_supplier_name;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`customer`@`localhost` PROCEDURE `getProductById`(IN product_id integer)
BEGIN
	SELECT product_name, description, weight, dimension, brand FROM product WHERE product.product_id =product_id;
    SELECT DISTINCT color FROM variant WHERE variant.product_id =product_id;
    SELECT DISTINCT size FROM variant WHERE variant.product_id =product_id;
    SELECT variant_id, SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE variant.product_id =product_id LIMIT 1;
    SELECT category_name FROM category WHERE category.category_id=(SELECT category_id FROM product WHERE product.product_id =product_id);
    SELECT subcat_name FROM subcategory WHERE subcategory.subcat_id=(SELECT subcat_id FROM product WHERE product.product_id =product_id) AND subcategory.category_id=(SELECT category_id FROM product WHERE product.product_id =product_id);
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductForAdmin`(in in_category_id integer, in in_subcat_id integer, in in_supplier_id integer)
BEGIN
	SELECT category_name from category where category_id = in_category_id;
	SELECT subcat_name from subcategory where subcat_id = in_subcat_id and category_id = in_category_id;
	SELECT supplier_name from supplier where supplier_id = in_supplier_id;
	END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `interestPeriod`(in _productid integer)
BEGIN
	
    declare _season varchar(10);
    
        
    set  _season = (select season from (select product_id,sum(quantity) as totalsales,date_format(order_date,"%Y %m") as season, rank() over (order by sum(quantity) desc) as popularity from order_product join productorder on order_product.order_id=productorder.order_id where product_id = _productid group by date_format(order_date,"%Y %m"))tbl where popularity =1 );
	select _season as interested_period; 
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `moveToOrder_gst`(
cust_id int,
_paymethod varchar(15), 
_delstat varchar(10),
_delmethod varchar(15),
_note varchar(300),
_productlist JSON)
BEGIN
	declare _submitstate int;
    
    declare _variantid int;
    declare _productid int;
    declare _quantity decimal(5,0);
    
    declare _price decimal(10,2);
    declare _offer decimal(10,2);
    
    declare _totalprice decimal(10,2);
    declare _totaloffer decimal(10,2);
    declare _finalprice decimal(10,2);
    
    declare _lastorderid int; 
    
    declare _productlist_len int;
    declare _counter int;
    
    declare _city  varchar(30);
    declare _ismaincity bool;
    declare _delay int;
    declare _nostockdelay int default 0;
    
    declare _newstock int;
    
    DECLARE _rollback BOOLEAN DEFAULT FALSE;
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET _rollback := TRUE;
    
    
    start transaction;
		set _city = (select lower(city) from guest_customer where guest_id = cust_id);
        set _ismaincity = (select isMainCity(_city));
        
        if _ismaincity =0 then
			set _delay=7;
		else
			set _delay=5;
		end if;
        
		set _submitstate = (select initOrder(cust_id,"Guest",_paymethod,0.0,_delstat,_delmethod,date(now()),_note));
        
        set _lastorderid =_submitstate;
        
        set _counter = 0;
        set _productlist_len = json_length(_productlist);
        
		while _counter < _productlist_len do
        
			set @productline = json_extract(_productlist, concat("$[",_counter,"]"));
            
            set _variantid = json_extract(@productline,"$.variant_id");
            set _productid = json_extract(@productline,"$.product_id");
            set _quantity = json_extract(@productline,"$.quantity");
            
            set _price= (select price from variant where variant_id = _variantid and product_id = _productid);
            set _offer= (select offer from variant where variant_id = _variantid and product_id = _productid);
            
            set _totalprice = _price*_quantity;
            set _totaloffer = _offer*_quantity;
            
            set _finalprice = _totalprice - _totaloffer;
            
            update productorder set total_payment = total_payment + _finalprice where order_id = _lastorderid;
            
            update variant set no_stock = _quantity * -1 where product_id = _productid and variant_id = _variantid;
            
            set _newstock = (select no_stock from variant where product_id = _productid and variant_id = _variantid);
            
            if _newstock < 0 then
				set _nostockdelay = 3;
			end if;
            
            INSERT INTO order_product(
`product_id`,
`quantity`,
`product_price`,
`product_offer`,
`order_id`)
VALUES
(_productid,
_quantity,
_price,
_offer,
_lastorderid);

		set _counter = _counter+1;
        END while;
        
		update productorder set delivery_estimate = date_add( delivery_estimate, interval _delay + _nostockdelay day) where order_id = _lastorderid;
    
		if _rollback
			then rollback;
			select false;
		else
			select true;
		end if;
    
    commit;
    
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `moveToOrder_reg`(
cust_id int,
_paymethod varchar(15), 
_delstat varchar(10),
_delmethod varchar(15),
_note varchar(300) )
BEGIN
	declare  _submitstate int;
	declare _usercartid int; 
    
    declare _variantid int;
    declare _productid int;
    declare _quantity decimal(5,0);
    
    declare _price decimal(10,2);
    declare _offer decimal(10,2);
    
    declare _totalprice decimal(10,2);
    declare _totaloffer decimal(10,2);
    declare _finalprice decimal(10,2);
    
    declare _lastorderid int; 
    
    declare _city  varchar(30);
    declare _ismaincity bool;
    declare _delay int;
    declare _nostockdelay int default 0;
    
    declare _newstock int;
    
    DECLARE _done BOOLEAN DEFAULT FALSE;
    DECLARE _rollback BOOLEAN DEFAULT FALSE;
	DECLARE _cart_cur CURSOR FOR select variant_id,product_id,quantity from cart_product where  cart_id = _usercartid;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET _done := TRUE;
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION set _rollback =1;
    
	set _usercartid = (select getcartid(cust_id));
    
    OPEN _cart_cur;
    
    start transaction;
		set _city = (select lower(city) from registered_customer where reg_customer_id = cust_id);
        set _ismaincity = (select isMainCity(_city));
        
        if _ismaincity =0 then
			set _delay=7;
		else
			set _delay=5;
		end if;
        
		set _submitstate = (select initOrder(cust_id,"Registered",_paymethod,0.0,_delstat,_delmethod,date(now()),_note));
        
        set _lastorderid =_submitstate;
        
		_moverow: LOOP
        
			FETCH _cart_cur INTO _variantid,_productid,_quantity;
			IF _done THEN
				LEAVE _moverow;
			END IF;
            
            set _price= (select price from variant where variant_id = _variantid and product_id = _productid);
            set _offer= (select offer from variant where variant_id = _variantid and product_id = _productid);
            
            set _totalprice = _price*_quantity;
            set _totaloffer = _offer*_quantity;
            
            set _finalprice = _totalprice - _totaloffer;
            
            update productorder set total_payment = total_payment + _finalprice where order_id = _lastorderid;
            
            update variant set no_stock = _quantity * -1 where product_id = _productid and variant_id = _variantid;
            
            set _newstock = (select no_stock from variant where product_id = _productid and variant_id = _variantid);
            
            if _newstock < 0 then
				set _nostockdelay = 3;
			end if;
            
            INSERT INTO order_product(
`product_id`,
`quantity`,
`product_price`,
`product_offer`,
`order_id`)
VALUES
(_productid,
_quantity,
_price,
_offer,
_lastorderid);

		END LOOP _moverow; 
        
	update productorder set delivery_estimate = date_add( delivery_estimate, interval _delay + _nostockdelay day) where order_id = _lastorderid;
		
	delete from cart_product where cart_id = _usercartid;
    
    if _rollback
		then rollback;
        select false;
	else
		select true;
	end if;
    commit;
    
    CLOSE _cart_cur;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `newGuest`(
_email varchar(100),
_phone varchar(10), 
_first_name varchar(100),
_last_name varchar(100),
_zip_code	varchar(5),
_address_line_1	varchar(30),
_address_line_2	varchar(30),
_city	varchar(30),
_state	varchar(30)
)
BEGIN

	declare _newguestID int;
	INSERT INTO `cse_21`.`guest_customer`
(`email`,
`phone`,
`first_name`,
`last_name`,
`zip_code`,
`address_line_1`,
`address_line_2`,
`city`,
`state`)
VALUES
(_email,
_phone,
_first_name,
_last_name,
_zip_code,
_address_line_1,
_address_line_2,
_city,
_state);

	set _newguestID = (select last_insert_id());
    
    select _newguestID as cust_id;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `registerAdmin`(
in in_email varchar
(100),
in in_password varchar
(100),
in in_user_name varchar
(100),
in in_role varchar
(100),
in in_last_login datetime,
out state bool
)
BEGIN
	declare emailexists int;
set emailexists
=
(select adminAlreadyRegistered(in_email));
if emailexists =0 then
set @temp_var = (select addNewAdmin(in_email, in_password, in_user_name, in_role, in_last_login));
set state
= true;
	else
set state
= false;
end
if;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`customer`@`localhost` PROCEDURE `registerCustomer`(
	in in_email varchar(100), 
	in in_password varchar(255), 
    in in_first_name varchar(100), 
    in in_last_name varchar(100), 
    in in_zip_code varchar(5), 
    in in_address_line_1 varchar(30), 
    in in_address_line_2 varchar(30), 
    in in_city varchar(30), 
    in in_state varchar(30), 
    in in_phone varchar(10),
    out state integer
)
BEGIN
	declare emailexist int;
    declare newcartid int;
    
    set emailexist = (select userAlreadyRegistered(in_email));
    
    if emailexist = 0 then 
    
    START TRANSACTION;
    
		set @tmp_var_1 = (select insertNewCart());
        SET newcartid = (Select getNextCartId());
        
        set state = (select addNewRegCustomer(in_email, in_password, in_first_name, in_last_name, in_zip_code, in_address_line_1, in_address_line_2, in_city, in_state, in_phone, newcartid));

	commit;
    
	else
		set state=0;
	end if;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `removeFromCart`(userid varchar(10), in_variant_id varchar(10), in_product_id varchar(10))
BEGIN
declare usercartid varchar(10);

set usercartid = (select getcartid(userid));

select  deleteFromCart(usercartid,in_variant_id,in_product_id) as deletestate;
END ;;
DELIMITER ;


--
--Priveledges for Functions And Procedures
GRANT EXECUTE ON PROCEDURE cse_21.registerCustomer TO 'customer'@'localhost';

GRANT EXECUTE ON FUNCTION cse_21.userAlreadyRegistered TO 'customer'@'localhost';

GRANT EXECUTE ON PROCEDURE cse_21.getProductById TO 'customer'@'localhost';

GRANT EXECUTE ON FUNCTION cse_21.getAverageRatingForProduct TO 'customer'@'localhost';

GRANT EXECUTE ON FUNCTION cse_21.insertNewCart TO 'customer'@'localhost';

GRANT EXECUTE ON FUNCTION cse_21.getNextCartId TO 'customer'@'localhost';

GRANT EXECUTE ON FUNCTION cse_21.addNewRegCustomer TO 'customer'@'localhost';

GRANT EXECUTE ON FUNCTION cse_21.cartItemExists TO 'customer'@'localhost';
GRANT EXECUTE ON FUNCTION cse_21.deleteFromCart TO 'customer'@'localhost';
GRANT EXECUTE ON FUNCTION cse_21.getcartid TO 'customer'@'localhost';
GRANT EXECUTE ON FUNCTION cse_21.increaseCartQuantity TO 'customer'@'localhost';
GRANT EXECUTE ON FUNCTION cse_21.initOrder TO 'customer'@'localhost';
GRANT EXECUTE ON FUNCTION cse_21.insertToCart TO 'customer'@'localhost';
GRANT EXECUTE ON FUNCTION cse_21.isMainCity TO 'customer'@'localhost';
GRANT EXECUTE ON FUNCTION cse_21.updateCartQuantity TO 'customer'@'localhost';


GRANT EXECUTE ON PROCEDURE cse_21.addToCart TO 'customer'@'localhost';
GRANT EXECUTE ON PROCEDURE cse_21.changeCartQuantity TO 'customer'@'localhost';
GRANT EXECUTE ON PROCEDURE cse_21.deleteProduct TO 'customer'@'localhost';
GRANT EXECUTE ON PROCEDURE cse_21.getCartItems TO 'customer'@'localhost';
GRANT EXECUTE ON PROCEDURE cse_21.moveToOrder_gst TO 'customer'@'localhost';
GRANT EXECUTE ON PROCEDURE cse_21.moveToOrder_reg TO 'customer'@'localhost';
GRANT EXECUTE ON PROCEDURE cse_21.removeFromCart TO 'customer'@'localhost';


FLUSH PRIVILEGES;
