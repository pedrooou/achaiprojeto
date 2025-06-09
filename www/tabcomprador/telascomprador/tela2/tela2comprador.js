// Inicializa o mapa com uma posição padrão (exemplo: Belém)
const latitudePadrao = -1.0536;
const longitudePadrao = -46.7656;
const map = L.map('map').setView([latitudePadrao, longitudePadrao], 16);

// Adiciona camada de tiles
const tileLayer = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=j6gTBHjDwnrxIrYsWR6Y', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© MapTiler © OpenStreetMap contributors',
    maxZoom: 20
}).addTo(map);

// Mostra o ícone de wifi-off se o mapa não carregar
const iconeOff = document.getElementById('icone-off');
tileLayer.on('tileerror', function() {
    iconeOff.style.display = 'block';
});

// Função para centralizar no usuário
function centralizarNoUsuario(lat, lng) {
    map.setView([lat, lng], 16);
    L.marker([lat, lng]).addTo(map).bindPopup("Você está aqui!").openPopup();
}

// Tenta obter a localização do usuário ao carregar o app (Cordova)
document.addEventListener("deviceready", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                centralizarNoUsuario(lat, lng);
            },
            function(error) {
                alert("Não foi possível obter sua localização: " + error.message);
            },
            { enableHighAccuracy: true }
        );
    } else {
        alert("Geolocalização não suportada neste dispositivo.");
    }
});