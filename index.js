// Importaciones
// const { app, response } = require('express');
const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("./connection");

// Configuraciones
const env = process.env;
const port = env.PORT || 8000;
// const port = 3000;
const app = express();
app.use(express.json())
app.use(morgan("dev"));
app.use(cors());

// Arranque
app.listen(port, () => { console.log("Api iniciando en el puerto " +  port) })

// Rutas
// app.get("/", (request, response) => { response.send('Hola mundo'); })
app.use("/api/categorias", require("./Routes/CategoriaRoutes"));