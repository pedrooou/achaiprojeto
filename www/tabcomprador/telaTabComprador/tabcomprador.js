function mostrar(pagina, caixaId){
    document.getElementById("conteudo").src = pagina;

    // Remove a classe ativa de todas as caixas
    document.querySelectorAll('.caixa').forEach(function(el){
        el.classList.remove('caixa-ativa');
    });

    // Adiciona a classe ativa à caixa clicada
    document.getElementById(caixaId).classList.add('caixa-ativa');
}

const iframe = document.getElementById('conteudo');
const lupa = document.getElementById('icone-lupa');
const conta = document.getElementById('icone-conta');
const pesquisa = document.getElementById('pesquisa');

let pesquisaAtiva = false;

function atualizarBarraSuperior() {
    pesquisaAtiva = false;
    pesquisa.style.display = "none";
    conta.className = "mdi mdi-account";
    lupa.style.display = "block";

    // Verifica se está na tela1 OU tela2
    if (
        iframe.src.endsWith("tela1/tela1comprador.html") ||
        iframe.src.endsWith("tela2/tela2comprador.html")
    ) {
        lupa.style.display = "block";
        conta.style.display = "block";
    } else {
        lupa.style.display = "none";
        conta.style.display = "block";
    }
    pesquisa.value = "";
}

lupa.onclick = function() {
    pesquisaAtiva = !pesquisaAtiva;
    if (pesquisaAtiva) {
        pesquisa.style.display = "block";
        pesquisa.focus();
        conta.className = "mdi mdi-microphone";
    } else {
        pesquisa.style.display = "none";
        conta.className = "mdi mdi-account";
        pesquisa.value = "";
    }
};

iframe.addEventListener('load', atualizarBarraSuperior);
atualizarBarraSuperior();

function sairParaConta(){
    if (!conta.classList.contains('mdi-microphone')) {
        document.getElementById("conteudo").src = "../telascomprador/tela4/ramificacoes/perfil/perfil.html";
    }
}

// --- Cordova: botão voltar para sair do app SOMENTE na tela1 do comprador ---
document.addEventListener("deviceready", function() {
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