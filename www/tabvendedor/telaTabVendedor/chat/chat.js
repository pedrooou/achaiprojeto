function abrirChatCliente(elemento, nomeCliente) {
  // Remove destaque de todos
  document.querySelectorAll('.cliente-item').forEach(function(el) {
    el.classList.remove('cliente-ativo');
  });
  // Destaca o selecionado
  elemento.classList.add('cliente-ativo');
  // Atualiza o header e a mensagem
  document.getElementById('chat-header-titulo').textContent = 'Chat com ' + nomeCliente;
  document.getElementById('chat-body').innerHTML =
    '<div class="mensagem-sistema">Bem-vindo ao chat com ' + nomeCliente + '! Em breve você poderá conversar com seus clientes aqui.</div>';

  // Mobile: esconde lista de clientes e mostra chat
  if (window.innerWidth <= 700) {
    document.getElementById('clientes-lista').classList.add('oculto');
    document.getElementById('chat-area').classList.remove('oculto');
    document.getElementById('btn-voltar').style.display = 'inline-block';
  }
}

function voltarListaClientes() {
  // Mobile: mostra lista de clientes e esconde chat
  if (window.innerWidth <= 700) {
    document.getElementById('clientes-lista').classList.remove('oculto');
    document.getElementById('chat-area').classList.add('oculto');
  }
}

function fecharChat() {
  // Fecha o chat voltando para a tela padrão do vendedor
  if (window.parent) {
    window.parent.document.getElementById("conteudo").src = "../telasVendedor/tela3/tela3vendedor.html";
  }
}

// Ao carregar, se for mobile, mostra só a lista de clientes
window.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 700) {
    document.getElementById('chat-area').classList.add('oculto');
    document.getElementById('btn-voltar').style.display = 'none';
  }
});