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
      void opcao.offsetWidth;
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

function selecionarOpcao(elemento) {
  document.getElementById('selecoes').textContent = elemento.textContent;
  const opcoes = document.querySelectorAll('.opcoes');
  opcoes.forEach(opcao => {
    opcao.style.display = 'none';
  });
  document.getElementById('caixa-selecao').classList.remove('aberta');
  document.querySelector('.telacriarconta').classList.remove('opcoes-abertas');
  const botao = document.getElementById('botaocriar');
  botao.textContent = (elemento.textContent === 'Vendedor') ? 'Próximo' : 'Criar';
}

// Validação e salvamento dos dados ao criar conta
document.getElementById('botaocriar').onclick = function(event) {
  const nome = document.querySelector('#dados1 input').value.trim();
  const email = document.querySelector('#dados2 input').value.trim();
  const senha1 = document.getElementById('senha1').value.trim();
  const senha2 = document.getElementById('senha2').value.trim();
  const tipo = document.getElementById('selecoes').textContent.trim();

  // Verifica se todos os campos estão preenchidos
  if (!nome || !email || !senha1 || !senha2) {
    alert('Preencha todos os campos antes de continuar.');
    event.preventDefault();
    return false;
  }

  // Verifica se o nome tem pelo menos 5 caracteres
  if (nome.length < 5) {
    alert('Seu nome não tem a quantidade de caracteres suficiente para criar uma conta.');
    event.preventDefault();
    return false;
  }

  // Verifica se o nome tem caracteres especiais
  if (/[!@#$%&*(){}\[\]?°º'"]/g.test(nome)) {
    alert('O nome não pode conter caracteres especiais.');
    event.preventDefault();
    return false;
  }

  // Verifica se o nome tem números
  if (/\d/.test(nome)) {
    alert('O nome não pode conter números.');
    event.preventDefault();
    return false;
  }

  // Verifica se o email termina com @gmail.com
  if (!email.endsWith('@gmail.com')) {
    alert('O email deve terminar com "@gmail.com".');
    event.preventDefault();
    return false;
  }

  // Verifica se o email começa com letra maiúscula
  if (/^[A-Z]/.test(email)) {
    alert('O email não pode começar com letra maiúscula.');
    event.preventDefault();
    return false;
  }

  // Verifica se a senha tem pelo menos 5 caracteres
  if (senha1.length < 5 || senha2.length < 5) {
    alert('A senha deve ter pelo menos 5 caracteres.');
    event.preventDefault();
    return false;
  }

  // Verifica se as senhas coincidem
  if (senha1 !== senha2) {
    alert('As senhas não coincidem.');
    event.preventDefault();
    return false;
  }

  // ...existing code...

// Verifica se o tipo foi selecionado
if (tipo !== 'Vendedor' && tipo !== 'Comprador' && tipo !== 'Coletor') {
  alert('Selecione o tipo de conta antes de continuar.');
  event.preventDefault();
  return false;
}

// Salva nome e email no localStorage para todos os tipos
localStorage.setItem('nomeConta', nome);
localStorage.setItem('emailConta', email);
localStorage.setItem('senhaConta', senha1);
localStorage.setItem('tipoConta', tipo.toLowerCase());

if (tipo === 'Vendedor') {
  localStorage.setItem('tipoConta', 'vendedor');
  window.location.href = "../tabvendedor/telaTabVendedor/tabvendedor.html";
} else if (tipo === 'Comprador') {
  localStorage.setItem('tipoConta', 'comprador');
  event.preventDefault();
  const tela = document.getElementById('tela');
  tela.classList.add("sair");
  tela.addEventListener("animationend", function aoFinalSair() {
    window.location.href = "../tabcomprador/telaTabComprador/tabcomprador.html";
  }, { once: true });
} else if (tipo === 'Coletor') {
  localStorage.setItem('tipoConta', 'coletor');
  window.location.href = "../tabEmpresa/telaTabempresa/tabempresa.html";
}

// ...existing code...

};