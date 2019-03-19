const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let towndata = request.response;
    let towns = towndata['towns'];

    let output = document.querySelector('article');

    //this is for the Prestion section
    towns.forEach(town => {
        if (town.name == 'Preston') {
            let para = document.createElement('p');
            let homeH3 = document.createElement('h3');
            let motto = document.createElement('div');
            motto.setAttribute("class", "jsonmotto");
            let year = document.createElement('div');
            year.setAttribute("class", "notes1");
            let population = document.createElement('div');
            population.setAttribute("class", "notes1");
            let rainfall = document.createElement('div');
            rainfall.setAttribute("class", "notes1");
            let x = document.createElement("img");
            x.setAttribute("src", "images/preston.jpg");
            x.setAttribute("alt", "Preston Town");
            homeH3.textContent = town.name;
            motto.textContent = town.motto;
            year.textContent = 'Year Founded: ' + town.yearFounded;
            population.textContent = 'Population: ' + town.currentPopulation;
            rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
            para.appendChild(homeH3);
            para.appendChild(motto);
            para.appendChild(year);
            para.appendChild(population);
            para.appendChild(rainfall);
            para.appendChild(x);
            output.appendChild(para);
        }
    });
    // This is for the Soda Springs section
    towns.forEach(town => {
        if (town.name == 'Soda Springs') {
            let para = document.createElement('p');
            let homeH3 = document.createElement('h3');
            let motto = document.createElement('div');
            motto.setAttribute("class", "jsonmotto");
            let year = document.createElement('div');
            year.setAttribute("class", "notes");
            let population = document.createElement('div');
            population.setAttribute("class", "notes");
            let rainfall = document.createElement('div');
            rainfall.setAttribute("class", "notes");
            let x = document.createElement("img");
            x.setAttribute("src", "images/sodasprings.jpg");
            x.setAttribute("alt", "Soda Springs Town");
            homeH3.textContent = town.name;
            motto.textContent = town.motto;
            year.textContent = 'Year Founded: ' + town.yearFounded;
            population.textContent = 'Population: ' + town.currentPopulation;
            rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
            para.appendChild(homeH3);
            para.appendChild(motto);
            para.appendChild(year);
            para.appendChild(population);
            para.appendChild(rainfall);
            para.appendChild(x);
            output.appendChild(para);
        }
    });
    // This is for the Fish Haven section
    towns.forEach(town => {
        if (town.name == 'Fish Haven') {
            let para = document.createElement('p');
            let homeH3 = document.createElement('h3');
            let motto = document.createElement('div');
            motto.setAttribute("class", "jsonmotto");
            let year = document.createElement('div');
            year.setAttribute("class", "notes1");
            let population = document.createElement('div');
            population.setAttribute("class", "notes1");
            let rainfall = document.createElement('div');
            rainfall.setAttribute("class", "notes1");
            let x = document.createElement("img");
            x.setAttribute("src", "images/fishhaven.jpg");
            x.setAttribute("alt", "Fish Haven Town");
            homeH3.textContent = town.name;
            motto.textContent = town.motto;
            year.textContent = 'Year Founded: ' + town.yearFounded;
            population.textContent = 'Population: ' + town.currentPopulation;
            rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
            para.appendChild(homeH3);
            para.appendChild(motto);
            para.appendChild(year);
            para.appendChild(population);
            para.appendChild(rainfall);
            para.appendChild(x);
            output.appendChild(para);
        }
    });
};
