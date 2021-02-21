const {hash} = require("bcryptjs");
const {executeSQL} = require("../database/dbQuery.js");


const ACCESS_TOKEN_SECRECT = "DBProject";

async function loginIn(email){
    try{       

        const credential = await executeSQL('SELECT email , password, first_name, last_name FROM registered_customer WHERE email =?',[email]);
            

        return ( credential);

    }catch(e){
        return("User Not Found");
    }

};

async function register(reg_id,email,password, fName,lName,zipCode,addressLine1,addressLine2,city,state,phone,cardId){   
    
    try{
        const data = await executeSQL('SELECT email FROM registered_customer WHERE email = ?',[this.email]);
        
        if(data[0]){

            return ("Error");
        
        }else{
            
            await executeSQL('INSERT INTO registered_customer VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',[reg_id,email,password,fName,lName,zipCode,addressLine1,addressLine2,city,state,phone,cardId]);
            
            console.log(fName+" "+lName+ " successfuly added");
            return ("Customer added");
        }

    }catch(e){
        
        return ("Error");
        
    }   
} 

async function getCustomers(){
    try{
        const data = await executeSQL('SELECT first_name, last_name FROM registered_customer');
        return(data);
    }catch(e){
        console.log(e);
        return("Error");
    }
};






module.exports = {loginIn,register,getCustomers};