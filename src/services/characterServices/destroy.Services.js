const db = require('../../database/models');

module.exports = async (id) => {
    try {
        await db.Character.destroy({
            where: {
                id: id
            }
        });

/*         const character = await db.Character.findByPk(id)

        await db.Realm.destroy({
            where: {
                characterId : id
            }
        })

        await character.destroy() */

    } catch (error) {
        console.error('Error eliminando el personaje en el servicio:', error.message);
        throw new Error('Error eliminando el personaje');
    }
};