let forecastRequest = new XMLHttpRequest();
let apiURLline = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';
forecastRequest.open('Get', apiURLline, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    document.getElementById("forecast1").innerHTML = forecastData.main.temp;

    let icon = "http://openweathermap.org/img/w/" + forecastData.weather[0].icon + ".png";
    let desc = forecastData.weather[0].description;

   
    document.getElementById('foreimg1').setAttribute('src', icon);
    document.getElementById('foreimg1').setAttribute('alt', desc);
}