const db = require('../../database/models');

module.exports = async (realmId) => {
    try {
        const realms = await db.Character.findAll({
            where: {realmId},
            attributes: ['id', 'name', 'image', 'realmId', 'elementId', 'power', 'description'],
            include: [
                {
                    association: 'realms',
                    attributes: ['name']
                },
                {
                    association: 'elements',
                    attributes: ['name']
                }
            ]
        });

        return realms;

    } catch (error) {
        console.error('Error en el service:', error.message);
        throw new Error('Error en el service');
    }
};
