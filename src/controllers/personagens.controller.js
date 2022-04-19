const personagensService = require('../services/personagens.service');

const homePersonagemController = (req, res) => {
    res.send('index');
};

const findPersonagensController = (req, res) => {
    const allPersonagens = personagensService.findPersonagensService();
    res.send(allPersonagens);
}

const findPersonagemByIdController = (req, res) => {
    const idParam = req.params.id;
    const chosenPersonagem = personagensService.findPersonagemByIdService(idParam);
    res.send(chosenPersonagem);
}


const addPersonagemController = (req, res) => {
    const personagem = req.body;

    if (
        !personagem ||
        !personagem.nome ||
        !personagem.descricao ||
        !personagem.habilidade ||
        !personagem.foto
      ) {
        return res.status(400).send(
          { message: "faltam dados"}
        );
      }
      const newPersonagem = personagensService.addPersonagemService(personagem);
      res.send(newPersonagem);
}

const updatePersonagemController = (req, res) => {
    const idParam = +req.params.id;
    const personagemEdit = req.body;

    if (!personagemEdit || !personagemEdit.sabor || !personagemEdit.descricao || !personagemEdit.foto || !personagemEdit.preco) {
        return res.status(400).send({ message: "faltam dados" });
      }
    
      const chosenPersonagem = personagensService.findPersonagemByIdService(idParam);
    
      if (!chosenPersonagem) {
        return res.status(404).send({ message: "not found" })
      }
      
    res.send(updatedPersonagem);
};

const deletePersonagemController = (req, res) => {
    const idParam = req.params.id;

    const chosenPersonagem = personagensService.findPersonagensByIdService(idParam);

    if (!chosenPersonagens) {
    return res.status(404).send({ message: "not found" })
  }

    personagensService.deletePersonagemService(idParam);
    res.send({ message: 'deletado com sucesso!' });
};


module.exports = {
    homePersonagemController,
    findPersonagensController,
    findPersonagemByIdController,
    addPersonagemController,
    updatePersonagemController,
    deletePersonagemController,
};
