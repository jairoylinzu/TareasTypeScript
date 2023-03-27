/*Los Operadores son fundamental en un lenguaje de programación ya que nos 
permiten modificar un dato, o realizar una comparación entre datos, direccionandonos por un camino lógico.*/

//Operadores aritmeticos
//Son operadores que nos permiten realizar operaciones matematicas
// suma
const suma:number = 2 + 2;
console.log("Suma 2 + 2: ",suma);
//Resta
const resta:number = 5-3;
console.log("Resta 5 - 3: ",resta);

//Multiplicacion

const multiplicacion:number = 8 * 4;
console.log("Multiplicacion 8 * 4: ",multiplicacion);

//Division

const division: number = 9/3;
console.log("Division 9/3: ",division);

//Modulo
//Esta operación nos permite obtener el residuo o sobrante de una división.
const modulo: number = 18%4;
console.log("Modulo 18%4: ",modulo);

//Division entera

const divisionEntera: number = 7 // 2;
console.log("Division entera 7//2 : ",divisionEntera);

//Potencia
const potencia:number =8**2;
console.log("Potencia 8**2: ",potencia);

//Operadores de Comparacion
/*Estos operadores como lo dice su nombre, nos permiten comparar 2 o más valores entre si, y 
siempre nos devolverá un booleano es decir True o False.*/
//Igual que
const igualQue:boolean = 7 == 7 ;
console.log("El 7 es igual a 7?: ",igualQue);

const igual_que: boolean = "Hola" == "Hola";
console.log("hola es igual a Hola?: ",igual_que);

const igual_ques = "Chevere" == "Chevere";
console.log("hola es igual a Hola ", igual_ques) ;

//Diferente que 
const DiferenteQue:boolean = 8!=8;
console.log("El 8 es distinto a 8: ",DiferenteQue);

const Diferente: boolean = "Hola"!="Hola";
console.log("Hola es diferente a Hola: ",Diferente);

//MAYOR 
const mayor:boolean = 8 > 5 ;
console.log("El 8 es mayor a 5?: ",mayor);

//MAYOR O IGUAL QUE

const mayorIgualQue:boolean = 8>=5;
console.log("El 8 es mayor o igual a 5?: ",mayorIgualQue);

//MENOR
const menor: boolean = 8 < 5;
console.log("El 8 es menonr a 5?: ",menor);

//MENOR O IGUAL QUE

const menorIgualQue: boolean = 8<=5;
console.log("El 8 es menor o igual que 5",menorIgualQue);

//OPERADORES DE ASIGNACION
//IGUAL
let numero:number = 5;
console.log(numero);
numero+=1;//Incremento en 1
numero = numero + 1 ;
console.log(numero);
//Decremento
numero -=1;
numero = numero - 1;
console.log(numero);
//*=
numero*=2;
numero = numero * 2;
console.log(numero);
// /=
numero/=2;
numero = numero/2;
console.log(numero);
// %=
numero %=2;
numero = numero % 2;
console.log(numero);

// **=
numero**=2;
numero = numero ** 2;
console.log(numero);

// //=
numero //=2;
numero = numero //2 ;
console.log(numero);

//OPERADORES LOGICOS
//Para entender a la perfección este tipo de operadores 
//hay que primero comprender sus condiciones y respectivas tablas de verdad
//AND
let variableAnd: boolean = true && true;
console.log("true y true: ",variableAnd);

let variableOr: boolean = true || false;
console.log("true o false: ",variableOr);

// NOT

const negacion : boolean = !true;
console.log("Negacion de true: ",negacion);


//Operador de Incremento 
let  iterar:number = 7 ;
iterar++;
console.log("El valor de 7 mas el operador de incremento es: ",iterar);

//Operador de Decremento
iterar--;
console.log("El valor de la variable iterar utilizando el operador de decremento  es: ",iterar);












































