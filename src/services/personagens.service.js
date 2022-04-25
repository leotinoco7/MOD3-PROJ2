const Personagem = require("../models/Personagem");

const findPersonagensService = async () => {
  const personagens = await Personagem.find();
  return personagens;
};

const findPersonagemByIdService = async (id) => {
  const personagem = await Personagem.findById(id);
  return personagem;
};

const addPersonagemService = async (newPersonagem) => {
  const PersonagemCriado = await Personagem.create(newPersonagem);
  return PersonagemCriado;
};

const updatePersonagemService = async (id, personagemEdited) => {
  const personagemAtualizado = await Personagem.findByIdAndUpdate(
    id,
    personagemEdited
  );
  return [personagemAtualizado, personagemEdited];
};

const deletePersonagemService = async (id) => {
  return await Personagem.findByIdAndDelete(id);
};

module.exports = {
  findPersonagensService,
  findPersonagemByIdService,
  addPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
