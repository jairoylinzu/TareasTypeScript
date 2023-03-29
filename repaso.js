"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var saludo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
saludo.question('Por favor, ingrese su nombre: ', function (nombre) {
    saludo.question('Por favor, ingresa su edad: ', function (edad) {
        saludo.question('Por favor ingresa la ciudad don vives: ', function (ciudad) {
            console.log("Hola mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os y vivo en ").concat(ciudad));
            saludo.close();
        });
    });
});
