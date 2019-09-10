'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('reservas', {
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
      usuario_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'usuarios', // name of Source model
          key: 'id',
        }
      },
      turma_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'turmas', // name of Source model
          key: 'id',
        }
      },
      sala_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'salas', // name of Source model
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


  down: (queryInterface) => {
    return queryInterface.dropTable('reservas');
  }
};