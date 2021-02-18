const { hash } = require("bcryptjs");
const { executeSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function loginIn(email) {
  try {
    const credential = await executeSQL(
      "SELECT email_address , password, user_name FROM admin_login_details WHERE email_address =?",
      [email]
    );

    return credential;
  } catch (e) {
    return "Admin Not Found";
  }
}

async function register(user_id, email, password, user_name, role, last_login) {
  console.log("read");
  try {
    const data = await executeSQL(
      "SELECT email_address FROM admin_login_details WHERE email_address = ?",
      [this.email]
    );
    console.log(data);

    if (data[0]) {
      return "Error";
    } else {
      await executeSQL("INSERT INTO admin_login_details VALUES(?,?,?,?,?,?)", [
        user_id,
        user_name,
        email,
        password,
        role,
        last_login,
      ]);

      return "New Admin added";
    }
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

module.exports = { loginIn, register };
