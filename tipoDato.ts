//Tipos de datos numericos

//Entero (int)

// 1 forma de declarar variables en ts
let numero = 15;

console.log(typeof numero);

// 2 forma de declarar variables en ts

let numero1: number = 15;
console.log(typeof numero1);



// En ts los datos que son decimales o enteros o esponenciales lo toma con el tipo de datos numberDecimal (float)

//1 forma de declarar variables y asignar valores
let numero2  = 45.65;

console.log(typeof numero2);

//2 forma de declarar variables y asignar valores

let numero3: number = 45.65;
console.log(typeof numero3);

// 1 forma de declar variables y asignar valores de tipo exponencial igualmente sera de tipo number
let numeroGrande = 1.23e+6;
console.log(typeof numeroGrande);[]

// 2 forma de declarar variables y asignar valores de tipo exponencial igualmente sera de tipo number

let numeroPeque: number = 1.23e+6;
console.log(typeof numeroPeque);

// 1 forma de declarar variables de tipo complex o complejo


let numeroComplejo = 34.-8;
console.log(typeof numeroComplejo)

// declarando una variable como tupla con dos elementos uno de tipo 'number' representa para la parte real y otro de tipo
//'imaginary' para la parte imaginaria .

/*let miVariableCompleja: [number, imaginary] = [2, 3];
console.log(typeof miVariableCompleja);*/

//definir valores complejos utilizando objetos complejos . A CONTINUACION UN EJEMPLO

/*let miVariableCompleja2:{real: number, imag:number}={real:2, imag:3};

console.log(typeof miVariableCompleja2);*/

//Tipo de dato Boolean
//1 forma de declarar y asignar una variable de tipo boolean

let miVariableVerdadero = true;
console.log(typeof miVariableVerdadero);

// 2 forma de declarar y asignar un valor de tipo boolean a una variable
let miVariableNegativa: boolean = false;
console.log(typeof miVariableNegativa);


//Tipo de dato de tipo texto

let texto = "Hola amigos";
console.log(typeof texto);

let saludo: string = "Hello friends";
console.log(typeof saludo);










