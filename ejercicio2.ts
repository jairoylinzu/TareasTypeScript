/*Realiza un programa que pida al usuario dos números enteros y realice las operaciones aritméticas básicas,
 suma, resta, multiplicación y división luego muestra por pantalla de forma ordenada.*/





import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function leerNumero(mensaje: string): Promise<number> {
  return new Promise((resolve, reject) => {
    rl.question(mensaje, (numero) => {
      try {
        const parsed = parseInt(numero, 10);
        if (isNaN(parsed)) {
          throw new Error('Debe ingresar un número entero válido');
        }
        resolve(parsed);
      } catch (error) {
        reject(error);
      }
    });
  });
}

async function main() {
  try {
    const num1 = await leerNumero('Ingrese el primer número entero: ');
    const num2 = await leerNumero('Ingrese el segundo número entero: ');

    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    const division = num1 / num2;

    console.log(`Resultado de las operaciones:
      Suma: ${suma}
      Resta: ${resta}
      Multiplicación: ${multiplicacion}
      División: ${division}
    `);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
}

main();

