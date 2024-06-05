
let weather = prompt("Enter a temperature:");


if (weather < 20) {
   document.write("The Weather is cold");
} 
else if(weather >= 20 && weather <= 30)  {
    document.write("The Weather is Warm");
}
else if(weather >30)  {
    document.write("The Weather is Hot");
}
