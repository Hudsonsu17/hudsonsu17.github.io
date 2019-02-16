function toggleMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}

function myFunction() {
    var x = document.getElementById("navmenu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }