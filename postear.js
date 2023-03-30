"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Realizar un programa que permita registrar un usuario, con nombre de usuario, correo y contraseña; esos datos almacenar en la estructura de datos de su preferencia(lo más óptimo sería usar un diccionario, pero con cualquiera es posible ), apenas termine de registrar le permitirá registrar otros usuarios, el programa siempre deberá comprobar a la estructura de datos si el usuario o el email existen, si es así le indicará al usuario que ya existe y le pedirá que ingrese otro usuario o email.
// Reglas: 
// 1 EL nombre de usuario se debe guardar en mayúsculas (No importa si el usuario lo escribe con minúsculas)
// 2 El correo antes de guardarlo debe ser comprobado que cumple una estructura de correo es decir que contiene un @ y un .
// 3 La contraseña solo puede ser máx de 6 dígitos
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Estructura de datos para almacenar los usuarios
var usuarios = {};
// Función para validar el correo electrónico
function validarCorreo(correo) {
    var expReg = /\S+@\S+\.\S+/;
    return expReg.test(correo);
}
// Función para validar la contraseña
function validarContrasena(contrasena) {
    return contrasena.length <= 6;
}
// Función para registrar un usuario
function registrarUsuario() {
    rl.question('Ingrese su nombre de usuario: ', function (nombreUsuario) {
        // Convertir el nombre de usuario a mayúsculas
        nombreUsuario = nombreUsuario.toUpperCase().trim();
        // Verificar si el nombre de usuario ya existe
        if (usuarios[nombreUsuario]) {
            console.log('El usuario ya existe, ingrese otro nombre de usuario.');
            registrarUsuario();
        }
        else {
            rl.question('Ingrese su correo electrónico: ', function (correo) {
                // Verificar si el correo electrónico es válido
                if (!validarCorreo(correo)) {
                    console.log('El correo electrónico no es válido, ingrese otro correo.');
                    registrarUsuario();
                }
                else if (Object.values(usuarios).some(function (user) { return user.correo === correo; })) {
                    console.log('El correo electrónico ya existe, ingrese otro correo.');
                    registrarUsuario();
                }
                else {
                    rl.question('Ingrese su contraseña (máx. 6 dígitos): ', function (contrasena) {
                        // Verificar si la contraseña es válida
                        if (!validarContrasena(contrasena)) {
                            console.log('La contraseña no es válida, ingrese otra contraseña.');
                            registrarUsuario();
                        }
                        else {
                            // Almacenar el usuario en la estructura de datos
                            usuarios[nombreUsuario] = { correo: correo, contrasena: contrasena };
                            console.log('Usuario registrado exitosamente!');
                            rl.question('Desea registrar otro usuario? (S/N) ', function (respuesta) {
                                if (respuesta.toUpperCase() === 'S') {
                                    registrarUsuario();
                                }
                                else {
                                    rl.close();
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
// Iniciar el proceso de registro de usuario
registrarUsuario();
