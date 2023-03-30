/*Realizar un programa que permita registrar un usuario, con nombre de usuario, correo y contraseña; esos
 datos almacenar en la estructura de datos de su preferencia(lo más óptimo sería usar un diccionario, 
pero con cualquiera es posible ), apenas termine de registrar le permitirá registrar otros usuarios, el programa siempre 
deberá comprobar a la estructura de datos si el usuario o el email existen, si es así le indicará al usuario que ya existe 
y le pedirá que ingrese otro usuario o email.
Reglas: 
1 EL nombre de usuario se debe guardar en mayúsculas (No importa si el usuario lo escribe con minúsculas)
2 El correo antes de guardarlo debe ser comprobado que cumple una estructura de correo es decir que contiene un @ y un .
3 La contraseña solo puede ser máx de 6 dígitos*/

import * as readline from 'readline';

const mensaje = readline.createInterface(({
    input : process.stdin,
    output : process.stdout

}));

let diccionario: {[key : string]:any}[] = [];

    mensaje.question('Por favor ingresa tu nombre: ', (nombre: string)=>{ 
    
        if(nombre!=diccionario['nombre']){
            diccionario['nombre'] = nombre.toLocaleUpperCase();
            console.log(diccionario)
        }
    
        
        mensaje.question('Por favor ingresa tu correo: ', (correo : string)=>{
            if (correo!='correo'){
                diccionario['correo'] = correo;
                console.log(diccionario);
    
            }else{
                console.log("El correo ya existe por favor ingrese otro correo")
                
            }
            mensaje.question('Por favor ingresa tu contrasena: ', (cerrar: string)=>{
                if (cerrar!='contrasena'){
                    diccionario['contrasena'] = cerrar;
                    console.log(diccionario);
                }else{
                    console.log('La contrasena ya existe por favor ingresa otra contrasena')
                }
                mensaje.close();
    
            });
    
        });
    });

    








