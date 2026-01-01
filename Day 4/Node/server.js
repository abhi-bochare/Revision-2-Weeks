const express = (express = require("express"));
const rateLimiter = require("./rateLimiter");

const app = express();

app.use(rateLimiter);

app.get("/api/data", (req, res) => {
  res.json({ message: "Request successful" });
});

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});
