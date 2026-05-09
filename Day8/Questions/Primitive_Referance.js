// 1. Create examples showing primitive copying behavior.
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


// 2. Create examples showing object reference behavior.
let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value); // 20
console.log(obj2.value); // 20


// 3. Clone an object without affecting original object.
let original = { name: "Harshal", age: 22 };

let clone = { ...original };
clone.age = 30;

console.log(original); // unchanged
console.log(clone);


// 4. Compare arrays using reference equality.
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2); // false
console.log(arr1 === arr3); // true


// 5. Demonstrate shallow copy using spread operator.
let user = {
    name: "Abhi",
    address: { city: "Delhi" }
};

let shallowCopy = { ...user };
shallowCopy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai (affected)
console.log(shallowCopy.address.city);