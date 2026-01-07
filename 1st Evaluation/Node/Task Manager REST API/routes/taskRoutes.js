const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const verifyApiKey = require("../middleware/verifyApiKey");

router.use(verifyApiKey);

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getSingleTask);
router.post("/", taskController.createTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
