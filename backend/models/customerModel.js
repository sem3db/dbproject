const {hash} = require("bcryptjs");
const {customerExecuteSQL} = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function loginIn(email){
    try{       
        const credential = await customerExecuteSQL('SELECT email , password, first_name, last_name FROM registered_customer WHERE email = ?',[email]);
        console.log(credential)
        return ( credential);

    }catch(e){
        return("User Not Found");
    }

};

async function register(email,password, fName,lName,zipCode,addressLine1,addressLine2,city,state,phone){   
    
    try{
        const data = await customerExecuteSQL('SELECT email FROM registered_customer WHERE email = ?',[email]);
        
        if(data[0]){

            return ("Email already exists");
        
        }else{
            await customerExecuteSQL('INSERT INTO cart(selected_count) VALUES (0)');
           

            const cartId=(await customerExecuteSQL('SELECT MAX(cart_id) AS next_cart_id FROM cart'))[0].next_cart_id;
            
            
            await customerExecuteSQL('INSERT INTO registered_customer (email, password, first_name, last_name, zip_code, address_line_1, address_line_2, city, state, phone, cart_id) VALUES(?,?,?,?,?,?,?,?,?,?,?)',[email,password,fName,lName,zipCode,addressLine1,addressLine2,city,state,phone,cartId]);
            
            console.log(fName+" "+lName+ " successfuly added");
            return ("Customer added");
        }

    }catch(e){
        
        return ("Error");
        
    }   
} 

async function getCustomers(){
    try{
        const data = await customerExecuteSQL('SELECT first_name, last_name FROM registered_customer');
        return(data);
    }catch(e){
        console.log(e);
        return("Error");
    }
};



module.exports = {loginIn,register,getCustomers};