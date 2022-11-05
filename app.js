// const { argv } = require("process");
const { options } = require("yargs");
const { crearArchivoTabla } = require("./helpers/multiplicar.js");
const {argv} = require('./config/yargs');

// const base = 4;
console.clear();

// const [ , ,base = 5] = process.argv;
// const [, nuevaBase = 5] = base.split('=')
// console.log('valor de la base', nuevaBase);

// console.log(process.argv);
// console.log(argv);

crearArchivoTabla(argv.b, argv.l, argv.h)
  .then((resp) => {
    console.log(resp, "creado");
  })
  .catch((error) => console.log("Ocurrió un error", error));
