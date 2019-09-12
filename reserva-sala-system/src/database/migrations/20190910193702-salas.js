
module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('salas', {
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
    lotacao: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    descricao: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    campus_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'campus',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('salas'),
};
