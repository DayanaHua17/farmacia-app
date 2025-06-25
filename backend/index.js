const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const app = express();

// Importar modelos para poder definir las asociaciones
const Laboratorio = require('./models/laboratorio');
const Medicamento = require('./models/medicamento');

// Importar nuestras rutas
const laboratorioRoutes = require('./routes/laboratorioRoutes');
const medicamentoRoutes = require('./routes/medicamentoRoutes');

// Middlewares
app.use(cors()); // Permite la comunicación entre el backend y el frontend
app.use(express.json()); // Permite a express entender el formato JSON

// --- Definición de la relación entre tablas ---
// Un Laboratorio tiene muchos Medicamentos.
Laboratorio.hasMany(Medicamento, { foreignKey: 'CodLab' });
// Un Medicamento pertenece a un Laboratorio.
Medicamento.belongsTo(Laboratorio, { foreignKey: 'CodLab' });

// Usar las rutas definidas
app.use('/api/laboratorios', laboratorioRoutes);
app.use('/api/medicamentos', medicamentoRoutes);


// Sincronizar la base de datos y arrancar el servidor
sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(3001, () => {
      console.log('Backend corriendo en http://localhost:3001');
    });
  })
  .catch(err => {
    console.error('Error al sincronizar base de datos:', err);
  });