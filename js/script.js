var map = L.map('map').setView([51.505, -0.09], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([0, 0]).addTo(map);


    const lat = 26.211800;
    const log = 78.165421;
    marker.setLatLng([lat, log]).update
    map.setView([lat, log], 11);
    marker.bindPopup("<b>Amaltaas</b><br>Home Stay").openPopup();


    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });