// ==========================
// CLOSURES (Clausuras)
// ==========================

// ¿Qué es un Closure?
// Es una función que "recuerda" el entorno (ámbito / scope) en el que fue creada,
// incluso después de que la función exterior haya terminado de ejecutarse.
// Es ideal para crear datos PRIVADOS.

// ==========================
// EJEMPLO PRÁCTICO: UN BANCO
// ==========================
// Queremos proteger el "saldo" para que nadie pueda cambiarlo directamente 
// (por ejemplo: cuenta.saldo = 1,000,000).
// Solo podremos interactuar con el dinero a través de las funciones permitidas.

function crearCuentaBancaria(cliente, saldoInicial) {
    // Esta variable es PRIVADA gracias al closure. 
    // Queda viva en la memoria para las funciones de abajo, pero es inaccesible desde afuera.
    let saldo = saldoInicial;

    // Retornamos un objeto con métodos que SÍ tienen acceso a `saldo` y `cliente`
    return {
        obtenerTitular: function() {
            return cliente;
        },
        consultarSaldo: function() {
            console.log(`Saldo actual de ${cliente}: $${saldo}`);
            return saldo;
        },
        depositar: function(cantidad) {
            if (cantidad > 0) {
                saldo += cantidad;
                console.log(`Depósito de $${cantidad} exitoso. Nuevo saldo: $${saldo}`);
            } else {
                console.log("La cantidad a depositar debe ser mayor a 0.");
            }
        },
        retirar: function(cantidad) {
            if (cantidad > saldo) {
                console.log(`Fondos insuficientes para retirar $${cantidad}. Saldo disponible: $${saldo}`);
            } else if (cantidad <= 0) {
                console.log("La cantidad a retirar debe ser mayor a 0.");
            } else {
                saldo -= cantidad;
                console.log(`Retiro de $${cantidad} exitoso. Saldo restante: $${saldo}`);
            }
        }
    };
}

// 1. Creamos la cuenta bancaria. 
// Aquí `crearCuentaBancaria` se ejecuta y termina, pero las funciones dentro 
// del objeto resultante "recuerdan" y siguen teniendo acceso a `saldo` y `cliente`.
console.log("--- BIENVENIDO AL BANCO ---");
const miCuenta = crearCuentaBancaria("Yaz", 500);

// 2. Usando la cuenta a través de sus métodos (Closures en acción)
miCuenta.consultarSaldo(); // Imprime 500
miCuenta.depositar(200);   // Se agregan 200 (Total: 700)
miCuenta.retirar(100);     // Se quitan 100 (Total: 600)
miCuenta.retirar(1000);    // Chequeo de seguridad: Da error por fondos insuficientes

console.log("\n--- DEMOSTRACIÓN DE PRIVACIDAD ---");
// 3. Intento de "hackear" la cuenta cambiando las cosas por la fuerza
console.log("Intentando leer el saldo directamente usando 'miCuenta.saldo':", miCuenta.saldo); 
// Imprimirá `undefined` porque la variable `saldo` no es pública, está encerrada en el closure.

miCuenta.saldo = 1000000000; // Alguien intenta inyectar 1000 millones...
console.log("¿Funcionó el hackeo para ser millonario?");

// Usamos el método oficial y...
miCuenta.consultarSaldo(); // ✔️ Sigue protegida; el saldo real sigue siendo de $600.