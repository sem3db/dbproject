use cse_21;
alter TABLE cart_product modify column ID int NOT NULL AUTO_INCREMENT;
SET @m = (SELECT MAX(ID) + 1 FROM cart_product); 
SET @s = CONCAT('ALTER TABLE cart_product AUTO_INCREMENT=', @m);
PREPARE stmt1 FROM @s;
EXECUTE stmt1;
DEALLOCATE PREPARE stmt1;