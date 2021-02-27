--
--change review table
--

UPDATE `cse_21`.`review` SET `review_state` = '3' WHERE (`review_id` = '1');
UPDATE `cse_21`.`review` SET `review_state` = '4' WHERE (`review_id` = '2');
UPDATE `cse_21`.`review` SET `review_state` = '1' WHERE (`review_id` = '3');
UPDATE `cse_21`.`review` SET `review_state` = '4' WHERE (`review_id` = '4');
UPDATE `cse_21`.`review` SET `review_state` = '5' WHERE (`review_id` = '5');

ALTER TABLE `cse_21`.`review` 
CHANGE COLUMN `review_state` `review_state` INT NULL DEFAULT NULL ;

ALTER TABLE `cse_21`.`review` 
ADD CHECK (review_state>=1 AND review_state<=5) ;

--review_state column
--it accepts only INT values -  review_state>=1 AND review_state<=5

ALTER TABLE `cse_21`.`review` 
DROP FOREIGN KEY `review_ibfk_2`;
ALTER TABLE `cse_21`.`review` 
DROP COLUMN `variant_id`,
DROP INDEX `variant_id` ;
;
--variant id is removed from review table
--only product id is used to check reviews

--
--remove image table
--

DROP TABLE `cse_21`.`image`;


--
--productOrder table changes
--


ALTER TABLE `cse_21`.`productorder` 
ADD COLUMN `order_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP AFTER `additional_notes`;


ALTER TABLE `cse_21`.`productorder` 
CHANGE COLUMN `order_date` `order_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP AFTER `order_id`;

--date&time both are saved automatically when inserting a record or can enter the date manually also
--use this to take only the date
--SELECT date(order_date) FROM cse_21.productorder;

