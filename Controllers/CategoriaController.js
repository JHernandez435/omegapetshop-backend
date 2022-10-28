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
        res.status(400).send("Mala Peticion."+error);
    }
}

CategoriaController.consultarCategorias = async(req, res) => {
    try {
        const filtro = req.query;
        let listacategorias;
        if (filtro.nombre != null) {
            listacategorias = await CategoriaModelo.find({
                "$or" : [ 
                    {"nombre": { $regex:filtro.nombre, $options:"i" }}
                ]
            });
        }
        else {
            listacategorias = await CategoriaModelo.find();
        }
        if (listacategorias.length > 0) {
            res.status(200).send(listacategorias);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
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

CategoriaController.actualizarCategoria = async(req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const categoria = {
            nombre: body.nombre,
            tipoProducto: body.tipoProducto,
            categoria: body.categoria,
            enfoque: body.enfoque,
            edad: body.edad,
            marca: body.marca,
            cantKilo: body.cantKilos,
            precio: body.precio
        }
        console.log(categoria);
        const categoriaActualizada = await CategoriaModelo.findByIdAndUpdate(id, categoria, { new: true });
        res.status(200).send(categoriaActualizada);
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

CategoriaController.borrarCategoria = async(req, res) => {
    try {
        const id = req.params.id;
        const categoriaBorrada = await CategoriaModelo.findByIdAndDelete(id);
        res.status(200).send(categoriaBorrada);
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

module.exports = CategoriaController;
