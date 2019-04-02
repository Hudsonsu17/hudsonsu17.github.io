//this is to provide the current temperature for the temple

let meridianRequest = new XMLHttpRequest();
let meridianWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5600685&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';
meridianRequest.open('Get', meridianWeather, true);
meridianRequest.send();

meridianRequest.onload =  function () {
    let weatherData = JSON.parse(meridianRequest.responseText);
    console.log(weatherData);

    document.getElementById('meridian').innerHTML = "CURRENT TEMPERATURE: " + weatherData.main.temp + " &deg;F";
    document.getElementById('forecast1').innerHTML = "WEATHER CONDITION: " + weatherData.weather[0].description;
}

//This is to get session and closing schedules

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
        if (towns[i].name == "Fish Haven") {
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