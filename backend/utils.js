const jwt =require('jsonwebtoken');

const generateToken = (user_email, user_firstName) => {
  return jwt.sign(
    {
      email: user_email,
      fName: user_firstName
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: '30d',
    }
  );
  
  
};

const isAuth = (req, res, next) => {
  const token =req.header('auth-token');
  
  if(!token) return res.status(401).send('Access Denied');

  try {
      const verified =jwt.verify(token,process.env.TOKEN_SECRET);
      req.user=verified;
      next();
  } catch (err) {
      res.status(400).send('Inavlid Token');
  }
};



module.exports={generateToken,isAuth};