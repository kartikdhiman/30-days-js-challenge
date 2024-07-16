console.log("\n\nMultiplication Table:\n");
let table_number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${table_number} x ${i} = ${table_number * i}`);
}

console.log("\n\nPattern Printing:\n");
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

console.log("\n\nSum calculation:\n");
let sum = 0;
let num = 1;
while (num <= 10) {
    sum += num;
    num++;
}
console.log("Sum of numbers from 1 to 10 is:", sum);

console.log("\n\nFactorial Calculation:\n");
let number = 5
let factorial = 1;
let i = 5;

do {
    factorial *= i;
    i--;
} while (i > 0);

console.log(`Factorial of ${number} is:`, factorial);
