const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../data/characters.json');

module.exports = async (req, res) => {
    try {
        const characters = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const { name, image, realm, element, power, description } = req.body;

        const editCharacter = characters.map(character => {
            
            if (character.id === +req.params.id) {
                character.name = name.trim();
                character.image = req.file ? req.file.filename : character.image
                character.realm = realm.trim();
                character.power = +power;
                character.element = element;
                character.description = description.trim() || "No hay descipcion disponible";

                if (character.image) {
                    character.image = character.image;
                }
                
                if (req.file) {
                    character.image = req.file.filename;
                } else if (image && (image.startsWith('http://') || image.startsWith('https://'))) {
                    character.image = image;
                }
            }
            return character;
        });

        fs.writeFileSync(filePath, JSON.stringify(editCharacter, null, 2), 'utf-8');

        return res.redirect('/admin');
    } catch (error) {
        console.log("Error al editar el producto:", error);
        res.status(500).send('Internal Server Error');
    }
};
