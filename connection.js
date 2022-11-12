const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "Omegapetshop";
const uri = "mongodb+srv://"+username+":"+password+"@cluster0.2ima9ur.mongodb.net/"+database+"?retryWrites=true&w=majority";

const conectar = async () => {
	try {
		await mongoose.connect(URI);
		console.log("Atlas en linea");
	} catch (error) {
		console.log("Error en la conexión a Atlas. "+error);
	}
}
conectar();

module.exports = mongoose;