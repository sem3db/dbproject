const {executeSQL} = require("../database/dbQuery.js");


const ACCESS_TOKEN_SECRECT = "DBProject";

async function findProductById(id){
    try{       

        const product = await executeSQL('SELECT product_name , description, weight, dimension, brand FROM product WHERE product_id =?',[parseInt(id)]);
        return ( product);

    }catch(e){
        return("Product Not Found");
    }

};

async function findVariants(id){
    try{       

        const variants = await executeSQL('SELECT variant_Id , SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE product_id =?',[parseInt(id)]);
        return ( variants);

    }catch(e){
        return("Variants Not Found");
    }

};

async function findProductsByCategory(category){
    try{    
        const category_products = await executeSQL('SELECT product_id, product_name , description, weight, dimension, brand FROM product WHERE category_Id =(SELECT category_id FROM category WHERE category_name=? LIMIT 1)',[category]);
        return ( category_products);

    }catch(e){
        return("Category Not Found");
    }

};


async function getProducts(){
    try{
        const productData = await executeSQL('SELECT product_id, product_name , description, weight, dimension, brand FROM product');
        for (let index = 0; index < productData.length; index++) {
            const product = productData[index];

            const variants = await executeSQL('SELECT variant_Id , SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE product_id =?',[parseInt(productData[index].product_id)]);
        
            product.imageUrl=variants[0].image_url;
            product.price=variants[0].price;

                        
        }
        return(productData);
    }catch(e){
        console.log(e);
        return("Error");
    }
};






module.exports = {findProductById,getProducts,findProductsByCategory,findVariants};