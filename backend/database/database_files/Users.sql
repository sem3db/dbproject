# Create users

CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin_password';

CREATE USER 'customer'@'localhost' IDENTIFIED WITH mysql_native_password BY 'customer_password';

FLUSH PRIVILEGES;


# Privileges for `admin`@`localhost`

GRANT ALL PRIVILEGES ON `cse_21`.* TO `admin`@`localhost`;


# Privileges for `customer`@`localhost`


GRANT ALL PRIVILEGES ON `cse_21`.`cart_product` TO `customer`@`localhost`;

GRANT ALL PRIVILEGES ON `cse_21`.`cart` TO `customer`@`localhost`;

GRANT SELECT ON `cse_21`.`category` TO `customer`@`localhost`;

GRANT ALL PRIVILEGES ON `cse_21`.`guest_customer` TO `customer`@`localhost`;

GRANT SELECT, INSERT, UPDATE, DELETE ON `cse_21`.`order_product` TO `customer`@`localhost`;

GRANT SELECT ON `cse_21`.`product` TO `customer`@`localhost`;

GRANT SELECT, INSERT, UPDATE, DELETE ON `cse_21`.`productorder` TO `customer`@`localhost`;

GRANT SELECT, INSERT, UPDATE ON `cse_21`.`registered_customer` TO `customer`@`localhost`;

GRANT SELECT, INSERT, UPDATE, DELETE ON `cse_21`.`review` TO `customer`@`localhost`;

GRANT SELECT ON `cse_21`.`subcategory` TO `customer`@`localhost`;

GRANT SELECT ON `cse_21`.`variant` TO `customer`@`localhost`;


FLUSH PRIVILEGES;
