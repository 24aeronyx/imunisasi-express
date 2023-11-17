const express = require("express");
const pasienController = require("../controllers/pasien-controller");
const router = express.Router();

router
  .route("/")
  .get(pasienController.selectPasien)
  .post(pasienController.insertPasien)
  .delete(pasienController.deletePasien);

router
  .route("/:id")
  .get(pasienController.selectPasienById)
  .delete(pasienController.deletePasienById)
  .put(pasienController.updatePasienById);

module.exports = router;
