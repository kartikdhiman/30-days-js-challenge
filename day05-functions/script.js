console.log("Even or Odd Function");
function checkEvenOrOdd(number) {
	if (number % 2 === 0) {
			console.log(`${number} is even.`);
	} else {
			console.log(`${number} is odd.`);
	}
}

// Example usage:
checkEvenOrOdd(4); // 4 is even.
checkEvenOrOdd(7); // 7 is odd.

console.log("\nSquare Calculation Function");
function calculateSquare(number) {
	return number * number;
}

// Example usage:
console.log(calculateSquare(5)); // 25
console.log(calculateSquare(9)); // 81

console.log("\nConcatenation Function");
const concatenateStrings = function(str1, str2) {
	return str1 + str2;
}

// Example usage:
console.log(concatenateStrings("Hello, ", "world!")); // Hello, world!
console.log(concatenateStrings("JavaScript ", "is fun!")); // JavaScript is fun!

console.log("\nSum Calculation Arrow Function");
const calculateSum = (num1, num2) => {
	return num1 + num2;
}

// Example usage:
console.log(calculateSum(3, 4)); // 7
console.log(calculateSum(10, 15)); // 25

console.log("\nHigher-Order Function");
function applyFunctionMultipleTimes(func, times, value) {
	for (let i = 0; i < times; i++) {
			value = func(value);
	}
	return value;
}

// Example usage:
const increment = (x) => x + 1;
console.log(applyFunctionMultipleTimes(increment, 5, 0)); // 5

const double = (x) => x * 2;
console.log(applyFunctionMultipleTimes(double, 3, 1)); // 8
