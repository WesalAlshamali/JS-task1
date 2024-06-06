let age = prompt("Please enter your age:");
let movieType = prompt("Please enter the type of movie (Regular, 3D):");

age = parseInt(age);


let ticketPrice;


if (age < 12) {
  
    ticketPrice = 8;
} else {
   
    ticketPrice = 10;
}

if (movieType === "3D") {
    ticketPrice += 3;
}

document.write("The ticket price is: " + ticketPrice);