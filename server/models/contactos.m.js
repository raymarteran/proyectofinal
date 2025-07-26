const mongoose = require('mongoose'); //requerimos libreria de mongo

const contactoSchema = new mongoose.Schema( 
    {
        telefono: {
            type: String
        },
        nombre: {
            type: String  
        },
        email: {
            type: String
        },
        pregunta: {
            type: String
        },
        importancia: {
            type: String
        },
        fecha: {
            type: Date
        }
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('contacto', contactoSchema, 'contacto') 