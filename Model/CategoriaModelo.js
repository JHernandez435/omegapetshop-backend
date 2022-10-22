const mongoose = require("mongoose");
const CategoriaSchema = mongoose.Schema({
    nombre: {type: String, maxlength: 40, required: true,unique: true},
    descripcion: {type: String, maxlength: 100, required: true},
    atiende_animales: {type: Boolean, required: true}
});

module.exports = mongoose.model("categorias", CategoriaSchema);