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



--new table main_city

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


--product order table
ALTER TABLE `cse_21`.`ProductOrder` 
DROP COLUMN `delivery_estimate`;

ALTER TABLE `cse_21`.`ProductOrder` 
ADD COLUMN `delivery_estimate` DATE NULL AFTER `additional_notes`;

ALTER TABLE `cse_21`.`ProductOrder` 
CHANGE COLUMN `delivery_estimate` `delivery_estimate` DATE NULL DEFAULT NULL AFTER `delivery_method`;

UPDATE `cse_21`.`ProductOrder` SET `delivery_estimate` = '2021-03-11' WHERE (`order_id` = '1');
UPDATE `cse_21`.`ProductOrder` SET `delivery_estimate` = '2021-03-11' WHERE (`order_id` = '2');
UPDATE `cse_21`.`ProductOrder` SET `delivery_estimate` = '2021-03-11' WHERE (`order_id` = '3');
UPDATE `cse_21`.`ProductOrder` SET `delivery_estimate` = '2021-03-11' WHERE (`order_id` = '4');

