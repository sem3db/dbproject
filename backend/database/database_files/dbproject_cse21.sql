


--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` INT NOT NULL AUTO_INCREMENT,
  `selected_count` decimal(5,0) DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES ('1',0),('2',0),('3',0),('4',0);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `category_name` varchar(40) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('1','consumer_electronics','Electronic  devices used in daytoday life'),('2','kitchen_appliances','Devices useful in kitchen activities');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `subcat_id` INT NOT NULL AUTO_INCREMENT,
  `subcat_name` varchar(40) DEFAULT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`subcat_id`,`category_id`),
  KEY `subcategory_ibfk_1` (`category_id`),
  CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES ('1','laptop','1'),('1','rice cooker','2'),('2','smart phone','1'),('2','oven','2'),('3','dongal','1'),('3','gas cooker/stove/ranger','2'),('4','printer/scanner','1'),('4','electric kettle','2'),('5','camera','1'),('5','heater','2');
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `registered_customer`
--

DROP TABLE IF EXISTS `registered_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registered_customer` (
  `reg_customer_id` INT NOT NULL AUTO_INCREMENT,
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
  `cart_id` INT DEFAULT NULL,
  PRIMARY KEY (`reg_customer_id`),
  KEY `cart_id` (`cart_id`),
  CONSTRAINT `registered_customer_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registered_customer`
--

LOCK TABLES `registered_customer` WRITE;
/*!40000 ALTER TABLE `registered_customer` DISABLE KEYS */;
INSERT INTO `registered_customer` VALUES ('1','kavindu@mail.com','password','kavindu','ravishka','1111','114','malwatta','kalgedihena','sri lanka','0332288888','1'),('2','dulaj@mail.com','password','dulaj','kavinda','2222','224','kotadeniyawa','mirigama','sri lanka','0332242342','2'),('3','yasindu@mail.com','password','yasindu','dilshan','3333','344','batapotha','gampaha','sri lanka','0332265756','3'),('4','dakshitha@mail.com','password','dakshitha','sooriyaarachchi','4444','444','negambo','negambo','sri claanka','0333225567','4');
/*!40000 ALTER TABLE `registered_customer` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `admin_login_details`
--

DROP TABLE IF EXISTS `admin_login_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_login_details` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` varchar(60) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_login_details`
--

LOCK TABLES `admin_login_details` WRITE;
/*!40000 ALTER TABLE `admin_login_details` DISABLE KEYS */;
INSERT INTO `admin_login_details` VALUES ('1','admin1','admin1@mail.com','password','admin',NULL),('2','admin2','admin2@mail.com','password','admin',NULL);
/*!40000 ALTER TABLE `admin_login_details` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `ProductOrder`
--

DROP TABLE IF EXISTS `ProductOrder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductOrder` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT DEFAULT NULL,
  `customer_type` varchar(15) DEFAULT NULL,
  `payment_method` varchar(15) DEFAULT NULL,
  `total_payment` decimal(10,2) DEFAULT NULL,
  `delivery_status` varchar(10) DEFAULT NULL,
  `delivery_method` varchar(15) DEFAULT NULL,
  `delivery_estimate` datetime DEFAULT NULL,
  `additional_notes` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  CONSTRAINT `chk_cust_type` CHECK ((`customer_type` in (_utf8mb4'Registered',_utf8mb4'Guest'))),
  CONSTRAINT `chk_deli_meth` CHECK ((`delivery_method` in (_utf8mb4'In_store_pickup',_utf8mb4'Courier',_utf8mb4'Postal'))),
  CONSTRAINT `chk_pay_meth` CHECK ((`payment_method` in (_utf8mb4'CashONDelivery',_utf8mb4'VISA',_utf8mb4'PayPal')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductOrder`
--

