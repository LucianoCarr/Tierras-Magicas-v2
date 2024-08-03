const characterPerRealm = require('../../services/realmServices/realm.Services')

module.exports = async (req, res) => {
        try {
            const charactersInRealm = await characterPerRealm(req.params.id)
            
            return res.render('realmCharacter', {
                charactersInRealm
            });
            
        } catch (error) {
            console.log("Error al obtener los personajes por reino:", error);
            res.status(500).send('Internal Server Error');
        }
    }