// Q1: Check Positive, Negative or Zero
let number1 = Number(prompt("Enter the number to check positive, negative or zero"));
if (number1 > 0) {
    console.log(`${number1} - Positive Number`);
}
else if (number1 < 0) {
    console.log(`${number1} - Negative Number`);
}
else {
    console.log(`${number1} - Zero`);
}


// Q2: Check Even or Odd
let number2 = Number(prompt("Enter the number to check even or odd"));
if (number2 % 2 == 0) {
    console.log(`${number2} - Even Number`);
}
else {
    console.log(`${number2} - Odd Number`);
}


// Q3: Check Voting Eligibility
let age1 = Number(prompt("Enter your age"));
if (age1 >= 18) {
    console.log(`${age1} - Eligible for Vote`);
}
else {
    console.log(`${age1} - Not Eligible for Vote`);
}


// Q4: Find Greater Number
let no1 = 50;
let no2 = 25;
if (no1 > no2) {
    console.log(`${no1} is greater`);
}
else {
    console.log(`${no2} is greater`);
}


// Q5: Display Student Grade
let marks = Number(prompt("Enter your marks"));
if (marks >= 90 && marks <= 100) {
    console.log(`${marks} - Grade A`);
}
else if (marks >= 80 && marks < 90) {
    console.log(`${marks} - Grade B`);
}
else if (marks >= 70 && marks < 80) {
    console.log(`${marks} - Grade C`);
}
else if (marks >= 60 && marks < 70) {
    console.log(`${marks} - Grade D`);
}
else {
    console.log(`${marks} - Grade F`);
}


// Q6: Find Greatest of Three Numbers
let a1 = 10;
let b1 = 20;
let c1 = 70;
if (a1 > b1 && a1 > c1) {
    console.log(`${a1} is greater`);
}
else if (b1 > c1) {
    console.log(`${b1} is greater`);
}
else {
    console.log(`${c1} is greater`);
}


// Q7: Check Leap Year
let year = Number(prompt("Enter a year"));
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    console.log(`${year} - Leap Year`);
}
else {
    console.log(`${year} - Not a Leap Year`);
}


// Q8: Check Driving License Eligibility
let age2 = Number(prompt("Enter your age"));
if (age2 >= 18) {
    console.log(`${age2} - Eligible for Driving License`);
}
else {
    console.log(`${age2} - Not Eligible for Driving License`);
}


// Q9: Check Divisibility by 3 and 5
let number3 = Number(prompt("Enter a number ( divisible by 3 and 5)"));

if (number3 % 3 == 0 && number3 % 5 == 0) {
    console.log(`${number3} - Divisible by both 3 and 5`);
}
else {
    console.log(`${number3} - Not divisible by both 3 and 5`);
}


// Q10: Simple Calculator
let number4 = Number(prompt("Enter first number (caluculator)"));
let number5 = Number(prompt("Enter second number (calculator)"));
let operator = prompt("Enter operator (+, -, *, /, %)");

if (operator == "+") {
    console.log(`${number4} + ${number5} = ${number4 + number5}`);
}
else if (operator == "-") {
    console.log(`${number4} - ${number5} = ${number4 - number5}`);
}
else if (operator == "*") {
    console.log(`${number4} * ${number5} = ${number4 * number5}`);
}
else if (operator == "/") {
    console.log(`${number4} / ${number5} = ${number4 / number5}`);
}
else if (operator == "%") {
    console.log(`${number4} % ${number5} = ${number4 % number5}`);
}
else {
    console.log("Invalid Operator");
}

