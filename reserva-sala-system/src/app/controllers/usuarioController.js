
const bcrypt = require('bcrypt');
const { Usuarios } = require('../models');

module.exports = {

  index(req, res) {
    return res.render('usuarioCadastro');
  },
  cadastrar(req, res) {
    const salt = bcrypt.genSaltSync(10);
    const passWordHash = bcrypt.hashSync(req.body.senha, salt);
    Usuarios.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: passWordHash,
    }).then(() => res.render('login', {
      layout: 'default',
      mensagem: 'Usuario cadastrado com sucesso',
    })).catch((error) => {
      res.render('usuarioCadastro', {
        layout: 'default',
        erros: error.errors,
      });
    });
  },
};
