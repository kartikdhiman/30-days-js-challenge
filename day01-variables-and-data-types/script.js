// Declare variables of different data types
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "Alice", age: 30 };
let arrayVar = [1, 2, 3, 4, 5];
let functionVar = function() { return "I am a function"; };
let symbolVar = Symbol("unique");

// Log the value and type of each variable to the console
console.log("stringVar:", stringVar, "Type:", typeof stringVar);
console.log("numberVar:", numberVar, "Type:", typeof numberVar);
console.log("booleanVar:", booleanVar, "Type:", typeof booleanVar);
console.log("nullVar:", nullVar, "Type:", typeof nullVar); // Note: typeof null is "object" due to a historical bug in JavaScript
console.log("undefinedVar:", undefinedVar, "Type:", typeof undefinedVar);
console.log("objectVar:", objectVar, "Type:", typeof objectVar);
console.log("arrayVar:", arrayVar, "Type:", typeof arrayVar); // Note: typeof array is "object"
console.log("functionVar:", functionVar, "Type:", typeof functionVar);
console.log("symbolVar:", symbolVar, "Type:", typeof symbolVar);


// Using let
let variableLet = "Initial value with let";
console.log("\n\nvariableLet before reassignment:", variableLet);

// Reassigning the let variable
variableLet = "Reassigned value with let";
console.log("variableLet after reassignment:", variableLet);

// Using const
const variableConst = "Initial value with const";
console.log("variableConst before reassignment:", variableConst);

// Attempting to reassign the const variable
try {
    variableConst = "Reassigned value with const";
} catch (error) {
    console.error("Error when reassigning variableConst:", error.message);
}
