const jwt =require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    {
      fname: user.fName,
      email: user.email,
    },
    process.env.TOKEN_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
  
  
};

const isAuth = (req, res, next) => {
  const token =req.body.token;
    if(!token) return res.status(401).send('Access Denied');

    try {
        const verified =jwt.verify(token,process.env.TOKEN_SECRET  || 'somethingsecret');
        //req.user=verified;
        next();
    } catch (err) {
        res.status(400).send('Inavlid Token');
    }
};

module.exports={generateToken,isAuth};

