/*Las estructuras de control nos ayudan a definir 
un camino en nuestro programa y poder responder a las preguntas necesarias 
¿Qué pasa si el usuario hace esto? esto nos permitirá tener un control y hacer que
 nuestro programa responda de una u otra manera dependiendo de acciones previas.*/

 //El contenido se mostrará siempre y cuando la condición sea verdadera.

 if (true){
    console.log("La condicion es verdadera");
 }

 if (false){
    console.log("No se mostrara porque la condicion es falsa");

 }

 // Para referirnos a que sucede si la condición no se cumple utilizamos la sentencia else
 if (true){
    console.log("La condicion es verdadera");
 }else{
    console.log("La condicion es falsa");

 }

if (false){
    console.log("La condicion es falsa");

}else{
    console.log("La condicion es verdadera");
}

//Utilzando operadores condicionales en la condición

if (5>3){
    console.log("La condicion es verdadera");
}else{
    console.log("La condicion es falsa");
}

// ##Utilizando operadores lógicos en la condición

if (5>3 && 2<10){
    console.log("La operacion es verdadera");

}else{
    console.log("La condicion es falsa");
}

if (5>3 || 2>10){
    console.log("La condicion es verdadera");

}else{
    console.log("La condicion es falsa");

}

//Utilizando variables dentro de la condición

let a = 5;
let b =10;
let x =a <=b;
let y =a ==b;

if (x && y ){
    console.log("La condicion es verdadera");

}else{
    console.log("La condicion es falsa")

}

/*elif  La sentencia elif, nos permite realizar varias condiciones y la primera condición que se cumpla muestra el contenido del mismo  */


import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un número: ", function(num) {
  if (isNaN(Number(num))) {
    console.log("El valor ingresado no es un número válido.");
  } else if (num ==1) {
    console.log("Ingresaste el numero 1");
  }else if(num==2){
    console.log("Ingresaste el numero 2");

  }else if (num==3){
    console.log("Ingresaste el numero 3");

  }else if (num==4){
    console.log("Ingresaste el numero 4");

  }else if (num==5){
    console.log("Ingresaste el numero 5");
  }else{
    console.log("No ingresaste un numero entre 1 - 5");
  }
  rl.close();
});








