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


document.getElementById('blocoEndereco').onclick = function() {
    document.getElementById('popupEnderecoForm').style.display = 'flex';
};

document.getElementById('cancelarEndereco').onclick = function() {
    document.getElementById('popupEnderecoForm').style.display = 'none';
};

document.getElementById('formEnderecoColeta').onsubmit = function(e) {
    e.preventDefault();
    // Aqui você pode salvar os dados do endereço, exibir no bloco, etc.
    document.getElementById('popupEnderecoForm').style.display = 'none';
    // Exemplo: atualizar o texto do bloco com o endereço preenchido
    const endereco = document.getElementById('endereco-coleta').value;
    document.querySelector('#blocoEndereco span').textContent = endereco || 'Endereço de coleta';
};
