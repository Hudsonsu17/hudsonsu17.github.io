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