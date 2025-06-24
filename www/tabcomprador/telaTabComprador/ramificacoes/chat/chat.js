function abrirConversa(elemento, nomeChat, atual) {
  // Remove destaque de todos
  document.querySelectorAll('.chat-item').forEach(function(el) {
    el.classList.remove('ativo');
  });
  // Destaca o selecionado
  elemento.classList.add('ativo');
  // Atualiza o header e a mensagem
  document.getElementById('chat-header-titulo').textContent = nomeChat;
  document.getElementById('chat-body').innerHTML =
    '<div class="mensagem-sistema">Bem-vindo ao chat com <b>' + nomeChat + '</b>! Em breve você poderá conversar com a loja aqui.</div>';

  // Mobile: esconde lista de chats e mostra chat
  if (window.innerWidth <= 700) {
    document.getElementById('chat-lista').classList.add('oculto');
    document.getElementById('chat-area').classList.remove('oculto');
    document.getElementById('btn-voltar').style.display = 'inline-block';
  }
}

function voltarListaChats() {
  // Mobile: mostra lista de chats e esconde chat
  if (window.innerWidth <= 700) {
    document.getElementById('chat-lista').classList.remove('oculto');
    document.getElementById('chat-area').classList.add('oculto');
  }
}

function fecharChat() {
  // Fecha o chat voltando para a tela padrão do comprador
  if (window.parent) {
    window.parent.document.getElementById("conteudo").src = "../telascomprador/tela1/tela1comprador.html";
  }
}

// Ao carregar, se for mobile, mostra só a lista de chats
window.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 700) {
    document.getElementById('chat-area').classList.add('oculto');
    document.getElementById('btn-voltar').style.display = 'none';
  }
});