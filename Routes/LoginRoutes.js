const LoginOperaciones = require("../Controllers/LoginController");
const router = require('express').Router();

router.post("/", LoginOperaciones.login);

module.exports = router