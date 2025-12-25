const express = require("express");
const taskRoutes = require("./taskRoutes");

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
