const editCharacter = require('../../services/characterServices/edit.Services');

module.exports = async (req, res) => {
    try {
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
        
    } catch (error) {
        console.error("Error al editar el personaje:", error.message);
        res.status(500).send('Internal Server Error');
    }
};
