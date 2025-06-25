const express = require('express');
const router = express.Router();
const medicamentosController = require('../controllers/medicamentosController');

// Asocia las rutas con las funciones del controlador
router.get('/', medicamentosController.getAll);
router.get('/:CodMedicamento', medicamentosController.getOne);
router.post('/', medicamentosController.create);
router.put('/:CodMedicamento', medicamentosController.update);
router.delete('/:CodMedicamento', medicamentosController.remove);

module.exports = router;