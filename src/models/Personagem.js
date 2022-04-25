const mongoose = require("mongoose");

const PersonagemSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  desc: { type: String, required: true },
  habilidade: { type: String, required: true },
  foto: { type: String, required: true },
});

const Personagem = mongoose.model("personagens", PersonagemSchema);

module.exports = Personagem;
