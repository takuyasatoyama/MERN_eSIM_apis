const express = require("express");
const UserRoutes  = require("./userModel.js");

const router = express.Router();
router.use("/auth", UserRoutes);

module.exports =  router;
