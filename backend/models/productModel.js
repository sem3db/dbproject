const {executeSQL} = require("../database/dbQuery.js");


const ACCESS_TOKEN_SECRECT = "DBProject";

async function findProductById(id){
    try{       

        const product = await executeSQL('SELECT product_name , description, weight, dimension, brand FROM product WHERE product_id =?',[id]);
        return ( product);

    }catch(e){
        return("User Not Found");
    }

};


async function getProducts(){
    try{
        const productData = await executeSQL('SELECT product_name , description, weight, dimension, brand FROM product');
        return(productData);
    }catch(e){
        console.log(e);
        return("Error");
    }
};






module.exports = {findProductById,getProducts};