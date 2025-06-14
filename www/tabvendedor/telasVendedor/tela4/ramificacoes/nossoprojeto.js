function politica() {
    window.parent.document.getElementById('conteudo').src = '../telasvendedor/tela4/ramificacoes/tela1NossoProjeto/quemsomos.html';

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