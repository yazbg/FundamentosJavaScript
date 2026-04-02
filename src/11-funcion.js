// Funciones

// Función que utiliza un bucle for para sumar un arreglo de números
function sumarArreglo(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

console.log("\nSuma del arreglo [1, 2, 3, 4, 5]:", sumarArreglo([1, 2, 3, 4, 5]));

// Función para encontrar el número mayor en un arreglo
const encontrarMayor = (numeros) => {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
};

console.log("El número mayor de [10, 5, 8, 20, 3] es:", encontrarMayor([10, 5, 8, 20, 3]));

// Función que genera una tabla de multiplicar con parámetros por defecto
function generarTablaMultiplicar(numero, limite = 10) {
    console.log(`\nTabla del ${numero}:`);
    for (let i = 1; i <= limite; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

generarTablaMultiplicar(7, 5); // Cambia el límite a 5

// Función que cuenta las vocales en una palabra (expresión de función)
const contarVocales = function (palabra) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }
    return contador;
};

console.log("\nLa palabra 'javascript' tiene", contarVocales("javascript"), "vocales.");
