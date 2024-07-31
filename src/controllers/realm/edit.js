const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../data/realms.json');

module.exports = async (req, res) => {
    try {
        const realms = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

        const { name, image } = req.body;

        const editRealm = realms.map(realm => {

            if (realm.id === +req.params.id) {
                realm.name = name.trim();
                realm.image = req.file ? req.file.filename : realm.image;

                if (realm.image) {
                    realm.image = realm.image;
                }

                if (req.file) {
                    realm.image = req.file.filename;
                } else if (image && (image.startsWith('http://') || image.startsWith('https://'))) {
                    realm.image = image;
                }
            }
            return realm;
        });

        fs.writeFileSync(filePath, JSON.stringify(editRealm, null, 2), 'utf-8');

        return res.redirect('/admin');

    } catch (error) {
        console.log("Error al editar el reino:", error);
    }
};
