var question = prompt("enter your age");
function lifeInWeeks() {
   
/************Don't change the code above************/    
    
    //Write your code here.
   
    var yearsRemaining = 90 - question;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    alert("You have " + days + " days " + weeks + " weeks and " + months + " months left" )
    
    
    
    
/*************Don't change the code below**********/
}

lifeInWeeks();