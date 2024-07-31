const fs = require('fs')
const path = require('path')
//const upload = require('../../middleWares/upload')

const filePath = path.join(__dirname, '../../data/characters.json')
const characters = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

//const {validationResult} = require('express-validator')

module.exports = async (req, res) => {
    try {
        //const errors = validationResult(req)

       // if (errors.isEmpty()) {

        const {name, image, realm, element, power, description} = req.body

        let newCharacter = {
            id: characters[characters.length - 1].id + 1,
            name: name?.trim(),
            //image: '',
            realm: realm?.trim(),
            power: +power,
            element,
            description: description?.trim() || "No hay descipcion disponible"
        }
        console.log(newCharacter);

            if (image && (image.startsWith('http://') || image.startsWith('https://'))) {
                newCharacter.image = image; // Utiliza la URL proporcionada
            } else if (req.file) {
                newCharacter.image = req.file.filename; // Utiliza la imagen cargada localmente
            } else {
                newCharacter.image = "tierras-magicas.jpg"; // Imagen por defecto si no se proporciona ninguna
            }

        characters.push(newCharacter)
        
        fs.writeFileSync(filePath, JSON.stringify(characters, null, 2), 'utf-8')

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