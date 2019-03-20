let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById('sky').innerHTML = "Currently: " + weatherData.weather[0].main;
    document.getElementById('currenttemp').innerHTML = "High Temp: " + weatherData.main.temp_max + " &deg;F";
    document.getElementById('humid').innerHTML = "Humidity: " + weatherData.main.humidity + "%";
    document.getElementById('speed').innerHTML = "Wind Speed: " + weatherData.wind.speed + " mph";

    let temp = weatherData.main.temp_max;
    let speed = weatherData.wind.speed;

    let windSpeed = Math.pow(speed, 0.16);
    let result = 35.74 + (0.6215 * temp) - (35.75 * windSpeed) + 0.4275 * temp * windSpeed;
    let x = Math.round(result);

    document.getElementById('output').innerHTML = "Wind Chill: " + x + " &deg;F";
}

