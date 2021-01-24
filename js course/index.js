// The name
var name = prompt('What is your name?');
// Isolate First letter
var firstLetter = name.slice(0,1);
//  Change first letter to Uppercase
var capitalisedFirstName = firstLetter.toUpperCase();
// Isolate The remaining latters
var otherLetters = name.slice(1, name.length);
//  Lowers case remaining letters
otherLetters = otherLetters.toLowerCase();
// Concate The Letters
var capitalisedName = capitalisedFirstName + otherLetters;
// Greet Uset
alert("Hello There, " + capitalisedName);