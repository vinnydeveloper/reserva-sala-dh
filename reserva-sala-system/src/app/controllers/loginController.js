const { Usuarios } = require('../models');

module.exports = {

  index(req, res) {
    return res.render('login', { layout: 'default' });
  },
  async logar(req, res) {
    const dados = req.body;

    // validando se o login não está vazio
    if (!dados) {
      return res.render('login', {
        mensagem: 'Você deve preencher os dados',
      });
    }

    const usuarios = await Usuarios.findOne({
      where: {
        email: dados.email,
        senha: dados.senha,
      },
      limit: 1,
      raw: true,
    });
    console.log(usuarios);
    if (usuarios == null) {
      return res.render('login', {
        menssagem: 'Usuario ou Senha inválida!',
      });
    }
    return res.render('login', {
      menssagem: 'Deu bom viado',
    });
  },

};
