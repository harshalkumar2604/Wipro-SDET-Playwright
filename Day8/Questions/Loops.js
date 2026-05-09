// 1. Print star pyramid patterns.
let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}


// 2. Print multiplication tables from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log("Table of " + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}


// 3. Find sum of all even numbers between 1 and 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);


// 4. Print all prime numbers between 1 and 100.
for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}


// 5. Create a number guessing game using loops.
const target = Math.floor(Math.random() * 100) + 1;
let guess = 0;

while (guess !== target) {
    guess = Number(prompt("Guess a number between 1 and 100"));

    if (guess > target) {
        console.log("Too high");
    } else if (guess < target) {
        console.log("Too low");
    } else {
        console.log("Correct!");
    }
}