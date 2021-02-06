const { hash, compare } = require("bcryptjs");

var connection = require("../config/db");

async function login(method) {
  const body = method.getBody();

  const username = body.username;
  const password = body.password;
  connection.query(
    "SELECT username, password FROM user_table where username=?",
    [username],
    (err, rows) => {
      if (err) throw err;
      //compare passwords and return true or false
    }
  );
}

module.exports = {
  login,
};
