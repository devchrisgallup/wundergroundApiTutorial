// process request
function getWeather() { 
    console.log('works');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        output = document.getElementById('weather');
        weatherData = JSON.parse(this.responseText);
        output.innerHTML = weatherData.current_observation.temp_f;
    }
    };
    xhttp.open("GET", "http://api.wunderground.com/api/yourkey/geolookup/conditions/q/IA/Cedar_Rapids.json", true);
    xhttp.send();
}
// eventlisteners 
document.getElementById('getWeather').addEventListener('click', getWeather, false);