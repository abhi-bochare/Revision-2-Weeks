const express = require("express");
const logger = require("../middlewares/logger");
const auth = require("../middlewares/auth");
const timer = require("../middlewares/timer");

const router = express.Router();

router.get("/dashboard", logger, timer, auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to protected dashboard",
    user: req.user,
  });
});

module.exports = router;
