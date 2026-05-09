// 1. Trace execution order of nested function calls.
function first() {
    console.log("First");
    second();
    console.log("First End");
}

function second() {
    console.log("Second");
    third();
    console.log("Second End");
}

function third() {
    console.log("Third");
}

first();
// Output Order:
// First → Second → Third → Second End → First End


// 2. Create recursive factorial function.
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120


// 3. Build recursive Fibonacci function.
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8


// 4. Simulate stack overflow with recursion.
function overflow() {
    return overflow();
}

// overflow(); // Uncommenting this will cause "Maximum call stack size exceeded"


// 5. Draw call stack flow for nested functions.

/*Call Stack Flow (for first()):
push first()-
  push second()->
    push third()->
    pop third()->
  pop second()->
pop first()->*/