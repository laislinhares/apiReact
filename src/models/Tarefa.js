const Sequelize = require("sequelize");
const database = require("../db/db");

const Tarefa = database.define("tarefa", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

const init = async () => {
  await Tarefa.sync();
};

init();

module.exports = Tarefa;
