const db = require('../../database/models')
const characterPerRealm = require('../../services/realmServices/admin.Services');

module.exports = async (req, res) => {
    try {
        const realms = await characterPerRealm();

        return res.render('admin', {
            realms
        });

    } catch (error) {
        console.log("Error al obtener los personajes:", error);
        res.status(500).send('Internal Server Error');
    }
};


/* const fs = require('fs')
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
}; */