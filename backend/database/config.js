let mysql = require("mysql");

var adminpool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "admin",
  password: "admin_password",
  database: "cse_21",
  multipleStatements: true
});

var customerpool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "customer",
  password: "customer_password",
  database: "cse_21",
  multipleStatements: true
});

module.exports = { adminpool, customerpool };






// var adminpool = mysql.createPool({
//   connectionLimit: process.env.DB_CONNECTION_LIMIT,
//   host: process.env.DB_HOST,
//   user: process.env.DB_ADMIN_USERNAME,
//   password: process.env.DB_ADMIN_PASSWORD,
//   database: process.env.DB_NAME,
//   multipleStatements: true
// });

// var customerpool = mysql.createPool({
//   connectionLimit: process.env.DB_CONNECTION_LIMIT,
//   host: process.env.DB_HOST,
//   user: process.env.DB_CUSTOMER_USERNAME,
//   password: process.env.DB_CUSTOMER_PASSWORD,
//   database: process.env.DB_NAME,
//   multipleStatements: true
// });



























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
