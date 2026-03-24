const express = require('express');
const app = express();
const puerto = 3000;

// 1. IMPORTAR LAS RUTAS (Ruta corregida según tu estructura)
const usuariosRoutes = require('./api-express/src/routes/usuarios'); 

// 2. MIDDLEWARE PARA JSON
app.use(express.json());

// 3. CONECTAR LAS RUTAS
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
    res.send('API conectada con Supabase funcionando!');
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});