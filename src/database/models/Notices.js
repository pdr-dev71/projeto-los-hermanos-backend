const Notices = (sequelize, DataTypes) => {
  const notice = sequelize.define('Notices', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull:  false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  notice.associate = models => {
      notice.belongsTo(models.Notices, { foreignKey: 'userId', as: 'user' })
  }
  return notice;
}

module.exports = Notices;
