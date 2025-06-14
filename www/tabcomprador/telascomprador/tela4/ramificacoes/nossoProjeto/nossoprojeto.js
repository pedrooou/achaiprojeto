function politica() {
    window.location.href = '../../ramificacoes/nossoProjeto/quemSomosNos/quemsomosnos.html';

}

function voltar(){
    const botao = document.getElementById('voltar-botao');

    window.location.href = "../../tela4comprador.html";
}

// Abrir popup (chame esta função ao clicar no botão de contato)
function abrirPopupContato() {
    document.getElementById('popup-contato').classList.add('show');
}
// Fechar popup
document.getElementById('fechar-contato').onclick = function() {
    document.getElementById('popup-contato').classList.remove('show');
};

function abrirPopupPoliticas() {
  document.getElementById('popup-politicas').classList.add('show');
}
document.getElementById('fechar-politicas').onclick = function() {
  document.getElementById('popup-politicas').classList.remove('show');
};