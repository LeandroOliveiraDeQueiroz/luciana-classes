// Tipo dinamicos (objetos e array) - Passagem de referencia (local da memoria)
let arrayX = [];

arrayX.push("banana");
arrayX.push("maca");
let arrayY = arrayX;

console.log("Array X:", arrayX);
console.log("Array Y:", arrayY);

arrayY.push("morango");
arrayX.push("limao");
console.log("Depois da modificacao de Y");

console.log("Array Y:", arrayY);
console.log("Array X:", arrayX);

// Tipo primitivos (numero, booleano, string) - Passagem de valor

let x = 3;
let y = x;
console.log("x", x);
console.log("y", y);
y = 12;
console.log("Depois da modificacao de Y");
console.log("x", x);
console.log("y", y);
