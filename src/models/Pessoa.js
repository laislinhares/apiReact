const Sequelize = require("sequelize");
const database = require("../db/db");

const Pessoa = database.define("pessoa", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const init = async () => {
  await Pessoa.sync();
};

init();

module.exports = Pessoa;
