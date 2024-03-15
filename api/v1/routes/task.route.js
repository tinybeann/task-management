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

router.get("/detail/:id", async (req, res) => {
  const id = req.params.id;
  
  const task = await Task.findOne({
    _id: id,
    deleted: false
  });

  console.log(task);

  res.json(task);
});
module.exports = router;