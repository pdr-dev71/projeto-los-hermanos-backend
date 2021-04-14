'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('users', {
        firstName: {
            type: Sequelize.DataTypes.STRING,
            unique: false,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastName: {
            type: Sequelize.DataTypes.STRING,
            unique: false,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            unique: false,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        birthDate: {
            type: Sequelize.DataTypes.STRING,
            unique: false,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        phone: {
            type: Sequelize.DataTypes.STRING,
            unique: false,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            unique: false,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        type: {
            type: Sequelize.DataTypes.ENUM,
            values: ['user', 'admin'],
            defaultValue: 'user'
        }
        })
    },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('users')
  }
};
