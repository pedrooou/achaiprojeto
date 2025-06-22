
function mostrar(pagina, caixaId) {
    document.getElementById("conteudo").src = pagina;

    // Remove a classe ativa de todas as caixas
    document.querySelectorAll('.caixa').forEach(function (el) {
        el.classList.remove('caixa-ativa');
    });

    // Adiciona a classe ativa à caixa clicada
    document.getElementById(caixaId).classList.add('caixa-ativa');
}


// ...existing code...

// Abrir e fechar sidebar do histórico (agora à esquerda)
function abrirHistorico() {
    document.getElementById('sidebar-historico').classList.add('aberto');
}
function fecharHistorico() {
    document.getElementById('sidebar-historico').classList.remove('aberto');
}

//

// Abrir e fechar popup de detalhes
function abrirDetalhesColeta(data) {
    // Exemplo de conteúdo, substitua pelos dados reais
    document.getElementById('detalhes-coleta').innerHTML = `
        <strong>Data:</strong> ${data}<br>
        <strong>Avaliação:</strong> 5 estrelas<br>
        <strong>Observações:</strong> Nenhuma<br>
        <strong>Loja visitada:</strong> Loja Exemplo
    `;
    document.getElementById('popup-detalhes').classList.add('aberto');
}
function fecharPopup() {
    document.getElementById('popup-detalhes').classList.remove('aberto');
}

// ...existing code...

function sairParaContaLoja() {
    document.getElementById('conteudo').src = '../telasEmpresa/tela1/ramificacoes/perfil.html';
}

// Cordova: botão voltar para sair do app SOMENTE na tela1 do vendedor
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