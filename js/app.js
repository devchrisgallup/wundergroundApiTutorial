// process request
function getWeather() { 
    // create XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    // readyState 4 means the request is complete
    // status 200 means was successful
    if (this.readyState == 4 && this.status == 200) {
        // output div
        output = document.getElementById('weather');
        // construct object
        weatherData = JSON.parse(this.responseText);
        console.log(weatherData);
        // place object key/value into div
        output.innerHTML = weatherData.current_observation.temp_f + "&deg;";
    }
    };
    // calls the open 
    xhttp.open("GET", "http://api.wunderground.com/api/YouKey/geolookup/conditions/q/IA/Cedar_Rapids.json", true);
    xhttp.send();
}
// eventlisteners 
document.getElementById('getWeather').addEventListener('click', getWeather, false);