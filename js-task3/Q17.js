
let color = prompt("Please enter the current color of the traffic light (Red, Yellow, Green):");



if (color === "red") {
    document.write("Action: Stop");
} else if (color === "yellow") {
    document.write("Action: Slow down");
} else if (color === "green") {
    document.write("Action: Go");
} else {
    document.write("Invalid color");
}