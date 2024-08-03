const db = require('../../database/models')

module.exports = async (id) => {
    try {
        const realm = await db.Realm.findByPk(id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        return realm
        
    } catch (error) {
        
    }
}