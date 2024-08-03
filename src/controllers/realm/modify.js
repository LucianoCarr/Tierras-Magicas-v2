const editRealm = require('../../services/realmServices/modify.Services')

module.exports = async (req, res) => {
    try {
        const realm = await editRealm(req.params.id)

        return res.render('editRealm', {
            realm
        });
    } catch (error) {
        console.log("Error al obtener el reino para editar", error);
        res.status(500).send('Internal Server Error');
    }
};