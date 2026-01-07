const express = require("express");
const { generateApiKey } = require("../controllers/authController");
const router = express.Router();

router.post("/generate-key", generateApiKey);

module.exports = router;
