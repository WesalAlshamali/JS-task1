


let age = prompt("Please enter your age:");


let nationality = prompt("Please enter your nationality:");

age = parseInt(age);


if (age >= 18) {
    if (nationality === "american") {
        document.write("You are eligible to vote.");
    } else {
        document.write("You are not eligible to vote because you are not American.");
    }
} else {
    document.write("You are not eligible to vote because you are under 18.");
}