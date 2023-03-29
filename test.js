"use strict";
/*Realiza un programa que pida al usuario dos números enteros y realice las operaciones aritméticas básicas,
suma, resta, multiplicación
 y división luego muestra por pantalla de forma ordenada.*/
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var numero = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
numero.question('Por favor, ingrese el primer numero :', function (num1) {
    numero.question('Por favor ingrese el segundo numero: ', function (num2) {
        var suma = num1 + num2;
        var resta = num1 - num2;
        var multiplicacion = num1 * num2;
        var division = num1 / num2;
        console.log("La suma de  ".concat(num1, " + ").concat(num2, " = ").concat(suma, " "));
        console.log("La resta de ".concat(num1, " - ").concat(num2, " = ").concat(resta));
        console.log("La multiplicacion de ".concat(num1, " * ").concat(num2, " = ").concat(multiplicacion));
        console.log("La division de ".concat(num1, " / ").concat(num2, " = ").concat(division, " "));
        numero.close();
    });
});
