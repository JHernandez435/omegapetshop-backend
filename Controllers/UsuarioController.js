const UsuarioModelo = require("../Model/UsuarioModel");
const bcrypt = require("bcrypt");
const UsuarioOperations = {};

const cifrarPassword = async (passw) => {
    const SALT_TIMES = 10;
    const salt = await bcrypt.genSalt(SALT_TIMES);
    return await bcrypt.hash(passw, salt);
}
 UsuarioOperations.getUsuario = async(req, res) => {
    try {
        const query = req.query;
        let clientes;
        if (query.q == null) {
            clientes = await UsuarioModelo.find(query);
        } 
        else {
            clientes = await UsuarioModelo.find({
                "$or" : [ 
                    {"nombres": {$regex:query.q, $options:"i"}},
                    {"apellidos": {$regex:query.q, $options:"i"}},
                    {"documento": {$regex:query.q, $options:"i"}},
                    {"direccion": {$regex:query.q, $options:"i"}},
                    {"email": {$regex:query.q, $options:"i"}}
                ]
            });
        }
        res.status(200).send(clientes);
    } catch (error) {
        res.status(400).json(error);
    }
}
 UsuarioOperations.getUsuario = async(req, res) => {
    try {
        const id = req.params.id;
        const cliente = await UsuarioModelo.findById(id);
        if (cliente == null) {
            res.status(404).send("No se encontraron datos")    
        }
        else {
            res.status(200).send(cliente);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}
 UsuarioOperations.guardarUsuario = async(req, res) => {
    try {
        const body = req.body;
        body.passw = await cifrarPassword(body.passw);
        const cliente = new UsuarioModelo(body);
        const clienteGuardado = await cliente.save();
        res.status(201).send(clienteGuardado);
    } catch (error) {
        res.status(400).json(error);
    }
}
 UsuarioOperations.modificarUsuario = async(req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        if (body.passw != null) {
            body.passw = await cifrarPassword(body.passw);
        }
        const datosModificar = {
            nombres: body.nombres,
            apellidos: body.apellidos,
            documento: body.documento,
            direccion: body.direccion,
            telefono: body.telefono,
            email: body.email,
            passw: body.passw,
            admin: body.admin
        }
        const clienteModificado = await UsuarioModelo.findByIdAndUpdate(id, datosModificar, {new: true} )
        if (clienteModificado!= null) {
            res.status(200).send(clienteModificado);
        }
        else {
            res.status(404).send("No se encontraron datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}
 UsuarioOperations.borrarUsuario = async(req, res) => {
    try {
        const id = req.params.id;
        const clienteBorrado = await UsuarioModelo.findByIdAndDelete(id);
        if (clienteBorrado == null) {
            res.status(404).send("No se encontraron datos"); 
        }
        else {
            res.status(200).send(clienteBorrado);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = UsuarioOperations;
