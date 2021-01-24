//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
var weight = prompt("Please enter your weight");
var height = prompt("Please enter your height");


function bmiCalculator() {

    var interpretation = weight / Math.pow(height, 2);
    interpretation = Math.round(interpretation);

    if (interpretation < 18.5) {
        alert("Your BMI is " + interpretation + ", You are underweight. Try adding weight but dont get obese");
    }
    if (interpretation > 18.5 || interpretation === 24.9) {
        alert("Your BMI is " + interpretation + ", so you are normal weight. Good job, dont let any decieve you to add or reduce, it is bad for the health");
    }
    if (interpretation > 24.9) {
        alert("Your BMI is " + interpretation + ", so you are overweight. Try reducing, obesity isnt good for the health");
    }
    return interpretation;
}


bmiCalculator();





