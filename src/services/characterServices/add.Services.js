const db = require('../../database/models');

const realmCharacter = async () => {
    try {
        const realms = await db.Realm.findAll({ attributes: ['id', 'name'] });

        return realms;

    } catch (error) {
        console.error('Error al obtener los reinos:', error.message);
        throw new Error('Error al obtener los reinos');
    }
};

const elementCharacter = async () => {
    try {
        const elements = await db.Element.findAll({ attributes: ['id', 'name'] });

        return elements;

    } catch (error) {
        console.error('Error al obtener los elementos:', error.message);
        throw new Error('Error al obtener los elementos');
    }
};

module.exports = {
    realmCharacter,
    elementCharacter
};
