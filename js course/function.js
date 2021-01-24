var amtGiven = prompt("How much money are you giving me for the milk?");
var amtPerBottle = prompt("How much is a bottle of milk?")
function getMilk() {   

 

  alert("I will buy " + calcBottles(amtGiven, amtPerBottle) + " bottles of milk" )
  alert("Hello master, I am back with the milks, your change is $" + calcChange(amtGiven, amtPerBottle) )
}
getMilk();

function calcBottles(startingMoney, costPerBottle){
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}
function calcChange(startingAmount, costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}