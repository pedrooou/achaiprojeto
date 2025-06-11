// Inicializa o mapa com uma posição padrão (exemplo: Belém)
const latitudePadrao = -1.0536;
const longitudePadrao = -46.7656;
const map = L.map('map').setView([latitudePadrao, longitudePadrao], 16);

// Adiciona camada de tiles
const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Mostra o ícone de wifi-off se o mapa não carregar
const iconeOff = document.getElementById('icone-off');
tileLayer.on('tileerror', function() {
    iconeOff.style.display = 'block';
});

const latBandeiras = -1.055114;
const lngBandeiras = -46.766635;

// Adiciona o alfinete (marker) clicável
const markerBandeiras = L.marker([latBandeiras, lngBandeiras]).addTo(map);
markerBandeiras.bindPopup("açí do Roberto Carlos. Bragança PA");

// Ao clicar no alfinete, mostra a div com informações
markerBandeiras.on('click', function() {
    const infoDiv = document.getElementById('infor-mapa');
        infoDiv.style.display = 'block';
});

map.on('click', function() {
    const infoDiv = document.getElementById('infor-mapa');
    if (infoDiv) infoDiv.style.display = 'none';
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