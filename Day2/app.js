const login = () =>{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "harshal"){
        alert("login successful!");
        window.location.href = "app.html";
    } else{
        alert("invalid username or password.");
    }
}