LOCK TABLES `ProductOrder` WRITE;
/*!40000 ALTER TABLE `ProductOrder` DISABLE KEYS */;
INSERT INTO `ProductOrder` VALUES ('1','1','Guest','VISA',300000.00,'delivered','Postal','2021-02-16 00:00:00',NULL),('2','1','Registered','VISA',400000.00,'delivered','Postal','2021-02-17 00:00:00',''),('3','2','Registered','VISA',200000.00,'delivered','Postal','2021-02-03 00:00:00',NULL),('4','3','Registered','PayPal',100000.00,'delivered','Courier','2021-02-04 00:00:00',NULL);
/*!40000 ALTER TABLE `ProductOrder` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `guest_customer`
--

DROP TABLE IF EXISTS `guest_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guest_customer` (
  `guest_id` INT NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `zip_code` varchar(5) DEFAULT NULL,
  `address_line_1` varchar(30) DEFAULT NULL,
  `address_line_2` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `order_id` INT DEFAULT NULL,
  PRIMARY KEY (`guest_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `guest_customer_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `ProductOrder` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guest_customer`
--

LOCK TABLES `guest_customer` WRITE;
/*!40000 ALTER TABLE `guest_customer` DISABLE KEYS */;
INSERT INTO `guest_customer` VALUES ('1','danuka@mail.com','0112299999','danuka','sandaruwan','5555','234','ragama','colombo','sri lanka','1');
/*!40000 ALTER TABLE `guest_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `supplier_id` INT NOT NULL AUTO_INCREMENT,
  `supplier_name` varchar(30) DEFAULT NULL,
  `contact_number` varchar(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES ('1','abanse','0112222222','abanse@supply.com'),('2','dell','0113333333','dell@supply.com'),('3','lenovo','0114444444','lenovo@supply.com'),('4','national','0115555555','national@supply.com'),('5','cannon','0116666666','cannon@supply.com'),('6','hp','0117777777','hp@supply.com'),('7','samsung','0118888888','samsung@supply.com'),('8','huawei','0119999999','huawei@supply.com');
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` varchar(60) DEFAULT NULL,
  `category_id` INT DEFAULT NULL,
  `subcat_id` INT DEFAULT NULL,
  `description` text,
  `weight` varchar(5) DEFAULT NULL,
  `dimension` varchar(20) DEFAULT NULL,
  `brand` varchar(20) DEFAULT NULL,
  `supplier_id` INT DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  KEY `subcat_id` (`subcat_id`),
  KEY `supplier_id` (`supplier_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE SET NULL,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`subcat_id`) REFERENCES `subcategory` (`subcat_id`) ON DELETE SET NULL,
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('1','Latitude E5440','1','1',NULL,'',NULL,'dell','2'),('10','15z-gw000','1','1','','','','hp','6'),('2','y9 2020','1','2',NULL,NULL,NULL,'huawei','8'),('3','inspiron 3000','1','1','','','','dell','2'),('4','4l rice cooker','2','1','','','','national','4'),('5','s5','1','2','','','','samsung','7'),('6','Bam 3G','1','3','','','','huawei','8'),('7','15t-dw300','1','1','','','','hp','6'),('8','14z-fq000','1','1','','','','hp','6'),('9','17t-cg100','1','1','','','','hp','6');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `order_product_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT DEFAULT NULL,
  `quantity` decimal(5,0) DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `product_offer` decimal(5,2) DEFAULT NULL,
  `order_id` INT DEFAULT NULL,
  PRIMARY KEY (`order_product_id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `order_product_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `ProductOrder` (`order_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES ('1','1',1,98000.00,0.00,'1'),('2','1',1,98000.00,0.00,'4'),('3','1',1,98000.00,0.00,'2'),('4','1',1,98000.00,0.00,'3'),('5','1',1,98000.00,0.00,'4'),('6','2',1,23000.00,0.00,'1'),('7','2',1,23000.00,0.00,'2'),('8','2',1,23000.00,0.00,'3'),('9','3',1,52000.00,0.00,'3'),('10','3',1,52000.00,0.00,'4');
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `variant`
--

DROP TABLE IF EXISTS `variant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variant` (
  `variant_id` INT NOT NULL,
  `product_id` INT NOT NULL,
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
INSERT INTO `variant` VALUES ('1','1','','',98000.00,0.00,'silver','M',10),('1','10','','',150000.00,0.00,'black','M',5),('1','2','','',23000.00,0.00,'black','M',5),('1','3','','',52000.00,0.00,'black','M',2),('1','4','','',18000.00,0.00,'blue','M',2),('1','5','','',50000.00,0.00,'white','M',5),('1','6','','',3500.00,0.00,'white','M',3),('1','7','','',98000.00,0.00,'black','M',3),('1','8','','',126000.00,0.00,'white','M',2),('1','9','','',134000.00,0.00,'black','M',4),('2','1','','',98000.00,0.00,'black','M',5),('2','2','','',23000.00,0.00,'white','M',5),('3','1','','',98000.00,0.00,'pink','M',5);
/*!40000 ALTER TABLE `variant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT DEFAULT NULL,
  `review_state` varchar(100) DEFAULT NULL,
  `variant_id` INT DEFAULT NULL,
  `product_id` INT DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  KEY `order_id` (`order_id`),
  KEY `variant_id` (`variant_id`),
  KEY `fk_review_1_idx` (`product_id`),
  CONSTRAINT `fk_review_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `ProductOrder` (`order_id`) ON DELETE SET NULL,
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`variant_id`) REFERENCES `variant` (`variant_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES ('1','1','Excellent product','1','1'),('2','1','Best mobile phone','1','2'),('3','2','Not satisfied','1','1'),('4','3','Good','1','1'),('5','4','Good','1','3');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cart_product`
--

DROP TABLE IF EXISTS `cart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_product` (
  `ID` INT NOT NULL,
  `cart_id` INT DEFAULT NULL,
  `variant_id` INT DEFAULT NULL,
  `product_id` INT DEFAULT NULL,
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
INSERT INTO `cart_product` VALUES ('1','1','1','1',1),('10','3','1','8',1),('2','1','1','2',1),('3','1','1','3',1),('4','2','2','1',1),('5','2','1','7',1),('6','2','1','8',1),('7','2','1','2',1),('8','3','1','1',1),('9','3','1','2',1);
/*!40000 ALTER TABLE `cart_product` ENABLE KEYS */;
UNLOCK TABLES;




