// 1. Predict output of variable hoisting examples.
console.log(a); // undefined
var a = 10;

//console.log(b); // ReferenceError
let b = 20;


// 2. Create examples showing block scope using let.
{
    let x = 50;
    console.log(x); // 50
}

//console.log(x); // ReferenceError


// 3. Write a program demonstrating closure behavior.
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

//alternate
let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);
 


// 4. Create nested functions and access outer variables.
function parent() {
    let name = "Harshal";

    function child() {
        console.log(name);
    }

    child();
}

parent();


// 5. Debug a program with incorrect variable scoping.
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // 4,4,4 (issue)
    }, 1000);
}

for (let j = 1; j <= 3; j++) {
    setTimeout(function () {
        console.log(j); // 1,2,3 (fixed)
    }, 1000);
}