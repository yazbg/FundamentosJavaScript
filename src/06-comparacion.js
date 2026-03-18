// operadores de comparación en JS: Igualdad y Desigualdad
// 1. Igualdad debil (==) y estricta (===)
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(true == 1); //true
console.log(null == undefined); //true
console.log(0 == false); //true
console.log(0 === false); //false

// 2. Desigualdad debil (!=) y estricta (!==)
console.log(5 != "5"); //false
console.log(5 !== "5"); //true
console.log(true != 1); //false
console.log(null != undefined); //false
console.log(0 != false); //false
console.log(0 !== false); //true

let inputString = "100";
let trueNumber = 100;
console.log("¿Mismo valor con ==?", inputString == trueNumber);
console.log("¿Mismo valor y tipo con ===?", inputString === trueNumber);
console.log("¿Son diferentes en tipo con !==?", inputString !== trueNumber);