--
-- Table structure for table `sellar_feedback`
--

DROP TABLE IF EXISTS `sellar_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sellar_feedback` (
  `feedback_id` INT NOT NULL AUTO_INCREMENT,
  `review_id` INT DEFAULT NULL,
  `feedback_des` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`feedback_id`),
  KEY `review_id` (`review_id`),
  CONSTRAINT `sellar_feedback_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `review` (`review_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sellar_feedback`
--

LOCK TABLES `sellar_feedback` WRITE;
/*!40000 ALTER TABLE `sellar_feedback` DISABLE KEYS */;
INSERT INTO `sellar_feedback` VALUES ('1','1','Thank you'),('2','2','Thank you'),('3','3','Tell us about your concerns'),('4','4','Thank you for the review'),('5','5','Thank you');
/*!40000 ALTER TABLE `sellar_feedback` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `image_id` INT NOT NULL AUTO_INCREMENT,
  `variant_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `product_image` text,
  PRIMARY KEY (`image_id`),
  KEY `fk_image_1_idx` (`product_id`),
  KEY `image_ibfk_1` (`variant_id`),
  CONSTRAINT `fk_image_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`variant_id`) REFERENCES `variant` (`variant_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES ('1','1','1',''),('2','1','7',NULL),('3','1','8',NULL),('4','1','9',NULL),('5','1','10',NULL),('6','2','1',NULL),('7','3','1',''),('8','1','2',NULL),('9','2','2',NULL),('10','1','3',NULL),('11','1','4',NULL),('12','1','5',NULL),('13','1','6',NULL);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;









