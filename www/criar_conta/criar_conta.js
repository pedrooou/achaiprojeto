// Função para alternar a visibilidade da senha
function toggleSenha() {
  const input = document.getElementById("senha1");
  const icone = document.getElementById("olho1");


  if (input.type === "password") {
    input.type = "text";
    icone.classList.remove("mdi-eye");
    icone.classList.add("mdi-eye-off");
  } else {
    input.type = "password";
    icone.classList.remove("mdi-eye-off");
    icone.classList.add("mdi-eye");
  }
}

function toggleSenha2() {
  const input2 = document.getElementById("senha2");
  const icone2 = document.getElementById("olho2");
  

  if (input2.type === "password") {
    input2.type = "text";
    icone2.classList.remove("mdi-eye");
    icone2.classList.add("mdi-eye-off");
  } else {
    input2.type = "password";
    icone2.classList.remove("mdi-eye-off");
    icone2.classList.add("mdi-eye");
  }
}

function mostrartela(event) {
    tela.classList.add("sair"); tela.addEventListener("animationend", function aoFinalSair() {
    window.location.href = "../tabcomprador/telaTabComprador/tabcomprador.html";
    });
  };

  // ...existing code...

function toggleOpcoes() {
  const opcoes = document.querySelectorAll('.opcoes');
  opcoes.forEach(opcao => {
    opcao.style.display = (opcao.style.display === 'block') ? 'none' : 'block';
  });
}

function selecionarOpcao(elemento) {
  document.getElementById('selecoes').textContent = elemento.textContent;
  // Esconde as opções após selecionar
  const opcoes = document.querySelectorAll('.opcoes');
  opcoes.forEach(opcao => {
    opcao.style.display = 'none';
  });
}

// Fechar opções ao clicar fora
document.addEventListener('click', function(e) {
  const caixa = document.getElementById('caixa-selecao');
  if (!caixa.contains(e.target)) {
    const opcoes = document.querySelectorAll('.opcoes');
    opcoes.forEach(opcao => {
      opcao.style.display = 'none';
    });
  }
});

//codigo para mudar o border radius da div de seleçao
function toggleOpcoes() {
  const opcoes = document.querySelectorAll('.opcoes');
  const caixa = document.getElementById('caixa-selecao');
  let aberto = false;
  opcoes.forEach(opcao => {
    if (opcao.style.display === 'block') {
      opcao.style.display = 'none';
    } else {
      opcao.style.display = 'block';
      aberto = true;
    }
  });
  if (aberto) {
    caixa.classList.add('aberta');
  } else {
    caixa.classList.remove('aberta');
  }
}

function selecionarOpcao(elemento) {
  document.getElementById('selecoes').textContent = elemento.textContent;
  const opcoes = document.querySelectorAll('.opcoes');
  opcoes.forEach(opcao => {
    opcao.style.display = 'none';
  });
  document.getElementById('caixa-selecao').classList.remove('aberta');
}

document.addEventListener('click', function(e) {
  const caixa = document.getElementById('caixa-selecao');
  if (!caixa.contains(e.target)) {
    const opcoes = document.querySelectorAll('.opcoes');
    opcoes.forEach(opcao => {
      opcao.style.display = 'none';
    });
    caixa.classList.remove('aberta');
  }
});

