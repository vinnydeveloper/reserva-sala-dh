const {
  Salas,
  Campus,
} = require('../models');

module.exports = {

  async index(req, res) {
    const listaCampus = await Campus.findAll({
      raw: true,
    });
    const listaSalas = await Salas.findAll({
      raw: true,
    });
    return res.render('salas', {
      listaCampus,
      listaSalas,
    });
  },

  cadastrar(req, res) {
    Salas.create({
      nome: req.body.nome,
      campus_id: req.body.campus_id,
      lotacao: req.body.lotacao,
      descricao: req.body.descricao,
    }).then(res.render('salas', {
      layout: 'default',
      mensagem: 'Sala cadastrada com sucesso',
    })).catch((error) => {
      res.render('salas/cadastrar', {
        layout: 'default',
        erros: error.errors,
      });
    });
  },
};
