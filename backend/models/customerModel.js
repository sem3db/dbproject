const { customerExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function loginIn(email) {
  try {
    const credential = await customerExecuteSQL(
      "SELECT email , password, first_name, last_name FROM registered_customer WHERE email =?",
      [email]
    );

    return credential;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function register(
  email,
  password,
  fName,
  lName,
  zipCode,
  addressLine1,
  addressLine2,
  city,
  state,
  phone
) {
  try {
    const submitState = await customerExecuteSQL(
      "set @s =0;call registerCustomer(?,?,?,?,?,?,?,?,?,?,@s);select @s as state;",
      [
        email,
        password,
        fName,
        lName,
        zipCode,
        addressLine1,
        addressLine2,
        city,
        state,
        phone,
      ]
    ).then();

    if (JSON.parse(JSON.stringify(submitState[2][0])).state == 1) {
      console.log(fName + " " + lName + " Successfuly Added.");
      console.log(JSON.parse(JSON.stringify(submitState[2][0])).state)
      return {fName,lName};
    } else {
      console.log(fName + " " + lName + " already exists.");
      throw ('Registration Failed, Customer Exists Already.')
    }
  } catch (e) {
    if(e=='Registration Failed, Customer Exists Already.'){
      console.log(e)
      throw new Error(e)
    }
    else{
      console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
      throw new Error('Invalid Inputs')
    }
  }
}

module.exports = { loginIn, register };
