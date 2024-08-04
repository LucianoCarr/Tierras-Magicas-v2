const express = require('express')
const {add, modify, all, create, edit, destroy } = require('../controllers/characterController')
const router = express.Router()
const upload = require('../middleWares/upload')
/* validaciones */
const addCharacterValidator = require('../validations/addCharacterValidator')
const editCharacterValidator = require('../validations/editCharacterValidator')


//mostrar
router.get('/all', all)
//crear
router.get('/add', add)
router.post('/add', upload.single('image'), addCharacterValidator, create)
//editar
router.get('/edit/:id', modify)
router.put('/edit/:id', upload.single('image'), editCharacterValidator, edit)
//borrar
router.delete('/delete/:id', destroy)

module.exports = router