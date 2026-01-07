const { v4: uuidv4 } = require("uuid");
const ApiKey = require("../models/ApiKey");

exports.generateApiKey = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  const apiKey = "ak_" + uuidv4().replace(/-/g, "").slice(0, 16);

  const newKey = await ApiKey.create({ email, apiKey });

  res.status(201).json({
    success: true,
    message: "API key generated successfully..",
    data: newKey,
  });
};
