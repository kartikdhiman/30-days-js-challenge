// 1. Array Manipulation Script
console.log("1. Array Manipulation Script");

// Create an array
let arr = [1, 2, 3, 4, 5];
console.log("Initial array:", arr);

// Add elements using push
arr.push(6);
console.log("After push(6):", arr);

// Remove elements using pop
arr.pop();
console.log("After pop():", arr);

// Add elements using unshift
arr.unshift(0);
console.log("After unshift(0):", arr);

// Remove elements using shift
arr.shift();
console.log("After shift():", arr);

// 2. Array Transformation Script
console.log("\n2. Array Transformation Script");

// Use map to create a new array with each element doubled
let doubled = arr.map(x => x * 2);
console.log("Doubled array:", doubled);

// Use filter to create a new array with elements greater than 2
let filtered = arr.filter(x => x > 2);
console.log("Filtered array (elements > 2):", filtered);

// Use reduce to sum all elements in the array
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log("Sum of array elements:", sum);

// 3. Array Iteration Script
console.log("\n3. Array Iteration Script");

// Iterate over the array using a for loop
console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Iterate over the array using forEach method
console.log("Using forEach method:");
arr.forEach(element => {
    console.log(element);
});

// 4. Two-dimensional Array Script
console.log("\n4. Two-dimensional Array Script");

// Create a two-dimensional array
let twoDimArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Initial two-dimensional array:", twoDimArr);

// Access and manipulate elements in the two-dimensional array
twoDimArr[0][0] = 10; // Change the first element of the first row
console.log("After changing twoDimArr[0][0] to 10:", twoDimArr);

twoDimArr[2].push(10); // Add an element to the third row
console.log("After pushing 10 to the third row:", twoDimArr);

twoDimArr[1].pop(); // Remove the last element from the second row
console.log("After popping from the second row:", twoDimArr);
