var {addCartItem,removeCartItem,changeItemQuantity,getCartItems} = require('./cartModel.js');

async function doit(){
    let fetchedlist= await getCartItems('3').then();
    console.log(fetchedlist);
    process.exit();
}

doit();


//addCartItem('1','1','3',3);

//removeCartItem('1','1','3');

//console.log(getCartItems(1));