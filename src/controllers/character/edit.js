const editCharacter = require('../../services/characterServices/edit.Services');

module.exports = async (req, res) => {
    try {
        const { name, image, realmId, elementId, power, description } = req.body;
        const { id } = req.params;

        const data = {
            name,
            image: req.file ? req.file.filename : image,
            realmId,
            elementId,
            power,
            description
        };

        const updatedCharacter = await editCharacter(id, data);

        if (!updatedCharacter) {
            return res.status(404).json({
                ok: false,
                message: 'Character not found'
            });
        }

        return res.redirect('/admin');
    } catch (error) {
        console.log("Error al editar el personaje:", error);
        res.status(500).send('Internal Server Error');
    }
};
