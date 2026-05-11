// 1. Create a delayed greeting message using setTimeout.
setTimeout(function () {
    console.log("Hello, welcome!");
}, 2000);


// 2. Build a countdown timer.
let count = 5;

let timer = setInterval(function () {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000);


// 3. Create a callback-based calculator.
function calculator(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculator(5, 3, add));
console.log(calculator(5, 3, multiply));


const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
 
function calculator(operation, ...operands) {
    return operation(...operands);
}
 
console.log(calculator(calc.sum, 1, 2, 3))


// 4. Simulate food ordering system using callbacks.
function placeOrder(order, callback) {
    console.log("Order placed:", order);
    setTimeout(function () {
        callback(order);
    }, 2000);
}

function prepareOrder(order, callback) {
    console.log("Preparing:", order);
    setTimeout(function () {
        callback(order);
    }, 2000);
}

function deliverOrder(order) {
    console.log("Delivered:", order);
}

placeOrder("Pizza", function (order) {
    prepareOrder(order, function (order) {
        deliverOrder(order);
    });
});


// 5. Execute functions sequentially using callbacks.
function step1(callback) {
    console.log("Step 1");
    callback();
}

function step2(callback) {
    console.log("Step 2");
    callback();
}

function step3() {
    console.log("Step 3");
}

step1(function () {
    step2(function () {
        step3();
    });
});