let mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'dakshitha', 
    database: 'cse_21'
});



module.exports=pool;


// let config = {
//     host    : 'localhost',
//     user    : 'root',
//     password: '',
//     database: 'cse_21'
//   };
  
//   module.exports = config;