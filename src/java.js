// SHOW SEARCHED OUTPUT !!!!!!!!

// Display Searched City

function showSearchedOutput (event) {
event.preventDefault();
let searchBox = document.querySelector ("#search-box");
let displayCity = document.querySelector ("#searched-city");
displayCity.innerHTML = searchBox.value;
 

// Get Searched city value and call API by City when Search form is submitted

  displayData();
  function displayData () {
    let cityName = document.querySelector("#searched-city").innerHTML;
    let apiKey = "b1d85d3727e610039e9f3b93d686021e";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(showMessage);
    console.log(cityName);

// When Search Button is submitted: Retrive from API and display City Name, Country, Date, Weather, Temperature, Image, Wind, Humidity

    function showMessage(result) {
      console.log(result);

      let city = document.querySelector("#searched-city");
      console.log(city);

      let country = document.querySelector("#country");
      country.innerHTML = (result.data.sys.country);
      console.log(country);

      let date = document.querySelector("#current-date");
      date.innerHTML = displayDate (result.data.dt * 1000);
      console.log (date);

      let weather = document.querySelector("#current-weather");
      weather.innerHTML = (result.data.weather[0].main);
      console.log(weather);

      let temp = document.querySelector("#temp-today");
      temp.innerHTML = Math.round(result.data.main.temp);
      console.log(temp);
      
      let drawing = document.querySelector("#drawing");
      drawing.innerHTML = changeImage(result);

      function changeImage (result) {

                    let weather = document.querySelector("#current-weather");
                    weather.innerHTML = (result.data.weather[0].main);
                    console.log(weather);

                    if ( weather.innerHTML === "Clouds") {
                    document.getElementById("drawing").src = "img/Clouds.gif";
                    }
                    else if ( weather.innerHTML === "Rain") {
                    document.getElementById("drawing").src = "img/Rain.gif";
                                }
                    else if (weather.innerHTML === "Thunderstorm") {
                    document.getElementById("drawing").src = "img/Thunderstorm.gif";
                                }
                    else if (weather.innerHTML=== "Snow") {
                    document.getElementById("drawing").src = "img/Snow.gif";
                                }
                    else if (weather.innerHTML === "Clear") {
                    document.getElementById("drawing").src = "img/Clear.gif"
                                }
                    else if (weather.innerHTML === "Drizzle") {
                    document.getElementById("drawing").src = "img/Drizzle.gif"
                                }
                    else if (weather.innerHTML === "Ash" ||weather.innerHTML === "Dust" || weather.innerHTML === "Fog" || weather.innerHTML === "Haze" || weather.innerHTML === "Mist" || weather.innerHTML === "Sand" || weather.innerHTML === "Smoke" ){
                    document.getElementById("drawing").src = "img/Atmosphere.gif"
                                }
                    else {
                        document.getElementById("drawing").src = "img/Other.png"
                      }}

      let hum = document.querySelector("#humidity");
      hum.innerHTML = (result.data.main.humidity);
      console.log(hum);

      let wind = document.querySelector("#wind");
      wind.innerHTML = (result.data.wind.speed);
      console.log(wind);

      let tempTodayF = Math.round (((Math.round(result.data.main.temp)) * 9/5) + 32);
      let fahrenheit = document.querySelector("#fahrenheit-link");
      let celsius = document.querySelector("#celsius-link");

      fahrenheit.onclick = function getCurrentFar() {
      let tempToday = document.querySelector("#temp-today");
      let tempTodayF = Math.round (((Math.round(result.data.main.temp)) * 9/5) + 32);
      return tempToday.innerHTML = tempTodayF;}

      fahrenheit.onclick = function changeColorFar () {
      document.querySelector("#fahrenheit-link").style.color = "#535353";
      document.querySelector("#celsius-link").style.color = "#d9adad"; }

      celsius.onclick = function showMessage(results) {
      let tempToday = document.querySelector("#temp-today");
      tempToday.innerHTML = Math.round(result.data.main.temp);}

      celsius.onclick = function changeColorCel () {
          document.querySelector("#celsius-link").style.color = "#535353";
          document.querySelector("#fahrenheit-link").style.color = "#d9adad";}

    }
  }
}

// Aded event listener on Search form

let searchForm = document.querySelector ("#search-form");
searchForm.addEventListener("submit", showSearchedOutput);

// Display Celsius and Fahrenheit on click (C°/F°)

function getCel (event) {
event.preventDefault();
tempToday.innerHTML = 17;
}

function getFar(event) {
event.preventDefault ();
return tempToday.innerHTML = tempTodayF;
}

// Celsius e Fahrenheit link change color if clicked. 
// If clicked Search button or Current they revert to original color

document.querySelector("#fahrenheit-link").onclick = function changeColorFar () {
document.querySelector("#fahrenheit-link").style.color = "#535353";
document.querySelector("#celsius-link").style.color = "#d9adad";
}

document.querySelector("#celsius-link").onclick = function changeColorCel () {
document.querySelector("#celsius-link").style.color = "#535353";
document.querySelector("#fahrenheit-link").style.color = "#d9adad";
}

