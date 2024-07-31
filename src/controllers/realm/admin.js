const fs = require('fs')
const path = require('path')

const charactersFilePath = path.join(__dirname, '../../data/characters.json')
const realmsFilePath = path.join(__dirname, '../../data/realms.json')

module.exports = async (req, res) => {
    try {
        const characters = JSON.parse(fs.readFileSync(charactersFilePath, 'utf-8'));
        const realms = JSON.parse(fs.readFileSync(realmsFilePath, 'utf-8'));

        return res.render('admin', {
            characters,
            realms
        });
    } catch (error) {
      console.log(error);
    }
};