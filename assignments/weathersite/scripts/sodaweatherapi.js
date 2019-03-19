let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById('sky').innerHTML = "Currently: " + weatherData.weather[0].main;
    document.getElementById('currenttemp').innerHTML = "High Temp: " + weatherData.main.temp_max + " &deg;F";
    document.getElementById('output').innerHTML = "Wind Chill: " + weatherData.wind.deg + " &deg;F";
    document.getElementById('humid').innerHTML = "Humidity: " + weatherData.main.humidity + "%";
    document.getElementById('speed').innerHTML = "Wind Speed: " + weatherData.wind.speed + " mph";

}