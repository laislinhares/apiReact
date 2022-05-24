const Sequelize = require("sequelize");
const sequelize = new Sequelize("tarefas", "postgres", "postgres", {
  dialect: "postgres",
  host: "localhost",
});

console.log("DB CONECTADO!");

module.exports = sequelize;
