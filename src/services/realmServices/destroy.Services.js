const db = require('../../database/models');

module.exports = async (id) => {
    try {
        await db.Realm.destroy({
            where: {
                id: id
            }
        });

    } catch (error) {
        console.error('Error eliminando el reino en el servicio:', error.message);
        throw new Error('Error eliminando el reino');
    }
};