// Make Celsius and Fahrenheit conversion

let tempToday = document.querySelector("#temp-today");
tempToday.innerHTML = 17
let tempTodayF = Math.round (tempToday.innerHTML * 9/5) + 32;

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", getCel);
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", getFar);

// CURRENT CITY ACTION !!!!

// Display Current Date

function displayDate (timestamp) {

        let date = new Date (timestamp);
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = days[date.getDay()];
        let fulldate= date.getDate();
        let months = [ "January", "February", "March", "April","May","June", "July", "August", "September","October","November", "December"];
        let month = months[date.getMonth()];
        let hour = date.getHours();
        if (hour < 10) {hour =  `0${hour}`;}
        let mins = date.getMinutes();
        if (mins < 10) {mins =  `0${mins}`;}
        let time = `${hour}:${mins}`;
        return `Last update: ${day} ${fulldate}  ${month} ${time}`;}

// Get and Show Current Position and Weather in C° and F°

function getCurrentPosition (event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCoords);

  function getCoords (position) {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "b1d85d3727e610039e9f3b93d686021e";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(showMessage);
  
    function showMessage(result) {
      console.log(result);
      let currentTempToday = document.querySelector("#temp-today");
      currentTempToday.innerHTML = Math.round(result.data.main.temp);
      console.log(currentTempToday);

      let currentCity = document.querySelector("#searched-city");
      currentCity.innerHTML = (result.data.name);
      console.log(currentCity);

      let currentCountry = document.querySelector("#country");
      country.innerHTML = (result.data.sys.country);
      console.log(currentCountry);

      let currentFullDate = document.querySelector ("#current-date");
      currentFullDate.innerHTML = displayDate(result.data.dt *1000);

      let currentWeather = document.querySelector("#current-weather");
      currentWeather.innerHTML = (result.data.weather[0].main);
      console.log(currentWeather);

      changeImage ();
    function changeImage () {

      let currentWeather = document.querySelector("#current-weather");
      currentWeather.innerHTML = (result.data.weather[0].main);

      if ( currentWeather.innerHTML === "Clouds") {
      document.getElementById("drawing").src = "img/Clouds.gif";
      }
      else if ( currentWeather.innerHTML === "Rain") {
      document.getElementById("drawing").src = "img/Rain.gif";
                  }
      else if (currentWeather.innerHTML === "Thunderstorm") {
      document.getElementById("drawing").src = "img/Thunderstorm.gif";
                  }
      else if (currentWeather.innerHTML=== "Snow") {
      document.getElementById("drawing").src = "img/Snow.gif";
                  }
      else if (currentWeather.innerHTML === "Clear") {
      document.getElementById("drawing").src = "img/Clear.gif"
                  }
      else if (currentWeather.innerHTML === "Drizzle") {
      document.getElementById("drawing").src = "img/Drizzle.gif"
                  }
      else if (currentWeather.innerHTML === "Ash" ||currentWeather.innerHTML === "Dust" || currentWeather.innerHTML === "Fog" || currentWeather.innerHTML === "Haze" || currentWeather.innerHTML === "Mist" || currentWeather.innerHTML === "Sand" || currentWeather.innerHTML === "Smoke" ){
      document.getElementById("drawing").src = "img/Atmosphere.gif"
                  }
      else {
          document.getElementById("drawing").src = "img/Other.png"
        }
      }
  
    let currentHum = document.querySelector("#humidity");
    currentHum.innerHTML = (result.data.main.humidity);
    console.log(currentHum);

    let currentWind = document.querySelector("#wind");
    wind.innerHTML = (result.data.wind.speed);
    console.log(wind);

    let currentTempTodayF = Math.round (((Math.round(result.data.main.temp)) * 9/5) + 32);
    let currentFahrenheit = document.querySelector("#fahrenheit-link");
    let currentCelsius = document.querySelector("#celsius-link");

    currentFahrenheit.onclick = function getCurrentFar() {
    let currentTempToday = document.querySelector("#temp-today");
    let currentTempTodayF = Math.round (((Math.round(result.data.main.temp)) * 9/5) + 32);
    return currentTempToday.innerHTML = currentTempTodayF; }

    currentFahrenheit.onclick = function changeColorFar () {
    document.querySelector("#fahrenheit-link").style.color = "#535353";
    document.querySelector("#celsius-link").style.color = "#d9adad"; }
  

    currentCelsius.onclick = function showMessage(results) {
    let currentTempToday = document.querySelector("#temp-today");
    currentTempToday.innerHTML = Math.round(result.data.main.temp);}

    currentCelsius.onclick = function changeColorCel () {
        document.querySelector("#celsius-link").style.color = "#535353";
        document.querySelector("#fahrenheit-link").style.color = "#d9adad";
        }
 }}}

// Add Event Listener on CURRENT button

let currentPositionButton = document.querySelector("#search-button-current");
currentPositionButton.addEventListener ("click", getCurrentPosition)

