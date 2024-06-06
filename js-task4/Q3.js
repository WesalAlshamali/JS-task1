let angle1 = 40;  
let angle2 = 55;  
let angle3 = 65;  

let sumOfAngles = angle1 + angle2 + angle3;
let isValidTriangle = (sumOfAngles === 180);

if (isValidTriangle) {
   document.write("The triangle is valid.");
} else {
   document.write("The triangle is not valid.");
}