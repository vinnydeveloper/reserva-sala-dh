'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      codigoTurma: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      curso: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      periodo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dataInicio: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      dataFim: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      observacao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('turmas');
  }
};