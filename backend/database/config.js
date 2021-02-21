let mysql = require('mysql');

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


// let config = {
//     host    : 'localhost',
//     user    : 'root',
//     password: '',
//     database: 'cse_21'
//   };
  
//   module.exports = config;