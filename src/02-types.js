// 1. Tipos de datos Primitivos

const nombre = "Yazmin";
const edad = 25;
const precio = 99.99;
const esMayorDeEdad = true;
const esEstudiante = false;
const noDefinido = undefined;
const nulo = null;
const simbolo = Symbol("simbolo");
const bigInt = 1234567890123456789012345678901234567890n;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof precio);
console.log(typeof esMayorDeEdad);
console.log(typeof esEstudiante);
console.log(typeof noDefinido);
console.log(typeof nulo);
console.log(typeof simbolo);
console.log(typeof bigInt);

// 2. Tipos de datos No Primitivos (Objetos)

const persona = {
    nombre: "Yazmin",
    edad: 25,
    precio: 99.99,
    esMayorDeEdad: true,
    esEstudiante: false,
    noDefinido: undefined,
    nulo: null,
    simbolo: Symbol("simbolo"),
    bigInt: 1234567890123456789012345678901234567890n,
};

console.log(persona);

const funcion = () => {
    console.log("Hola");
};

console.log(typeof funcion);
