module.exports = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dialect: process.env.DATABASE_DIALECT,
    operatorsAliases: false,
    logging: false,
    define: {
      timestamps: true,
    }
  }