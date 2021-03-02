INSERT INTO `
cse_21`.`category
`
(`category_id`, `category_name`) VALUES
('3', 'workshop equipment ');
INSERT INTO `
cse_21`.`category
`
(`category_id`, `category_name`) VALUES
('4', 'toy');
INSERT INTO `
cse_21`.`category
`
(`category_id`, `category_name`) VALUES
('5', 'fitness equipment');
INSERT INTO `
cse_21`.`category
`
(`category_id`, `category_name`) VALUES
('6', 'camping');
INSERT INTO `
cse_21`.`category
`
(`category_id`, `category_name`) VALUES
('7', 'industrial automation');
INSERT INTO `
cse_21`.`category
`
(`category_id`, `category_name`) VALUES
('8', 'musical instruments');
INSERT INTO `
cse_21`.`category
`
(`category_id`, `category_name`) VALUES
('9', 'maintenance and safety');
INSERT INTO `
cse_21`.`category
`
(`category_id`, `category_name`) VALUES
('10', 'testing equipment');




INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('1', 'power tool', '3');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('2', 'air tool ', '3');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('3', 'hand tool', '3');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('1', 'building toys', '4');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('2', 'rc car', '4');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('1', 'strength training', '5');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('2', 'activity tracker', '5');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('1', 'camping cooking supplies', '6');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('2', 'camping lighting', '6');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('1', 'electric motors', '7');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('2', 'sensors', '7');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('1', 'stage lighting', '8');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('2', 'dj equipment', '8');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('1', 'safety glasses', '9');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('2', 'alarm systems', '9');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('1', 'test meters & detectors', '10');
INSERT INTO `
cse_21`.`subcategory
`
(`subcat_id`, `subcat_name`, `category_id`) VALUES
('2', 'signal sources & conditioning equipment', '10');




INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('9', 'Makita', '0113333333', 'Makita@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('10', 'Tacwise ', '0112323233', 'Tacwise@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('11', 'Lego', '0112323234', 'Lego@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('12', 'SI-LOC', '0112323245', 'SI-LOC@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('13', 'Fitbit', '0112323465', 'Fitbit@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('14', 'TOAKS', '0113254554', 'toaks@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('15', 'Lumens', '0112323435', 'Lumens@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('16', 'MITSUBISHI', '0114347593', 'Mitsubishi@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('17', 'Crestron', '0116666634', 'Crestron@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('18', 'Pyle', '0112685693', 'Pyle@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('19', 'DMX', '0112344657', 'DMX@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('20', 'Bolle', '0119585759', 'Bolle@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('21', 'DNH ', '0112334678', 'DNH@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('22', 'Quest ', '0113455999', 'Quest@supply.com');
INSERT INTO `
cse_21`.`supplier
`
(`supplier_id`, `supplier_name`, `contact_number`, `email`) VALUES
('23', 'Horizon', '0112343434', 'Horizon@gmail.com');




INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('14', 'XPH12Z ', '3', '1', 'Makita', '9');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('15', 'DGN50V Nailer', '3', '2', 'Tacwise', '10');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('16', 'CG100DZA ', '3', '3', 'Makita', '9');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('17', 'Lego Christmas', '4', '1', 'Lego', '11');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('18', 'MiniT 2.0', '4', '2', 'Lego', '11');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('19', 'AX90045', '4', '2', 'Lego', '11');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('20', 'AXI00002T2', '4', '2', 'Lego', '11');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('21', 'Hp85235 Savage', '4', '2', 'Lego', '11');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('22', 'Support Belt', '5', '1', 'SI-LOC', '12');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('23', 'Pushup Stand 360', '5', '1', 'SI-LOC', '12');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('24', 'XT Strap Extender', '5', '1', 'SI-LOC', '12');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('25', 'Charge 4 ', '5', '2', 'Fitbit', '13');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('26', 'Charge 3', '5', '2', 'Fitbit', '13');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('27', 'SLV-08 ', '6', '1', 'TOAKS ', '14');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('28', 'Replacement Triple', '6', '1', 'TOAKS ', '14');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('29', 'Lamp Module', '6', '2', 'Lumens', '15');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('30', 'SureFire Flashlight', '6', '2', 'Lumens', '15');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('31', 'Surefire M951C', '6', '2', 'Lumens', '15');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('32', 'HA-FF43C-UE', '7', '1', 'MITSUBISHI', '16');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('33', 'HF-KP23', '7', '1', 'MITSUBISHI', '16');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('34', 'MSM012A1A', '7', '1', 'MITSUBISHI', '16');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('35', 'C2N RTHS', '7', '2', 'Crestron', '17');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('36', 'KSD301', '7', '2', 'Crestron', '17');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('37', 'PYD1964B.5 6', '8', '2', 'Pyle', '18');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('38', 'PMXU88BT', '8', '2', 'Pyle', '18');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('39', 'MX-1', '8', '2', 'Pyle', '18');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('40', 'Dmx512 Controller', '8', '1', 'DMX', '19');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('41', 'FB3QS', '8', '1', 'DMX', '19');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('42', 'TRACPSI Tracker', '9', '1', 'Bolle', '20');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('43', 'B401', '9', '1', 'Bolle', '20');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('44', 'B808 ', '9', '1', 'Bolle', '20');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('45', 'DSP-15EExe', '9', '2', 'DNH ', '21');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('46', 'PK5500ENG', '9', '2', 'DNH ', '21');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('47', 'X5', '10', '1', 'Quest ', '22');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('48', 'IM-5238', '10', '1', 'Quest ', '22');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('49', 'ACE 300', '10', '1', 'Quest ', '22');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('50', 'RD6018', '10', '2', 'Horizon', '23');
INSERT INTO `
cse_21`.`product
`
(`product_id`, `product_name`, `category_id`, `subcat_id`, `brand`, `supplier_id`) VALUES
('51', 'RD6006', '10', '2', 'Horizon', '23');




INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '11', '45000.00', '0.00', 'black', 'M', '10');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '14', '10000.00', '0.00', 'black', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '15', '20000.00', '0.00', 'black', 'M', '10');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '16', '30000.00', '0.00', 'black', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '17', '1000.00', '0.00', 'red', 'M', '10');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '18', '20000.00', '0.00', 'black', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('2', '18', '20000.00', '0.00', 'red', 'S', '3');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('3', '18', '20000.00', '0.00', 'blue', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('4', '18', '20000.00', '0.00', 'green', 'S', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('5', '18', '25000.00', '0.00', 'red', 'M', '3');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('6', '18', '25000.00', '0.00', 'blue', 'M', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('7', '18', '25000.00', '0.00', 'green', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('8', '18', '25000.00', '0.00', 'black', 'M', '3');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '19', '20000.00', '0.00', 'black', 'M', '3');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '20', '20000.00', '0.00', 'blue', 'M', '3');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '21', '25000.00', '0.00', 'blue', 'S', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '22', '30000.00', '0.00', 'black', 'M', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '23', '20000.00', '0.00', 'black', 'M', '3');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '24', '20000.00', '0.00', 'black', 'M', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '25', '10000.00', '0.00', 'black', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('2', '25', '10000.00', '0.00', 'red', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('3', '25', '10000.00', '0.00', 'blue', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('4', '25', '10000.00', '0.00', 'green', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('5', '25', '15000.00', '0.00', 'black', 'M', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('6', '25', '15000.00', '0.00', 'red', 'M', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('7', '25', '15000.00', '0.00', 'blue', 'M', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('8', '25', '15000.00', '0.00', 'green', 'M', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '26', '17000.00', '0.00', 'red', 'M', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '27', '20000.00', '0.00', 'black', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '28', '15000.00', '0.00', 'black', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '29', '15000.00', '0.00', 'black', 'S', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('2', '29', '15000.00', '0.00', 'red', 'S', '2');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('3', '29', '15000.00', '0.00', 'blue', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('4', '29', '15000.00', '0.00', 'green', 'S', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('5', '29', '20000.00', '0.00', 'black', 'M', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('6', '29', '20000.00', '0.00', 'red', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('7', '29', '20000.00', '0.00', 'blue', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('8', '29', '20000.00', '0.00', 'green', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '30', '15000.00', '0.00', 'black', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '31', '15000.00', '0.00', 'black', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '32', '20000.00', '0.00', 'black', 'S', '7');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '33', '10000.00', '0.00', 'black', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '34', '20000.00', '0.00', 'black', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '35', '10000.00', '0.00', 'black', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '36', '20000.00', '0.00', 'black', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '37', '100000.00', '0.00', 'black', 'M', '10');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '38', '200000.00', '0.00', 'black', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '39', '100000.00', '0.00', 'black', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '40', '20000.00', '0.00', 'white', 'S', '10');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '41', '10000.00', '0.00', 'white', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('2', '41', '10000.00', '0.00', 'red', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('3', '41', '10000.00', '0.00', 'blue', 'S', '10');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('4', '41', '10000.00', '0.00', 'green', 'S', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('5', '41', '20000.00', '0.00', 'white', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('6', '41', '20000.00', '0.00', 'red', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('7', '41', '20000.00', '0.00', 'blue', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('8', '41', '20000.00', '0.00', 'green', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '42', '8000.00', '0.00', 'black', 'M', '6');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '43', '5000.00', '0.00', 'black', 'M', '6');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '44', '13000.00', '0.00', 'black', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '45', '15000.00', '0.00', 'black', 'M', '6');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '46', '17000.00', '0.00', 'black', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '47', '23000.00', '0.00', 'black', 'M', '5');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '48', '25000.00', '0.00', 'black', 'M', '8');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '49', '12000.00', '0.00', 'black', 'M', '8');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '50', '14000.00', '0.00', 'black', 'M', '6');
INSERT INTO `
cse_21`.`variant
`
(`variant_id`, `product_id`, `price`, `offer`, `color`, `size`, `no_stock`) VALUES
('1', '51', '21000.00', '0.00', 'black', 'M', '8');
