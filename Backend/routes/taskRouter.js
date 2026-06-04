const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getTasks);
router.post("/", taskController.postTask)
router.delete("/:id", taskController.deleteTask);
router.patch("/:id/toggle", taskController.toggleTask);
router.put("/:id", taskController.updateTask);

module.exports = router;