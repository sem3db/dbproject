const express =require('express');

const expressAsyncHandler =require('express-async-handler');
const bcrypt =require('bcryptjs');
const {loginIn,register,getCustomers} =require( '../models/customerModel.js');
const { generateToken,isAuth} =require( '../utils.js');

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const login_cred = await loginIn(req.body.email);
    if (login_cred) {

      if (await bcrypt.compare(req.body.password, login_cred[0].password)) {
        const token=generateToken(login_cred[0]);
        // res.header('auth-token',token).send({
        //   fName:login_cred[0].first_name,
        //   email: login_cred[0].email,          
        //   //token: generateToken(login_cred[0]),
        //   token: token
        // });
        res.json({token});
        // const token=generateToken(login_cred[0]);
        // res.header('auth-token',token).send(token);
        return;
      }
    }
    res.status(401).send({ message: 'Invalid Email or Password' });
  })
);

userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {

    const salt=await bcrypt.genSalt(10);
    const hashedPassword =await bcrypt.hash(req.body.password,salt);
    
    const createdUser = await register(req.body.email,hashedPassword, req.body.fName,req.body.lName,req.body.zipCode,req.body.addressLine1,req.body.addressLine2,req.body.city,req.body.state,req.body.phone);
    res.send({
      result:createdUser
      //token: generateToken(createdUser),
    });
  })
);

userRouter.get(
  '/seed',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const createdUsers = await getCustomers();
    res.send({ createdUsers });
  })
);




module.exports=userRouter;
