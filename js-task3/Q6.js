let temp=prompt("Enter the tempreture in Celsius :");
temp = parseFloat(temp);
let tempinF=0;
if(temp<=0){
    
    tempinF = temp+237;
    document.write("Below freezing:"+tempinF );
}
else if(temp>=100){
    tempinF =temp+237;
    document.write("Above boiling:"+tempinF );

}
else{
    tempinF =temp+237;
    document.write("Normal:"+tempinF );
}
