
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('reservas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    motivo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    data_inicio: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    data_fim: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    observacoes: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    usuario_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'usuarios', // name of Source model
        key: 'id',
      },
    },
    turma_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'turmas', // name of Source model
        key: 'id',
      },
    },
    sala_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'salas', // name of Source model
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),


  down: (queryInterface) => {
    queryInterface.dropTable('users');
  },
};
