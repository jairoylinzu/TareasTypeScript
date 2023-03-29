import * as readline from 'readline';

const saludo = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

saludo.question('Por favor, ingrese su nombre: ',(nombre)=>{
  saludo.question('Por favor, ingresa su edad: ',(edad)=> {
    saludo.question('Por favor ingresa la ciudad don vives: ',(ciudad)=>{
      console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años y vivo en ${ciudad}`);
      saludo.close();
    });

  });

  

});



