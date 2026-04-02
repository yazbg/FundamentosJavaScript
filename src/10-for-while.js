// 1. Bucle for

for (initialization; condition; increment) {
    // código a ejecutar
}

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es:", i);
}

// 2. Bucle while

while (condition) {
    // código a ejecutar
}

let count = 0;

while (count < 3) {
    console.log("Count es:", count);
    count++;
}

// 3. Bucle do-while

do {
    // código a ejecutar
} while (condition);

let j = 0;

do {
    console.log("j es:", j);
    j++;
} while (j < 3);

// 4. break y continue

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // salta a la siguiente iteración
    }
    if (i === 7) {
        break; // sale del bucle
    }
    console.log(i);
}

// 5. Bucles anidados

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log("i:", i, "j:", j);
    }
}

// 6. Ejemplos prácticos

// Sumar números del 1 al 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Suma:", sum);

// Verificar si un número es primo
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("¿Es primo 17?", isPrime(17));

// Tablas de multiplicar
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j}x${i}=${i * j}\t`);
    }
    console.log();
}

// Fibonacci
let a = 0, b = 1, nextTerm;
console.log("Fibonacci:");
for (let i = 1; i <= 10; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}

// Contar letras de una palabra
let word = "javascript";
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// Contar vocales
let text = "Hola Mundo";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
        vowelCount++;
    }
}
console.log("Vocales:", vowelCount);

// Invertir una cadena
let original = "yaz";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log("Invertido:", reversed);

// Verificar palíndromo
function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}
console.log("¿Es palíndromo 'oso'?", isPalindrome("oso"));

// Sumar números pares
let sumEven = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("Suma pares:", sumEven);

// Contar ocurrencias de un carácter
let sentence = "javascript es divertido";
let charCount = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a') {
        charCount++;
    }
}
console.log("Ocurrencias de 'a':", charCount);

// Tabla de multiplicar con while
let num = 5;
let i = 1;
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
}

// Contar hasta N
function countToN(n) {
    let count = 1;
    while (count <= n) {
        console.log(count);
        count++;
    }
}
countToN(5);

// Sumar números impares
let sumOdd = 0;
let j = 1;
while (j <= 100) {
    if (j % 2 !== 0) {
        sumOdd += j;
    }
    j++;
}
console.log("Suma impares:", sumOdd);

// Contar hasta N con do-while
function countToNdoWhile(n) {
    let count = 1;
    do {
        console.log(count);
        count++;
    } while (count <= n);
}
countToNdoWhile(5);

// Contar hasta N con break
function countToNbreak(n) {
    for (let i = 1; i <= n; i++) {
        if (i > 10) break;
        console.log(i);
    }
}
countToNbreak(20);

// Contar hasta N con continue
function countToNcontinue(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) continue;
        console.log(i);
    }
}
countToNcontinue(20);

// Contar hasta N con break y continue
function countToNbreakContinue(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) continue;
        if (i > 10) break;
        console.log(i);
    }
}
countToNbreakContinue(20);

// Contar hasta N con while, break y continue
function countToNwhileBreakContinue(n) {
    let i = 1;
    while (i <= n) {
        if (i % 3 === 0) {
            i++;
            continue;
        }
        if (i > 10) break;
        console.log(i);
        i++;
    }
}
countToNwhileBreakContinue(20);

// Contar hasta N con do-while, break y continue
function countToNdoWhileBreakContinue(n) {
    let i = 1;
    do {
        if (i % 3 === 0) {
            i++;
            continue;
        }
        if (i > 10) break;
        console.log(i);
        i++;
    } while (i <= n);
}
countToNdoWhileBreakContinue(20);

// Contar hasta N con bucles anidados
function countToNnested(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            console.log(j);
        }
    }
}
countToNnested(5);


