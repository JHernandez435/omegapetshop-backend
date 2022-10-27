const CategoriaController = require("../Controllers/CategoriaController");
const router = require("express").Router();

router.get("/",CategoriaController.consultarCategorias);
router.get("/:id",CategoriaController.consultarCategoria);
router.post("/",CategoriaController.crearCategoria);
router.put("/:id",CategoriaController.actualizarCategoria);
router.delete("/:id",CategoriaController.borrarCategoria);

module.exports = router;