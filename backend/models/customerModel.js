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

    const submitState = await customerExecuteSQL("set @s =0;call registerCustomer(?,?,?,?,?,?,?,?,?,?,@s);select @s as state;",[email,password,fName,lName,zipCode,addressLine1,addressLine2,city,state,phone]).then();

    if(JSON.parse(JSON.stringify(submitState[2][0])).state==1){
        console.log(fName + " " + lName + " Successfuly Added.");
        return "Customer added";
    }else{
        console.log(fName + " " + lName + " already exists.");
        return "Registration Failed, Customer Exists Already.";
    }
    
  } catch (e) {
    console.log('Error :',JSON.parse(JSON.stringify(e))['error']);
    return "Invalid Inputs";
    
  }
}



module.exports = { loginIn, register};
