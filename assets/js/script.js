let titleEl = document.querySelector("#tile");
let cityForm = document.querySelector("#city-form");
let cityInput = document.querySelector("#city");
let pastLocations = document.querySelector("#past-locate");
let currentWeather = document.querySelector("#current-weather");



// make a function to get the weather
// get api key from open weather
// make a fetch request to the url




let formSubmit = function (event) {

    event.preventDefault();
    let cityName = cityInput.value.trim();
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
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