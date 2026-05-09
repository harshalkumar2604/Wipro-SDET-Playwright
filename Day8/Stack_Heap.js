// 1. Create examples showing stack memory behavior.
let x = 10;
let y = x;

y = 20;

console.log(x); // 10
console.log(y); // 20


// 2. Create examples showing heap memory references.
let objA = { value: 100 };
let objB = objA;

objB.value = 200;

console.log(objA.value); // 200
console.log(objB.value); // 200


// 3. Demonstrate object mutation through references.
let user1 = { name: "Harshal" };

function updateName(u) {
    u.name = "Updated";
}

updateName(user1);

console.log(user1.name); // Updated


// 4. Predict outputs of memory-related programs.
let a = 5;
let b = a;

b = 10;

let obj1 = { num: 1 };
let obj2 = obj1;

obj2.num = 99;

console.log(a);     // 5
console.log(b);     // 10
console.log(obj1);  // { num: 99 }
console.log(obj2);  // { num: 99 }


// 5. Create diagrams explaining memory allocation.

// Stack (Primitive Values)
// x → 10
// y → 20

// Heap (Reference Types)
// objA --> { value: 200 }
// objB --up

// After mutation:
// user1 -->{ name: "Updated" }