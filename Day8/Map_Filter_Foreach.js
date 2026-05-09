// 1. Double all numbers in an array using map().
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
console.log(doubled);


// 2. Filter all students scoring above 80 marks.
const students = [
    { name: "A", marks: 75 },
    { name: "B", marks: 85 },
    { name: "C", marks: 90 }
];

const topStudents = students.filter(s => s.marks > 80);
console.log(topStudents);


// 3. Print all array values using forEach().
const arr = [10, 20, 30, 40];

arr.forEach(value => console.log(value));


// 4. Convert array of names into uppercase.
const names = ["harshal", "abhi", "rahul"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);


// 5. Extract only even numbers using filter().
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);