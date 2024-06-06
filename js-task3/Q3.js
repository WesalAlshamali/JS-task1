let grads=prompt("Enter your Exam Grade:");
if (grads>75){
    let ask=confirm("Are you completed any bonus assignments? ");
    if(ask){
        grads+=5;
       
    }
}

if (grads >= 90) {
     document.write('A') ;
            } 
else if (grads >= 80) {
    document.write('B') ;
            } 
else if (grads >= 70) {
    document.write('C');
            } 
else if (grads >= 60) {
    document.write('D');
            } 
else {
   document.write('F');
            }