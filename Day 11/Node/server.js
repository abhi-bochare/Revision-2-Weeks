require("dotenv").config();
const express = require("express");

const productRoutes = require("./routes/products");
const connectToDB = require("./config/db");

const app = express();

app.use(express.json());

connectToDB();

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
});
