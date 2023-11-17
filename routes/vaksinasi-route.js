const express = require("express");
const vaksinasiController = require("../controllers/vaksinasi-controller");
const router = express.Router();

router
  .route("/")
  .get(vaksinasiController.selectVaksinasi)
  .post(vaksinasiController.insertVaksinasi)
  .delete(vaksinasiController.deleteVaksinasi);

router
  .route("/:id")
  .get(vaksinasiController.selectVaksinasiById)
  .delete(vaksinasiController.deleteVaksinasiById)
  .put(vaksinasiController.updateVaksinasiById);

module.exports = router;
