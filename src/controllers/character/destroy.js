const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../../data/characters.json')
const characters = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

module.exports = async (req, res) => {
    try {
        const deleteCharacter = characters.filter(character => character.id !== +req.params.id)

        fs.writeFileSync(filePath, JSON.stringify(deleteCharacter, null, 2), 'utf-8')

        return res.redirect('/admin');

    } catch (error) {
        console.log(error);
    }
}