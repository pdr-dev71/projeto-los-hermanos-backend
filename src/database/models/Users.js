const Users = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
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
    });
}

module.exports = Users;
