const db = require('../../database/models');

module.exports = async () => {
    try {
        const Realms = await db.Realm.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [
                {
                    association: 'characters',
                    attributes: ['id', 'name', 'image', 'realmId', 'elementId', 'power', 'description'],
                    /* order: [['id', 'ASC']], */
                    include: [
                        {
                            association: 'elements', // Asegúrate de que la asociación se llame 'element' en tu modelo
                            attributes: ['name']
                        }
                    ]
                }
            ]
        });

        return Realms;

    } catch (error) {
        console.error('Error en el service:', error.message);
        throw new Error('Error en el service');
    }
};
