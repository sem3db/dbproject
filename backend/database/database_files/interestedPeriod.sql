USE `cse_21`;
DROP procedure IF EXISTS `interestPeriod`;

USE `cse_21`;
DROP procedure IF EXISTS `cse_21`.`interestPeriod`;
;

DELIMITER $$
USE `cse_21`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `interestPeriod`(in _productid integer)
BEGIN
	
    declare _season varchar(10);
    
        
    set  _season = (select season from (select product_id,sum(quantity) as totalsales,date_format(order_date,"%Y %m") as season, rank() over (order by sum(quantity) desc) as popularity from order_product join productorder on order_product.order_id=productorder.order_id where product_id = _productid group by date_format(order_date,"%Y %m"))tbl where popularity =1 );
	select _season as interested_period; 
END$$

DELIMITER ;
