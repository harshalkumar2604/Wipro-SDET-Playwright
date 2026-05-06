//Q1

let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log (a,b);


//Q2
function checkType(input){
    if (typeof input === "number"){
        console.log("this is number");
    }else if (typeof input === "string"){
        console.log("this is a string");
    }else{
        console.log("unknown type");
    }
}

checkType(10);
checkType("Virat");
checkType(true);


//Q3
let fullName = "John Doe";

let names = fullName.split(" ");   
let initials = names[0][0] + names[1][0];  

console.log(initials); 


//Q4
let cap = " Javascript is fun ";
let cleaned = cap.trim().toLowerCase();
console.log(cleaned); 

//Q5
let cart = ["Bread", "Butter", "Cheese"];

cart.push("Milk");     
cart.unshift("Eggs");  
cart.pop();            

console.log(cart);

//Q6
let numbers = [10, 20, 30, 40, 50];

let exists = numbers.includes(30);  
let index = numbers.indexOf(50);   

console.log(exists); 
console.log(index);  