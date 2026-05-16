module.exports = function (req, res, next) {
    const { cpf } = req.body;

    if (cpf.length !== 11 || isNaN(cpf)) {
        return res.status(400).json({
            erro: "CPF inválido"
        });
    }

    next();
};