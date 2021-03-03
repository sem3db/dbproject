USE `cse_21`;
DROP procedure IF EXISTS `interestPeriod`;

DELIMITER $$
USE `cse_21`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `interestPeriod`(in _productname varchar(40))
BEGIN
	declare _productid int;
    declare _season varchar(10);
    
    set _productid = (select product_id from product where product_name = _productname);
    
    set  _season = (select season from (select product_id,sum(quantity) as totalsales,date_format(order_date,"%Y %m") as season, rank() over (order by sum(quantity) desc) as popularity from order_product join productorder on order_product.order_id=productorder.order_id where product_id = _productid group by date_format(order_date,"%Y %m"))tbl where popularity =1 );
	select _season as interested_period; 
END$$

DELIMITER ;

