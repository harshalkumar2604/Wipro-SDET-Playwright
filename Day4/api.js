fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())

// take only first 10 users
.then(data => data.slice(0, 10))

// modify data
.then(users => users.map(u => ({
    id: u.id,
    name: u.name.toUpperCase(),
    email: u.email
})))

// print result
.then(result => console.log(result))

// error handling
.catch(err => console.error("Error:", err));

//2 Universities
fetch("http://universities.hipolabs.com/search?country=India")
    .then(r => r.json())
    .then(arr => arr.filter(u => u.name.includes("Engineering")))
    .then(arr => arr.map(u => u.name))
    .then(console.log)
    .catch(console.error);

//3 Joke API

fetch("https://official-joke-api.appspot.com/jokes/ten")
    .then(r => r.json())
    .then(arr => arr.filter(j => j.type === "general"))
    .then(console.log)
    .catch(console.err)
    .catch(console.error)

//4
// Step 1: Fetch API
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json()) // convert to JSON

// Step 2: filter data
.then(data => data.filter(d => d.id <= 10))

// Step 3: modify data
.then(data => data.map(d => ({
    ...d,
    title: "Test " + d.title
})))

// Step 4: print result
.then(data => console.log(data))

// Step 5: error handling
.catch(err => console.error("Error:", err));

//5: post
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())

// take only 10 posts
.then(data => data.slice(0, 10))

// modify data
.then(posts => posts.map(p => ({
    id: p.id,
    title: p.title,
    shortBody: p.body.substring(0, 30) + "..."
})))

// print result
.then(result => console.log(result))

.catch(err => console.error("Error:", err));

//6 electronics API

fetch("https://fakestoreapi.com/products/category/electronics")
    .then(res => res.json())
    .then(data => console.log(data.find(p => p.rating.rate > 4).title))
    .catch(err => console.log(err.message));




//7
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => res.json())

.then(data => {
    const result = {
        name: data.name,
        height: data.height,
        weight: data.weight,
        ability: data.abilities[0].ability.name
    };

    console.log(result);
})

.catch(err => console.error("Error:", err));

//8 cat fact API

fetch("https://catfact.ninja/fact")
    .then(res => res.json())

.then(data => {
    console.log("Cat Fact:", data.fact);
})

.catch(err => console.error("Error:", err));

//9 quote API

fetch("https://api.quotable.io/random")
    .then(res => res.json())

.then(data => {
    console.log("Quote:", data.content);
    console.log("Author:", data.author);
})

.catch(err => console.error("Error:", err));

//10 
fetch("https://restcountries.com/v3.1/region/asia")
    .then(res => res.json())
    .then(data => console.log(data.find(c => c.name.common === "India").population))
    .catch(err => console.log(err.message));