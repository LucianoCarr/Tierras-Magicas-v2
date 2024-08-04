const db = require('../../database/models')
const editCharacter = require('../../services/characterServices/edit.Services');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            

        const { name, realmId, elementId, power, description } = req.body;
        const { id } = req.params;

        let image;

        if (image && !(image.startsWith('http://') || image.startsWith('https://'))) {
            image = image;   // Si no es una URL válida, entonces es un nombre de archivo

        }else if (req.file) {
            image = req.file.filename;   // Si se carga un archivo, usa el nombre del archivo

        }else if (req.body.defaultImage) {
            image = "tierras-magicas.jpg";  //Si se marca la casilla imagen por defecto

        } else {
            image = req.body.image;   // Si no se carga un archivo, usa el valor existente de imagen
        }

        const updateCharacter = {
            name,
            image,
            realmId,
            elementId,
            power,
            description
        };

        await editCharacter(id, updateCharacter);

        return res.redirect('/admin');

    } else {
          // Obtener el personaje a editar
          const character = await db.Character.findByPk(req.params.id, {
            include: [
                {
                    association: 'realms',
                    attributes: ['id', 'name']
                },
                {
                    association: 'elements',
                    attributes: ['id', 'name']
                }
            ]
          });

        const realms = await db.Realm.findAll()
        const elements = await db.Element.findAll()
    
        const elementClasses = {
            Agua: 'agua',
            Tierra: 'tierra',
            Fuego: 'fuego',
            Aire: 'aire'
        };
    
            return res.render('editCharacter', {
                    errors:errors.mapped(),
                    old: req.body,
                    realms,
                    elements,
                    elementClasses,
                    character
                });
       }
        
    } catch (error) {
        console.error("Error al editar el personaje:", error.message);
        res.status(500).send('Internal Server Error');
    }
};
