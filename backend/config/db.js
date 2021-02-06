const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dakshitha",
  database: "dbproject",
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
    console.log("DataBase Connection Failed...".red.bold);
  }
});

module.exports = mysqlConnection;
