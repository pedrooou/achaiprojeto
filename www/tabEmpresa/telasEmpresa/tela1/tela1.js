function sairDaConta() {
  localStorage.removeItem('tipoConta');
  window.top.location.href = "../../../index.html";
}
function editarMotorista() {
  window.location.href = 'ramificacoes/perfil.html'; // alterado para perfil.html
}
function irParaProjeto() {
  window.location.href = '../../../../www/tabvendedor/telasVendedor/tela4/ramificacoes/nossoprojeto.html';
}