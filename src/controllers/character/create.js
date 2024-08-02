const createCharacter = require('../../services/characterServices/create.Services')

//const {validationResult} = require('express-validator')

module.exports = async (req, res) => {
    try {
        //const errors = validationResult(req)

       // if (errors.isEmpty()) {

        const { name, image, realm, element, power, description } = req.body;

        // Formatear los datos para pasarlos al servicio
        const newCharacter = {
            name: name?.trim(),
            image: image,
            realmId: realm,
            elementId: element,
            power: +power,
            description: description?.trim() || "No hay descripcion disponible"
        };

            if (image && (image.startsWith('http://') || image.startsWith('https://'))) {
                newCharacter.image = image; // Utiliza la URL proporcionada
            } else if (req.file) {
                newCharacter.image = req.file.filename; // Utiliza la imagen cargada localmente
            } else {
                newCharacter.image = "tierras-magicas.jpg"; // Imagen por defecto si no se proporciona ninguna
            }

        await createCharacter(newCharacter)
        

        return res.redirect('/')

  /* } else {
        return res.redirect('addCharacter', {
            errors:errors.mapped(),
            old: req.body
        });
   } */

    } catch (error) {
        console.log("Error al crear el producto:",error);
    }
}