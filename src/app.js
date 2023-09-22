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
let displayTime = document.querySelector("#currentDate");
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
  let apiKey = "3eo0fetfbb61a575e45b64ff05342834";
  let city = document.querySelector("#enter-city-input").value;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query= ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let displayCity = document.querySelector("h2");
let enterCityform = document.querySelector("#enter-city-form");
enterCityform.addEventListener("submit", displayCityname);
