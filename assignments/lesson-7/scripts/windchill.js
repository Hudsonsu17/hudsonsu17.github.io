let temp = parseInt(document.getElementById('temp').innerHTML);
let speed = parseInt(document.getElementById('speed').innerHTML);

let windSpeed = Math.pow(speed, 0.16);
let result = 35.74 + (0.6215 * temp) - (35.75 * windSpeed) + 0.4275 * temp * windSpeed;

document.getElementById('output').innerHTML = "Wind Chill: " + result + " &deg;F";