"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var saludo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
saludo.question('Por favor, ingrese su nombre: ', function (nombre) {
    console.log("Hola ".concat(nombre, "! Bienvenido a mi aplicaci\u00F3n."));
    saludo.close();
});
var saludo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
saludo.question('Por favor, ingrese su nombre: ', function (nombre) {
    console.log("Hola ".concat(nombre, "! Bienvenido a mi aplicacion."));
    saludo.close();
});


