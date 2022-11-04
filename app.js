const { crearArchivoTabla } = require("./helpers/multiplicar.js");

const base = 4;
console.clear();
crearArchivoTabla(base)
  .then((resp) => {
    console.log(resp, "creado");
  })
  .catch((error) => console.log("Ocurrió un error", error));
