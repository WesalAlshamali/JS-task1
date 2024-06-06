const priceSingle = 100; 
const priceDouble = 150; 
const priceSuite = 250;  


let roomType = prompt("Please enter the type of room you want to book (Single, Double, Suite):");

let numberOfNights = prompt("Please enter the number of nights you want to stay:");
numberOfNights = parseInt(numberOfNights);


let totalCost;


if (roomType === "single") {
    totalCost = priceSingle * numberOfNights;
} else if (roomType === "double") {
    totalCost = priceDouble * numberOfNights;
} else if (roomType === "suite") {
    totalCost = priceSuite * numberOfNights;
} else {
    document.write("Invalid room type entered. Please enter Single, Double, or Suite.");
}


    document.write("The total cost for your stay is: $" + totalCost);
