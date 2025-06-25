const Medicamento = require('../models/medicamento');

// Obtener todos los medicamentos
exports.getAll = async (req, res) => {
    try {
        const medicamentos = await Medicamento.findAll();
        res.json(medicamentos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener un medicamento por ID
exports.getOne = async (req, res) => {
    try {
        const medicamento = await Medicamento.findByPk(req.params.CodMedicamento);
        if (!medicamento) {
            return res.status(404).json({ message: 'No encontrado' });
        }
        res.json(medicamento);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo medicamento
exports.create = async (req, res) => {
    try {
        const nuevoMedicamento = await Medicamento.create(req.body);
        res.status(201).json(nuevoMedicamento);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un medicamento
exports.update = async (req, res) => {
    try {
        const [actualizado] = await Medicamento.update(req.body, {
            where: { CodMedicamento: req.params.CodMedicamento }
        });
        if (actualizado === 0) {
            return res.status(404).json({ message: 'No encontrado' });
        }
        res.json({ message: 'Actualizado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar un medicamento
exports.remove = async (req, res) => {
    try {
        const eliminado = await Medicamento.destroy({
            where: { CodMedicamento: req.params.CodMedicamento }
        });
        if (!eliminado) {
            return res.status(404).json({ message: 'No encontrado' });
        }
        res.status(204).send(); // No content
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};