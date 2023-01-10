function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let weatherDescription = document.querySelector("#description");
  let windElement = document.querySelector("#wind");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  weatherDescription.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
}

let apiKey = "9c820d6e689b9a86e1733c7722549767";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Clonakilty&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
