var oldpass="wesal22";
var username="wesamm"
let newpass = prompt("Enter your password");
let newuser = prompt("Enter your Username");


if (newpass===oldpass && newuser===username ) {
    document.write("Login successful");
} 
else {
    document.write("Incorrect password");
}