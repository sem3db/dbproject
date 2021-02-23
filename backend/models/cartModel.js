//const {hash} = require("bcryptjs");
const {adminExecuteSQL,customerExecuteSQL} = require("../database/dbQuery.js");


//const ACCESS_TOKEN_SECRECT = "DBProject";

async function addCartItem(userid,variant_id,product_id,quantity){
    try{
        const submitState = await customerExecuteSQL('call addToCart(?,?,?,?)',[userid,variant_id,product_id,quantity]).then();
        console.log(JSON.parse(JSON.stringify(submitState)));
    }catch(e){
        console.log('Error :',JSON.parse(JSON.stringify(e))['error']);
    }
}

async function removeCartItem(userid,variant_id,product_id){
    try{
        const deleteState = await customerExecuteSQL('call removeFromCart(?,?,?)',[userid,variant_id,product_id]).then();
        console.log(deleteState);
    }catch(e){
        console.log(JSON.parse(JSON.stringify(e))['error']);
    }
}

async function changeItemQuantity(userid,variant_id,product_id,quantity){
    try{
        const updateState = await customerExecuteSQL('call changeCartQuantity(?,?,?,?)',[userid,variant_id,product_id,quantity]).then();
        console.log(updateState);
    }catch(e){
        console.log(JSON.parse(JSON.stringify(e))['error']);
    }
}

async function getCartItems(userid){
    try{       
        const fetched = await customerExecuteSQL('call getCartItems(?)',[userid]).then();
        var string1=JSON.stringify(fetched[0]);
        var json1 =  JSON.parse(string1);
        var string2=JSON.stringify(fetched[1]);
        var json2 =  JSON.parse(string2);
        var string3=JSON.stringify(fetched[2]);
        var json3 =  JSON.parse(string3);

        return new Promise((res,rej)=>{
            var items = [];
            try{
                for(i=0;i<json1.length;i++){
                    items.push(Object.assign({},json1[i],json2[i],json3[i]));
                }
                res(items);
            }catch(e){
                rej(e);
            }
        });
    }catch(e){
        return("Error");   
    }
};



module.exports = {addCartItem,removeCartItem,changeItemQuantity,getCartItems};