const {customerExecuteSQL} = require("../database/dbQuery.js");


const ACCESS_TOKEN_SECRECT = "DBProject";

async function findProductById(id){
    try{       

        const productDetail = await customerExecuteSQL('SELECT product_id, product_name , category_id, subcat_id, description, weight, dimension, brand FROM product WHERE product_id =?',[parseInt(id)]);

        const a_variant = (await customerExecuteSQL('SELECT variant_Id , SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE product_id =? LIMIT 1',[parseInt(id)]))[0];

        const product={};
        product.product_id=productDetail[0].product_id;
        product.product_name=productDetail[0].product_name;
        product.description=productDetail[0].description;
        product.weight=productDetail[0].weight;
        product.dimension=productDetail[0].dimension;
        product.brand=productDetail[0].brand;
        product.category=(await customerExecuteSQL('SELECT category_name FROM category WHERE category_id=?',[parseInt(productDetail[0].category_id)]))[0].category_name;
        product.subCategory=(await customerExecuteSQL('SELECT subcat_name FROM subcategory WHERE subcat_id=?',[parseInt(productDetail[0].subcat_id)]))[0].subcat_name;
        product.color=a_variant.color;
        product.size=a_variant.size;
        product.noStock=a_variant.no_stock;
        product.imageUrl=a_variant.image_url;
        product.price=a_variant.price;
        return ( product);

    }catch(e){
        return("Product Not Found");
    }

};

async function findVariantByParams(product_id,color,size){
    try{       
       
        const variant = (await customerExecuteSQL('SELECT * FROM variant WHERE product_id =? AND color=? AND size=?',[parseInt(product_id),color,size]))[0];

        return ( variant);

    }catch(e){
        return("Variant Not Found");
    }

};



async function findProductsByCategory(category){
    try{    
        const category_products = await customerExecuteSQL('SELECT product_id, product_name , description, weight, dimension, brand FROM product WHERE category_Id =(SELECT category_id FROM category WHERE category_name=? LIMIT 1)',[category]);
        return ( category_products);

    }catch(e){
        return("Category Not Found");
    }

};


async function getProducts(){
    try{
        const productData = await customerExecuteSQL('SELECT product_id, product_name , description, weight, dimension, brand FROM product');
        for (let index = 0; index < productData.length; index++) {
            const product = productData[index];

            const variants = await customerExecuteSQL('SELECT variant_Id , SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE product_id =?',[parseInt(productData[index].product_id)]);
        
            product.imageUrl=variants[0].image_url;
            product.price=variants[0].price;

                        
        }
        return(productData);
    }catch(e){
        console.log(e);
        return("Error");
    }
};






module.exports = {findProductById,getProducts,findProductsByCategory,findVariantByParams};