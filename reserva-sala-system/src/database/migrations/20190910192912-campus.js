'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('campus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      endereco: {
        allowNull: true,
        type: DataTypes.STRING,
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('campus');
  }
};