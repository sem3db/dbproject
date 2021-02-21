let mysql = require('mysql');

var adminpool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'admin',
    password: 'admin_password', 
    database: 'cse_21'
});

var customerpool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'customer',
    password: 'customer_password', 
    database: 'cse_21'
});



module.exports={adminpool,customerpool};


// let adminUser = {
//     host    : 'localhost',
//     user    : 'admin',
//     password: 'admin_password',
//     database: 'cse_21'
// };

// let customerUser = {
// host    : 'localhost',
// user    : 'customer',
// password: 'customer_password',
// database: 'cse_21'
// };
  
// module.exports = {adminUser,customerUser};