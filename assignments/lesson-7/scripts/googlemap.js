function initMap() {
    let options = {
        zoom: 8,
        center: { lat: 42.0963, lng: 111.8766 }
    }

    let map = new google.maps.Map(document.getElementById('map'), options);
    document.getElementById('map').innerHTML = map;
}



