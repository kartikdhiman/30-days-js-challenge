console.log("Number Check:\n")
// Define a number
let number = 5;

// Check if the number is positive, negative, or zero
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

console.log("\n\nVoting Eligibility:\n");
// Define the age of the person
let age = 18;

// Check if the person is eligible to vote
if (age >= 18) {
    console.log("The person is eligible to vote.");
} else {
    console.log("The person is not eligible to vote.");
}

console.log("\n\nDay of the Week:\n");
// Define a number representing the day of the week (1-7)
let dayNumber = 3;
let dayName;

// Determine the day of the week using a switch case
switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
}

// Log the day name
console.log("The day of the week is:", dayName);

console.log("\n\nGrade Assignment:\n");
// Define a score
let score = 85;
let grade;

// Assign a grade based on the score using a switch case
switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    case (score >= 60):
        grade = "D";
        break;
    case (score >= 50):
        grade = "E";
        break;
    default:
        grade = "F";
}

// Log the grade
console.log("The grade is:", grade);

console.log("\n\nLeap year check:\n");
// Define a year
let year = 2024;

// Check if the year is a leap year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
