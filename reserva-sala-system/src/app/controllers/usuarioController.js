const {
  Usuarios,
  sequelize
} = require('../models');

// const sequelize = require('sequelize');

module.exports = {

  index(req, res) {
    return res.render('usuarioCadastro');
  },
  cadastrar(req, res) {
    console.log(req.body);
    Usuarios.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    }).then(() => res.render('login', {
      layout: 'default',
      mensagem: 'Usuario cadastrado com sucesso',
    })).catch(() => res.render('usuarioCadastro', {
      layout: 'default',
      mensagem: 'Erro ao enviar formulário',
    }));
  },
  list(req, res) {
    sequelize.query('SELECT * FROM usuarios').then(usuarios => {
      console.log(usuarios);
    });
  }
};