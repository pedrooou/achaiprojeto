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
  const tela = document.querySelector('.telacriarconta');
  let aberto = false;
  opcoes.forEach(opcao => {
    if (opcao.style.display === 'block') {
      opcao.style.display = 'none';
      opcao.classList.remove('animar');
    } else {
      opcao.style.display = 'block';
      void opcao.offsetWidth; // força reflow para animação
      opcao.classList.add('animar');
      aberto = true;
    }
  });
  if (aberto) {
    caixa.classList.add('aberta');
    tela.classList.add('opcoes-abertas');
  } else {
    caixa.classList.remove('aberta');
    tela.classList.remove('opcoes-abertas');
  }
}


// ...código existente...

function selecionarOpcao(elemento) {
  document.getElementById('selecoes').textContent = elemento.textContent;
  const opcoes = document.querySelectorAll('.opcoes');
  opcoes.forEach(opcao => {
    opcao.style.display = 'none';
  });
  document.getElementById('caixa-selecao').classList.remove('aberta');
  
  // Remove a classe para animar a diminuição da tela
  document.querySelector('.telacriarconta').classList.remove('opcoes-abertas');

  // Lógica para mudar botão e ação
  const botao = document.getElementById('botaocriar');
  botao.textContent = (elemento.textContent === 'Vendedor') ? 'Próximo' : 'Criar';
}

document.getElementById('botaocriar').onclick = function(event) {
  // Validação dos campos obrigatórios
  const nome = document.querySelector('#dados1 input').value.trim();
  const email = document.querySelector('#dados2 input').value.trim();
  const senha1 = document.getElementById('senha1').value.trim();
  const senha2 = document.getElementById('senha2').value.trim();
  const tipo = document.getElementById('selecoes').textContent.trim();

  if (!nome || !email || !senha1 || !senha2) {
    alert('Preencha todos os campos antes de continuar.');
    event.preventDefault();
    return false;
  }
  if (tipo !== 'Vendedor' && tipo !== 'Comprador') {
    alert('Selecione o tipo de conta antes de continuar.');
    event.preventDefault();
    return false;
  }
  if (senha1 !== senha2) {
    alert('As senhas não coincidem.');
    event.preventDefault();
    return false;
  }

  // Fluxo normal
  if (tipo === 'Vendedor') {
    window.location.href = "../tabvendedor/telaTabVendedor/tabvendedor.html";
  } else if (tipo === 'Comprador') {
    event.preventDefault();
    const tela = document.getElementById('tela');
    tela.classList.add("sair");
    tela.addEventListener("animationend", function aoFinalSair() {
      window.location.href = "../tabcomprador/telaTabComprador/tabcomprador.html";
    }, { once: true });
  }
};

