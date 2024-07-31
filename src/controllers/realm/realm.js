const fs = require('fs')
const path = require('path')

const filePathRealms = path.join(__dirname, '../../data/realms.json')
const filePathCharacters = path.join(__dirname, '../../data/characters.json')

module.exports = async (req, res) => {
        try {
            const characters = JSON.parse(fs.readFileSync(filePathCharacters, 'utf-8'));
            const realms = JSON.parse(fs.readFileSync(filePathRealms, 'utf-8'));
    
            const realm = realms.find(realm => realm.id === +req.params.id);
    
            const charactersInRealm = characters.filter(character => character.realm === realm.name);
    
            return res.render('realmCharacter', {
                realm,
                charactersInRealm
            });
        } catch (error) {
            console.log(error);
        }
    }