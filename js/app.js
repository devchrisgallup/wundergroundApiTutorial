// start up 
function startUp() {
    fetchData();
}

// Ajax call to wunderground's API
function fetchData() {
    // create XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    // readyState 4 means the request is complete
    // status 200 means was successful
    if (this.readyState == 4 && this.status == 200) {
        // construct object
        weatherData = JSON.parse(this.responseText);
        getLocation();
    }
    };
    // calls the open 
    xhttp.open("GET", "http://api.wunderground.com/api/yourkey/geolookup/conditions/q/MO/KANSAS_CITY.json", true);
    xhttp.send();  
}

// get location
function getLocation() {
    // output div
    locationDiv = document.getElementById('locationDiv');
    console.log(weatherData);
    // place object key/value into div
    locationDiv.innerHTML = weatherData.current_observation.observation_location.full;    
}

// process request
function getWeather() { 
    // output div
    output = document.getElementById('weather');
    conditionDiv = document.getElementById('condition');
    humidityDiv = document.getElementById('humidity');
    console.log(weatherData);
    // place object key/value into div
    document.getElementById('currentTempText').className = 'showText';
    output.innerHTML = weatherData.current_observation.temp_f + "&deg;";
    document.getElementById('currentConditionText').className = 'showText';
    conditionDiv.innerHTML = weatherData.current_observation.weather;
    document.getElementById('currentHumidityText').className = 'showText';
    humidityDiv.innerHTML = weatherData.current_observation.relative_humidity;
}

// eventlisteners 
document.getElementById('getWeather').addEventListener('click', getWeather, false);
window.addEventListener('load', startUp, false);