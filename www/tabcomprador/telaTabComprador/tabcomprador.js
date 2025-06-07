
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
    // Sempre reseta ao trocar de tela
    pesquisaAtiva = false;
    pesquisa.style.display = "none";
    conta.className = "mdi mdi-account";
    lupa.style.display = "block";

    // Verifica se está na tela1
   if (iframe.src.endsWith("tela1/tela1comprador.html")) {
    lupa.style.display = "block";
    conta.style.display = "block";
} else {
    lupa.style.display = "none";
    conta.style.display = "block";
}
    pesquisa.value = "";
}

// Evento para alternar input e ícone ao clicar na lupa
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

// Sempre que o iframe trocar, restaura tudo
iframe.addEventListener('load', atualizarBarraSuperior);

// Atualiza ao carregar a página
atualizarBarraSuperior();

function sairParaConta(){
    // Só vai para a conta se o ícone NÃO for microfone
    if (!conta.classList.contains('mdi-microphone')) {
        document.getElementById("conteudo").src = "../telascomprador/tela4/ramificacoes/perfil/perfil.html";
    }
}