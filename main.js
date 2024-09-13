function bmiCalculator() {
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
height = height/100
let bmi = weight/Math.pow(height,2);
let resulttext = "Your BMI is " + Math.round(bmi);
document.getElementById("result").innerText = resulttext;
}