const validarUsuario = (req, res, next) => {
    const { nombre, numero_control } = req.body;

    // Validamos que vengan los nuevos campos de la tabla 'practica'
    if (!nombre || !numero_control) {
        return res.status(400).json({ 
            mensaje: 'Nombre y numero_control son obligatorios' 
        });
    }

    next(); // Si todo está bien, pasa al controlador [cite: 36, 59]
};

module.exports = validarUsuario;