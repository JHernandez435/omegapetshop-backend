const UsuarioModel = require("../Model/UsuarioModel");
const bcrypt = require("bcrypt");
const LoginController = {};

const compararPassw = async (recibido, guardado) => 
{
    return await bcrypt.compare(recibido, guardado);
}
LoginController.login = async(req, res) => {
    try {
        const email = req.body.email;
        let passw = req.body.passw;
        const usuario = await UsuarioModel.findOne({email: email});
        if (usuario != null) {
            const result = await compararPassw(passw, usuario.passw);
            if (result) {
                const acceso = {
                    nombres: usuario.nombres+" "+usuario.apellidos,
                    admin: usuario.admin,
                    //token: generarToken(usuario.id, usuario.nombres+" "+usuario.apellidos, usuario.es_admin)
                }
                res.status(200).json(acceso);
            }
            else {
                res.status(401).send("Error en Login");    
            }
        }
        else {
            res.status(401).send("Email o contraseña incorrectos");
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

module.exports = LoginController;
 