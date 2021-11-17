const express = require("express"),
  router = express.Router(),
  controllers = require("../controllers");

module.exports = router
  .get("/test", function (req, res) {
    res.json({ message: "bot API works" });
    console.log("bot API works");
  })
  .post("/get", controllers.archive.get);
