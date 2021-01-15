const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.post('/', mainController.create);

router.get('/editar/:id', mainController.edit);
router.put('/editar/:id', mainController.saveEdit);

router.delete('/eliminar/:id', mainController.delete);

module.exports = router;