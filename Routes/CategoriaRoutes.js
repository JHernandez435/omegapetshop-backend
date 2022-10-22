const CategoriaController = require("../Controllers/CategoriaController");
const router = require("express").Router();

router.get("/", CategoriaController.consultarCategorias);
router.get("/:id", CategoriaController.consultarCategoria);
router.post("/", CategoriaController.crearCategoria);

module.exports = router;