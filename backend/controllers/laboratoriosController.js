const Laboratorio = require('../models/laboratorio');

// Obtener todos los laboratorios
exports.getAll = async (req, res) => {
    try {
        const laboratorios = await Laboratorio.findAll();
        res.json(laboratorios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener un laboratorio por ID
exports.getOne = async (req, res) => {
    try {
        const laboratorio = await Laboratorio.findByPk(req.params.CodLab);
        if (!laboratorio) {
            return res.status(404).json({ message: 'No encontrado' });
        }
        res.json(laboratorio);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo laboratorio
exports.create = async (req, res) => {
    try {
        const nuevoLaboratorio = await Laboratorio.create(req.body);
        res.status(201).json(nuevoLaboratorio);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un laboratorio
exports.update = async (req, res) => {
    try {
        const [actualizado] = await Laboratorio.update(req.body, {
            where: { CodLab: req.params.CodLab }
        });
        if (actualizado === 0) {
            return res.status(404).json({ message: 'No encontrado' });
        }
        res.json({ message: 'Actualizado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar un laboratorio
exports.remove = async (req, res) => {
    try {
        const eliminado = await Laboratorio.destroy({
            where: { CodLab: req.params.CodLab }
        });
        if (!eliminado) {
            return res.status(404).json({ message: 'No encontrado' });
        }
        res.status(204).send(); // No content
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};