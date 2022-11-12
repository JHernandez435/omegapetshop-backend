const mongoose = require ("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nombres: { type:String, maxLength:80, required:true },
    documento: { type:String, maxLength:15, required:true, unique: true },
    direccion: { type:String, maxLength:100, required:true },
    telefono: { type:String, maxLength:10, required:true },
    email: { type:String, maxLength:100, required:true, unique: true },
    passw: { type:String, required:true },
    admin: { type:Boolean, required:true }
});

module.exports = mongoose.model("usuarios", UsuarioSchema);