
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_login_details`
--

LOCK TABLES `admin_login_details` WRITE;
/*!40000 ALTER TABLE `admin_login_details` DISABLE KEYS */;
INSERT INTO `admin_login_details` VALUES (1,'admin1','admin1@mail.com','password','admin',NULL),(2,'admin2','admin2@mail.com','password','admin',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,0),(2,0),(3,0),(4,0),(5,0),(6,0),(7,0),(8,0),(9,0),(10,0),(11,0),(12,0),(13,0),(14,0),(15,0),(16,0),(17,0),(18,0),(19,0),(20,0),(21,0),(22,0),(23,0),(24,0),(25,0),(26,0),(27,0),(28,0),(29,0),(30,0),(31,0),(32,0),(33,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registered_customer`
--

LOCK TABLES `registered_customer` WRITE;
/*!40000 ALTER TABLE `registered_customer` DISABLE KEYS */;
INSERT INTO `registered_customer` VALUES (1,'kavindu@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','kavindu','ravishka','1111','114','malwatta','Gampaha','western','0332288888',1),(2,'dulaj@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','dulaj','kavinda','2222','224','kotadeniyawa','Negombo','western','0332242342',2),(3,'yasindu@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','yasindu','dilshan','3333','344','main street','Colombo','western','0332265756',3),(4,'dakshitha@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','dakshitha','sooriyaarachchi','4344','32/A','jayanthi lane','Wattala','western','2582582587',4),(5,'dave@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','dave','kavinda','1123','45','main street','Galle','southern','2582582587',5),(6,'nipun@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','nipun','fernando','5555','1/2/A','asgiriya','Hikkaduwa','southern','2582582587',6),(7,'dilshan@mail.com','$2a$10$Y5j5EgO/UJXrFXLwDhqch.dl1cXYG7RvYZVfbu1HMbM49zi45YjCK','dilshan','yazi','3456','5','main street','Galle','southern','8989897875',7),(8,'adikari@mail.com','$2a$10$OWDrHoSZX/uFuN/kcKyTy.eE34gbiNJSJ4pouwaE6EbH2NWMdlAe2','kave','adiri','1234','58','side lane','Mathara','southern','0332278596',8),(9,'soori@mail.com','$2a$10$mLhV.ZuUYsmC65bWQyuxde1T2kbPq8zISpB4MB657Ezqql2bOpSX.','dak','soori','5896','256','main street','Ampara','eastern','0332278596',9),(10,'bimal@mail.com','$2a$10$jB5t9G0rn3J8LZiIxmLJPeotJqPU0haQawxzjuq2UqiISKBoY.zhy','bimal','perera','5671','89A','hospital road','Dibulagala','eastern','0332278596',10),(11,'saman@mail.com','$2a$10$WAgVdHxVYWZ0Cb40oJdO.e8sbjoGGXV8w6U5hmBgANrri2eCBLKfu','saman','jaya','5674','25B','main street','Pandicheri','eastern','0332278596',11),(12,'jayanthi@mail.com','$2a$10$mDhinwDRQ2QOHtydcZqPlO/E/EiESrMYDBEkdD1K4/qrhnsZH0fHy','jayanthi','sarala','5678','7D','dikman road','Galgamuwa','eastern','0332278596',12),(13,'hasantha@mail.com','$2a$10$7FSkpkE0W1fvjMK1Bkjpi.LgkvBLsquCaPB6MQkbpD.2/oUAeayPG','hasantha','ruwan','5675','78','main street','Kegalle','sabaragamuwa','0332278596',13),(14,'neel@mail.com','$2a$10$Hv7/iog7.T68hn1mzzxR6eVkSd1cTXNEZXqUwt/GgfUsgw.mPv88S','neel','jayakody','9638','8','cemetry road','Mawanella','sabaragamuwa','0332278596',14),(15,'raman@mail.com','$2a$10$WpWk1i0czMl6W9n8MawLf.pJh9jXPZbCOipfkJ6Vc2ZohWSJob8Ce','raman','balha','5896','9','main street','Kegalle','sabaragamuwa','0332278596',15),(16,'miraj@mail.com','$2a$10$mDhinwDRQ2QOHtydcZqPlO/E/EiESrMYDBEkdD1K4/qrhnsZH0fHy','miraj','tharaka','5841','23','akarangaha','Chilaw','sabaragamuwa','0332278596',16),(17,'vidushal@mail.com','$2a$10$BTX6xLBybrylfNCq5Ady8.PTjNCgGbX.u48qRANMtOmYvS9ebPruO','vidushal','jayakody','2548','41','main street','Jaffna','north','0332278596',17),(18,'piyu@mail.com','$2a$10$fiE3C5Ok0DH.VAQdmaq.8emko3YnJRwtPFH8HOs7cwinsL.w9Pbru','piyu','ranawaka','8563','47','round lane','ElepantPass','north','0332278596',18),(19,'rathnaweera@mail.com','$2a$10$mEUzwns4AUx14U7.3KN5CeI4XYItKtAlDKWL4qUvhYzeXfZmHMUTW','anuradha','jayakody','2569','7C','malwatta','Kandy','central','0332278596',19),(20,'sunimal@mail.com','$2a$10$.P/2kVuulZTovgWE4K/py.0YWAjQf4TWuQkwf/HsfU5yuZNj7ifL.','sunimal','perera','5896','24','main street','Mathale','central','0332278596',20),(21,'anura@mail.com','$2a$10$WXpv.QG8sS1BWu7SE4jhsOuUVcsHX0/NszEeUFgFVtjR.FuUHxDam','anura','kumara','5874','53','jaya mawatha','Kandy','central','0332278596',21),(22,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productorder`
--

LOCK TABLES `productorder` WRITE;
/*!40000 ALTER TABLE `productorder` DISABLE KEYS */;
INSERT INTO `productorder` VALUES (1,'2021-02-27 13:18:46',1,'Guest','VISA',300000.00,'delivered','Postal','2021-03-11',NULL),(2,'2021-02-27 13:18:46',2,'Guest','VISA',400000.00,'delivered','Postal','2021-03-11',''),(3,'2021-02-27 13:18:46',2,'Registered','VISA',200000.00,'delivered','Postal','2021-03-11',NULL),(4,'2021-02-07 13:18:46',3,'Registered','PayPal',100000.00,'delivered','Courier','2021-03-11',NULL),(5,'2021-04-07 13:18:46',3,'Registered','VISA',100000.00,'delivered','Postal','2021-03-11',NULL),(6,'2021-05-07 13:18:46',5,'Registered','VISA',100000.00,'delivered','Postal','2021-03-11',NULL),(7,'2021-06-07 13:18:46',6,'Registered','VISA',100000.00,'delivered','Postal','2021-03-11',NULL),(8,'2021-07-07 13:18:46',7,'Registered','VISA',100000.00,'delivered','Postal','2021-03-11',NULL),(9,'2021-08-07 13:18:46',8,'Registered','VISA',100000.00,'delivered','Postal','2021-03-11',NULL),(10,'2021-09-07 13:18:46',4,'Registered','VISA',100000.00,'delivered','Postal','2021-03-11',NULL),(11,'2021-10-07 13:18:46',3,'Guest','VISA',100000.00,'delivered','Courier','2021-03-11',NULL),(12,'2021-11-07 13:18:46',4,'Guest','VISA',100000.00,'delivered','Courier','2021-03-11',NULL),(13,'2021-12-07 13:18:46',5,'Guest','VISA',400000.00,'delivered','Postal','2021-03-11',NULL),(14,'2021-06-07 13:18:46',10,'Registered','VISA',400000.00,'delivered','Courier','2021-03-11',NULL),(15,'2021-06-07 13:18:46',9,'Registered','PayPal',400000.00,'delivered','Courier','2021-03-11',NULL),(16,'2021-02-27 13:18:46',14,'Registered','VISA',400000.00,'delivered','Courier','2021-03-11',NULL),(17,'2021-02-27 13:18:46',5,'Registered','VISA',400000.00,'delivered','Postal','2021-03-11',NULL),(18,'2021-10-07 13:18:46',21,'Registered','VISA',400000.00,'delivered','Postal','2021-03-11',NULL),(19,'2021-10-07 13:18:46',16,'Registered','VISA',400000.00,'delivered','Courier','2021-03-11',NULL),(20,'2021-05-07 13:18:46',12,'Registered','VISA',400000.00,'delivered','Courier','2021-03-11',NULL);
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
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`guest_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `guest_customer_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `productorder` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guest_customer`
--

LOCK TABLES `guest_customer` WRITE;
/*!40000 ALTER TABLE `guest_customer` DISABLE KEYS */;
INSERT INTO `guest_customer` VALUES (1,'danuka@mail.com','0112299999','danuka','sandaruwan','5555','234','ragama','Colombo','western',1),(2,'vidura@mail.com','0332278596','vudura','ravihansa','5896','1','wathiruwala','Gampaha','western',2),(3,'kasun@mail.com','0332278596','kasun','perrea','5896','2','main street','Negombo','western',11),(4,'nisuga@mail.com','0332278596','nisuga','chinthaka','5896','3A','rabawa','Kegalle','sabaragamuwa',12),(5,'vinura@mail.com','0332278596','vinura','adhas','5896','85','matale','Kandy','central',13);
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
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (1,4,1,98000.00,0.00,1),(2,1,1,98000.00,0.00,4),(3,1,1,98000.00,0.00,2),(4,1,1,98000.00,0.00,3),(5,1,1,98000.00,0.00,4),(6,2,1,23000.00,0.00,1),(7,2,1,23000.00,0.00,2),(8,2,1,23000.00,0.00,3),(9,3,1,52000.00,0.00,3),(10,3,1,52000.00,0.00,4),(11,7,1,52000.00,0.00,5),(12,8,2,52000.00,0.00,6),(13,3,1,52000.00,0.00,7),(14,4,1,52000.00,0.00,7),(15,7,2,52000.00,0.00,8),(16,6,1,52000.00,0.00,9),(17,2,2,52000.00,0.00,9),(18,8,1,23000.00,0.00,10),(19,8,2,23000.00,0.00,11),(20,6,1,23000.00,0.00,12),(21,1,1,23000.00,0.00,12),(22,7,1,23000.00,0.00,13),(23,8,1,400000.00,0.00,14),(24,22,1,400000.00,0.00,15),(25,18,1,400000.00,0.00,16),(26,30,2,400000.00,0.00,17),(27,25,1,400000.00,0.00,18),(28,40,2,400000.00,0.00,19),(29,8,1,400000.00,0.00,20);
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
INSERT INTO `variant` VALUES (1,1,'AB1234','',97000.00,0.00,'silver','M',11),(1,2,'AB1234','',23000.00,0.00,'black','32GB',5),(1,3,'AB1234','',52000.00,0.00,'black','M',2),(1,4,'AB1234','',18000.00,0.00,'blue','M',2),(1,5,'AB1234','',50000.00,0.00,'white','64GB',5),(1,6,'AB1234','',3500.00,0.00,'white','M',3),(1,7,'AB1234','',98000.00,0.00,'black','M',3),(1,8,'AB1234','',126000.00,0.00,'white','M',2),(1,9,'AB1234','',134000.00,0.00,'black','M',4),(1,11,'AB1234',NULL,45000.00,0.00,'black','16GB',10),(1,12,'AB1234',NULL,39000.00,0.00,'grey','32GB',12),(1,14,'AB1234',NULL,10000.00,0.00,'black','M',5),(1,15,'AB1234',NULL,20000.00,0.00,'black','M',10),(1,16,'AB1234',NULL,30000.00,0.00,'black','M',5),(1,17,'AB1234',NULL,1000.00,0.00,'red','M',10),(1,18,'AB1234',NULL,20000.00,0.00,'black','S',5),(1,19,'AB1234',NULL,20000.00,0.00,'black','M',3),(1,20,'AB1234',NULL,20000.00,0.00,'blue','M',3),(1,21,'AB1234',NULL,25000.00,0.00,'blue','S',7),(1,22,'AB1234',NULL,30000.00,0.00,'black','M',7),(1,23,'AB1234',NULL,20000.00,0.00,'black','M',3),(1,24,'AB1234',NULL,20000.00,0.00,'black','M',7),(1,25,'AB1234',NULL,10000.00,0.00,'black','S',5),(1,26,'AB1234',NULL,17000.00,0.00,'red','M',7),(1,27,'AB1234',NULL,20000.00,0.00,'black','M',5),(1,28,'AB1234',NULL,15000.00,0.00,'black','M',5),(1,29,'AB1234',NULL,15000.00,0.00,'black','S',7),(1,30,'AB1234',NULL,15000.00,0.00,'black','S',5),(1,31,'AB1234',NULL,15000.00,0.00,'black','S',5),(1,32,'AB1234',NULL,20000.00,0.00,'black','S',7),(1,33,'AB1234',NULL,10000.00,0.00,'black','S',5),(1,34,'AB1234',NULL,20000.00,0.00,'black','S',5),(1,35,'AB1234',NULL,10000.00,0.00,'black','S',5),(1,36,'AB1234',NULL,20000.00,0.00,'black','S',5),(1,37,'AB1234',NULL,100000.00,0.00,'black','M',10),(1,38,'AB1234',NULL,200000.00,0.00,'black','M',5),(1,39,'AB1234',NULL,100000.00,0.00,'black','M',5),(1,40,'AB1234',NULL,20000.00,0.00,'white','S',10),(1,41,'AB1234',NULL,10000.00,0.00,'white','S',5),(1,42,'AB1234',NULL,8000.00,0.00,'black','M',6),(1,43,'AB1234',NULL,5000.00,0.00,'black','M',6),(1,44,'AB1234',NULL,13000.00,0.00,'black','M',5),(1,45,'AB1234',NULL,15000.00,0.00,'black','M',6),(1,46,'AB1234',NULL,17000.00,0.00,'black','M',5),(1,47,'AB1234',NULL,23000.00,0.00,'black','M',5),(1,48,'AB1234',NULL,25000.00,0.00,'black','M',8),(1,49,'AB1234',NULL,12000.00,0.00,'black','M',8),(1,50,'AB1234',NULL,14000.00,0.00,'black','M',6),(1,51,'AB1234',NULL,21000.00,0.00,'black','M',8),(2,2,'AB1234','',23000.00,0.00,'white','32GB',5),(2,18,'AB1234',NULL,20000.00,0.00,'red','S',3),(2,25,'AB1234',NULL,10000.00,0.00,'red','S',5),(2,29,'AB1234',NULL,15000.00,0.00,'red','S',2),(2,41,'AB1234',NULL,10000.00,0.00,'red','S',5),(3,18,'AB1234',NULL,20000.00,0.00,'blue','S',5),(3,25,'AB1234',NULL,10000.00,0.00,'blue','S',5),(3,29,'AB1234',NULL,15000.00,0.00,'blue','S',5),(3,41,'AB1234',NULL,10000.00,0.00,'blue','S',10),(4,18,'AB1234',NULL,20000.00,0.00,'green','S',7),(4,25,'AB1234',NULL,10000.00,0.00,'green','S',5),(4,29,'AB1234',NULL,15000.00,0.00,'green','S',7),(4,41,'AB1234',NULL,10000.00,0.00,'green','S',5),(5,18,'AB1234',NULL,25000.00,0.00,'red','M',3),(5,25,'AB1234',NULL,15000.00,0.00,'black','M',7),(5,29,'AB1234',NULL,20000.00,0.00,'black','M',7),(5,41,'AB1234',NULL,20000.00,0.00,'white','M',5),(6,18,'AB1234',NULL,25000.00,0.00,'blue','M',7),(6,25,'AB1234',NULL,15000.00,0.00,'red','M',7),(6,29,'AB1234',NULL,20000.00,0.00,'red','M',5),(6,41,'AB1234',NULL,20000.00,0.00,'red','M',5),(7,18,'AB1234',NULL,25000.00,0.00,'green','M',5),(7,25,'AB1234',NULL,15000.00,0.00,'blue','M',7),(7,29,'AB1234',NULL,20000.00,0.00,'blue','M',5),(7,41,'AB1234',NULL,20000.00,0.00,'blue','M',5),(8,18,'AB1234',NULL,25000.00,0.00,'black','M',3),(8,25,'AB1234',NULL,15000.00,0.00,'green','M',7),(8,29,'AB1234',NULL,20000.00,0.00,'green','M',5),(8,41,'AB1234',NULL,20000.00,0.00,'green','M',5);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,3,1),(2,1,4,2),(3,2,1,1),(4,3,4,1),(5,4,5,3),(6,1,2,2);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `cart_product`
--

DROP TABLE IF EXISTS `cart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_product` (
  `ID` int NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_product`
--

LOCK TABLES `cart_product` WRITE;
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
INSERT INTO `cart_product` VALUES (1,1,1,1,1),(2,1,1,2,1),(3,1,1,3,1),(4,2,2,1,1),(5,2,1,7,1),(6,2,1,8,1),(7,2,1,2,1),(8,3,1,1,1),(9,3,1,2,1),(10,3,1,8,1);
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


