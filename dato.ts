import * as readline from 'readline';

const saludo = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

saludo.question('Por favor, ingrese su nombre: ', (nombre) => {
  console.log(`Hola ${nombre}! Bienvenido a mi aplicación.`);
  saludo.close();
});






