let order = prompt(
  "Please select your order from the menu: Pizza, Pasta, or Salad:"
);
let price;
let discount = 0;

if (order === "pizza") {
  price = 10; 
} else if (order === "pasta") {
  price = 8; 
} else if (order === "salad") {
  price = 6; 
} else {
  document.write("Invalid order.");
}

let addOrder = confirm("Do you want to order more items?");


if (addOrder) {
  discount = 2; 
}

let finalPrice = price - discount;

document.write("Your total price is: " + finalPrice);
