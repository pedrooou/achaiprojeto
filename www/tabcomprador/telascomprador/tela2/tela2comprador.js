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

const latBandeiras1 = -1.055114;
const lngBandeiras1 = -46.766635;
const latBandeiras2 = -1.055264;
const lngBandeiras2 = -46.767041;
const latBandeiras3 = -1.054814;
const lngBandeiras3 = -46.767317;
const latBandeiras4 = -1.054619;
const lngBandeiras4 = -46.765380;

//-1.054619, -46.765380

// Adiciona o alfinete (marker) clicável
const markerBandeiras1 = L.marker([latBandeiras1, lngBandeiras1]).addTo(map);
markerBandeiras1.bindPopup("açí do Wagner. Bragança PA");
// Adiciona o alfinete (marker) clicável
const markerBandeiras2 = L.marker([-1.051464, -46.766250]).addTo(map);
markerBandeiras2.bindPopup("açí da Sueli. Bragança PA");
// Adiciona o alfinete (marker) clicável
const markerBandeiras3 = L.marker([-1.050398, -46.773679]).addTo(map);
markerBandeiras3.bindPopup("açí do João. Bragança PA");
// Adiciona o alfinete (marker) clicável
const markerBandeiras4 = L.marker([-1.057823, -46.770246]).addTo(map);
markerBandeiras4.bindPopup("açí do Zé. Bragança PA");

const markerBandeiras5 = L.marker([-1.051951, -46.778198]).addTo(map);
markerBandeiras5.bindPopup("açí do Maria. Bragança PA");

const markerBandeiras6 = L.marker([-1.052239, -46.772727]).addTo(map);
markerBandeiras6.bindPopup("açí do Pedro. Bragança PA");

const markerBandeiras7 = L.marker([-1.055160, -46.770126]).addTo(map);
markerBandeiras7.bindPopup("açí do lucas. Bragança PA");

// Função para mostrar apenas o painel de info da loja correspondente
function mostrarInfoLoja(id) {
    for (let i = 1; i <= 7; i++) {
        const div = document.getElementById('infor-loja' + i);
        if (div) div.style.display = 'none';
    }
    const divMostrar = document.getElementById(id);
    if (divMostrar) divMostrar.style.display = 'block';
}

// Ao clicar no alfinete, mostra a div com informações
markerBandeiras1.on('click', function() { mostrarInfoLoja('infor-loja1'); });
markerBandeiras2.on('click', function() { mostrarInfoLoja('infor-loja2'); });
markerBandeiras3.on('click', function() { mostrarInfoLoja('infor-loja3'); });
markerBandeiras4.on('click', function() { mostrarInfoLoja('infor-loja4'); });
markerBandeiras5.on('click', function() { mostrarInfoLoja('infor-loja5'); });
markerBandeiras6.on('click', function() { mostrarInfoLoja('infor-loja6'); });
markerBandeiras7.on('click', function() { mostrarInfoLoja('infor-loja7'); });

map.on('click', function() {
    for (let i = 1; i <= 7; i++) {
        const div = document.getElementById('infor-loja' + i);
        if (div) div.style.display = 'none';
    }
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

function abrirProdutoTela(tela) {
  // Abre produto.html em um novo contexto (iframe ou janela)
 window.location.href = "ramificacoes/telaLoja/telaloja.html?tela=" + tela;
}

const botaoloja1 = document.getElementById('botao-ver-loja1');

botaoloja1.onclick = function(){
    abrirProdutoTela('tela1');
}
const botaoloja2 = document.getElementById('botao-ver-loja2');

botaoloja2.onclick = function(){
     abrirProdutoTela('tela2');
}
const botaoloja3 = document.getElementById('botao-ver-loja3');

botaoloja3.onclick = function(){
     abrirProdutoTela('tela3');
}
const botaoloja4 = document.getElementById('botao-ver-loja4');

botaoloja4.onclick = function(){
    abrirProdutoTela('tela4');
}
const botaoloja5 = document.getElementById('botao-ver-loja5');

botaoloja5.onclick = function(){
    abrirProdutoTela('tela5');
}
const botaoloja6 = document.getElementById('botao-ver-loja6');

botaoloja6.onclick = function(){
    abrirProdutoTela('tela6');
}
const botaoloja7 = document.getElementById('botao-ver-loja7');

botaoloja7.onclick = function(){
     abrirProdutoTela('tela7');
}