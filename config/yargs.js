const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      description: "es el número para multiplicar",
      demandOption: true,
    },
    l: {
      alias: "lista",
      type: "boolean",
      description: "Muestra la tabla en consola",
      demandOption: false,
    },
    h:{
        alias: "hasta",
        type: "number",
        description: "Muestra la cantidad de valores",
        default: 10
      },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser un número");
    }
    console.log("yargs", argv);
    return true;
  }).argv;

module.exports = {
    argv
}