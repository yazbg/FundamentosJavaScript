// ==========================
// ARRAYS (Arreglos / Matrices)
// ==========================

// 1. Creación de un Array
// Un arreglo es una estructura de datos que nos permite almacenar múltiples valores en una sola variable.
let frutas = ["Manzana", "Plátano", "Naranja", "Fresa"];
let numeros = [10, 20, 30, 40, 50];
let mixto = ["Hola", 42, true, null, { nombre: "Yaz" }, [1, 2]]; // JS permite guardar tipos mixtos

console.log("1. Arreglo inicial de frutas:", frutas);
console.log("Cantidad de frutas (length):", frutas.length);

console.log("\n----------------------------\n");

// 2. Accediendo y Modificando Elementos (Índices)
// Los arreglos están basados en índices comenzando desde el Cero (Zero-indexed).
console.log("2. La primera fruta es:", frutas[0]); // Manzana
console.log("La tercera fruta es:", frutas[2]); // Naranja

// Podemos modificar un elemento apuntando a su índice directo:
frutas[1] = "Mango"; 
console.log("Arreglo tras cambiar 'Plátano' (índice 1) a 'Mango':", frutas);

console.log("\n----------------------------\n");

// 3. Métodos Básicos (Agregar y Quitar)

// PUSH: Agrega uno o más elementos al FINAL
frutas.push("Uva", "Piña");
console.log("3. .push() => Añade Uva y Piña al final:", frutas);

// POP: Elimina el ÚLTIMO elemento y lo devuelve
let frutaEliminada = frutas.pop();
console.log("\n.pop() => Elimina el último (Piña):", frutas);
console.log("- Fruta que fue expulsada:", frutaEliminada);

// UNSHIFT: Agrega uno o más elementos al INICIO
frutas.unshift("Sandía");
console.log("\n.unshift() => Añade Sandía al inicio:", frutas);

// SHIFT: Elimina el PRIMER elemento y lo devuelve
let primerEliminado = frutas.shift();
console.log("\n.shift() => Elimina el primero:", frutas);
console.log("- Fruta que fue expulsada:", primerEliminado);

console.log("\n----------------------------\n");

// 4. Búsqueda y Validación

console.log("4. ¿En qué posición está 'Naranja'?:", frutas.indexOf("Naranja")); 
// Si un elemento no existe, .indexOf() devuelve un triste -1.
console.log("¿Posición de 'Limón'?:", frutas.indexOf("Limón")); 

// Modernamente, si queremos un booleano (true/false) usamos .includes()
console.log("¿Está 'Mango' en el arreglo?:", frutas.includes("Mango")); // true
console.log("¿Está 'Pera' en el arreglo?:", frutas.includes("Pera")); // false

console.log("\n----------------------------\n");

// 5. Métodos Especiales: Tajar y Costurar! 

// SLICE (Rebanada): Crea una COPIA de una porción del arreglo (SIN afectar el original)
// slice(índice_donde_empieza, índice_donde_termina_exclusivo)
let rebanada = frutas.slice(1, 3); // Toma índice 1 y 2. Ignora el 3.
console.log("5. .slice(1, 3) => Coge el índice 1 y 2:", rebanada);
console.log("- Comprobando que nuestro array original se mantiene intacto:", frutas);

// SPLICE (Modificador destructivo)
// splice(índice_inicial, cantidad_de_elementos_a_borrar, [cosas_nuevas_a_insertar])
let frutasFiesta = [...frutas]; // Clonamos para no destruir la lista de arriba
frutasFiesta.splice(1, 2, "Kiwi", "Mandarina"); // Arranca en el índice 1, borra 2(Mango y Naranja), mete Kiwi y Mandarina
console.log("\n.splice(1, 2, 'Kiwi', 'Mandarina') => Cambio destructivo:", frutasFiesta);

console.log("\n----------------------------\n");

// 6. Concatenar y Convertir a String

// CONCAT
let verduras = ["Tomate", "Zanahoria"];
let mercadoMix = frutas.concat(verduras);
console.log("6. .concat() => Fusión de Arrays (frutas + verduras):", mercadoMix);

// JOIN: Teje todos los elementos y los convierte a un SÓLO string de texto usando un separador
let stringFrutas = frutas.join(" ➡ ");
console.log("\n.join() => Arreglo transformado a simple Texto:", stringFrutas);
