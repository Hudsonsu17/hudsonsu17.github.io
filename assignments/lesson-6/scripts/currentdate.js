//This is to get the current date to put into the footer of the Town Page//
var today = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//let year = today.getFullYear();
var month = months[today.getMonth()];
//let day = today.getDay();


//let date = today + ", " + day + month + year;

document.getElementById("currentdate").innerhtml = month;

//Wednesday, 13 Febraury 2019//
