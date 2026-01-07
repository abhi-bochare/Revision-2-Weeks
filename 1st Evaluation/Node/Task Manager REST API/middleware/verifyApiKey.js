const ApiKey = require("../models/ApiKey");

const verifyApiKey = async (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access. Valid API key required.",
      error: "Invalid or missing API key",
    });
  }

  const keyExists = await ApiKey.findOne({ apiKey });

  if (!keyExists) {
    return res.status(401).json({
      success: false,
      message: "Invalid API Key",
    });
  }

  next();
};

module.exports = verifyApiKey;
