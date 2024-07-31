const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../../data/realms.json')
const realms = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

module.exports = async (req, res) => {
    try {
        const deleteRealm = realms.filter(realm => realm.id !== +req.params.id)

        fs.writeFileSync(filePath, JSON.stringify(deleteRealm, null, 2), 'utf-8')

        return res.redirect('/admin');

    } catch (error) {
        console.log(error);
    }
}