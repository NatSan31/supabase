const express = require('express');
const router = express.Router();

// Importamos el middleware y el controlador
const validarUsuario = require('../middlewares/validarUsuario');
const ctrl = require('../controllers/usuariosController');

// Rutas para la tabla 'practica'
router.get('/', ctrl.listarUsuarios); // [cite: 41, 42]
router.get('/:id', ctrl.obtenerUsuario); // [cite: 47, 48, 53]

// Aplicamos la validación antes de crear o actualizar
router.post('/', validarUsuario, ctrl.crearUsuario); // [cite: 59, 61, 63]
router.put('/:id', validarUsuario, ctrl.actualizarUsuario); // [cite: 68, 69, 71]

router.delete('/:id', ctrl.eliminarUsuario); // [cite: 77, 78, 82]

module.exports = router; // [cite: 87, 93]
