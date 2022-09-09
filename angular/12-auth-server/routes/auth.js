const { Router} =require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Crear un nuevo usuario
router.post( '/new',[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','La constraseña es obligatoria').isLength({min:6}),    
    validarCampos
],crearUsuario);
// nombre: .not().isEmpty()

// Login de usuario 
router.post( '/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','La constraseña es obligatoria').isLength({min:6}),
    validarCampos
],loginUsuario);
// Valida y revalidar token
router.get( '/renew',revalidarToken);

module.exports = router;