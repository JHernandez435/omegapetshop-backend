const PedidoOperaciones = require("../Controllers/PedidoController");
const router = require('express').Router();

router.get("/", PedidoOperaciones.consultarPedidos);
router.get("/:id", PedidoOperaciones.consultarPedido);
router.post("/", PedidoOperaciones.crearPedido);
router.put("/:id", PedidoOperaciones.modificarPedido);
router.delete("/:id", PedidoOperaciones.borrarPedido);

module.exports = router;