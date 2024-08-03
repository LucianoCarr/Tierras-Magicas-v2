const editRealm = require('../../services/realmServices/edit.Services')

module.exports = async (req, res) => {
    try {
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

    } catch (error) {
        console.error("Error al editar el reino:", error.message);
        res.status(500).send('Internal Server Error');
    }
};
