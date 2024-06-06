let weight=prompt("Please Enter your weight in kilograms:");
let height=prompt("Please Enter your height in meters:");
let BMI=weight/(height^2);
if(BMI<18){
    document.write("Underweight");
}
else if (BMI>18.6 && BMI<24.9){
    document.write("Normal weight");
}
else if(BMI>25 && BMI<29.9){
    document.write("Overweight");
}
else if(BMI>30){
    document.write("Obesity");
}