const express = require("express");
const router = express.Router();
const Task = require("../models/task.model");
const controllers = require("../controllers/task.controller");

router.get("/", controllers.index);

router.get("/detail/:id", controllers.detail);

router.patch("/change-status/:id", controllers.changeStatus);
module.exports = router;

router.patch("/change-multi/", controllers.changeMulti);
module.exports = router;