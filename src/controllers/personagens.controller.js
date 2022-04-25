const mongoose = require("mongoose");
const personagensService = require("../services/personagens.service");

const homePersonagemController = (req, res) => {
  res.send("index");
};

const findPersonagensController = async (req, res) => {
  const allPersonagens = await personagensService.findPersonagensService();
  res.send(allPersonagens);
};

const findPersonagemByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenPersonagem = await personagensService.findPersonagemByIdService(
    idParam
  );
  if (!chosenPersonagem) {
    return res.status(404).send({ message: "personagem não encontrado" });
  }
  res.send(chosenPersonagem);
};

const addPersonagemController = async (req, res) => {
  const personagem = req.body;

  const newPersonagem = await personagensService.addPersonagemService(
    personagem
  );
  res.send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const personagemEdit = req.body;

  const chosenPersonagem = await personagensService.findPersonagemByIdService(
    idParam
  );

  if (!chosenPersonagem) {
    return res.status(400).send({ message: "faltam dados" });
  }

  const updatedPersonagem = await personagensService.updatePersonagemService(
    idParam,
    personagemEdit
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = async (req, res) => {
  const idParam = req.params.id;

  const chosenPersonagem =
    personagensService.findPersonagemByIdService(idParam);

  if (!chosenPersonagem) {
    return res.status(404).send({ message: "personagem não encontrado!" });
  }

  await personagensService.deletePersonagemService(idParam);
  res.send({ message: "personagem deletado com sucesso!" });
};

module.exports = {
  homePersonagemController,
  findPersonagensController,
  findPersonagemByIdController,
  addPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
