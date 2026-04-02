// ==========================
// MÉTODOS DE ARREGLOS (Higher-Order Functions)
// ==========================
// Una vez vistos los Arrays y los Objetos, hay que mezclarlos.
// Estos métodos nos permiten iterar, transformar y filtrar datos sin usar los estorbosos ciclos 'for' tradicionales.
// Reciben funciones como parámetros (callbacks) y son el pan de cada día en empresas y React.

const numeros = [1, 2, 3, 4, 5, 6];

// Un arreglo que contiene múltiples Objetos (Muy parecido a como llegan los datos de un servidor Web o API)
const alumnos = [
    { nombre: "Yaz", calificacion: 10, activa: true },
    { nombre: "Jayro", calificacion: 5, activa: false },
    { nombre: "Fanny", calificacion: 8, activa: true },
    { nombre: "Negro", calificacion: 6, activa: true }
];

console.log("---- DATOS INICIALES ----");
console.log("Números:", numeros);

console.log("\n----------------------------\n");

// 1. .forEach()
// Recorre el arreglo elemento por elemento. 
// ¡CUIDADO! NO retorna un nuevo arreglo, solo sirve para ejecutar código o mostrar en consola.
console.log("1. forEach() - Imprimiendo elemento por elemento:");
numeros.forEach((num, index) => {
    console.log(`Índice ${index}: El número es ${num}`);
});

console.log("\n----------------------------\n");

// 2. .map()
// Recorre el arreglo y RETORNA UNO NUEVO DE IGUAL TAMAÑO con los elementos transformados. 
const dobles = numeros.map((num) => num * 2);
console.log("2. map() - Creando un nuevo clón transformado con los dobles:");
console.log(dobles); // [2, 4, 6, 8, 10, 12]

// Su uso más brutal: Extraer cosas de objetos complejos!
const nombresExtraidos = alumnos.map(alumno => alumno.nombre);
console.log("\nNombres aislados de la gran matrix de alumnos:", nombresExtraidos);

console.log("\n----------------------------\n");

// 3. .filter()
// RETORNA UN NUEVO ARREGLO (incluso de menor tamaño) solo con los elementos que CUMPLAN una condición.
const pares = numeros.filter(num => num % 2 === 0);
console.log("3. filter() - Solo me traigo los números pares:", pares);

// Filtrando alumnos súper pros (calificación >= 8) y que estén activos
const proAlumnos = alumnos.filter(alumno => alumno.calificacion >= 8 && alumno.activa === true);
console.log("Alumnos de excelencia y activos:", proAlumnos);

console.log("\n----------------------------\n");

// 4. .find()
// Devuelve UN SÓLO OBJETO: el *PRIMER* elemento que cumpla con la condición y se sale. 
// Si no encuentra nada, devuelve "undefined".
const maria = alumnos.find(alumno => alumno.nombre === "María");
console.log("4. find() - Realizando la búsqueda FBI del usuario 'María':", maria);

console.log("\n----------------------------\n");

// 5. .some() y .every()
// Te devuelven solo un True o un False. Útiles para validaciones de seguridad.

// .some() verifica si AL MENOS UN elemento cumple la desgracia de la condición.
const hayReprobados = alumnos.some(alumno => alumno.calificacion < 6);
console.log("5. some() - ¿Existen alumnos reprobados en el salón?:", hayReprobados); // True (Por culpa de Pedro)

// .every() verifica de forma estricta si TODOS los elementos en conjunto cumplen la condición.
const todosActivos = alumnos.every(alumno => alumno.activa === true);
console.log("every() - ¿Están TODOS los alumnos activos?:", todosActivos); // False (Tuvimos una baja por ahí)

console.log("\n----------------------------\n");

// 6. .reduce() (Nivel DIOS)
// Acumula o colapsa toooodo el arreglo en un ÚNICO valor condensado (como una suma total o una bolsa con dinero).
// Recibe 2 parámetros vitales: (Acumulador, actual) y un Valor de Arranque (ej. iniciar en 0).
const sumaTotal = numeros.reduce((acumulador, actual) => {
    return acumulador + actual; // En cada ciclo va sumando a la bolsa general
}, 0); // La bolsa arranca en 0

console.log("6. reduce() - Suma colapsada de todo el arreglo numérico:", sumaTotal);

// Ejemplo: Contaduría y Promedios sumando sobre objetos
const puntosGlobales = alumnos.reduce((bolsa, alumno) => bolsa + alumno.calificacion, 0);
console.log("Suma bruta de todas las calificaciones del salón:", puntosGlobales);
