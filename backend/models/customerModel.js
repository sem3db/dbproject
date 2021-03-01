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


async function findCustomerById(id) {
  try {
    const customerFetched = await customerExecuteSQL("SELECT email , password, first_name, last_name, zip_code, address_line_1, address_line_2, city, state, phone FROM registered_customer WHERE reg_customer_id=?", [
      parseInt(id),
    ]).then();

    return customerFetched[0];
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}


async function updateCustomer(
  custometId,
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
    await customerExecuteSQL("UPDATE registered_customer SET password=?, first_name=?, last_name=?, zip_code=?, address_line_1=?, address_line_2=?, city=?, state=?, phone=? WHERE (reg_customer_id=?)",
      [
        password,
        fName,
        lName,
        zipCode,
        addressLine1,
        addressLine2,
        city,
        state,
        phone,
        custometId
      ]
    );

    console.log(fName + " " + lName + " Successfuly Updated.");
    return {fName,lName};
  } catch (e) {
      console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
      throw new Error('Invalid Inputs')
  }
  
}


async function getShippingAddress(id) {
  try {

    const CustomerInfo = {};

    const States = await customerExecuteSQL(
      "SELECT DISTINCT state FROM registered_customer"
    );

    var disStateNCity = {};
    for (var i = 0; i < States.length; i++) {
      var Cities = await customerExecuteSQL(
        "SELECT DISTINCT city FROM registered_customer WHERE state=?",
        [States[i].state]
      );

      var discity=[];
      for (var j = 0; j < Cities.length;j++) {
        discity.push(Cities[j].city);
      }
      disStateNCity[States[i].state]=discity;
    }


    CustomerInfo.States = disStateNCity;

    const addressFetched = await customerExecuteSQL("SELECT zip_code, address_line_1, address_line_2, city, state, phone FROM registered_customer WHERE reg_customer_id=?", [
      parseInt(id),
    ]).then();

    

    CustomerInfo.Customer=addressFetched[0];

    return CustomerInfo;
    
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function updateShippingAddress(
  custometId,
  zipCode,
  addressLine1,
  addressLine2,
  city,
  state,
  phone
) {

  try {
    await customerExecuteSQL("UPDATE registered_customer SET zip_code=?, address_line_1=?, address_line_2=?, city=?, state=?, phone=? WHERE (reg_customer_id=?)",
      [
        zipCode,
        addressLine1,
        addressLine2,
        city,
        state,
        phone,
        custometId
      ]
    );

    return ("Shipping Address Successfuly Updated.");

  } catch (e) {
      console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
      throw new Error('Invalid Inputs')
  }
  
}





module.exports = { loginIn, register,findCustomerById ,updateCustomer,getShippingAddress,updateShippingAddress};
