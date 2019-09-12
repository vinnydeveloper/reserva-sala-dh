
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('salas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    lotacao: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    descricao: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    campus_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'campus',
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

  down: (queryInterface) => queryInterface.dropTable('salas'),
};
