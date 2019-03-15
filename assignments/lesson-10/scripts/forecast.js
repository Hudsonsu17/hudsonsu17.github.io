let forecastRequest = new XMLHttpRequest();
let apiURLline = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';
forecastRequest.open('Get', apiURLline, true);
forecastRequest.send();

forecastRequest.onload = function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    let temp = [];
    let day = 1;

    // for (let i = 0; i <= forecastData.list.length; i++) {
    //     if (forecastData.list[i].dt_txt.includes('18:00:00')) {
    //         temp[day] = forecastData.list[i].main.temp;
    //         day++
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
        let icon = "http://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";
        let desc = forecastData.list[i].weather[0].description;
        document.getElementById('foreimg' + i).setAttribute('src', icon);
        document.getElementById('foreimg' + i).setAttribute('alt', desc);
    }
}