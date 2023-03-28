//Realiza un programa que pida por consola nombre, edad, ciudad y luego muestra esa información separado por comas




import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('¿Cuál es tu nombre? ', (nombre: string) => {
    rl.question('¿Cuál es tu edad? ', (edad: string) => {
      rl.question('¿En qué ciudad vives? ', (ciudad: string) => {
        console.log(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);
        rl.close();
      });
    });

  });
