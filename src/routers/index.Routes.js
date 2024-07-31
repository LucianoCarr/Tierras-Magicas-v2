const express = require('express')
const router = express.Router()
const { all, admin, add, realm, modify, create, destroy, edit } = require('../controllers/indexController')
const upload = require('../middleWares/upload')

//Crear
router.get('/realm/add', add)
router.post('/realm/add', upload.single('image'), create)
//Mostar
router.get('/', all)
router.get('/realm/:id', realm)
router.get('/admin', admin)
//editar
router.get('/realm/edit/:id', modify)
router.put('/realm/edit/:id', upload.single('image'), edit)
//borrar
router.delete('/realm/delete/:id', destroy)

module.exports = router