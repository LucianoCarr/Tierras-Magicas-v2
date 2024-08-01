const db = require('../../database/models');

module.exports = async (data) => {
    try {
        const { name, image, realmId, elementId, power, description } = data;

        const newCharacter = await db.Character.create({
            name,
            image,
            realmId,
            elementId,
            power,
            description,
        });

        return newCharacter;
        
    } catch (error) {
        console.error('Error en el service:', error.message);
        throw new Error('Error en el service');
    }
};
