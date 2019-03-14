let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('sky').innerHTML = "Currently: " + weatherData.weather[0].main;
    document.getElementById('currenttemp').innerHTML = "High Temp: " + weatherData.main.temp_max + " &deg;F";
    document.getElementById('humid').innerHTML = "Humidity: " + weatherData.main.humidity + "%";
    document.getElementById('speed').innerHTML = "Wind Speed: " + weatherData.wind.speed + " mph";

}