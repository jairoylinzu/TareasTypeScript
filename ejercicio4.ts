/*Realizar un programa que permita registrar un usuario, con nombre de usuario, 
correo y contraseña; esos datos almacenar en la estructura de datos de su preferencia
(lo más óptimo sería usar un diccionario, pero con cualquiera es posible ),
 apenas termine de registrar le permitirá registrar otros usuarios, el programa siempre deberá 
 comprobar a la estructura de datos si el usuario o el email existen, si es así le indicará al usuario que ya existe y le
 pedirá que ingrese otro usuario o email.*/

// Importar la librería readline para leer datos desde la consola
import readline from 'readline';

// Crear una interfaz de readline para leer datos desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Crear un objeto para almacenar los usuarios registrados
const usuarios = {};

// Función para validar si un correo electrónico es válido
function validarCorreo(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para registrar un usuario
function registrarUsuario() {
  // Preguntar al usuario por los datos de registro
  rl.question('Ingresa tu nombre de usuario: ', (nombreUsuario: string) => {
    rl.question('Ingresa tu correo electrónico: ', (correo: string) => {
      rl.question('Ingresa tu contraseña (máximo 6 dígitos): ', (contrasena: string) => {
        // Convertir el nombre de usuario a mayúsculas
        nombreUsuario = nombreUsuario.toUpperCase();

        // Validar que el correo tenga una estructura válida
        if (!validarCorreo(correo)) {
          console.log('El correo electrónico ingresado no es válido.');
          registrarUsuario();
          return;
        }

        // Validar que la contraseña tenga un máximo de 6 dígitos
        if (contrasena.length > 6) {
          console.log('La contraseña no puede tener más de 6 dígitos.');
          registrarUsuario();
          return;
        }

        // Validar que el usuario o el correo no existan ya en la estructura de datos
        if (usuarios[nombreUsuario] || Object.values(usuarios).find(usuario => usuario.correo === correo)) {
          console.log('El usuario o el correo electrónico ingresados ya existen. Por favor ingresa otros datos.');
          registrarUsuario();
          return;
         }
       }
      
  