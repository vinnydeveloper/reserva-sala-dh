module.exports = (sequelize, DataTypes) => {
  const Salas = sequelize.define('Salas', {
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
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    freezeTableName: true,
  });

  Salas.associate = models => {
    Salas.belongsTo(models.Campus, {
      foreignKey: 'campus_id',
      as: 'campus'
    })
  }

  return Salas;
};
