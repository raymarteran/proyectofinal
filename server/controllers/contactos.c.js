const contactosModel = require('../models/contactos.m') //requerimos modelo

class contactosControllers {

    async agregar(req, res, next) {  
        const {nombre, telefono, email, pregunta, fecha} = req.body;
        try {
            if ( !nombre || !telefono || !email || !pregunta || !fecha) {
                const missingFields = [];
                if (!nombre) missingFields.push('nombre');
                if (!telefono) missingFields.push('telefono');
                if (!email) missingFields.push('email');
                if (!pregunta) missingFields.push('pregunta');
                if (!fecha) missingFields.push('fecha');
                
                throw(`Ingresa los datos correctamente. Faltan: ${missingFields.join(', ')}`);

            };
            const campos = {nombre, telefono, email, pregunta, fecha};
            console.log('agregar:', campos)
            await contactosModel.create(campos);
            res.json({"agregado": "se agregado"}).status('200'); 
        } catch (error) {
            console.log('Hubo algún error', error); 
            res.status('404').json({"error":error})
        }
    }
}

module.exports = new contactosControllers();