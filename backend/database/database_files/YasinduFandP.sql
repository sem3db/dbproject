
DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `addNewAdmin`
(
in_email varchar(100),
in_password varchar(100),
in_user_name varchar(100),
in_role varchar(100),
in_last_login datetime
) RETURNS int
    DETERMINISTIC
BEGIN
	INSERT INTO admin_login_details (user_name, email_address, password, role, last_login) values (in_user_name, in_email, in_password, in_role, in_last_login);
	RETURN 1;
	END $$
DELIMITER ;


DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `adminAlreadyRegistered`
(`in_email` varchar(100)) RETURNS int
    DETERMINISTIC
BEGIN
	declare state int;
	select exists (select * from admin_login_details where email_address = in_email) into state;
	RETURN state;
END $$
DELIMITER ;


DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `deleteProductById`
(in_product_id integer) RETURNS int
    DETERMINISTIC
BEGIN
	DELETE FROM product WHERE product_id = in_product_id;
	RETURN 1;
	END $$
DELIMITER ;


DELIMITER $$
CREATE DEFINER=`root`@`localhost` FUNCTION `deleteVariantsByProductId`
(in_product_id integer) RETURNS int
    DETERMINISTIC
BEGIN
	DELETE FROM variant WHERE product_id = in_product_id;
	RETURN 1;
	END$$
DELIMITER ;




DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `registerAdmin`
(
in in_email varchar(100),
in in_password varchar(100),
in in_user_name varchar(100),
in in_role varchar(100),
in in_last_login datetime,
out state bool
)
BEGIN
	declare emailexists int;
	set emailexists=(select adminAlreadyRegistered(in_email));
	if emailexists =0 then
		set @temp_var = (select addNewAdmin(in_email, in_password, in_user_name, in_role, in_last_login));
		set state= true;
	else
	set state= false;
	end if;
END $$
DELIMITER ;



DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProduct`
(in in_product_id int)
BEGIN
	select deleteVariantsByProductId(in_product_id);
	select deleteProductById(in_product_id);
	END $$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductForAdmin`
(in in_category_id integer, in in_subcat_id integer, in in_supplier_id integer)
BEGIN
	SELECT category_name from category where category_id = in_category_id;
	SELECT subcat_name from subcategory where subcat_id = in_subcat_id and category_id = in_category_id;
	SELECT supplier_name from supplier where supplier_id = in_supplier_id;
	END $$
DELIMITER ;




