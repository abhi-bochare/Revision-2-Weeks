const express = require("express");
const connectToDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectToDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});
