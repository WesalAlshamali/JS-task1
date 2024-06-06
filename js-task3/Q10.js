let user=prompt("Enter your type as a user (Student OR teacher): ");
let numofbook=prompt("Enter the number of book");
if(user==='student'){
    if(numofbook>=3){
        document.write("allowed")
    }
    else{
        document.write("enter a coorect number");
    }
}else if(user==='teacher'){
    if(numofbook>=5){
        document.write("allowed")
    }
    else{
        document.write("enter a coorect number");
    }
}
