module.exports = async (req, res) => {
    try {

        return res.render('addRealm')

    } catch (error) {
        console.log(error);
    }
}