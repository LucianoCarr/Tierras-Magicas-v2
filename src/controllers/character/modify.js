// src/controllers/character/editCharacterView.controller.js
const characterId = require('../../services/characterServices/modify.Services');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;

        const character = await characterId(id);

        if (!character) {
            return res.status(404).json({
                ok: false,
                message: 'Personaje no encontrado'
            });
        }

        return res.render('editCharacter', {
            character
        });

    } catch (error) {
        console.log("Error al obtener el personaje para editar", error);
        res.status(500).send('Internal Server Error');
    }
};
