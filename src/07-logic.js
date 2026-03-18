// Operadores lógicos en JS: AND, OR y NOT
// 1. AND (&&)
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
// 2. OR (||)
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
// 3. NOT (!)
console.log(!true); //false
console.log(!false); //true

let userAge = 25;
let hasDriverLicense = true;
let canDrive = userAge >= 18 && hasDriverLicense;
let isStudent = false;
let discount = isStudent || userAge < 18;
let cannotDrive = !canDrive;
console.log("¿Puede conducir?", canDrive);
console.log("¿Tiene descuento?", discount);
console.log("¿No puede conducir?", cannotDrive);
