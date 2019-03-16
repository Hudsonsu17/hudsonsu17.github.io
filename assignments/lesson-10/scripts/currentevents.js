let events = document.querySelector('#events');

let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let prestondata = request.response;
    let preston = prestondata['towns'];

    for (let i = 0; i < preston.length; i++) {
        if (preston[i].name == 'Preston') {
            events.textContent = preston[i].events;
            let town = preston[i].events;

            for (let i = 0; i < town.length; i++) {
                let eventInfo = document.createElement('li');

                eventInfo.textContent = town[i];
                events.appendChild(eventsInfo);
            }
        }
    }

    // request.onload = function () {
    //     let fhdata = request.response;
    //     let fishhaven = fhdata['towns'];

    //     for (let i = 0; i < fishhaven.length; i++) {
    //         if (fishhaven[i].name == 'Fish Haven') {
    //             events.textContent = fishhaven[i].events;
    //         }
    //     }
    // }
}