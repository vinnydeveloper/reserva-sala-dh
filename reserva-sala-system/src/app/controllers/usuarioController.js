const {
  Usuarios
} = require('../models');

module.exports = {

  index(req, res) {
    return res.render('usuarioCadastro', {
      layout: 'auth',
    })
  },
  cadastrar(req, res) {
    console.log(req.body)
    Usuarios.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    }).then(() => {
      return res.render('login', {
        layout: 'auth',
        message: 'Usuario cadastrado com sucesso!'
      })
    }).catch(() => {

    })
  },

};