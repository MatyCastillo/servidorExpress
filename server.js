const express = require("express");
const Contenedor = require("./contenedor.js");

const app = express();
const PORT = process.env.PORT || 8080;
const contenedor = new Contenedor("productos");

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on("error", (error) => console.log("Error en el servidor: " + error));

app.get("/productos", (request, response) => {
  contenedor.getAll().then((result) => {
    response.send(result.products);
  });
});

app.get("/productoRandom", (request, response) => {
  contenedor.getRandom().then((result) => {
    response.send(result.product);
  });
});
