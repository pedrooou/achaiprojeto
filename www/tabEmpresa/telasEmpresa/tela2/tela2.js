document.querySelectorAll('.btn-aceitar').forEach(btn => {
  btn.onclick = function() {
    alert('Pedido aceito!');
    this.disabled = true;
    this.textContent = 'Aceito';
  };
});

// ...existing code...
function abrirDetalhesPedido(loja, endereco, sacas, observacao, datahora) {
  document.getElementById('detalhe-loja').innerText = loja;
  document.getElementById('detalhe-endereco').innerText = endereco;
  document.getElementById('detalhe-sacas').innerText = sacas;
  document.getElementById('detalhe-observacao').innerText = observacao;
  document.getElementById('detalhe-datahora').innerText = datahora;
  document.getElementById('modal-detalhes').style.display = 'flex';
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
  alert(`Resposta enviada!\nMotorista: ${motorista}\nData: ${data}\nHora: ${hora}\nObs: ${obs}`);
  fecharModalResposta();
}