const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../../data/characters.json')

module.exports = async (req, res) => {
    try {
        const characters = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        
        const character = characters.find(character => character.id === +req.params.id)

        return res.render('editCharacter', {
            character
        });
    } catch (error) {
      console.log(error);
    }
};