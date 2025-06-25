const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Laboratorio = sequelize.define('Laboratorio', {
    CodLab: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    razonSocial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    contacto: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'laboratorio', // Aseguramos que el nombre de la tabla sea en minúsculas como es común.
    timestamps: false
});

module.exports = Laboratorio;