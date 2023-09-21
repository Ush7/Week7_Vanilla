let now = new Date();
function formatDate(currentTime) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[currentTime.getDay()];
  let currentHour = currentTime.getHours();

  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }
  let formattedDate = `${currentDay} ${currentHour}:${currentMinutes} `;
  return formattedDate;
}
console.log(formatDate(now));
let displayTime = document.querySelector("h5");
displayTime.innerHTML = formatDate(now);

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
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
enterCityform.addEventListener("submit", displayCityname);
