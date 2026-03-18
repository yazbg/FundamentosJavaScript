// 1. Creación de Strings
const nombre = "Yazmin";
const apellido = "Bacilio";
const nombreCompleto = nombre + " " + apellido;

console.log(nombre);
console.log(apellido);
console.log(nombreCompleto);

// 2. Template literals
const nombreCompleto2 = `${nombre} ${apellido}`;
console.log(nombreCompleto2);

// 3. Métodos de Strings
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(nombre.includes("Yazmin"));
console.log(nombre.startsWith("Yazmin"));
console.log(nombre.endsWith("Bacilio"));
console.log(nombre.replace("Yazmin", "Yaz"));
console.log(nombre.split(" "));
console.log(nombre.trim());
console.log(nombre.charAt(0));
console.log(nombre.charCodeAt(0));
console.log(nombre.indexOf("Yazmin"));
console.log(nombre.lastIndexOf("Yazmin"));
console.log(nombre.slice(0, 3));
console.log(nombre.substring(0, 3));
console.log(nombre.concat(" Bacilio"));
console.log(nombre.repeat(3));

const email = "  Usuario@DOMINIO.com  ";
const normalizedEmail = email.trim().toLowerCase();
const domain = normalizedEmail.split("@")[1];
console.log("Email original:", email);
console.log("Email normalizado:", normalizedEmail);
console.log("Dominio extraído:", domain);
