const express = require("express");
const protectedRoutes = require("./routes/protectedRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Public API working");
});

app.use("/api", protectedRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
