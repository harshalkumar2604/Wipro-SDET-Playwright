//A. Variables & Data Types

//1. Create a program that swaps two numbers without using a third variable.

let a=5;
let b =10;
console.log("Before Swaping:");
console.log("a=",a);
console.log("b=",b);

[a,b] =[b,a];

console.log("After Swapping:");
console.log("a =", a);
console.log("b =", b);

//2. Write a program to check whether a given value is a number, string, boolean, null, or undefined.

let value = true;

if(typeof value=== "number"){
    console.log("it is number");
}
else if (typeof value === "string") {
    console.log("It is a String");
}
else if (typeof value === "boolean") {
    console.log("It is a Boolean");
}
else if (value === null) {
    console.log("It is Null");
}
else if (typeof value === "undefined") {
    console.log("It is Undefined");
}

//3. Convert temperature from Celsius to Fahrenheit using variables.

let Celsius = 30;
let Fahrenheit = (Celsius * 9/5)+32;
console.log ("Temperature in Fahrenheit =" , Fahrenheit);

//4. Create a simple calculator using variables and arithmetic operators

let num1 =20;
let num2 =10;
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1/num2;

console.log("Addition =",add);
console.log("Subtraction =", sub);
console.log("Multiplication =", mul);
console.log("Division =", div);

//5. Write a program that takes a user’s birth year and calculates age.
let birthYear = 2003;
let currentYear = 2026;
let age = currentYear- birthYear;
console.log("Your age is:" , age);



//Strings
//1. Reverse a string without using built-in reverse methods.

let str = "JavaScript";
let reversed = "";
for(let i=str.length-1;i>=0 ;i--){
     reversed=reversed + str[i];
}
console.log("Reversed String = ", reversed)

//2. Count the number of vowels in a string.

let name = "Nandini";
let count =0;
for(let i = 0; i<name.length; i++){
    let ch = str[i].toLowerCase();
    if(
        ch === "a"||
        ch ==="e"||
        ch ==="i"||
        ch ==="0"||
        ch ==="u"
    )
    {
        count++;
    }
}

console.log("number of vowel = ",count); 

//3. Check whether a string is a palindrome.

let string = "madam";
let reverse = "";

for(let i = string.length-1 ; i>=0; i--)
{
    reverse = reverse + string[i];
}
if (string== reverse){
    console.log("parlindrom");
}else{
    console.log("not palindrom");
}

//4. Capitalize the first letter of every word in a sentence.

let sentence = "javascript is fun";
let words = sentence.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {

     let word = words[i];

     result += word[0].toUpperCase() + word.slice(1) + " ";
}
console.log(result);

//5. Find the longest word in a sentence.

let sent = "JavaScript is very powerful language";
let word = sent.split(" ");
let longest = "";

for (let i = 0; i < word.length; i++) {
    if (word[i].length > longest.length) {
        longest = word[i];
    }
}
console.log("Longest word =", longest);

//1. Generate a random number between 1 and 100.

let randomNumber = Math.floor(Math.random() *100) +1;
console.log ("random number =", randomNumber);

//2. Check whether a number is prime.

let num = 11;

if (num <= 1) {
    console.log("Not a Prime Number");
} else {

    let count = 0;

    for (let i = 1; i <= num; i++) {

        if (num % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        console.log("Prime Number");
    } else {
        console.log("Not a Prime Number");
    }
}

//3. Find factorial of a number using loops.

let num1 =5;
let factorial = 1;

for (let i = 1; i <=num ; i++){
    factorial = factorial *i;
}
console.log("factorial =",factorial);

//4. Find Fibonacci series up to n numbers.

let n = 10;
let a= 0;
let b= 1;
console.log(a);
console.log(b);
for(let i = 3; i<=n; i++){
    let c = a+b;
    console.log(c);
    a=b;
    b=c;
}
//5. Check whether a number is Armstrong number

let num2 = 153;
let original = num2;
let sum = 0;

while (num2 > 0) {
    let digit = num2 % 10;
    sum = sum + (digit * digit * digit);
    num2 = Math.floor(num2/ 10);
}

if (sum === original) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}

let numbers =[12,20,39,48,89,60];
let largest = numbers[0];
let smallest = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if (numbers[i] > largest){
        largest = numbers[i];
    }
    if (numbers[i] < smallest){
        smallest = number[i];
    }
}
console.log("largest number:",largest);
console.log("smallest number:" , smallest);

//2. Remove duplicate elements from an array

let numbers3 = [1, 2, 3, 2, 4, 1, 5];
let uniqueArray = [];

for (let i = 0; i < numbers3.length; i++) {
    if (!uniqueArray.includes(numbers3[i])) {
        uniqueArray.push(numbers3[i]);
    }
}

console.log("Array after removing duplicates:");
console.log(uniqueArray);

//3.Sort an array without using built-in sort().

let numbers1 = [5, 2, 8, 1, 9];

for (let i = 0; i < numbers1.length; i++) {

    for (let j = i + 1; j < numbers1.length; j++) {
        if (numbers1[i] > numbers1[j]) {
            let temp = numbers1[i];
            numbers1[i] = numbers1[j];
            numbers1[j] = temp;
        }
    }
}

console.log("Sorted Array =", numbers1);

//4. Find second largest number in an array.

let numbers2 = [10, 45, 23, 89, 67];

let large = numbers2[0];
let secondLargest = numbers2[0];

for (let i = 0; i < numbers2.length; i++) {

    if (numbers2[i] > large) {

        secondLargest = large;
        large = numbers2[i];

    } else if (
        numbers2[i] > secondLargest &&
        numbers2[i] !== large
    ) {

        secondLarge = numbers2[i];
    }
}

console.log("Largest Number =", large);
console.log("Second Largest Number =", secondLargest);

//5. Merge two arrays and remove duplicates.

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let mergedArray = arr1.concat(arr2);
let uniqueArray1 = [];
for (let i = 0; i < mergedArray.length; i++) {

    if (!uniqueArray1.includes(mergedArray[i])) {
        uniqueArray1.push(mergedArray[i]);
    }
}

console.log("Merged Array =", mergedArray);
console.log("Array after removing duplicates =", uniqueArray1);

//Objects
//1.