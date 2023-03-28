"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('¿Cuál es tu nombre? ', function (nombre) {
    rl.question('¿Cuál es tu edad? ', function (edad) {
        rl.question('¿En qué ciudad vives? ', function (ciudad) {
            console.log("Hola ".concat(nombre, ", tienes ").concat(edad, " a\u00F1os y vives en ").concat(ciudad, "."));
            rl.close();
        });
    });
});
