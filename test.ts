/*Realiza un programa que pida al usuario dos números enteros y realice las operaciones aritméticas básicas, 
suma, resta, multiplicación
 y división luego muestra por pantalla de forma ordenada.*/

import * as readline from 'readline';

const numero = readline.createInterface({
    input : process.stdin,
    output : process.stdout


});

numero.question('Por favor, ingrese el primer numero :', (num1 : number ) =>{
    numero.question('Por favor ingrese el segundo numero: ',(num2: number) =>{
        let suma: number = num1 + num2;
        let resta:number = num1 - num2;
        let multiplicacion:number  = num1 * num2;
        let division: number = num1 / num2;
        console.log(`La suma de  ${num1} + ${num2} = ${suma} `);
        console.log(`La resta de ${num1} - ${num2} = ${resta}`);
        console.log(`La multiplicacion de ${num1} * ${num2} = ${multiplicacion}`);
        console.log(`La division de ${num1} / ${num2} = ${division} `);
        numero.close();
    });
});














