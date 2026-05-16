const express = require('express');
const path = require('path');

const pacienteRoutes = require('./routes/paciente');

const app = express();

// Permite receber JSON
app.use(express.json());

// Servir arquivos HTML, CSS e JS
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use(pacienteRoutes);

// Servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});