// routes/lokasi-routes.js
const express = require("express");
const lokasiController = require("../controllers/lokasi-controller");
const router = express.Router();

router
  .route("/")
  .get(lokasiController.selectLokasi)
  .post(lokasiController.insertLokasi)
  .delete(lokasiController.deleteLokasi);

router
  .route("/:id")
  .get(lokasiController.selectLokasiById)
  .delete(lokasiController.deleteLokasiById)
  .put(lokasiController.updateLokasiById);

module.exports = router;
