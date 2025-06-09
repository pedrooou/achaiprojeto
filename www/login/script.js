document.addEventListener("DOMContentLoaded", () => {
  const tela = document.getElementById("tela");
  const inputEmail = document.getElementById("gmail");
  const inputSenha = document.getElementById("senha");
  const olho = document.getElementById("olho");
  const botaoLogin = document.getElementById("botao_entrada");

  let interagiu = false;
  let alturaAnterior = window.innerHeight;

  // Função para subir a tela
  function subirTela() {
    if (!tela.classList.contains("subir")) {
      tela.classList.remove("descer");
      tela.classList.add("subir");
    }
  }

  // Função para descer a tela
  function descerTela() {
    if (tela.classList.contains("subir")) {
      tela.classList.remove("subir");
      tela.classList.add("descer");
    }
  }

  // Evento de foco nos inputs
  inputEmail.addEventListener("focus", () => {
    subirTela();
    interagiu = true;
  });

  inputSenha.addEventListener("focus", () => {
    subirTela();
    interagiu = true;
  });

  // Verificar se o foco saiu dos inputs
  const verificarFora = () => {
    setTimeout(() => {
      const focoAtual = document.activeElement;
      if (focoAtual !== inputEmail && focoAtual !== inputSenha && interagiu) {
        descerTela();
        interagiu = false;
      }
    }, 0);
  };

  inputEmail.addEventListener("blur", verificarFora);
  inputSenha.addEventListener("blur", verificarFora);

  // Verifica se o teclado foi fechado (em dispositivos móveis)
  document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", (e) => {
      const campoAtivo = document.activeElement;
      const ehInputAtivo = campoAtivo === inputEmail || campoAtivo === inputSenha;

      if (ehInputAtivo) {
        e.preventDefault();
        campoAtivo.blur(); // fecha teclado

        // Espera o teclado fechar antes de descer a tela
        const alturaInicial = window.innerHeight;

        const esperarFechamentoTeclado = setInterval(() => {
          const alturaAtual = window.innerHeight;
          const tecladoFechou = alturaAtual >= alturaInicial;

          if (tecladoFechou) {
            clearInterval(esperarFechamentoTeclado);
            descerTela();
          }
        }, 100);
      }
    }, false);
  });

  window.addEventListener("resize", () => {
    const alturaAtual = window.innerHeight;
    if (!alturaAtual > alturaAnterior) {
      descerTela();
    }
    alturaAnterior = alturaAtual;
  });

  // Alterna visibilidade da senha e sobe tela se necessário
  olho.addEventListener("click", () => {
    if (!tela.classList.contains("subir")) {
      subirTela();
    }
    inputSenha.focus();
    if (inputSenha.type === "password") {
      inputSenha.type = "text";
      olho.classList.remove("mdi-eye");
      olho.classList.add("mdi-eye-off");
    } else {
      inputSenha.type = "password";
      olho.classList.remove("mdi-eye-off");
      olho.classList.add("mdi-eye");
    }
  });

  // Pressionar Enter desce a tela
  inputSenha.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      descerTela();
    }
  });

  // Botão Login (validação de conta)
  botaoLogin.onclick = function(event) {
  event.preventDefault();

  const emailOuNome = inputEmail.value.trim();
  const senha = inputSenha.value.trim();

  const emailSalvo = (localStorage.getItem('emailConta') || '').trim();
  const nomeSalvo = (localStorage.getItem('nomeConta') || '').trim();
  const senhaSalva = (localStorage.getItem('senhaConta') || '').trim();
  const tipoConta = localStorage.getItem('tipoConta');

  // Debug
  console.log("emailOuNome:", emailOuNome);
  console.log("senha:", senha);
  console.log("emailSalvo:", emailSalvo);
  console.log("nomeSalvo:", nomeSalvo);
  console.log("senhaSalva:", senhaSalva);
  console.log("tipoConta:", tipoConta);

  if (
    (emailOuNome === emailSalvo || emailOuNome === nomeSalvo) &&
    senha === senhaSalva
  ) {
    if (tipoConta === 'comprador') {
      window.location.href = "tabcomprador/telaTabComprador/tabcomprador.html";
    } else if (tipoConta === 'vendedor') {
      window.location.href = "tabvendedor/telaTabVendedor/tabvendedor.html";
    }
  } else {
    alert("A conta não existe.");
  }
};

  // Botão Sair2 (vai para criar_conta.html)
  window.Sair2 = function(event) {
    tela.classList.add("sair");
    tela.addEventListener("animationend", function aoFinalSair() {
      window.location.href = "criar_conta/criar_conta.html";
    });
  };

  // Botão Sair1 (mantém a função original, se necessário)
  window.Sair1 = function(event) {
    event.preventDefault();
    const overlay = document.getElementById("telaBranca");
    tela.classList.add("sair");
    tela.addEventListener("animationend", function aoFinalSair() {
      tela.removeEventListener("animationend", aoFinalSair);
      overlay.classList.add("telaBrancaIr");
      overlay.addEventListener("animationend", function aoFinalOverlay() {
        overlay.removeEventListener("animationend", aoFinalOverlay);
        window.location.href = "";
      });
    });
  };
});