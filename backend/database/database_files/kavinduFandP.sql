DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `cartItemExists`(usercartid varchar(10), in_variant_id varchar(10), in_product_id varchar(10)) RETURNS int
    DETERMINISTIC
BEGIN
declare entrycount int;

select count(*) into entrycount from cart_product where cart_id = usercartid and variant_id = in_variant_id and product_id = in_product_id;
RETURN entrycount;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `deleteFromCart`(usercartid varchar(10), in_variant_id varchar(10), in_product_id varchar(10)) RETURNS int
    DETERMINISTIC
BEGIN
delete from cart_product where cart_id = usercartid and variant_id = in_variant_id and product_id = in_product_id;
RETURN 1;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `getcartid`(userid varchar(10)) RETURNS varchar(10) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
DECLARE cartid varchar(10);
SELECT DISTINCT cart_id INTO cartid from registered_customer where reg_customer_id = userid;
RETURN cartid ;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `increaseCartQuantity`(usercartid varchar(10), in_variant_id varchar(10), in_product_id varchar(10), addQ numeric(5,0)) RETURNS int
    DETERMINISTIC
BEGIN

declare currentQ numeric(5,0);
select distinct quantity into currentQ from cart_product where cart_id =usercartid and variant_id = in_variant_id and product_id = in_product_id;

update cart_product set quantity = quantity + addQ where cart_id =usercartid and variant_id = in_variant_id and product_id = in_product_id;

RETURN 1;
END$$
DELIMITER ;

DELIMITER $$
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
	INSERT INTO `cse_21`.`ProductOrder`
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
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `insertToCart`(in_cart_id varchar(10), in_variant_id varchar(10), in_product_id varchar(10), in_quantity decimal(5,0)) RETURNS int
    DETERMINISTIC
BEGIN
insert into cart_product(cart_id,variant_id,product_id,quantity) values(in_cart_id,in_variant_id,in_product_id,in_quantity);
RETURN 1;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `isMainCity`(_city varchar(30)) RETURNS int
    DETERMINISTIC
BEGIN
	if lower(_city) in  (select lower(city_name) from main_city) then
		return 1;
	else
		return 0;
	end if;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `updateCartQuantity`(usercartid varchar(10), in_variant_id varchar(10), in_product_id varchar(10), newQ numeric(5,0)) RETURNS int
    DETERMINISTIC
BEGIN
update cart_product set quantity = newQ where cart_id =usercartid and variant_id = in_variant_id and product_id = in_product_id;

RETURN 1;
END$$
DELIMITER ;










DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addToCart`(userid varchar(10),in_variant_id varchar(10), in_product_id varchar(10), in_quantity decimal(5,0))
BEGIN
	declare usercartid varchar(10);
    declare exist int;
    
    SET usercartid = (Select getcartid(userid));
    set exist = (select cartItemExists(usercartid,in_variant_id,in_product_id));
    
    if exist < 1 
		then select insertToCart(usercartid,in_variant_id,in_product_id,in_quantity) as submitstate;
    else
		select increaseCartQuantity(usercartid,in_variant_id,in_product_id,in_quantity) as submitstate;
    end if;
END$$
DELIMITER ;


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `changeCartQuantity`(userid varchar(10), in_variant_id varchar(10), in_product_id varchar(10), newQ numeric(5,0))
BEGIN
declare usercartid varchar(10);

set usercartid = (select getcartid(userid));

select  updateCartQuantity(usercartid,in_variant_id,in_product_id,newQ) as updatestate;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProduct`(in in_product_id int)
BEGIN
	select deleteVariantsByProductId(in_product_id);
	select deleteProductById(in_product_id);
	END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCartItems`(IN userid  varchar(10))
BEGIN
	declare usercartid varchar(10);
    
    SET usercartid = (Select getcartid(userid));
    
    SELECT tbl.ID as cart_row_id,variant.price as price,variant.offer as offer,variant.image_url as image_path, tbl.quantity as quantity from (variant join (SELECT ID,product_id,variant_id,quantity from cart_product where cart_id=usercartid) as tbl on (variant.variant_id= tbl.variant_id and variant.product_id=tbl.product_id));
    SELECT product.product_name as productname, product.brand as brand from (product join (SELECT product_id from cart_product where cart_id=usercartid) as tbl on (product.product_id = tbl.product_id));
    #SELECT image.product_image as image_path  from (image join (SELECT product_id,variant_id from cart_product where cart_id=usercartid) as tbl on (image.variant_id= tbl.variant_id and image.product_id=tbl.product_id));
END$$
DELIMITER ;

DELIMITER $$
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
            
            update ProductOrder set total_payment = total_payment + _finalprice where order_id = _lastorderid;
            
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
        
		update ProductOrder set delivery_estimate = date_add( delivery_estimate, interval _delay + _nostockdelay day) where order_id = _lastorderid;
    
		if _rollback
			then rollback;
			select false;
		else
			select true;
		end if;
    
    commit;
    
END$$
DELIMITER ;

DELIMITER $$
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
            
            update ProductOrder set total_payment = total_payment + _finalprice where order_id = _lastorderid;
            
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
        
	update ProductOrder set delivery_estimate = date_add( delivery_estimate, interval _delay + _nostockdelay day) where order_id = _lastorderid;
		
	delete from cart_product where cart_id = _usercartid;
    
    if _rollback
		then rollback;
        select false;
	else
		select true;
	end if;
    commit;
    
    CLOSE _cart_cur;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `removeFromCart`(userid varchar(10), in_variant_id varchar(10), in_product_id varchar(10))
BEGIN
declare usercartid varchar(10);

set usercartid = (select getcartid(userid));

select  deleteFromCart(usercartid,in_variant_id,in_product_id) as deletestate;
END$$
DELIMITER ;



#===================================================================

DROP TRIGGER IF EXISTS `cse_21`.`variant_stock_change`;

DELIMITER $$
USE `cse_21`$$
CREATE DEFINER=`root`@`localhost` TRIGGER `variant_stock_change` BEFORE UPDATE ON `variant` FOR EACH ROW BEGIN
	set new.no_stock = old.no_stock + new.no_stock;  
END$$
DELIMITER ;




#===================================================================

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