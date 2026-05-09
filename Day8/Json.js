// 1. Convert JSON string into object.
const jsonString = '{"name":"Harshal","age":22}';
const obj = JSON.parse(jsonString);

console.log(obj);
console.log(obj.name);


// 2. Convert object into JSON string.
const user = { name: "Abhi", age: 25 };
const jsonData = JSON.stringify(user);

console.log(jsonData);


// 3. Parse API-like JSON data and display values.
const apiData = `{
    "users": [
        { "id": 1, "name": "A" },
        { "id": 2, "name": "B" }
    ]
}`;

const parsedData = JSON.parse(apiData);

parsedData.users.forEach(u => {
    console.log(u.id, u.name);
});


// 4. Create a JSON array of employee records.
const employees = [
    { id: 1, name: "John", salary: 50000 },
    { id: 2, name: "Jane", salary: 60000 }
];

const employeesJSON = JSON.stringify(employees);
console.log(employeesJSON);


// 5. Filter JSON data based on conditions.
const data = [
    { name: "A", marks: 70 },
    { name: "B", marks: 85 },
    { name: "C", marks: 90 }
];

const filtered = data.filter(d => d.marks > 80);
console.log(filtered);