const db = require('../../database/models')
const editCharacter = require('../../services/characterServices/modify.Services');

module.exports = async (req, res) => {
    try {
        const character = await editCharacter(req.params.id);

        const realms = await db.Realm.findAll({
            attributes: ['id', 'name']
        });

        const elements = await db.Element.findAll({
            attributes: ['id', 'name']
        });

        const elementClasses = {
            Agua: 'agua',
            Tierra: 'tierra',
            Fuego: 'fuego',
            Aire: 'aire'
        };

        return res.render('editCharacter', {
            character,
            realms,
            elements,
            elementClasses
        });

    } catch (error) {
        console.log("Error al obtener el personaje para editar", error);
        res.status(500).send('Internal Server Error');
    }
};
