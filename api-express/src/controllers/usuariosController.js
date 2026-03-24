const supabase = require('../config/supabase'); // Importa la conexión configurada [cite: 39]

// 1. LISTAR TODOS LOS USUARIOS (GET)
const listarUsuarios = async (req, res) => {
    // Selecciona todas las columnas de la tabla 'usuarios' [cite: 42]
    const { data, error } = await supabase.from('usuarios').select('*');
    
    if (error) return res.status(500).json({ mensaje: error.message }); [cite: 43]
    res.json(data); [cite: 44]
};

// 2. OBTENER UN USUARIO POR ID (GET)
const obtenerUsuario = async (req, res) => {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*') [cite: 51, 52]
        .eq('id', req.params.id) // Filtra por el ID recibido en la URL [cite: 53]
        .single(); // Devuelve un solo objeto en lugar de un arreglo [cite: 54]

    if (error) return res.status(404).json({ mensaje: 'No encontrado' }); [cite: 55]
    res.json(data); [cite: 56]
};

// 3. CREAR UN NUEVO USUARIO (POST)
const crearUsuario = async (req, res) => {
    const { nombre, email, edad } = req.body; [cite: 60]
    
    const { data, error } = await supabase
        .from('usuarios')
        .insert([{ nombre, email, edad }]); // Inserta los datos del cuerpo de la petición [cite: 61, 62, 63]

    if (error) return res.status(500).json({ mensaje: error.message }); [cite: 64]
    res.status(201).json(data); [cite: 65]
};

// 4. ACTUALIZAR UN USUARIO (PUT)
const actualizarUsuario = async (req, res) => {
    const { data, error } = await supabase
        .from('usuarios')
        .update(req.body) // Actualiza con los campos enviados en el body [cite: 70, 71]
        .eq('id', req.params.id); [cite: 72]

    if (error) return res.status(500).json({ mensaje: error.message }); [cite: 73]
    res.json(data); [cite: 74]
};

// 5. ELIMINAR UN USUARIO (DELETE)
const eliminarUsuario = async (req, res) => {
    const { error } = await supabase
        .from('usuarios')
        .delete() [cite: 79, 82]
        .eq('id', req.params.id); [cite: 83]

    if (error) return res.status(500).json({ mensaje: error.message }); [cite: 84]
    res.json({ mensaje: 'Eliminado' }); [cite: 85]
};

module.exports = {
    listarUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}; [cite: 87, 88, 89, 90, 91, 92]