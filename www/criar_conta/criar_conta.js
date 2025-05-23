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
    window.location.href = "../tabcomprador/telaTabComprador/telaTabComprador/tabcomprador.html";
    });
  };

