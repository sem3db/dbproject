--
--functions
--


--add a new customer record to registered customer table
DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `addNewRegCustomer`(in_email varchar(100), in_password varchar(255), in_first_name varchar(100), in_last_name varchar(100), in_zip_code varchar(5), in_address_line_1 varchar(30), in_address_line_2 varchar(30), in_city varchar(30), in_state varchar(30), in_phone varchar(10), in_cart_id int ) RETURNS int
    DETERMINISTIC
BEGIN
INSERT INTO registered_customer (email, password, first_name, last_name, zip_code, address_line_1, address_line_2, city, state, phone, cart_id) VALUES(in_email, in_password, in_first_name, in_last_name, in_zip_code, in_address_line_1, in_address_line_2, in_city, in_state, in_phone, in_cart_id);
RETURN 1;
END$$
DELIMITER ;

--get the cartID of next cart to be added
DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `getNextCartId`() RETURNS int
    DETERMINISTIC
BEGIN

DECLARE next_cart_id INTEGER;
SELECT MAX(cart_id) INTO next_cart_id FROM cart;
RETURN next_cart_id ;

END$$
DELIMITER ;

--add a new cart rcord to cart table
DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `insertNewCart`() RETURNS int
    DETERMINISTIC
BEGIN
INSERT INTO cart(selected_count) VALUES (0);
RETURN 1;
END$$
DELIMITER ;

--check customer is already registered or not
DELIMITER $$
CREATE DEFINER=`admin`@`localhost` FUNCTION `userAlreadyRegistered`(`in_email` VARCHAR(100)) RETURNS int
    DETERMINISTIC
BEGIN
DECLARE state INTEGER;
SELECT EXISTS(SELECT * FROM registered_customer WHERE email = in_email) INTO state;

RETURN state;
END$$
DELIMITER ;

--average rating for a product
DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `getAverageRatingForProduct`(in_product_id integer) RETURNS int
    DETERMINISTIC
BEGIN
	declare averagerating integer;
    select avg(review_state) into averagerating from review where review.product_id=in_product_id;

RETURN averagerating;
END$$
DELIMITER ;


--
--procedures
--


--register a customer
DELIMITER $$
CREATE DEFINER=`customer`@`localhost` PROCEDURE `registerCustomer`(
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
    out state bool
)
BEGIN
	declare emailexist int;
    declare newcartid int;
    
    set emailexist = (select userAlreadyRegistered(in_email));
    if emailexist = 0 then 
		set @tmp_var_1 = (select insertNewCart());
        SET newcartid = (Select getNextCartId());
        
        set @tmp_var_2 = (select addNewRegCustomer(in_email, in_password, in_first_name, in_last_name, in_zip_code, in_address_line_1, in_address_line_2, in_city, in_state, in_phone, newcartid));

        set state=true;
	else
		set state=false;
	end if;
END$$
DELIMITER ;

--get a product using its product id
DELIMITER $$
CREATE DEFINER=`customer`@`localhost` PROCEDURE `getProductById`(IN product_id integer)
BEGIN
	SELECT product_name, description, weight, dimension, brand FROM product WHERE product.product_id =product_id;
    SELECT DISTINCT color FROM variant WHERE variant.product_id =product_id;
    SELECT DISTINCT size FROM variant WHERE variant.product_id =product_id;
    SELECT SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE variant.product_id =product_id LIMIT 1;
    SELECT category_name FROM category WHERE category.category_id=(SELECT category_id FROM product WHERE product.product_id =product_id);
    SELECT subcat_name FROM subcategory WHERE subcategory.subcat_id=(SELECT subcat_id FROM product WHERE product.product_id =product_id) AND subcategory.category_id=(SELECT category_id FROM product WHERE product.product_id =product_id);
END$$
DELIMITER ;

--
--previledges for customer for func&procedures
--

GRANT EXECUTE ON PROCEDURE cse_21.registerCustomer TO 'customer'@'localhost';

GRANT EXECUTE ON FUNCTION cse_21.userAlreadyRegistered TO 'customer'@'localhost';

GRANT EXECUTE ON PROCEDURE cse_21.getProductById TO 'customer'@'localhost';

GRANT EXECUTE ON FUNCTION cse_21.getAverageRatingForProduct TO 'customer'@'localhost';

FLUSH PRIVILEGES;