function formatDate(timestamp) {
  let date = new Date(timestamp);
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
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
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let currentDay = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[currentDay];
}

function displayWeatherCondition(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  celsiusTemperature = response.data.main.temp;
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#weatherDescription").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(city) {
  let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function displayCityname(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-city-input");
  search(city.value);
}
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrentheitTemperature = (celsiusTemperature * 9) / 5 + 32;

  temperatureElement.innerHTML = Math.round(fahrentheitTemperature);
}
function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
let celsiusTemperature = null;

let enterCityform = document.querySelector("#enter-city-form");
enterCityform.addEventListener("submit", displayCityname);

let fahrenheitLinkElement = document.querySelector("#fahrenheitLink");
fahrenheitLinkElement.addEventListener("click", displayFahrenheitTemperature);

let celsiusLinkElement = document.querySelector("#celsiusLink");
celsiusLinkElement.addEventListener("click", displayCelsiusTemperature);

search("Toronto");
