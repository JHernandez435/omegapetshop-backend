const mongoose = require("mongoose");

const pedidosSchema = new mongoose.Schema({
    no_Pedido: { type:String, maxLength:40, required:false },
    Fecha_Pedido: { type:String, maxLength:40, required:true },
    Direccion_Pedido: {type:String, maxLength:60, required:true},
    Estado_Pedido: { type:String, required:true },
    Cliente:{ type:String, maxLength:40, required:true },
    disp : { type:Boolean, required:true }
});

module.exports = mongoose.model("Pedidos", pedidosSchema);