var calcBmiButton = document.querySelector('#calc-button')
var searchTerm = "celebration"
var weight = document.querySelector('#weight')
var height = document.querySelector('#height')
var age = document.querySelector('#age')
var responseContainer = document.querySelector('#response-container')
var personalTrainer = document.querySelector('#personalTrainer')
calcBmiButton.onclick = function calculate(e) {
  e.preventDefault()

  fetch('https://fitness-calculator.p.rapidapi.com/bmi?age=' + age.value + '&weight=' + weight.value + '&height=' + height.value + '', {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
      "x-rapidapi-key": "043557ced7mshe054f32b40fd78fp165e75jsn9cbd7995960c"
    }
  })
    .then(response => response.json())
    .then(response => {
      var bmiP = document.createElement("p")
      var healthP = document.createElement("p")
      var personalTrainerP = document.createElement("p")
      bmiP.innerHTML = "<strong>BMI</strong>: " + response.bmi;
      healthP.innerHTML = "<strong>Health</strong>: " + response.health;
      personalTrainerP.innerHTML = '<strong>' + calculateBmi() + '</strong>'
      personalTrainer.appendChild(personalTrainerP);
      console.log(response.health);
      console.log(response.bmi);
      console.log(response.healthy_bmi_range);
      responseContainer.appendChild(bmiP)
      responseContainer.appendChild(healthP)
      return fetch(
        'https://api.giphy.com/v1/gifs/search?q=' +
          searchTerm +
          '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          console.log(response.data[0]);
          // Create a variable that will select the <div> where the GIF will be displayed
          var responseContainerEl = document.querySelector('#giphyapi');
    
          // Empty out the <div> before we append a GIF to it
          responseContainerEl.innerHTML = '';
    
          var gifImg = document.createElement('img');
          gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
    
          // Append 'gifImg' to the <div>
          responseContainerEl.appendChild(gifImg);
        });

    })
    .catch(err => {
      console.error(err);
    });
};
// Add localStorage through persisting the input of the user
function calculateBmi() {
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100)
    document.bmiForm.bmi.value = finalBmi
    if (finalBmi < 18.5) {
       return "John Doe"
    }
    if (finalBmi > 18.5 && finalBmi < 25) {
      return "Nora Doe"
    }
    if (finalBmi > 25) {
       return "Eric Doe"
    }
  }
   else {
    alert("Please Fill in everything correctly to get assigned to a Personal Trainer")
  }
}