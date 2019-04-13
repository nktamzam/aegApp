const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");

//Routes
router.post("/nuevo/:nombre/:descripcion/:estado", tareaController.postTarea);
router.get("/", tareaController.getAllTareas);
router.get("/:id", tareaController.getTareaById);
router.delete("/:id", tareaController.delTareaById);
router.get("/nombre/:nombre", tareaController.getTareaByNombre);
router.put(
  "/:id/:nombre/:descripcion/:estado",
  tareaController.updateTareaById
);

module.exports = router;
