#previledges for customer for func&procedures

GRANT EXECUTE ON PROCEDURE cse_21.registerCustomer TO 'customer'@'localhost';

GRANT EXECUTE ON FUNCTION cse_21.userAlreadyRegistered TO 'customer'@'localhost';

FLUSH PRIVILEGES;