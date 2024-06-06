let balance=prompt("Enter your balance:");
let withdrawal =prompt("Enter your withdrawal :");
balance = parseFloat(balance);
withdrawal = parseFloat(withdrawal);

if( withdrawal > 0 && withdrawal <= balance ){
   balance -= withdrawal;
    document.write("NEW BALANCE IS: "+balance);
}
else{
document.write("ERROR");
}




