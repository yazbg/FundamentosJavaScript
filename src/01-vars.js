// 1. Uso de 'var' (Forma antigua de declarar variables)
var saludo = "Hola con var";
console.log(saludo);

// HOISTING: 'var' sufre de hoisting (elevación), lo que significa que la declaración 
// se mueve al inicio del contexto, pero NO su inicialización.
// COMENTARIO: EVITAR el uso de 'var' y de depender del hoisting, ya que puede causar bugs difíciles de detectar.
// Ejemplo de lo que pasa con hoisting (si quitáramos el comentario, imprimiría 'undefined' y no daría error):
// console.log(variableElevada); 
// var variableElevada = "Soy una variable con var";


console.log("-----------------------");


// 2. Uso de 'let' (Forma moderna y recomendada para variables que van a cambiar)
// 'let' tiene alcance de bloque (block scope) y no sufre de hoisting de la misma manera (temporal dead zone).
let edad = 20;
console.log("Edad inicial:", edad);

// Reasignación de variable con 'let'
edad = 25; // Reasignamos el valor
console.log("Edad reasignada:", edad);


console.log("-----------------------");


// 3. Uso de 'const' (Para valores que NO van a cambiar)
// 'const' también tiene alcance de bloque y requiere ser inicializada en el momento de la declaración.
const NUMERO_PI = 3.14159;
console.log("Valor de PI:", NUMERO_PI);

// COMENTARIO: Reasignar una constante causará un error.
// Descomentar la siguiente línea lanzaría un TypeError:
// NUMERO_PI = 3.14; 

let userName = "Ana";
const birthYear = 1990;
var isActive = true;
userName = "Ana Maria";
console.log("Nombre de usuario:", userName);