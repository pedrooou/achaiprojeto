document.getElementById('tela3-projeto').onclick = function() {
    window.location.href = 'ramificacoes/nossoprojeto.html'; 
}

document.getElementById('tela2-loja').onclick = function() {
    window.location.href = 'ramificacoes/lojaperfil.html'; 
}

function sairDaConta() {
    localStorage.removeItem('tipoConta');
    window.top.location.href = "../../../index.html";
}