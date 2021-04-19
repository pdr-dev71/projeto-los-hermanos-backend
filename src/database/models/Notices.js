const Notices = (sequelize, DataTypes) => {
  const notice = sequelize.define('Notices', {
      firstName: {
          type: DataTypes.STRING,
          unique: false,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      lastName: {
          type: DataTypes.STRING,
          unique: false,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      password: {
          type: DataTypes.STRING,
          unique: false,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      birthDate: {
          type: DataTypes.STRING,
          unique: false,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      phone: {
          type: DataTypes.STRING,
          unique: false,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      email: {
          type: DataTypes.STRING,
          unique: false,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      type: {
          type: DataTypes.ENUM,
          values: ['user', 'admin'],
          defaultValue: 'user'
      }
  }, {});
  notice.associate = models => {
      notice.belongsTo(models.Notices, { foreignKey: 'userId', as: 'user' })
  }
  return notice;
}

module.exports = Notices;
