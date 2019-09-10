'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      motivo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      data_inicio: {
        allowNull: false,
        type: DataTypes.DATE
      },
      data_fim: {
        allowNull: false,
        type: DataTypes.DATE
      },
      observacoes: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      usuario_id:{
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'usuarios', // name of Source model
          key: 'id',
        }
      },
      turma_id:{
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'turmas', // name of Source model
          key: 'id',
        }
      },
      sala_id:{
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'sala', // name of Source model
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
