module.exports = {
  host: "pgsql",
  username: "pguser",
  password: "pgpassword",
  database: "mural_online_dev",
  dialect: "postgres",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}