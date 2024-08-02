const db = require('../../database/models');

module.exports = async (id, data) => {
    try {
        const { name, image, realmId, elementId, power, description } = data;

        const existingCharacter = await db.Character.findByPk(id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });

        if (!existingCharacter) {
            throw new Error("Personaje no existe");
        }

        await existingCharacter.update({
            name: name?.trim() || existingCharacter.name,
            image: image || existingCharacter.image,
            realmId: realmId || existingCharacter.realmId,
            elementId: elementId || existingCharacter.elementId,
            power: power !== undefined ? +power : existingCharacter.power,
            description: description?.trim() || existingCharacter.description,
        });

        return existingCharacter;

    } catch (error) {
        console.error('Error en el service:', error.message);
        throw new Error('Error en el service');
    }
};
