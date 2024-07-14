console.log("\nArithmetic Operations:\n")
// Define two numbers
let num1 = 10;
let num2 = 5;

// Perform arithmetic operations
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2;

// Log the results
console.log("Addition:", addition); // 15
console.log("Subtraction:", subtraction); // 5
console.log("Multiplication:", multiplication); // 50
console.log("Division:", division); // 2
console.log("Remainder:", remainder); // 0

console.log("\nComparison and Logical Operators:\n");
// Define two numbers
let a = 8;
let b = 12;

// Comparison operators
console.log("a == b:", a == b); // false
console.log("a != b:", a != b); // true
console.log("a > b:", a > b); // false
console.log("a < b:", a < b); // true
console.log("a >= b:", a >= b); // false
console.log("a <= b:", a <= b); // true

// Logical operators
let condition1 = (a < b); // true
let condition2 = (a > 5); // true

console.log("condition1 && condition2:", condition1 && condition2); // true
console.log("condition1 || condition2:", condition1 || condition2); // true
console.log("!condition1:", !condition1); // false

console.log("\nTernary Operator:\n");
// Define a number
let number = -7;

// Use the ternary operator to determine if the number is positive or negative
let result = (number >= 0) ? "Positive" : "Negative";

// Log the result
console.log("The number is:", result); // Negative
