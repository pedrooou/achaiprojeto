document.getElementById('blocoEndereco').onclick = function() {
    window.location.href = 'mapa.html';
};

const quantidadeHeader = document.getElementById('quantidadeHeader');
const opcoesQuantidade = document.getElementById('opcoesQuantidade');
const iconeSeta = document.getElementById('iconeSeta');
const quantidadeBtns = document.querySelectorAll('.quantidade-btn');

quantidadeHeader.addEventListener('click', () => {
    opcoesQuantidade.classList.toggle('show');
    iconeSeta.classList.toggle('mdi-chevron-down');
    iconeSeta.classList.toggle('mdi-chevron-up');
});

quantidadeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        quantidadeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    });
});

document.getElementById('btnColeta').onclick = function() {
    document.getElementById('popupColeta').classList.add('show');
};

document.getElementById('popupClose').onclick = function() {
    document.getElementById('popupColeta').classList.remove('show');
};

document.getElementById('popupClose').onclick = function() {
    document.getElementById('popupColeta').classList.remove('show');
    // Redireciona para a central verde (ajuste o caminho se necessário)
    window.location.href = "../../../../../www/tabvendedor/telasVendedor/tela2/tela2vendedor.html";
};

document.getElementById('btnHistorico').onclick = function() {
    window.location.href = "coletahistorico.html";
};