const fs = require('fs')

console.clear();
console.log('==============================================');
console.log("Tabla del 5");
console.log('==============================================');
const base = 2;
let salida  = '';
for (var i = 1; i < 11; i++) {
    salida += ` ${base} x ${i} = ${base*(i)} \n`;
}

fs.writeFile(`Tabla del ${base}.txt`, salida, (error) =>{
    if (error) throw error;
    console.log('Todo salió correctamente');
});
console.log(salida);