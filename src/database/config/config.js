require('dotenv').config()
const { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } = process.env

module.exports = {
  "development": {
    "username": DATABASE_USERNAME,
    "password": DATABASE_PASSWORD,
    "database": "database_development",
    "host": DATABASE_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DATABASE_USERNAME,
    "password": DATABASE_PASSWORD,
    "database": "database_test",
    "host": DATABASE_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DATABASE_USERNAME,
    "password": DATABASE_PASSWORD,
    "database": "database_production",
    "host": DATABASE_HOST,
    "dialect": "postgres"
  }
}
