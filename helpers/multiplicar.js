const fs = require("fs");
const colors = require("colors");

// const crearArchivoTabla = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     console.log("==============================================");
//     console.log("Tabla del ", base);
//     console.log("==============================================");
//     try {
//       let salida = "";
//       for (var i = 1; i < 11; i++) {
//         salida += ` ${base} x ${i} = ${base * i} \n`;
//       }
//     //   throw new Error('paso algo')
//       fs.writeFileSync(`Tabla del ${base}.txt`, salida);
//       resolve(`Tabla del ${base}.tfdadfsafsafxt`);
//     } catch (error) {
//         reject(error);
//         // throw error;
//     }
//   });
// };
const crearArchivoTabla = async (base = 5, listar = false) => {
  try {
    let salida = "";
    for (var i = 1; i < 11; i++) {
      salida += ` ${base} x ${i} = ${base * i} \n`;
    }
    //   throw new Error('paso algo')
    await fs.writeFileSync(`Tabla del ${base}.txt`, salida);
    if (!!listar) {
      console.log("==============================================".green);
      console.log("Tabla del ".bgYellow, base);
      console.log("==============================================".blue);
      console.log(salida);
    }
    return `Tabla del ${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivoTabla };
