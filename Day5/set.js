async function getData() {
    const sum = 2 + 2;
    return await new Promise((resolve, reject) => {
        if(2 < 3) {
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject('not working')
        }
    });
}
 
async function getTodos(url) {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos"); // cursor is blocked in this line
    data =  await data.json();
    return data;
}
 
getTodos().then(data => console.log(data));

//functiom stringify & parse
 
const obj = {
    name: "alan",
    age: 22,
    city: "New York"
}
 
console.log(JSON.stringify(obj)); // object -> string
console.log(JSON.parse('{"name":"alan","age":22,"city":"New York"}')); // string -> object
 


// settimeout and setinterval
 
const timeoutId = setTimeout(() => {
    console.log("Data received");
}, 5000);
console.log("test");
 
clearTimeout(timeoutId);
 
const i = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);
 
clearInterval(i);
 
 

 