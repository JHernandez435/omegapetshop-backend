const mongoose = require("mongoose");
const CategoriaSchema = mongoose.Schema({
    nombre: {type: String, maxlength: 40, required: true,unique: true},
    tipoProducto: {type: String, maxlength: 40, required: true,unique: true},
    categoria: {type: String, maxlength: 40, required: true,unique: true},
    tipo: {type: String, maxlength: 100, required: true},
    edad: {type: String, maxlength: 100, required: true},
    marca: {type: String, maxlength: 100, required: true},
    cantKilos: {type: String, maxlength: 100, required: true},
    precio: {type: Number, maxlength: 100, required: true},
});

module.exports = mongoose.model("categorias", CategoriaSchema);