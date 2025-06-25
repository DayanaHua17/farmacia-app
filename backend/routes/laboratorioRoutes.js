const express = require('express');
const router = express.Router();
const laboratoriosController = require('../controllers/laboratoriosController');

// Asocia las rutas con las funciones del controlador
router.get('/', laboratoriosController.getAll);
router.get('/:CodLab', laboratoriosController.getOne);
router.post('/', laboratoriosController.create);
router.put('/:CodLab', laboratoriosController.update);
router.delete('/:CodLab', laboratoriosController.remove);

module.exports = router;