function mostrar(pagina, caixaId) {
    document.getElementById("conteudo").src = pagina;

    // Remove a classe ativa de todas as caixas
    document.querySelectorAll('.caixa').forEach(function (el) {
        el.classList.remove('caixa-ativa');
    });

    // Adiciona a classe ativa à caixa clicada
    document.getElementById(caixaId).classList.add('caixa-ativa');
}

function sairParaContaLoja() {
    document.getElementById("conteudo").src = "../telasVendedor/tela4/ramificacoes/lojaperfil.html";
}

// Função para abrir o chat
function abrirChat() {
    document.getElementById("conteudo").src = "chat/chat.html";
    // Remove a seleção das outras abas
    document.querySelectorAll('.caixa').forEach(function (el) {
        el.classList.remove('caixa-ativa');
    });
}

// --- Cordova: botão voltar para sair do app SOMENTE na tela1 do vendedor ---
document.addEventListener("deviceready", function() {
    document.addEventListener("backbutton", function (e) {
        const iframe = document.getElementById("conteudo");
        // Só pergunta se está na tela1 do vendedor
        if (
            iframe &&
            iframe.src.endsWith("tela1/tela1vendedor.html")
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

