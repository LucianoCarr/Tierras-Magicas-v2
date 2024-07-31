const fs = require('fs')
const path = require('path')
//const upload = require('../../middleWares/upload')

const filePath = path.join(__dirname, '../../data/realms.json')
const realms = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

//const {validationResult} = require('express-validator')

module.exports = async (req, res) => {
    try {
        //const errors = validationResult(req)

       // if (errors.isEmpty()) {

        const {name, image} = req.body

        let newRealm = {
            id: realms[realms.length - 1].id + 1,
            name: name?.trim(),
            //image: '',
           }
        console.log(newRealm);

            if (image && (image.startsWith('http://') || image.startsWith('https://'))) {
                newRealm.image = image; // Utiliza la URL proporcionada
            } else if (req.file) {
                newRealm.image = req.file.filename; // Utiliza la imagen cargada localmente
            } else {
                newRealm.image = "tierras-magicas.jpg"; // Imagen por defecto si no se proporciona ninguna
            }

        realms.push(newRealm)
        
        fs.writeFileSync(filePath, JSON.stringify(realms, null, 2), 'utf-8')

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