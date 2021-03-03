const  { loginIn, register, getCustomers } = require('./customerModel.js');

async function fn(){

    let result = await register('salamander@mail.com', 'pass', 'kavindu', 'adhikari', '1234', 'malwatta', 'kalgedihena', 'gampaha', 'srilanka', '0332222222').then();
    console.log(result);
    process.exit();
}

fn();