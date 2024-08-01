const allCharacters = require('../../services/characterServices/all.Services');

module.exports = async (req, res) => {
    try {
        const characters = await allCharacters();

        return res.render('allCharacter', {
            characters
        });
    } catch (error) {
        console.log("Error al obtener los personajes:", error);
        res.status(500).send('Internal Server Error');
    }
};
