var firstPerson = prompt("What is your name?");
var secondPerson = prompt("What is your crush name");

var percentage = Math.random() * 100;
percentage = Math.floor(percentage) + 1;
alert("The chance between " + firstPerson + " and " + secondPerson + " is " + percentage + "%");

if (percentage < 40 && percentage <= 49) {
    alert("The percentage between " + firstPerson + " and " + secondPerson + " wo better break-up, as your love doctor I prescribe break-up💖")
}
if (percentage > 49 && percentage < 70) {
    alert("The percentage between " + firstPerson + " and " + secondPerson + " una try sha, as your love doctor I prescribe working on it, or leave it to crash💖")
}
if (percentage >= 70) {
    alert("The percentage between " + firstPerson + " and " + secondPerson + " awwn, clap for ya self, as your love doctor I prescribe staying together, cause Man you were matchmade in heaven💖")
}
