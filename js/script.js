fetch("https://fitness-calculator.p.rapidapi.com/bmi", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
    "x-rapidapi-key": "043557ced7mshe054f32b40fd78fp165e75jsn9cbd7995960c"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
function calculateBmi() {
  var weight = document.bmiForm.weight.value
  var height = document.bmiForm.height.value
  if(weight > 0 && height > 0){ 
  var finalBmi = weight/(height/100*height/100)
  document.bmiForm.bmi.value = finalBmi
  if(finalBmi < 18.5){
  document.bmiForm.meaning.value = "John Doe"
  }
  if(finalBmi > 18.5 && finalBmi < 25){
  document.bmiForm.meaning.value = "Nora Doe"
  }
  if(finalBmi > 25){
  document.bmiForm.meaning.value = "Eric Doe"
  }
  }
  else{
  alert("Please Fill in everything correctly to get assigned to a Personal Trainer")
  }
  }