create view customerDetails
as 
select 
	reg_customer_id,
    email,
    first_name,
    last_name,
    address_line_1,
    address_line_2,
    city,
    phone
from
	registered_customer;