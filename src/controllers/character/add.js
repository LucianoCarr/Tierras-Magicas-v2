const { realmCharacter, elementCharacter } = require('../../services/characterServices/add.Services');

module.exports = async (req, res) => {
    try {
        const realms = await realmCharacter();
        const elements = await elementCharacter();

        return res.render('addCharacter', {
            realms,
            elements
        });
    } catch (error) {
        console.log("Error al obtener los reinos y elementos:", error);
        res.status(500).send('Internal Server Error');
    }
};
