module.exports = function (req, res, next) {
    req.body.nome = req.body.nome.trim();
    req.body.email = req.body.email.trim().toLowerCase();
    req.body.cpf = req.body.cpf.trim();

    next();
};