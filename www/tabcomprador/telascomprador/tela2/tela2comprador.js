// Coordenadas para exibir (exemplo: zona rural de Belém)
const latitude = -1.455;
const longitude = -48.489;

// Inicializa o mapa
const map = L.map('map').setView([latitude, longitude], 16);

// Camada estilo "Google Maps simples"
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=j6gTBHjDwnrxIrYsWR6Y', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© MapTiler © OpenStreetMap contributors',
    maxZoom: 20
}).addTo(map);

// Marcador de exemplo
L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("Você está aqui!")
    .openPopup();
