const deleteRealm = require('../../services/realmServices/destroy.Services')
module.exports = async (req, res) => {
    try {
        await deleteRealm(req.params.id);
            
        res.redirect('/admin')

    } catch (error) {
        console.error('Error eliminando el reino en el controlador:', error.message);
        res.status(500).send('Internal Server Error');
    }
}