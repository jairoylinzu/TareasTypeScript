import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function leerNumero(mensaje: string): Promise<number> {
  return new Promise((resolve, reject) => {
    rl.question(mensaje, (numero) => {
      try {
        const parsed = parseFloat(numero);
        if (isNaN(parsed)) {
          throw new Error('Debe ingresar un número válido');
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
    const dividendo = await leerNumero('Ingrese el dividendo: ');
    const divisor = await leerNumero('Ingrese el divisor: ');
    if (divisor === 0) {
      throw new Error('No se puede dividir por cero');
    }
    const resultado = dividendo / divisor;
    console.log(`El resultado de la división es: ${resultado}`);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
}

main();

