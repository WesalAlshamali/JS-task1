var oldpass="wesal22";
let newpass = prompt("Enter your password");

if (newpass===oldpass) {
    document.write("Login successful");
} 
else {
    document.write("Incorrect password");
}