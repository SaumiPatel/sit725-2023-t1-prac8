var express = require("express");
let router = express.Router();
let controller = require("../Controller/contorller");

router.get("/projects", (req, res) => {
  controller.getAllCards(req, res);
});
router.post("/cards", (req, res) => {
  controller.postcards(req, res);
});

module.exports = router;
