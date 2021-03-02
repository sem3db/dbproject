UPDATE `cse_21`.`review` SET `review_state` = '3' WHERE (`review_id` = '1');
UPDATE `cse_21`.`review` SET `review_state` = '4' WHERE (`review_id` = '2');
UPDATE `cse_21`.`review` SET `review_state` = '1' WHERE (`review_id` = '3');
UPDATE `cse_21`.`review` SET `review_state` = '4' WHERE (`review_id` = '4');
UPDATE `cse_21`.`review` SET `review_state` = '5' WHERE (`review_id` = '5');

ALTER TABLE `cse_21`.`review` 
CHANGE COLUMN `review_state` `review_state` INT NULL DEFAULT NULL ;

ALTER TABLE `cse_21`.`review` 
ADD CHECK (review_state>=1 AND review_state<=5) ;


ALTER TABLE `cse_21`.`review` 
DROP FOREIGN KEY `review_ibfk_2`;
ALTER TABLE `cse_21`.`review` 
DROP COLUMN `variant_id`,
DROP INDEX `variant_id` ;


DROP TABLE `cse_21`.`image`;


ALTER TABLE `cse_21`.`ProductOrder` 
ADD COLUMN `order_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP AFTER `additional_notes`;


ALTER TABLE `cse_21`.`ProductOrder` 
CHANGE COLUMN `order_date` `order_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP AFTER `order_id`;



CREATE TABLE `cse_21`.`main_city` (
  `city_id` INT NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(200) NULL,
  PRIMARY KEY (`city_id`));

INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Gampaha');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Colombo');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Kaluthara');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Kurunegala');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Anuradhapura');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Jaffna');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Galle');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Mathara');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Ja-Ela');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Chilaw');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Puttlam');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Kandy');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Kegalle');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Panadura');
INSERT INTO `cse_21`.`main_city` (`city_name`) VALUES ('Mannar');



DROP TABLE IF EXISTS `productorder`;

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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




LOCK TABLES `productorder` WRITE;
INSERT INTO `productorder` VALUES (1,'2021-02-27 13:18:46',1,'Guest','VISA',300000.00,'delivered','Postal','2021-03-11',NULL),(2,'2021-02-27 13:18:46',1,'Registered','VISA',400000.00,'delivered','Postal','2021-03-11',''),(3,'2021-02-27 13:18:46',2,'Registered','VISA',200000.00,'delivered','Postal','2021-03-11',NULL),(4,'2021-02-07 13:18:46',3,'Registered','PayPal',100000.00,'delivered','Courier','2021-03-11',NULL),(5,'2021-04-07 13:18:46',3,'Registered','VISA',NULL,NULL,NULL,NULL,NULL),(6,'2021-05-07 13:18:46',5,'Registered','VISA',NULL,NULL,NULL,NULL,NULL),(7,'2021-06-07 13:18:46',6,'Registered','VISA',NULL,NULL,NULL,NULL,NULL),(8,'2021-07-07 13:18:46',7,'Registered','VISA',NULL,NULL,NULL,NULL,NULL),(9,'2021-08-07 13:18:46',8,'Registered','VISA',NULL,NULL,NULL,NULL,NULL),(10,'2021-09-07 13:18:46',4,'Registered','VISA',NULL,NULL,NULL,NULL,NULL),(11,'2021-10-07 13:18:46',6,'Registered','VISA',NULL,NULL,NULL,NULL,NULL),(12,'2021-11-07 13:18:46',5,'Registered','VISA',NULL,NULL,NULL,NULL,NULL),(13,'2021-12-07 13:18:46',6,'Registered','VISA',NULL,NULL,NULL,NULL,NULL);

UNLOCK TABLES;