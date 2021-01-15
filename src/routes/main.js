const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/editar/:id', mainController.edit);

router.post('/', mainController.create);

module.exports = router;