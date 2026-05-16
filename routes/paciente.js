const express = require('express');
const router = express.Router();

const validarCampos = require('../middlewares/validarCampos');
const validarCpf = require('../middlewares/validarCpf');
const sanitizarDados = require('../middlewares/sanitizarDados');

router.post(
    '/cadastro',
    sanitizarDados,
    validarCampos,
    validarCpf,
    (req, res) => {

        const paciente = req.body;

        console.log("Paciente recebido:", paciente);

        res.json({
            mensagem: "Paciente cadastrado com sucesso",
            dados: paciente
        });
    }
);

module.exports = router;