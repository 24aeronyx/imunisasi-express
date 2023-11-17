const express = require ('express')
const pasienController = require('../controllers/pasien-controller')
const router = express.Router()

router
    .route('/',)
    .get(pasienController.selectPasien)

module.exports = router