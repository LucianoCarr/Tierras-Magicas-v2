module.exports = async (req, res) => {
    try {

        return res.render('addCharacter')

    } catch (error) {
        console.log(error);
    }
}