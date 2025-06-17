document.addEventListener("DOMContentLoaded", function () {
  // Carrega o HTML da caixa de entrada
  fetch("caixadeentrada/caixaentrada.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("caixa-entrada-popup").innerHTML = html;
    });
});

function abrirCaixaEntrada() {
  document.getElementById("caixa-entrada-popup").classList.add("aberta");
}
function fecharCaixaEntrada() {
  document.getElementById("caixa-entrada-popup").classList.remove("aberta");
}
document.addEventListener('click', function(e) {
  const popup = document.getElementById('caixa-entrada-popup');
  if (popup.classList.contains('aberta') && !popup.contains(e.target) && !e.target.matches('#icone-caixaentrada')) {
    fecharCaixaEntrada();
  }
});