// ==========================
// OBJETOS (Objects)
// ==========================

// 1. Creación de un Objeto
// Un objeto es una colección gigante de propiedades. 
// Cada propiedad es una pareja compuesta por un nombre (clave) y un valor.
const persona = {
    nombre: "Yaz",
    edad: 25,
    profesion: "Desarrollo",
    esProgramador: true,
    hobbies: ["Leer", "Escribir código", "Manejar"],
    direccion: {
        ciudad: "CDMX",
        pais: "México"
    }
};

console.log("1. Objeto completo impreso en consola:");
console.log(persona);

console.log("\n----------------------------\n");

// 2. Accediendo a Propiedades
console.log("2. Usando NOTACIÓN DE PUNTO (más común):", persona.nombre);
console.log("Usando NOTACIÓN DE CORCHETES:", persona["edad"]);
console.log("Accediendo a un arreglo dentro del objeto (primer hobby):", persona.hobbies[0]);
console.log("Accediendo a un objeto anidado (país):", persona.direccion.pais);

console.log("\n----------------------------\n");

// 3. Modificando, Agregando y Eliminando Propiedades
// Modificar algo existente:
persona.edad = 26;

// Agregar una propiedad que no existía antes:
persona.twitter = "@SoyYaz";

// Eliminar una propiedad permanentemente:
delete persona.esProgramador;

console.log("3. Objeto modificado \n(Se cambió edad a 26, se eliminó 'esProgramador' y se agregó 'twitter'):");
console.log(persona);

console.log("\n----------------------------\n");

// 4. Métodos (Las acciones de los objetos)
// Los objetos no solo guardan datos estáticos, también pueden tener "Funciones" encapsuladas llamadas Métodos.
const mascota = {
    nombre: "Laika",
    tipo: "Perrito",
    
    // Método tradicional
    ladrar: function() {
        // La palabra reservada 'this' hace referencia al objeto mismo (mascota).
        console.log(`¡Guau, guau! Soy ${this.nombre} el ${this.tipo}.`);
    },
    
    // Método moderno (Sintaxis más corta usando ES6)
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y muevo la cola.`);
    }
};

console.log("4. Invocando los métodos del objeto mascota:");
mascota.ladrar();
mascota.saludar();

console.log("\n----------------------------\n");

// 5. Métodos muy útiles del objeto global "Object"
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2023
};

// Object.keys() => Te devuelve un arreglo puro de llaves (Las propiedades)
console.log("5. Claves (keys) del auto:", Object.keys(auto));

// Object.values() => Te devuelve un arreglo puro con los valores de adentro
console.log("Valores (values) del auto:", Object.values(auto));

// Object.entries() => Devuelve pares [ [clave, valor], [clave, valor] ]
console.log("Entradas (entries) del auto:");
console.log(Object.entries(auto));

console.log("\n----------------------------\n");

// 6. ATENCIÓN: Copiar por Referencia (El gran peligro)
// Los primitivos (números, strings) se copian como clones separados.
// LOS OBJETOS se copian por "referencia" (como un enlace directo a la memoria).

const cajauerte = { oro: 10 };
const clonFalso = cajauerte; // !Aquí NO copiaste la caja, copiaste el mapa hacia la caja original!

clonFalso.oro = 0; // El clon fue asaltado...

console.log("6. ¡CUIDADO CON LA REFERENCIA!");
console.log("Oro de la caja original:", cajauerte.oro); // Se robaron el oro original también :(
console.log("Oro del clon:", clonFalso.oro);

// ¿Cómo copiamos entonces de verdad verdad? (Shallow copy)
// Usamos el "Spread Operator" (...) para desempacar y meter en nuevo objeto.
const verdaderaCopia = { ...cajauerte };
verdaderaCopia.oro = 1000;
console.log("\nCopia independiente usando Spread Operator:");
console.log("- Clon enriquecido:", verdaderaCopia.oro);
console.log("- Caja original intacta:", cajauerte.oro);
