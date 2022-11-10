const PedidoModelo = require("../Model/PedidoModelo");
const PedidoOperaciones = {};

PedidoOperaciones.crearPedido = async(req, res) => {
    try {
        const objeto = req.body;
        const pedido = new PedidoModelo(objeto);
        const pedidoGuardado = await pedido.save();
        if (pedidoGuardado != null) {
            res.status(201).send(pedidoGuardado);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

PedidoOperaciones.consultarPedidos = async(req, res) => {
    try {
        const filtro = req.query;
        let listaPedidos;
        if (filtro.q != null) {
            listaPedidos = await PedidoModelo.find({
                "$or" : [ 
                    {"no_Pedido": { $regex:filtro.q, $options:"i" }},
                    {"Fecha_Pedido": {  $regex:filtro.q, $options:"i" }},
                    {"Estado_Pedido": {  $regex:filtro.q, $options:"i" }},
                    {"Cliente": {  $regex:filtro.q, $options:"i" } },
                ]
            });
        }
        else {
            listaPedidos = await PedidoModelo.find(filtro);
        }
        if (listaPedidos.length > 0) {
            res.status(200).send(listaPedidos);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

PedidoOperaciones.consultarPedido = async(req, res) => {
    try {
        const id = req.params.id;
        const pedido = await PedidoModelo.findById(id);
        if (pedido != null) {
            res.status(200).send(pedido);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

PedidoOperaciones.modificarPedido = async(req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const pedido = {
            no_Pedido: body.nombre,
            Fecha_Pedido: body.marca,
            Estado_Pedido: body.precio,
            Cliente: body.categorias
        }
        console.log(pedido);
        const pedidoActualizado = await PedidoModelo.findByIdAndUpdate(id, pedido, { new: true });
        if (pedidoActualizado != null) {
            res.status(200).send(pedidoActualizado);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

PedidoOperaciones.borrarPedido = async(req, res) => {
    try {
        const id = req.params.id;
        const pedidoBorrado = await PedidoModelo.findByIdAndDelete(id);
        if (pedidoBorrado != null) {
            res.status(200).send(pedidoBorrado);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = PedidoOperaciones;