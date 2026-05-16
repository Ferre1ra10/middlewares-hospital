module.exports = function (req, res, next) {
    const { nome, cpf, dataNascimento, telefone, email } = req.body;

    if (!nome || !cpf || !dataNascimento || !telefone || !email) {
        return res.status(400).json({
            erro: "Todos os campos são obrigatórios"
        });
    }

    next();
};