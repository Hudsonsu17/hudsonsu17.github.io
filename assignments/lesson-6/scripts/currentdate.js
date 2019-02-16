//This is to get the current date to put into the footer of the Town Page//
let today = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let year = today.getFullYear();
let month = months[today.getMonth()];
let day = today.getDay();


let date = today + ", " + day + month + year;

document.getElementById('currentdate').innerHTML = year;

//Wednesday, 13 Febraury 2019//
