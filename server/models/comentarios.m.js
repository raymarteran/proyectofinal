const mongoose = require('mongoose'); //requerimos libreria de mongo

const comentarioSchema = new mongoose.Schema( //en mongo el modelo es establecer el esquema de los datos que vamos a recibir
    {
        nombre: {
            type: String  //importante indicar el tipo de dato
        },
        descripcion: {
            type: String
        },
        idpeli: {
            type: Number
        },
        calificacion: {
            type: Number
        }
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('comentario', comentarioSchema, 'comentario') //primer argumento: nombre del modelo; segundo argumento: esquema; tercer argumento: nombre de la collection