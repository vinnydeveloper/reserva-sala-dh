
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('turmas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    codigoTurma: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    curso: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    periodo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    dataInicio: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    dataFim: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    observacao: {
      allowNull: false,
      type: Sequelize.STRING,
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

  down: (queryInterface) => queryInterface.dropTable('turmas'),
};
