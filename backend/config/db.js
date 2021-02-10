const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "sem4db",
  password: "pass",
  database: "dbproject2",
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_SCHEME,
  multipleStatements: true,
});
mysqlConnection.connect((err) => {
  if (!err) {
    console.log("DataBase Connected".cyan.underline);
  } else {
    console.log("DataBase Connection Failed ".red.bold +"with Error code "+ err.code.magenta.bold);
  }
});

module.exports = mysqlConnection;
