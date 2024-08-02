const editCharacter = require('../../services/characterServices/edit.Services');

module.exports = async (req, res) => {
    try {
        const { name, realmId, elementId, power, description } = req.body;
        const { id } = req.params;

        let image;

        if (image && !(image.startsWith('http://') || image.startsWith('https://'))) {
            // Si no es una URL válida, entonces es un nombre de archivo
            image = image;
        }

        // Si se carga un archivo, usa el nombre del archivo
        if (req.file) {
            image = req.file.filename;
        } else {
            // Si no se carga un archivo, usa el valor existente de imagen
            image = req.body.image || "tierras-magicas.jpg";
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
