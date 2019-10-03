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

  async create(req, res) {
    const listaSalas = await Salas.findAll({
      raw: true,
    });
    Salas.create({
      nome: req.body.nome,
      campus_id: req.body.campus_id,
      lotacao: req.body.lotacao,
      descricao: req.body.descricao,
    }).then(res.render('salas', {
      layout: 'default',
      mensagem: 'Sala cadastrada com sucesso',
      listaSalas
    })).catch((error) => {
      res.render('salas/cadastrar', {
        layout: 'default',
        erros: error.errors,
        listaSalas
      });
    });
  },

  async show(req, res) {

    const {
      id
    } = req.params;
    const listCampus = await Campus.findAll({
      raw: true,
    });

    Salas.findOne({
        where: {
          id
        }
      })
      .then((sala) => {
        res.render('salasEditar', {
          sala,
          layout: 'default',
          listaCampus: listCampus,
        })
      }).catch((error) => {
        res.render('salas', {
          layout: 'default',
          erros: error.errors,
        });
      });
  },

  async update(req, res) {
    const sala = await Salas.findOne({
      id: req.body.salasId,
      raw: true,
    });
    const listaCampus = Campus.findAll({
      raw: true,
    });
    Salas.update({
      nome: req.body.nome,
      campus_id: req.body.campus_id,
      lotacao: req.body.lotacao,
      descricao: req.body.descricao,
    }, {
      returning: true,
      where: {
        id: req.body.salaId
      },
    }).then(async () => res.render('salas', {
      layout: 'default',
      mensagem: 'Sala atualizado com sucesso',
      listaSalas: await Salas.findAll({
        raw: true,
      }),
      listaCampus: await Campus.findAll({
        raw: true,
      }),
    })).catch(async (error) => res.render('salasEditar', {
      layout: 'default',
      erros: error.errors,
      listaCampus: listaCampus
    }));
  },
};