let password = prompt("Please enter your password:");

// Initialize variables for the checks
let hasNumber = false;
let hasSpecialChar = false;
let length = password.length;

// Check if the password contains numbers and special characters
for (let i = 0; i < length; i++) {
    let char = password.charAt(i);
    if (!isNaN(char * 1)) {
        hasNumber = true;
    } else if (char.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        hasSpecialChar = true;
    }
}

// Determine the strength of the password
if (length < 6) {
    document.write("Password is weak.");
} else if (length >= 6 && length < 10 && (hasNumber || hasSpecialChar)) {
    document.write("Password is moderate.");
} else if (length >= 10 && hasNumber && hasSpecialChar) {
    document.write("Password is strong.");
} else {
    document.write("Password is moderate.");
}