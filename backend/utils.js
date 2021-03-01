const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  console.log(user);
  return jwt.sign(user, process.env.TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

module.exports = { generateToken, isAuth };
