const db = require('../../database/models')
const editRealm = require('../../services/realmServices/edit.Services')
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req)

        if (errors.isEmpty()) {

        const { name } = req.body;
        const { id } = req.params;

        let image;

        if (image && !(image.startsWith('http://') || image.startsWith('https://'))) {
            image = image;

        }else if (req.file) {
            image = req.file.filename;

        }else if (req.body.defaultImage) {
            image = "tierras-magicas.jpg";

        } else {
            image = req.body.image;
        }

        const updateRealm = {
            name,
            image
        };

        await editRealm(id, updateRealm);

        return res.redirect('/admin');

    } else {
        const realm = await db.Realm.findByPk(req.params.id);

        return res.render('editRealm', {
                errors:errors.mapped(),
                old: req.body,
                realm
            });
    }

    } catch (error) {
        console.error("Error al editar el reino:", error.message);
        res.status(500).send('Internal Server Error');
    }
};
