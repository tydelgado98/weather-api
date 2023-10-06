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
        let queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";

        fetch(queryURL)
        .then(function (res){
            if (res.ok) {
                console.log(res);
                res.json().then(function (data) {
                    console.log(data);
                    displayFiveDays(data, city);

                });
            } else {
                alert("Error: " + res.statusText);
            }
        }
        )}; 


        let displayWeather = function (weather, searchCity) {

            console.log(weather);
            pastLocations.innerHTML = "";
            let oldLocal = document.createElement('button');
            oldLocal.textContent = searchCity;
            oldLocal.classList = "btn btn-secondary btn-lg btn-block";
            pastLocations.appendChild(oldLocal);
            
            weatherSearch.innerHTML = `
            <div class="card text-white bg-primary" style="max-width: 15rem;">
            <h5 class="card-title mt-3">City: ${weather.name}</h5>
            <p class="card-text mb-3">Temp° : ${weather.main.temp}</p>
            <p class="card-text mb-3">Min° : ${weather.main.temp_min}</p>
            <p class="card-text mb-3">Max° : ${weather.main.temp_max}</p>
            </div>
            `
            
        };

        let displayFiveDays = function (weather, searchCity) {
            for (let i = 0; i < 5; i++) {

                let dayWeather = weather.list[i].main.temp;
                console.log(`Temperature for Day ${i + 1}: ${dayWeather}°F`);
            }
        };
        
        


















    cityForm.addEventListener("submit", formSubmit);