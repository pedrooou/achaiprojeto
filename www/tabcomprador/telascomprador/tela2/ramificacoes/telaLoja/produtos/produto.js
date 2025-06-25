// Exibe a tela do produto conforme o parâmetro na URL (?produto=1, ?produto=2, etc)
document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const produtoId = params.get('produto');
  if (produtoId) {
    document.querySelectorAll('.tela-produto').forEach(div => div.style.display = 'none');
    const tela = document.getElementById('produto' + produtoId);
    if (tela) tela.classList.add('ativa');
  }
});