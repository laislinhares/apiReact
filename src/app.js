const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config();
const PORT = 5000;

const Tarefa = require("./models/Tarefa");
const Pessoa = require("./models/Pessoa");

app.post("/create_tarefa", async (req, res) => {
  try {
    const { title, content, completed } = req.body;

    const tarefa = await Tarefa.create({
      title: title,
      content: content,
      completed: completed,
    });

    res.send(tarefa);
  } catch (err) {
    res.send(err);
  }
});

app.get("/list_tarefas", async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.send(tarefas);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/show_tarefa/:tarefa_id", async (req, res) => {
  try {
    const tarefaId = req.params.tarefa_id;

    const tarefa = await Tarefa.findByPk(tarefaId);

    res.send(tarefa);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.patch("/update_tarefa/:tarefa_id", async (req, res) => {
  try {
    const tarefaId = req.params.tarefa_id;

    const { title, content, completed } = req.body;

    const tarefa = await Tarefa.update(
      {
        title: title,
        content: content,
        completed: completed,
      },
      { where: { id: tarefaId } }
    );

    res.send({ tarefa });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/delete_tarefa/:tarefa_id", async (req, res) => {
  try {
    const tarefaId = req.params.tarefa_id;

    await Tarefa.destroy({
      where: {
        id: tarefaId,
      },
    });

    res.send({ msg: "Deletado com sucesso!" });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/create_pessoa", async (req, res) => {
  try {
    const { nome } = req.body;

    const pessoa = await Pessoa.create({
      nome: nome,
    });

    res.send(pessoa);
  } catch (err) {
    res.send(err);
  }
});

app.get("/show_pessoa/:pessoa_id", async (req, res) => {
  try {
    const pessoaId = req.params.pessoa_id;

    const pessoa = await Pessoa.findByPk(pessoaId);

    res.send(pessoa);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.patch("/update_pessoa/:pessoa_id", async (req, res) => {
  try {
    const pessoaId = req.params.pessoa_id;

    const { nome } = req.body;

    const pessoa = await Pessoa.update(
      {
        nome: nome,
      },
      { where: { id: pessoaId } }
    );

    res.send({ pessoa });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/delete_pessoa/:pessoa_id", async (req, res) => {
  try {
    const pessoaId = req.params.pessoa_id;

    await Pessoa.destroy({
      where: {
        id: pessoaId,
      },
    });

    res.send({ msg: "Deletado com sucesso!" });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
});
