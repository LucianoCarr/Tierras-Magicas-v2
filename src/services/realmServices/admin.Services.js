const db = require('../../database/models');

module.exports = async () => {
    try {
        const realms = await db.Realm.findAll({
            attributes: ['id', 'name'], // Selecciona solo los atributos necesarios
            include: [
                {
                    model: db.Character,
                    as: 'characters', // Alias definido en el modelo
                    attributes: ['id', 'name', 'power', 'image', 'description'] // Campos de los personajes que quieres mostrar
                }
            ]
        });

        return realms;
    } catch (error) {
        console.error('Error en el servicio:', error.message);
        throw new Error('Error en el servicio');
    }
};
