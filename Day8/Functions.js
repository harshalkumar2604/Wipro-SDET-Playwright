// 1. Create a function that returns the greatest of three numbers.
function greatest(a, b, c) {
    return Math.max(a, b, c);
}

console.log(greatest(10, 25, 15));


// 2. Write a function to check whether a number is palindrome.
function isPalindrome(num) {
    let str = num.toString();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));


// 3. Create a reusable function for currency conversion.
function convertCurrency(amount, rate) {
    return amount * rate;
}

console.log(convertCurrency(100, 83)); // example USD to INR


// 4. Write a function that accepts an array and returns only even numbers.
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1,2,3,4,5,6]));


// 5. Create a calculator using functions for add, subtract, multiply, and divide.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));



//alternate best way
const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
console.log(calc.sum(5, 5, 10, 20));
 