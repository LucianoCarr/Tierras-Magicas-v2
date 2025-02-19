const deleteCharacter = require('../../services/characterServices/destroy.Services')

module.exports = async (req, res) => {
    try {
            await deleteCharacter(req.params.id);
            
            res.redirect('/admin')
            
        } catch (error) {
            console.error('Error eliminando el personaje en el controlador:', error.message);
            res.status(500).send('Internal Server Error');
        }
}