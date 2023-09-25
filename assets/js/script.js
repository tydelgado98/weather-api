let titleEl = document.querySelector("#tile");
let cityForm = document.querySelector("#city-form");
let cityInput = document.querySelector("#city");
let pastLocations = document.querySelector("#past-locate");
let currentWeather = document.querySelector("#current-weather");

let formSubmit = function (event) {
    event.preventDefault();
    let cityName = cityInput.value.trim();
    console.log(cityName);
    if (cityName) {
        // getCityWeather(cityName);
        // getFiveDay(cityName);
        // pastSearch(cityName);
        cityInput.value = "";
    } else {
        alert("Please enter a City");
    } };






    cityForm.addEventListener("submit", formSubmit);