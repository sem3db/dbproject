let mysql = require('mysql');

<<<<<<< HEAD
// try{
//     var pool = mysql.createPool({
//         connectionLimit: 5,
//         host: 'localhost',
//         user: 'root',
//         password: '', 
//         database: 'cse_21'
//     });
// }catch(e){
//     var pool = mysql.createPool({
//         connectionLimit: 5,
//         host: 'localhost',
//         user: 'sem3db',
//         password: 'pass', 
//         database: 'dbproject'
//     });
// }

var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'sem4db',
    password: 'pass', 
    database: 'dbproject'
});

module.exports=pool;
=======
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
>>>>>>> e9ff792d859f92c39c23a24519d481fe58af14f8


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