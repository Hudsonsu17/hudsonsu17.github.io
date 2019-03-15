let forecastRequest = new XMLHttpRequest();
let apiURLline = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';
forecastRequest.open('Get', apiURLline, true);
forecastRequest.send();

forecastRequest.onload = function () {
    let forecastData = JSON.parse(forecastRequest.responseText);

    let temp = [];
    let day = 1;

    // let time = forecastData.list;

    // for (let i = 1; i <= time.length; i++) {
    //         if (time.dt_txt.includes('18:00:00')) {
    //         temp[day] = time.main.temp;
    //         // let icon = "https://openweathermap.org/img/w" + forecastData.weather[0].icon + ".png"
    //         // let desc = forecastData.weather[0].description;
    //     }
    // }

    forecastData.list.forEach(time => {
        if (time.dt_txt.includes('18:00:00')) {
            temp[day] = time.main.temp;
            day++;
        }
    });

    for (let i = 1; i <= 5; i++) {
        document.getElementById('forecast' + i).innerHTML = temp[i] + " &deg;F";
    }

    let icon = "https://openweathermap.org/img/w/" + forecastData.weather[0].icon + ".png";
    let desc = forecastData.weather[0].description;

    //for (let i = 1; i <= 5; i++) {
        document.getElementById('foreimg1').setAttribute('src', icon);
        document.getElementById('foreimg1').setAttribute('alt', desc);
    //}
}