//Metodo length : Devuelve la longitud de una cadena

let palabra:string ="Hola amigos";
console.log(palabra.length);

//Metodo toUpperCase(): Devuelve una nueva cadena con todas las letras en mayúsculas.

let frase:string ="Hola amigos!";
console.log(frase.toUpperCase())

//Metodo toLowerCase(): Devuelve una nueva cadena con todas las letras en minúsculas.
let mensaje:string ="QUE tAl BROTHERS";
console.log(mensaje.toLowerCase());

let nombreLibro:string = "the Hacker in the world";
let nombrePais:string = "They are in are in Russia and EE.UU."
let nombrePelicula:string ="the movies more entretaiment are in Netflix"

let resultado: string = `I enjoy played with ${nombreLibro} are hacker is sensational for live in ${nombrePais} in generations passed
${nombrePelicula} none system is security `.toUpperCase();
console.log(resultado);

//Metodo indexOf(): Devuelve el índice de la primera ocurrencia de un valor de búsqueda en una cadena.
let str: string = "Hola, mundo!";
console.log(str.indexOf("mundo")); // Imprime 6

// Metodo slice(): Devuelve una subcadena de una cadena.

let subcadena:string = "Hola amigos que tal";
console.log(subcadena.slice(5,11));

// Metodo replace(): Reemplaza una subcadena de una cadena con otra subcadena.
let reemplazo:string = "Que chevere es programar";
console.log(reemplazo.replace("Que","Vesijue"));

//Metodo split(): Divide una cadena en un array de subcadenas.

let divide:string = "Hola que chevere, estuvo el cumple";
console.log(divide.split(","));

// Metodo trim(): Devuelve una nueva cadena con los espacios en blanco eliminados del principio y del final de la cadena.
let espacios:string = "  Hola estuvo chevere el paseo  ";
console.log(espacios);
console.log(espacios.trim());
















