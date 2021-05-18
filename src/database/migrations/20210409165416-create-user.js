'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            firstName: {
                type: Sequelize.STRING,
                unique: false,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            lastName: {
                type: Sequelize.STRING,
                unique: false,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            password: {
                type: Sequelize.STRING,
                unique: false,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            birthDate: {
                type: Sequelize.STRING,
                unique: false,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            phone: {
                type: Sequelize.STRING,
                unique: false,
                allowNull: true
            },
            email: {
                type: Sequelize.STRING,
                unique: false,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            type: {
                allowNull: false,
                type: Sequelize.ENUM,
                values: ['user', 'admin'],
                defaultValue: 'user'
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        })
    },
    down: async (queryInterface, Sequelize) => {
        return await queryInterface.dropTable('Users')
    }
};
