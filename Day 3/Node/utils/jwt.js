const jwt = require("jsonwebtoken");

const SECRET_KEY = "shhhhh";

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

module.exports = generateToken;
