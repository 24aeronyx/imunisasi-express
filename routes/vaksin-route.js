// routes/vaksin-route.js
const express = require("express");
const vaksinController = require("../controllers/vaksin-controller");
const router = express.Router();

router
  .route("/")
  .get(vaksinController.selectVaksin)
  .post(vaksinController.insertVaksin)
  .delete(vaksinController.deleteVaksin);

router
  .route("/:id")
  .get(vaksinController.selectVaksinById)
  .delete(vaksinController.deleteVaksinById)
  .put(vaksinController.updateVaksinById);

module.exports = router;
