const { crearArchivoTabla } = require("./helpers/multiplicar.js");

// const base = 4;
console.clear();
console.log(process.argv);

const [ , ,base = 5] = process.argv;
const [, nuevaBase = 5] = base.split('=')
console.log('valor de la base', nuevaBase);
crearArchivoTabla(nuevaBase)
  .then((resp) => {
    console.log(resp, "creado");
  })
  .catch((error) => console.log("Ocurrió un error", error));

