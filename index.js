const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000; // Buena práctica: usar variable de entorno

// 1. IMPORTAR LAS RUTAS
const usuariosRoutes = require('./api-express/src/routes/usuarios'); 

// 2. MIDDLEWARE PARA JSON
app.use(express.json());

// 3. CONECTAR LAS RUTAS
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
    res.send('API conectada con Supabase funcionando!');
});

// ESTO ES LO QUE TE FALTA: EXPORTAR EL APP
module.exports = app; 

// El listen se queda para que funcione en tu PC (Localhost)
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});