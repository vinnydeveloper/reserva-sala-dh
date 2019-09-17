const {
  Usuarios
} = require('../models');

module.exports = {

  index(req, res) {
    return res.render('usuarioCadastro', {
      layout: 'default',
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
        layout: 'default',
        message: 'Usuario cadastrado com sucesso'
      })
    }).catch(() => {
      return res.render('usuarioCadastro', {
        layout: 'default',
        message: 'Erro ao enviar formulário'
      })
    })
  },

};