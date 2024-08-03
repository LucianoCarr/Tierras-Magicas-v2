const allRealms = require('../../services/realmServices/all.Services')

module.exports = async (req, res) => {
    try {
        const realms = await allRealms()

        return res.render('index', {
            realms
        });
        
    } catch (error) {
        console.log("Error al obtener los reinos:", error);
        res.status(500).send('Internal Server Error');
    }
};