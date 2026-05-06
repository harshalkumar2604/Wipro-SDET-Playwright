async function fetchUsers(){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();

        let first10 = data.slice(0,10);

         //modify data
         let result = first10.map(u =>({
            id : u.id,
            name: u.name.toUpperCase(),
            email:u.email
         }));

         //print result 
         console.log (result);

        }
        catch (err){
            console.error("Error:",err);
        }
    
    }
     fetchUsers();


     //2. University
     async function  getEngineerColleges() {
        try{
            let response = await fetch("http://universities.hipolabs.com/search?country=India");
            let data = await response.json();

            let filtered = data.filter(u => u.name.includes("Engineering"));

            //get only names
            let names = filtered.map(u => u.name);

            //print 
            console.log(names);
        
        } catch(error){
            console.error(error);
        }
     }
     getEngineerColleges();

//3. joke api

async function getProgrammingJokers() {
    try{
        let res = await fetch("https://official-joke-api.appspot.com/jokes/ten");
        let data = await res.json();

        //filter
        let jokes = data.filter(j => j.type ==="general");
        console.log(jokes);

    } catch(err){
        console.error(err);
    }
    
}
getProgrammingJokers();

//4. todos
async function getTodos() {
    try {
      
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await res.json();

        let filtered = data.filter(d => d.id <= 10);

        let modified = filtered.map(d => ({
            ...d,
            title: "Test " + d.title
        }));

        console.log(modified);

    } catch (err) {
        
        console.error("Error:", err);
    }
}

getTodos();

//5. post

async function getPosts() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();

        let first10 = data.slice(0, 10);

        // Step 3: modify data
        let result = first10.map(p => ({
            id: p.id,
            title: p.title,
            shortBody: p.body.substring(0, 30) + "..."
        }));

        // Step 4: print result
        console.log(result);

    } catch (err) {
        // Step 5: error handling
        console.error("Error:", err);
    }
}

getPosts();

//6.electronic
async function getTopElectronics() {
    try {
        let res = await fetch("https://fakestoreapi.com/products/category/electronics");
        let data = await res.json();

        // find first product with rating > 4
        let product = data.find(p => p.rating.rate > 4);

        // print title
        console.log(product.title);

    } catch (err) {
        console.log(err.message);
    }
}

getTopElectronics();

//7.pikachu
async function getPokemon() {
    try {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        let data = await res.json();

        const result = {
            name: data.name,
            height: data.height,
            weight: data.weight,
            ability: data.abilities[0].ability.name
        };

        console.log(result);

    } catch (err) {
        console.error("Error:", err);
    }
}

getPokemon();

//8 cat api
async function getCatFact() {
    try {
        let res = await fetch("https://catfact.ninja/fact");
        let data = await res.json();

        console.log("Cat Fact:", data.fact);

    } catch (err) {
        console.error("Error:", err);
    }
}

getCatFact();

//9 quote API
async function getQuote() {
    try {
        let res = await fetch("https://api.quotable.io/random");

        // check response
        if (!res.ok) {
            throw new Error("Failed to fetch quote");
        }

        let data = await res.json();

        console.log("Quote:", data.content);
        console.log("Author:", data.author);

    } catch (err) {
        console.error("Error:", err.message);
    }
}

getQuote();

//10.population

async function getIndiaPopulation() {
    try {
        let res = await fetch("https://restcountries.com/v3.1/region/asia");

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        let data = await res.json();

        // find India
        let country = data.find(c => c.name.common === "India");

        // print population
        if (country) {
            console.log("Population:", country.population);
        } else {
            console.log("India not found");
        }

    } catch (err) {
        console.log(err.message);
    }
}

getIndiaPopulation();
