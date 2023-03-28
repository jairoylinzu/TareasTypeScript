function hola() {
    console.log("HOLA MUNDO");
}
hola();
/*A las funciones se les pueden pasar argumentos al momento de utilizar la función e
internamente utilizarlos como parámetros que realizen una operación o funcionaidad deseada*/
function sumar(num1, num2) {
    var suma = num1 + num2;
    console.log("La suma  de ".concat(num1, " + ").concat(num2, " = ").concat(suma));
}
sumar(5, 8);
/*Generalmente las funciones solamente realizan la operación o la función necesario y
devuelven un resultado, para que en otra parte del código podamos utilizar dicho resulto,
para ello utilizamos la palabra reservada return*/
function sum(num3, num4) {
    var suma = num3 + num4;
    return suma;
}
var resultado = sum(5, 9);
console.log(resultado);
/*La palabra reservada args nos permite insertar una cantidad variable de argumentos
en una función, e internamente esos parámetros los toma como una tupla, entonces
hay que tener en cuenta que para acceder a ellos hay que iterarlos o acceder mediante índices*/
function sumarNumeros(a, b) {
    var numeros = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numeros[_i - 2] = arguments[_i];
    }
    var suma = a + b;
    for (var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
var resultados = sumarNumeros(5, 8, 9, 10);
console.log(resultados); //Devuelve 32
/*Record<string, any>. Esto permitirá que la función acepte un objeto con cualquier
cantidad de claves y valores, donde cada clave es una cadena y cada valor es de cualquier tipo.*/
function mostrar(options) {
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            var value = options[key];
            console.log("".concat(key, ": ").concat(value));
        }
    }
}
var opcion = { a: 1, b: 2, c: 3, d: 4 };
//console.log(opcion);
mostrar(opcion);
//Valores por defecto en una función
function suma(num5, num6) {
    if (num5 === void 0) { num5 = 2; }
    if (num6 === void 0) { num6 = 2; }
    var suma = num5 + num6;
    return suma;
}
console.log(suma());
