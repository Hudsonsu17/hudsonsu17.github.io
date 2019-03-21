const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let towndata = request.response;
    let towns = towndata['towns'];
    let nameArray = ["Preston", "Soda Springs", "Fish Haven"];

    let output = document.querySelector('article');


    for (i = 0; i < towns.length; i++)
        for (t = 0; t < nameArray.length; t++) {
            if (towns[i].name == nameArray[t]) {
                let para = document.createElement('p');
                let homeH3 = document.createElement('h3');
                let motto = document.createElement('div');
                motto.setAttribute("class", "jsonmotto");
                let year = document.createElement('div');
                let population = document.createElement('div');
                let rainfall = document.createElement('div');
                if (towns[i].name == "Soda Springs") {
                    rainfall.setAttribute("class", "notes");
                    population.setAttribute("class", "notes");
                    year.setAttribute("class", "notes");
                }
                else {
                    rainfall.setAttribute("class", "notes1");
                    population.setAttribute("class", "notes1");
                    year.setAttribute("class", "notes1");
                }
                let x = document.createElement("img");
                x.setAttribute("src", "images/" + towns[i].name + ".jpg");
                x.setAttribute("alt", towns[i].name);
                homeH3.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                year.textContent = 'Year Founded: ' + towns[i].yearFounded;
                population.textContent = 'Population: ' + towns[i].currentPopulation;
                rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                para.appendChild(homeH3);
                para.appendChild(motto);
                para.appendChild(year);
                para.appendChild(population);
                para.appendChild(rainfall);
                para.appendChild(x);
                output.appendChild(para);
            }
        }
}
