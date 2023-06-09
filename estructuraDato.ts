/*Las estructuras de datos juegan un rol muy importante en la programación ya que nos permiten agrupar datos para su respectiva manipuladción en los procesos del software, así que es indispensable entender el funcionamiento principal de los mismos.
PD: si es de tu interés la inteligencia artificial, las estructuras de datos es una de las bases para adentrarse en ese maravilloso mundo.
#Antes de empezar con los diferentes tipos de estructuras de datos hay que entender las propiedades de una estructura: 
'''
  agrupador: cada uno de los tipos tiene su simbolo agrupador [], (), {}, cada uno de ellos nos permite identificar con que tipo de estructura estamos trabajando.
  índice: Es la posición en la que se encuentra un elemento dentro de la estructura, SIEMPRE empezamos desde 0 siendo este el índice de la primera posición.
  longitud: Representa a la cantidad de elementos que se encuentran en una lista, no confundir con índice ya que en la longitud se empieza a contar desde 1.

  llave y valor: son dos definiciones que detallaremos cuando hablemos de las estructuras que usan esta propiedad.
'''
#Listas*/

//Usando la sintaxis de arreglo let lista:string[] = ["elemento","Elemento","Elemento"]
//Usando la sintaxis de Array let lista:Array<string>=["elemento","elemento","elemento"]
//Una lista es una estructura de datos que nos permite almacenar como elemento 
//cualquier tipo de dato, estructura de datos u objeto.

let lista:(string | number | string| boolean| Array<string>)[]=["Joel", 26, "Guayaquil", true, ["python","go","javascript"]];
console.log(lista);

//Para acceder a cada un de los elementos debemos utilizar el índice para referirnos al mismo.
let nombre = lista[0];
let edad = lista[1];
let ciudad = lista[2];
let estudiante = lista[3];
let  lenguajes = lista[4];
console.log(nombre, edad, ciudad, estudiante, lenguajes);
/*
#De esta manera hemos guardado el valor de cada elemento en una variable obteniendolo referenciando el índice.*/
//longitud
console.log("Longitud", lista.length);

/*#Si deseamos cambar el varlor de uno de sus elementos debemos primero acceder
 al elemento mediante el índice e igualandolo a un nuevo valor.*/
lista[0] = "Kevin";
lista[1] = 28;
console.log(lista);

/*De igual manera como la lista una tupla almacena una variedad de elementos dentro de su estructura, 
tiene un orden pero sus elementos son inmutables, es decir luego de ser creada la tupla sus elementos no pueden ser modificados.
'''*/
let tupla: [string,number,string,boolean]=["Joel", 26, "Guayaquil", true];
console.log(tupla);

let nombre1 = tupla[0];
let edad1 = tupla[1];
let ciudad1 = tupla[2];
let estudiante1 = tupla[3];
console.log(nombre1,edad1,ciudad1,estudiante1);

let diccionario:{[key:string]: any} ={
  'nombre':{nombre: 'Joel'},
  'apellido':{apellido: 'Gurumendi'},
  'edad':{edad:26},
  'ciudad':{ciudad:'Guayaquil'},
  'lenguajes':{lenguaje:'go',lenguaje1:'python',lenguaje2:'java', lenguaje3:'javascript'}

};

//console.log(diccionario);

//Para mostrar algún valor guardado en el diccionario si accede a el mediante la llave designada.

console.log(diccionario['lenguajes']);

/*Para modificar un valor con tan solo acceder mediante la llave y luego igualarlo a 
otro valor sería suficiente para realizar la modificación.*/ 

diccionario['nombre']='Pedro';
console.log(diccionario);
//Si deseamos aumentar algún otro elemento, necesitamos crear una nueva llave e igualarla al valor deseado
diccionario['estudiante']={estudiante:'true'};
console.log(diccionario);

/*Si deseamos eliminar un elemento con tan solo anteponer la palabra reservada 
del y luego acceder a la llave podríamos eliminar el mismo.*/

delete diccionario['estudiante'];
console.log(diccionario);





