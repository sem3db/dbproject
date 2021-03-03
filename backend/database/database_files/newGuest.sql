DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `newGuest`(
_email varchar(100),
_phone varchar(10), 
_first_name varchar(100),
_last_name varchar(100),
_zip_code	varchar(5),
_address_line_1	varchar(30),
_address_line_2	varchar(30),
_city	varchar(30),
_state	varchar(30)
)
BEGIN

	declare _newguestID int;
	INSERT INTO `cse_21`.`guest_customer`
(`email`,
`phone`,
`first_name`,
`last_name`,
`zip_code`,
`address_line_1`,
`address_line_2`,
`city`,
`state`)
VALUES
(_email,
_phone,
_first_name,
_last_name,
_zip_code,
_address_line_1,
_address_line_2,
_city,
_state);

	set _newguestID = (select last_insert_id());
    
    select _newguestID as cust_id;
END$$
DELIMITER ;



GRANT EXECUTE ON PROCEDURE cse_21.newGuest TO 'customer'@'localhost';