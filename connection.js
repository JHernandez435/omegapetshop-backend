const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "Omegapetshop";
const uri = "mongodb+srv://"+username+":"+password+"@cluster0.2ima9ur.mongodb.net/"+database+"?retryWrites=true&w=majority";

const conectar = () => {
    // try {
    //     await mongoose.connect(uri);
    //     console.log("Atlas esta en linea")
    // } catch (error) {
    //     console.log("Error en la conexion. "+error)
    // }

    mongoose.connect(uri)
        .then(()=>{console.log("Atlas esta en linea"); })
        .catch(()=>{console.log("Error en la conexion" + error); })
}
conectar();

module.exports = mongoose