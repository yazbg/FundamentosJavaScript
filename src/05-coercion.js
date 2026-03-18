// 1. Coerción Implícita
console.log(5 + "1"); //string
console.log(1 - "1"); //number
console.log(1 * "1"); //number
console.log(1 / "1"); //number
console.log(8 % "3"); //number
console.log(1 ** "1"); //number
console.log(1 == "1"); //true
console.log(1 === "1"); //false
console.log(1 != "1"); //false
console.log(1 !== "1"); //true
console.log(1 > "1"); //false
console.log(1 < "1"); //false
console.log(1 >= "1"); //true
console.log(1 <= "6"); //true
console.log(1 && "1"); //string
console.log(1 || "1"); //number
console.log(!1); //false
console.log(1 ?? "1"); //number

// 2. Coerción Explícita
const str = '42'
const num = Number(str)
console.log(typeof num, num); //number 42
console.log(String(1)); //string
console.log(Number("1")); //number
console.log(Boolean(1)); //true
console.log(Object(1)); //number
console.log(Symbol(1)); //symbol
console.log(BigInt(1)); //bigint


