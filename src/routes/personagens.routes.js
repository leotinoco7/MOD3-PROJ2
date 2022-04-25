const express = require("express");
const router = express.Router();

const personagensController = require("../controllers/personagens.controller");
const {
  validId,
  validObjectBody,
} = require("../middlewares/personagem.middleware");

router.get("/", personagensController.homePersonagemController);
router.get(
  "/find-personagens",
  personagensController.findPersonagensController
);
router.get(
  "/find-personagem/:id",
  validId,
  personagensController.findPersonagemByIdController
);

router.post(
  "/add",
  validObjectBody,
  personagensController.addPersonagemController
);

router.put(
  "/update/:id",
  validId,
  validObjectBody,
  personagensController.updatePersonagemController
);

router.delete(
  "/delete/:id",
  validId,
  personagensController.deletePersonagemController
);

module.exports = router;
