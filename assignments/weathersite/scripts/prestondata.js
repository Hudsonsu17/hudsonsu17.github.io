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

let forecastRequest = new XMLHttpRequest();
let apiURLline = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';
forecastRequest.open('Get', apiURLline, true);
forecastRequest.send();

forecastRequest.onload = function () {
    let forecastData = JSON.parse(forecastRequest.responseText);

    let m = new Date();
    let s = new Array(11);
    s[0] = "Sun";
    s[1] = "Mon";
    s[2] = "Tue";
    s[3] = "Wed";
    s[4] = "Thu";
    s[5] = "Fri";
    s[6] = "Sat";
    s[7] = "Sun";
    s[8] = "Mon";
    s[9] = "Tue";
    s[10] = "Wed";

    let n = s[m.getDay()];
    document.getElementById('current-day1').innerHTML = n;

    for (let i = 1; i < 5; i++) {
        n = m.getDay();
        let f = n + i;
        let g = s[f];
        document.getElementById('current-day' + (i + 1)).innerHTML = g;
    }

    let temp = [];
    let sun = 0;

    let sky = [];
    let hour = 1;

    let alten = [];
    let name = 1;

    for (let i = 0; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.match(/18:00:00/)) {
            temp[sun] = forecastData.list[i].main.temp;
            sun++;
        }
    }

    for (let i = 0; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.match(/18:00:00/)) {
            sky[hour] = forecastData.list[i].weather[0].icon;
            hour++;
        }
    }

    for (let i = 0; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.match(/18:00:00/)) {
            alten[name] = forecastData.list[i].weather[0].description;
            name++;
        }
    }

    for (let i = 1; i <= 5; i++) {
        document.getElementById('forecast' + i).innerHTML = temp[i - 1] + " &deg;F";
        let x = sky[i];
        let y = alten[i];
        let icon = "http://openweathermap.org/img/w/" + x + ".png";
        let desc = y;
        document.getElementById('foreimg' + i).setAttribute('src', icon);
        document.getElementById('foreimg' + i).setAttribute('alt', desc);
    }
}

let events = document.querySelector('#events');

let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let getData = request.response;
    let towns = getData['towns'];

    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston") {
            let prestonEvents = towns[i].events;
            let eventName = 0; 

            for (let j = 0; j < prestonEvents.length; j++) {
                let event = prestonEvents[eventName];
                eventName++;

            let eventSection = document.createElement('article');
            let h4List = document.createElement('h4');
            h4List.textContent = event;
            eventSection.appendChild(h4List);
            events.appendChild(eventSection);
  
            }
        }
    }
}
