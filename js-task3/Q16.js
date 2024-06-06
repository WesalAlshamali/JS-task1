const validUsername = "Wesal";
const validPassword = "123";


let username = prompt("Please enter your username:");


if (username === validUsername) {
   
    let password = prompt("Please enter your password:");

   
    if (password === validPassword) {
       
        alert("Login successful!");
    } else {
      
        alert("Incorrect password.");
    }
} else {
    
    alert("Incorrect username.");
}