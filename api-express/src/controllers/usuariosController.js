const supabase = require('../config/supabase');

// GET - Listar todos
const listarUsuarios = async (req, res) => {
    const { data, error } = await supabase.from('practica').select('*'); // Cambio de nombre de tabla
    if (error) return res.status(500).json({ mensaje: error.message });
    res.json(data);
};

// GET por ID
const obtenerUsuario = async (req, res) => {
    const { data, error } = await supabase
        .from('practica')
        .select('*')
        .eq('id', req.params.id)
        .single();
    if (error) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(data);
};

// POST - Crear (Usando numero_control)
const crearUsuario = async (req, res) => {
    const { nombre, numero_control } = req.body; // Columnas de tu nueva tabla
    const { data, error } = await supabase
        .from('practica')
        .insert([{ nombre, numero_control }]); 

    if (error) return res.status(500).json({ mensaje: error.message });
    res.status(201).json(data);
};

// PUT - Actualizar
const actualizarUsuario = async (req, res) => {
    const { data, error } = await supabase
        .from('practica')
        .update(req.body)
        .eq('id', req.params.id);
    if (error) return res.status(500).json({ mensaje: error.message });
    res.json(data);
};

// DELETE - Eliminar
const eliminarUsuario = async (req, res) => {
    const { error } = await supabase
        .from('practica')
        .delete()
        .eq('id', req.params.id);
    if (error) return res.status(500).json({ mensaje: error.message });
    res.json({ mensaje: 'Eliminado de la tabla practica' });
};

module.exports = { listarUsuarios, obtenerUsuario, crearUsuario, actualizarUsuario, eliminarUsuario };