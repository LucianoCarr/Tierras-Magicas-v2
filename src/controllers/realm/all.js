const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../../data/realms.json')

module.exports = async (req, res) => {
    try {
        const realms = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

        return res.render('index', {
            realms
        });
    } catch (error) {
      console.log(error);
    }
};