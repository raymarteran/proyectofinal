const mongoose = require('mongoose'); //requerimos libreria de mongo

const comentarioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        email: {
            type: String
        },
        telefono: {
            type: String
        },
        fecha: {
            type: Date
        },
        pregunta: {
            type: String
        }
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('comentario', comentarioSchema, 'comentario')

