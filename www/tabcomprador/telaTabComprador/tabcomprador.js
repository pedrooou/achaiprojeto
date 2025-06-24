function mostrar(pagina, caixaId) {
    document.getElementById("conteudo").src = pagina;

    // Remove a classe ativa de todas as caixas
    document.querySelectorAll('.caixa').forEach(function (el) {
        el.classList.remove('caixa-ativa');
    });

    // Adiciona a classe ativa à caixa clicada
    document.getElementById(caixaId).classList.add('caixa-ativa');
}

const iframe = document.getElementById('conteudo');
const lupa = document.getElementById('icone-lupa');
const conta = document.getElementById('icone-conta');
const pesquisa = document.getElementById('pesquisa');
const opcoes = document.getElementById('opcoes-input');
const botaoOpcao1 = document.getElementById('botao-itens');
const botaoOpcao2 = document.getElementById('botao-loja');
const orgIcon = document.getElementById('organizacao-icon');
const icone = document.getElementById('icone-down');
const iconeCarro = document.getElementById('icone-pedido-atual');

let pesquisaAtiva = false;

function atualizarBarraSuperior() {
    pesquisaAtiva = false;
    pesquisa.style.display = "none";
    conta.className = "mdi mdi-account";
    lupa.style.display = "block";

    // Verifica se está na tela1 OU tela2
    if (
        iframe.src.endsWith("tela1/tela1comprador.html")
    ) {
        iconeCarro.style.display = "block";
        lupa.style.display = "block";
        conta.style.display = "block";
    } else if (iframe.src.endsWith("tela2/tela2comprador.html")) {
        iconeCarro.style.display = "block";
         opcoes.style.display = "none";
        lupa.style.display = "block";
        conta.style.display = "block";
    } else {
        iconeCarro.style.display = "block";
        opcoes.style.display = "none";
        lupa.style.display = "none";
        conta.style.display = "block";
    }
    pesquisa.value = "";
}

botaoOpcao1.onclick = function () {
    pesquisa.style.display = "block"; pesquisa.focus();
};
botaoOpcao2.onclick = function () {
    pesquisa.style.display = "block"; pesquisa.focus();
};

// pesquisa.style.display = "block"; pesquisa.focus();

function aparecerOpcoes() {
    iconeCarro.style.display = "none";
    opcoes.style.display = "block";
    opcoes.classList.remove('novo-estado-input');
    botaoOpcao1.classList.remove("novo-estado-botao");
    botaoOpcao2.classList.remove("novo-estado-botao");
    botaoOpcao1.style.display = "block";
    botaoOpcao2.style.display = "block";
}

lupa.onclick = function () {
    pesquisaAtiva = !pesquisaAtiva;
    if (pesquisaAtiva && iframe.src.endsWith("tela1/tela1comprador.html")) {
        opcoes.style.background = " #f6e6fe";
        aparecerOpcoes();
        conta.className = "mdi mdi-microphone";
    } else {
        iconeCarro.style.display = "block";
        opcoes.style.display = "none";
        botaoOpcao2.addEventListener("transitionend", function () {
            botaoOpcao2.style.display = "none";
        });
    }
    if (pesquisaAtiva && iframe.src.endsWith("tela2/tela2comprador.html")) {
        iconeCarro.style.display = "none";
        pesquisa.style.display = "block";
        pesquisa.focus();

    } else {
        pesquisa.style.display = "none";
        conta.className = "mdi mdi-account";
        pesquisa.value = "";
    }
};

iframe.addEventListener('load', atualizarBarraSuperior);
atualizarBarraSuperior();

function sairParaConta() {
    if (!conta.classList.contains('mdi-microphone')) {
        document.getElementById("conteudo").src = "../telascomprador/tela4/ramificacoes/perfil/perfil.html";
    }
}

// --- Cordova: botão voltar para sair do app SOMENTE na tela1 do comprador ---
document.addEventListener("deviceready", function () {
    document.addEventListener("backbutton", function (e) {
        // Só pergunta se está na tela1 do comprador
        if (
            iframe &&
            iframe.src.endsWith("tela1/tela1comprador.html")
        ) {
            e.preventDefault();
            if (confirm("Deseja sair do aplicativo?")) {
                navigator.app.exitApp();
            }
        } else {
            e.preventDefault();
            window.history.back();
        }
    }, false);
});

pesquisa.addEventListener('input', function () {
    if (pesquisa.value.trim() !== "") {
        opcoes.classList.add('novo-estado-input');
        botaoOpcao1.classList.add("novo-estado-botao");
        botaoOpcao2.classList.add("novo-estado-botao");
        icone.classList.remove('mdi-chevron-up');
        icone.classList.add('mdi-chevron-down');
        botaoOpcao1.addEventListener("transitionend", function () {
            botaoOpcao1.style.display = "none";
        });
        botaoOpcao2.addEventListener("transitionend", function () {
            botaoOpcao2.style.display = "none";
        });
    } else {
        // Remove o efeito da função desaparecerOpcao
        botaoOpcao1.style.display = "block";
        botaoOpcao2.style.display = "block";
        icone.classList.add('mdi-chevron-up');
        icone.classList.remove('mdi-chevron-down');
        opcoes.classList.remove('novo-estado-input');
        botaoOpcao1.classList.remove("novo-estado-botao");
        botaoOpcao2.classList.remove("novo-estado-botao");
        botaoOpcao1.addEventListener("transitionrun", function () {
            botaoOpcao1.style.background = "#5b4766";
            botaoOpcao2.style.background = "#5b4766";
        });
        botaoOpcao1.addEventListener("transitionend", function () {
            botaoOpcao1.style.background = "#5b4766";
            botaoOpcao2.style.background = "#5b4766";
        });
    }
});

icone.onclick = function () {
    // Mesmo efeito do input preenchido
    opcoes.classList.add('novo-estado-input');
    botaoOpcao1.classList.add("novo-estado-botao");
    botaoOpcao2.classList.add("novo-estado-botao");
    icone.classList.add('mdi-chevron-up');
    icone.classList.remove('mdi-chevron-down');
    botaoOpcao1.addEventListener("transitionend", function () {
        botaoOpcao1.style.display = "none";
    });
    botaoOpcao2.addEventListener("transitionend", function () {
        botaoOpcao2.style.display = "none";
    });
};
conta.onclick = sairParaConta;

const botaoVoltarTelaInicio = document.getElementById('logo-do-app');

botaoVoltarTelaInicio.onclick = function () {
    // Garante que sempre volta para a tela inicial do comprador
    const iframe = document.getElementById("conteudo");
    if (iframe) {
        iframe.src = '../telascomprador/tela1/tela1comprador.html';
    }
    // Remove a classe ativa de todas as caixas
    document.querySelectorAll('.caixa').forEach(function (el) {
        el.classList.remove('caixa-ativa');
    });
    // Ativa apenas o botão "Início"
    const caixaHome = document.getElementById('caixa-home');
    if (caixaHome) {
        caixaHome.classList.add('caixa-ativa');
    }
}

iconeCarro.onclick = function(){
    iframe.src = "ramificacoes/pedidoAtual/pedidoatual.html";
}

