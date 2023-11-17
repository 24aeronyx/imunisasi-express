const express = require('express');
const pasienController = require('../controllers/pasien-controller');
const router = express.Router();

router.get('/', pasienController.selectPasien);
router.get('/:id', pasienController.selectPasienById);
router.post('/', pasienController.insertPasien);

module.exports = router;
