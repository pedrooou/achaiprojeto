function abrirDetalhesPedido(loja, endereco, sacas, observacao, datahora) {
  document.getElementById('detalhe-loja').innerText = loja;
  document.getElementById('detalhe-endereco').innerText = endereco;
  document.getElementById('detalhe-sacas').innerText = sacas;
  document.getElementById('detalhe-observacao').innerText = observacao;
  document.getElementById('detalhe-datahora').innerText = datahora;
  document.getElementById('modal-detalhes').style.display = 'flex';
}

function aceitarPedido(botao) {
  botao.textContent = "Aceito";
  botao.disabled = true; // opcional: desabilita o botão após aceitar
  document.getElementById('mensagem-confirmacao').innerText = "Coleta aceita com sucesso!";
  document.getElementById('popup-confirmacao').classList.add('show');
}

function fecharModal() {
  document.getElementById('modal-detalhes').style.display = 'none';
}

function abrirResposta() {
  document.getElementById('modal-detalhes').style.display = 'none';
  document.getElementById('modal-resposta').style.display = 'flex';
}

function fecharModalResposta() {
  document.getElementById('modal-resposta').style.display = 'none';
}

function enviarResposta() {
  const motorista = document.getElementById('resp-motorista').value;
  const data = document.getElementById('resp-data').value;
  const hora = document.getElementById('resp-hora').value;
  const obs = document.getElementById('resp-observacao').value;

  // Mostra popup de confirmação
  document.getElementById('modal-resposta').style.display = 'none';
  document.getElementById('mensagem-confirmacao').innerText = "Resposta enviada com sucesso!";
  document.getElementById('popup-confirmacao').classList.add('show');
}

document.getElementById('fecharPopupConfirmacao').onclick = function() {
  document.getElementById('popup-confirmacao').classList.remove('show');
};