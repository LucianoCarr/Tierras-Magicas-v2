const addRealm = require('../../services/realmServices/add.Services')

module.exports = async (req, res) => {
    try {
        const realm = await addRealm()

        return res.render('addRealm', {
            realm
        })

    } catch (error) {
        console.log("Error al obtener los reinos:", error);
        res.status(500).send('Internal Server Error');
    }
}