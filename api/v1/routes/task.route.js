const express = require("express");
const router = express.Router();
const Task = require("../../../models/task.model");

router.get("/", async (req, res) => {
  const tasks = await Task.find({
    deleted: false
  });

  console.log(tasks);

  res.json(tasks);
});

module.exports = router;