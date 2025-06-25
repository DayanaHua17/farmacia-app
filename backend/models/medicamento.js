const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Medicamento = sequelize.define('Medicamento', {
    CodMedicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcionMed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Presentacion: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioVentaUni: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    CodLab: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'medicamento', // Nombre de la tabla en la base de datos.
    timestamps: false
});

module.exports = Medicamento;