let titleEl = document.querySelector("#tile");
let cityForm = document.querySelector("#city-form");
let cityInput = document.querySelector("#city");
let pastLocations = document.querySelector("#past-locate");
let currentWeather = document.querySelector("#current-weather");
let weatherSearch = document.querySelector("#weather-term");


let APIKey = "3be2b2b6acc21e3760901d15acf91f72";
// make a function to get the weather
// get api key from open weather
// make a fetch request to the url
// make a function to display the weather
// get the data from the api and put it in the html
// make cards for the 5 day forecast

// 


let formSubmit = function (event) {
 event.preventDefault();

    let cityName = cityInput.value.trim();
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    console.log(cityName);

    if (cityName) {
        getCityWeather(cityName);
     
        // pastSearch(cityName);
        cityInput.value = '';
    } else {
        alert("Please enter a City");
    }
};


    let getCityWeather = function (city) {
        let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

        fetch(queryURL)
        .then(function (res){
            if (res.ok) {
                console.log(res);
                res.json().then(function (data) {
                    console.log(data);
                    displayWeather(data, city);

                });
            } else {
                alert("Error: " + res.statusText);
            }
        }
        )}; 


        let displayWeather = function (weather, searchCity) {
            
            
            weatherSearch.textContent = searchCity;

            for(let i = 0; weather[i]; i++) {
           





        };









        // let pastSearch = function (pastSearch) {

//i want to make a if statement on countries and show their abreviations
// let displayWeather = function (weather, searchCity) {
//     // clear old content
//     currentWeather.textContent = "";
//     titleEl.textContent = searchCity;












    cityForm.addEventListener("submit", formSubmit);