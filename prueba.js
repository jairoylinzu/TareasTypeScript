/*Realiza un programa que me muestre por pantalla la tabla de verdad de los 3 operadores lógicos.
( Utiliza variables, no coloques el valor directamente en el Print )
Debería quedar así:
AND
False and False = False
False and True = False
True and False = False
True and True = True
OR
False or False = False
False or True = True
True or False = True
True or True = True
NOT
not False = True
not True = False

*/
//OPERADOR AND &&
console.log("AND &&");
var a = false, let, b = false;
var c = false, let, d = true;
var e = true, let, f = false;
var g = true, let, h = true;
console.log("false && false = ".concat(a && b));
console.log("false && true = ".concat(c && d));
console.log("true && false = ".concat(e && f));
console.log("true && true = ".concat(g && h));
//OPERADOR OR ||
console.log("OR ||");
var i = false, let, j = false;
var k = false, let, l = true;
var m = true, let, n = false;
var o = true, let, p = true;
console.log("false || false = ".concat(i || j));
console.log("false || true = ".concat(k || l));
console.log("true || false = ".concat(m || n));
console.log("true || true = ".concat(o || p));
console.log("NOT !");
var q = false, let, r = true;
console.log("not false = ".concat(!q));
console.log("not true = ".concat(!r));
