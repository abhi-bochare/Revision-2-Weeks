const express = require("express");
const router = express.Router();

const USER = {
  username: "abhii",
  password: "Abhi@123",
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.cookie("auth", "authenticated", {
      httpOnly: true,
    });

    return res.status(200).json({ message: "Login successful" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
