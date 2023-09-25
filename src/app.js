function formatDate(timestamp) {
  let date = new Date(timestamp);
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  return `${currentDay} ${currentHour}:${currentMinutes}`;
}

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weatherDescription").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

function displayCityname(event) {
  event.preventDefault();
  let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let city = document.querySelector("#enter-city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let displayCity = document.querySelector("h2");
let enterCityform = document.querySelector("#enter-city-form");
let dateElement = document.querySelector("#date");
enterCityform.addEventListener("submit", displayCityname);
