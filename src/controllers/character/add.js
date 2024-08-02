const db = require('../../database/models')
const addCharacters = require('../../services/characterServices/add.Services');

module.exports = async (req, res) => {
    try {
        const characters = await addCharacters();

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

        return res.render('addCharacter', {
            characters,
            realms,
            elements,
            elementClasses
        });

    } catch (error) {
        console.log("Error al obtener los personajes:", error);
        res.status(500).send('Internal Server Error');
    }
};

