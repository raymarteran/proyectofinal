const mongoose = require('mongoose');
require('dotenv').config();
const db_URL = process.env.DATABASE

module.exports = () => {
    const conexion = () => {
        mongoose.connect(db_URL)
        .then(() => console.log('Conectooo MongoDB :D'))
        .catch(err => console.error('Error de Conexión: ' + err.stack));
    }
    conexion();
};