module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
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
    diasCurso: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    observacao: {
      allowNull: false,
      type: DataTypes.STRING,
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

  return Turmas;
};
