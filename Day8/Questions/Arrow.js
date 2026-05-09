// 1. Convert normal functions into arrow functions.
function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

console.log(add(2, 3));
console.log(addArrow(2, 3));


// 2. Create one-line arrow functions with implicit return.
const square = x => x * x;
const greet = name => `Hello ${name}`;

console.log(square(5));
console.log(greet("Harshal"));


// 3. Use arrow functions with map().
const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(n => n * 2);
console.log(doubled);


// 4. Build an even/odd checker using arrow functions.
const checkEvenOdd = num => (num % 2 === 0 ? "Even" : "Odd");

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));


// 5. Create a student grade calculator using arrow functions.
const calculateGrade = marks => {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 60) return "C";
    else if (marks >= 40) return "D";
    else return "Fail";
};

console.log(calculateGrade(85));
console.log(calculateGrade(35));