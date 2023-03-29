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
let a: boolean = false, let b: boolean = false;
let c: boolean = false, let d: boolean = true;
let e: boolean = true, let f: boolean = false;
let g: boolean = true, let h: boolean = true;
console.log(`false && false = ${a && b}`);
console.log(`false && true = ${c && d}`);
console.log(`true && false = ${e && f}`);
console.log(`true && true = ${g && h}`);

//OPERADOR OR ||
console.log("OR ||")
let i: boolean = false, let j: boolean = false;
let k: boolean = false, let l: boolean = true;
let m: boolean = true, let n: boolean = false;
let o: boolean = true, let p: boolean = true;

console.log(`false || false = ${i||j}`);
console.log(`false || true = ${k||l}`);
console.log(`true || false = ${m||n}`);
console.log(`true || true = ${o||p}`);

console.log("NOT !")
let q: boolean = false, let r: number = true;
console.log(`not false = ${!q}`);
console.log(`not true = ${!r}`);









