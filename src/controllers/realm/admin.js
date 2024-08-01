const characterPerRealm = require('../../services/realmServices/admin.Services');

module.exports = async (req, res) => {
    try {
        const realms = await characterPerRealm();

        return res.render('admin', {
            realms
        });
    } catch (error) {
        console.log("Error al obtener los reinos y personajes", error);
        res.status(500).send('Internal Server Error');
    }
};
