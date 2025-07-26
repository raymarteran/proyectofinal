const comentariosModel = require('../models/comentarios.m') //requerimos modelo

class comentariosControllers {
    async listar(req, res, next) {  //para ver todos los documentos de la collection comentarios de la db
        try {
            const datos = await comentariosModel.find();  //esperamos a que encuentre y los guardamos en una variable
            if (!datos) {
                throw('No hay Comentarios')  //si no hay elementos dentro de datos, entonces no hay comentarios
            }
            console.log(typeof(datos), datos) //vemos el tipo que es datos (un objeto)
            res.send(datos).status('200'); //enviamos respuesta y el estado
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async agregar(req, res, next) {  
        const {nombre, descripcion, idpeli, calificacion} = req.body;
        try {
            if ( !nombre || !descripcion || !calificacion ) {
                throw("Ingresa los datos correctamente");
            };
            const campos = {nombre, descripcion, idpeli, calificacion};
            console.log('agregar:', campos)
            await comentariosModel.create(campos);
            res.json({"agregado": "se agregado"}).status('200');  
        } catch (error) {
            console.log('Hubo algún error', error); 
            res.status('404').json({"error":error})
        }
    }
}

module.exports = new comentariosControllers();