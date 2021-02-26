DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `addNewRegCustomer`(in_email varchar(100), in_password varchar(255), in_first_name varchar(100), in_last_name varchar(100), in_zip_code varchar(5), in_address_line_1 varchar(30), in_address_line_2 varchar(30), in_city varchar(30), in_state varchar(30), in_phone varchar(10), in_cart_id int ) RETURNS int
    DETERMINISTIC
BEGIN
INSERT INTO registered_customer (email, password, first_name, last_name, zip_code, address_line_1, address_line_2, city, state, phone, cart_id) VALUES(in_email, in_password, in_first_name, in_last_name, in_zip_code, in_address_line_1, in_address_line_2, in_city, in_state, in_phone, in_cart_id);
RETURN 1;
END$$
DELIMITER ;


DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `getNextCartId`() RETURNS int
    DETERMINISTIC
BEGIN

DECLARE next_cart_id INTEGER;
SELECT MAX(cart_id) INTO next_cart_id FROM cart;
RETURN next_cart_id ;

END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `insertNewCart`() RETURNS int
    DETERMINISTIC
BEGIN
INSERT INTO cart(selected_count) VALUES (0);
RETURN 1;
END$$
DELIMITER ;


DELIMITER $$
CREATE DEFINER=`admin`@`localhost` FUNCTION `userAlreadyRegistered`(`in_email` VARCHAR(100)) RETURNS int
    DETERMINISTIC
BEGIN
DECLARE state INTEGER;
SELECT EXISTS(SELECT * FROM registered_customer WHERE email = in_email) INTO state;

RETURN state;
END$$
DELIMITER ;


DELIMITER $$
CREATE DEFINER=`admin`@`localhost` PROCEDURE `registerCustomer`(
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
    out state varchar(30)
)
BEGIN
	declare emailexist int;
    declare newcartid int;
    
    set emailexist = (select userAlreadyRegistered(in_email));
    if emailexist = 0 then 
		select insertNewCart();        
        SET newcartid = (Select getNextCartId());
        
        select addNewRegCustomer(in_email, in_password, in_first_name, in_last_name, in_zip_code, in_address_line_1, in_address_line_2, in_city, in_state, in_phone, newcartid);
		
        set state="customer added";
	else
		set state="Email exists";
	end if;
    
END$$
DELIMITER ;

