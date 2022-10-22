const CategoriaModelo = require("../Model/CategoriaModelo")
const CategoriaController = {};

CategoriaController.crearCategoria = async(req, res) => {

    try {
        const objeto = req.body;
        console.log(objeto);
        const categoria = new CategoriaModelo(objeto);
        const categoriaSave = await categoria.save();
        res.status(201).send(categoriaSave);
    } catch (error) {
        res.status(400).send("Mala Peticion");
    }

}
CategoriaController.consultarCategorias = async(req, res) => {
    try {
        const listaCategorias = await CategoriaModelo.find();
        if (listaCategorias.length > 0) {
            res.status(200).send(listaCategorias)
        } else {
            res.status(404).send("No hay datos")            
        }
    } catch (error) {
        res.status8(400).send("Mala peticion")
    }
}

CategoriaController.consultarCategoria = async(req, res) => {
    try {
        const id = req.params.id;
        const categoria = await CategoriaModelo.findById(id);
        if (categoria != null) {
            res.status(200).send(categoria)
        } else {
            res.status(404).send("No hay datos")            
        }
    } catch (error) {
        res.status(400).send("Mala peticion. "+ error)
    }
}

CategoriaController.actualizarCategoria = async(req, res) => {}
CategoriaController.borrarCategoria = async(req, res) => {}

module.exports = CategoriaController;