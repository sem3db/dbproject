const jwt =require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    user,
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