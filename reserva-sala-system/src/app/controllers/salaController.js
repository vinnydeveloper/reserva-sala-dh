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

  create(req, res) {
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

  async show(req, res) {
    const {
      id
    } = req.params;
    Salas.findOne({
        where: {
          id
        }
      })
      .then((sala) => {
        res.render('salasEditar', {
          sala,
          layout: 'default',
          listaCampus: Campus.findAll({
            raw: true,
          }),
        })
      }).catch((error) => {
        res.render('salas', {
          layout: 'default',
          erros: error.errors,
        });
      });
  },

  update(req, res) {
    Salas.update({
      nome: req.body.nome,
      endereco: req.body.endereco,
    }, {
      returning: true,
      where: {
        id: req.body.salaId
      },
    }).then(async () => res.render('salas', {
      layout: 'default',
      mensagem: 'Sala atualizado com sucesso',
      listaCampus: await Campus.findAll({
        raw: true,
      }),
    })).catch(async (error) => res.render('salasEditar', {
      layout: 'default',
      erros: error,
      listaCampus: await Salas.findOne({
        id: req.body.salasId,
        raw: true,
      })
    }));
  },
};