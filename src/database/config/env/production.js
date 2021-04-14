module.exports = {
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
    operatorsAliases: false,
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }