let titleEl = document.querySelector("#tile");
let cityForm = document.querySelector("#city-form");
let cityInput = document.querySelector("#city");
let pastLocations = document.querySelector("#past-locate");
let currentWeather = document.querySelector("#current-weather");
let weatherSearch = document.querySelector("#weather-term");
let pTiltel = document.querySelector("#under-tile");


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
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";

        fetch(queryURL)
        .then(function (res){
            if (res.ok) {
                console.log(res);
                res.json().then(function (data) {
                    console.log(data);
                    weatherSearch.innerHTML = `<h2 class="text-center mb-4">5-Day Forecast:</h2>`;
                    titleEl.textContent = data.city.name;
                    pTiltel.textContent = "Country: " + data.city.country;
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
            weatherSearch.innerHTML = "";
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
                const today = dayjs(); // Get the current date
                const day = today.add(i, 'day'); // Calculate the date for the current day in the loop
                const formattedDate = day.format('MMMM D, YYYY');
                let dayWeather = weather.list[i].main.temp;
                console.log(`Temperature for Day ${i + 1}: ${dayWeather}°F`);
                weatherSearch.innerHTML += `
                <div class="card text-white bg-primary" style="max-width: 10rem; max-height: 18rem; margin-left: 18px; margin-top:10px; padding-bottom: 15px; ">
                <h5 class="card-title mt-2">${formattedDate}</h5>
                <img src="http://openweathermap.org/img/w/${weather.list[i].weather[0].icon}.png" alt="weather icon" style="max-width: 8.5rem;">
                <h6 class="card-text mb-2">Temp : ${weather.list[i].main.temp}°F</h6>
                <h6 class="card-text mb-2">Wind : ${weather.list[i].wind.speed}MPH</h6>
                <h6 class="card-text mb-2">Humidity : ${weather.list[i].main.humidity}%</h6>
                </div>
                `
            }
        };
        
        


















    cityForm.addEventListener("submit", formSubmit);