var express = require("express");
var router = express.Router();

const { login } = require("../model/authentication");
const Method = require("../controller/method");

router.post("/login", async function (req, res) {
  var method = new Method(req, res);
  var status = login(method);
  if (status) {
    res.send("login successfull");
  } else {
    res.send("login failed");
  }
});

module.exports = router;
