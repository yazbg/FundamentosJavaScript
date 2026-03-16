// 1. Operadores Aritméticos

const suma = 1 + 1;
const resta = 3 - 1;
const multiplicacion = 1 * 6;
const division = 6 / 2;
const modulo = 3 % 2;
const potencia = 2 ** 3;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);
console.log(potencia);

// 2. Operadores de Asignación

let a = 3;
a += 1;
a -= 1;
a *= 2;
a /= 1;
a %= 1;
a **= 2;

console.log(a);

// 3. Operadores de Comparación

const esIgual = 1 == 1;
const esIgualEstricto = 1 === 1;
const esDiferente = 1 != 1;
const esDiferenteEstricto = 1 !== 1;
const esMayor = 1 > 1;
const esMenor = 1 < 1;
const esMayorIgual = 1 >= 1;
const esMenorIgual = 1 <= 1;

console.log(esIgual);
console.log(esIgualEstricto);
console.log(esDiferente);
console.log(esDiferenteEstricto);
console.log(esMayor);
console.log(esMenor);
console.log(esMayorIgual);
console.log(esMenorIgual);

// 4. Operadores Lógicos

const esVerdadero = true && true;
const esFalso = true || false;
const esNegacion = !true;

console.log(esVerdadero);
console.log(esFalso);
console.log(esNegacion);

// 5. Operadores Ternarios
const edad = 18;
const esMayorDeEdad = edad >= 18 ? "Mayor de edad" : "Menor de edad";

console.log(esMayorDeEdad);

// 6. Operadores de incremento y decremento

let b = 10;
let b1 = 20;
b++;
b1--;

console.log(b);
console.log(b1);

// infinito
const infinito = Infinity;
console.log(infinito);
console.log(1 / 0);
console.log(-1 / 0);

// NaN
const notANumber = NaN;
console.log(notANumber);
console.log(0 / 0);
