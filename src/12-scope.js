// ==========================
// SCOPE (Alcance / Contexto)
// ==========================

// 1. Ámbito Global (Global Scope)
// Las variables declaradas fuera de cualquier función o bloque están en el ámbito global
// y pueden ser accedidas desde cualquier parte del archivo.
let globalVar = "Soy una variable global";

function mostrarGlobal() {
    console.log("1. Desde dentro de la función:", globalVar);
}

mostrarGlobal();
console.log("2. Desde fuera de la función:", globalVar);

console.log("\n----------------------------\n");

// 2. Ámbito de Función (Function / Local Scope)
// Las variables declaradas dentro de una función solo son accesibles dentro de esa misma función.
function ambitoLocal() {
    let localVar = "Soy local, atrapada en la función";
    var localConVar = "Yo también soy local a esta función";

    console.log("3. Mostrando variable local:", localVar);
}

ambitoLocal();
// Si intentamos hacer: console.log(localVar); 
// ¡Dará Error! ReferenceError: localVar is not defined
// ¡Dará Error! ReferenceError: localConVar is not defined


// 3. Ámbito de Bloque (Block Scope)
// Introducido en ES6 (moderno). Las variables declaradas con `let` y `const` 
// solo viven dentro del bloque `{}` donde fueron creadas (un if, for, while, etc.).
if (true) {
    let blockVar = "Variable de bloque (let)";
    const blockConst = "Constante de bloque (const)";
    var noRespetaBloques = "Soy un var y me escapo del bloque";
    // ^ `var` SÍ se escapa y contamina el entorno externo, por eso evitamos usarlo.

    console.log("4. Dentro del bloque if:", blockVar, "y", blockConst);
}

// Error: blockVar y blockConst no existen aquí afuera.
console.log("5. Fuera del if (nota como se escapa el var):", noRespetaBloques);

console.log("\n----------------------------\n");

// 4. Ámbito Léxico (Lexical Scope / Scope Chain)
// Una función que está dentro de otra puede acceder a las variables de su función padre,
// pero el padre no puede acceder a las de su hijo.
function funcionPadre() {
    let variablePadre = "Dinero del Padre";

    function funcionHija() {
        let variableHija = "Dinero del Hijo";

        // El hijo SI accede a las cosas del padre.
        console.log("6. El hijo usando:", variablePadre);
        console.log("7. El hijo usando:", variableHija);
    }

    funcionHija();
    // Error: el padre no tiene permiso de usar `variableHija`
}

funcionPadre();

console.log("\n----------------------------\n");

// 5. Ejemplos Prácticos en Bucles (Scope)
// Al iterar en un for loop, siempre es preferible usar `let`

for (let i = 0; i < 3; i++) {
    // La "i" existe única y exclusivamente aquí adentro.
    console.log("8. Iteración (let) #", i);
}
// Error: console.log(i) no funciona afuera

for (var j = 0; j < 3; j++) {
    // Al usar var, ¡la 'j' contamina hacia acá afuera!
}
console.log("9. Cuidado: variable 'j' contaminada e igual a:", j); 
