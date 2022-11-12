const UsuarioOperaciones = require("../Controllers/UsuarioController");
const router = require('express').Router();

router.get("/", UsuarioOperaciones.getUsuario);
router.get("/:id", UsuarioOperaciones.getUsuario);
router.post("/", UsuarioOperaciones.guardarUsuario);
router.put("/:id", UsuarioOperaciones.modificarUsuario);
router.delete("/:id", UsuarioOperaciones.borrarUsuario);

module.exports = router