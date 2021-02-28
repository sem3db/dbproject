const { hash } = require("bcryptjs");
const { adminExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function loginIn(email) {
  try {
    const credential = await adminExecuteSQL(
      "SELECT email_address , password, user_name FROM admin_login_details WHERE email_address =?",
      [email]
    );

    return credential;
  } catch (e) {
    return "Admin Not Found";
  }
}

async function register(email, password, user_name, role, last_login) {
  try {
    const submitState = await adminExecuteSQL(
      "set @s= 0; call registerAdmin(?,?,?,?,?,@s); select @s as state",
      [email, password, user_name, role, last_login]
    );
    if (submitState[2][0].state == 1) {
      return "new admin is added";
    } else {
      return "admin already exists";
    }
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

module.exports = { loginIn, register };
