const { hash } = require("bcryptjs");
const { adminExecuteSQL,customerExecuteSQL } = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function loginIn(email) {
  try {
    const credential = await customerExecuteSQL(
      "SELECT email , password, first_name, last_name FROM registered_customer WHERE email =?",
      [email]
    );

    return credential;
  } catch (e) {
    return "User Not Found";
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

    const submitState = await adminExecuteSQL("set @s =0;call registerCustomer(?,?,?,?,?,?,?,?,?,?,@s);select @s as state;",[email,password,fName,lName,zipCode,addressLine1,addressLine2,city,state,phone]).then();

    if(JSON.parse(JSON.stringify(submitState[2][0])).state==1){
        console.log(fName + " " + lName + " successfuly added");
        return "Customer added";
    }else{
        console.log(fName + " " + lName + " culdn't add");
        return "registration failed, user exists already";
    }
    
  } catch (e) {
    console.log('Error :',JSON.parse(JSON.stringify(e))['error']);
    return "Error: Invalid Inputs";
    
  }
}

async function getCustomers() {
  try {
    const data = await customerExecuteSQL(
      "SELECT first_name, last_name FROM registered_customer"
    );
    return data;
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

module.exports = { loginIn, register, getCustomers };
