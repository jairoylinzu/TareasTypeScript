/*#Los ciclos en la programación son las funcionalidades más principales que nuestro software debe 
implementar, ya que nos permite iterar o repetir un proceso las veces que deseemos y de esta manera generar un software automatizado.
#En python existen dos tipos de ciclos 
que ralizan la misma función pero la implementación o la forma de abordar el problema es totalmente diferente en algunos casos
 es más eficiente utilizar uno u otro, aunque recalco con ámbos de puede hacer lo mismo.
#while
##El ciclo while es el más sencillo de entender ya que nos encasilla a pensar que mientras se cumpla alguna condición el 
ciclo se ejecutará.*/

let x = 0;
while (x<10){
    console.log(x);
    x+=1
}

/*Siempre es importante tener una variable global para que nos ayude a romper el ciclo

Recordemos que en las operaciones lógicas tenemos Tue y False que representan a 1 y 0, teniendo en cuenta esto podríamos generar un ciclo o
romperlo utilizando estos números*/

let y = 1;
let contador = 0;
while(y){
    if (contador<10){
        contador+=1;
        console.log(contador);
    }else {
        y = 0;
    }
}

/*Los ciclos tanto while y el for que veremos luego tienen unas palabras reservadas internas que solo funcionan dentro de
 \un ciclo y son: continue y break
continue: Nos permite saltarnos u obviar todo lo que esté después de esta palabra y seguir ejecutando el ciclo*/

let z = 0;
while (z<10){
    z+=1;
    if (z%2==0){
        console.log(z,"PAR")
        continue;
    }
    console.log(z,"IMPAR");

}

// break: Nos permite romper el ciclo cuando lo necesitemos

let cont = 0;
while (true){
    if (cont < 10){
        cont+=1;
        console.log(cont);

    }else{
        break;
    }
}

/*FOR es un ciclo que en python una de sus funciones principales es la de iterar
 una estructura de datos, pero igual con el while se puede generar los mismo ejemplos*/

let listas:string[]=["Joel", "Edgar","Dennys","Yuly","Jordan"];

for (let nombre in listas){
    console.log(listas[nombre]);
}


// generando un range de ciclos

function range(start: number, end: number): number[] {
    return Array.from({length: end - start + 1}, (_, i) => start + i);
}

for (let i of range(1,20)) {
    console.log(i);
}

//obteniendo índice y elemento

const lista = ["uno", "dos", "tres"];

for (const indice in lista) {
  console.log(indice, lista[indice]);
}

//RECORRIENDO UN DICCIONARIO
let diccionarios:{[key:string]: any} ={
    'nombre':{nombre: 'Joel'},
    'apellido':{apellido: 'Gurumendi'},
    'edad':{edad:26},
    'ciudad':{ciudad:'Guayaquil'},
    'lenguajes':{lenguaje:'go',lenguaje1:'python',lenguaje2:'java', lenguaje3:'javascript'}
  
  };
  
for(let i in diccionarios){
    console.log(diccionarios[i]);
}

