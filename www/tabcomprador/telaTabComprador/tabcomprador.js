function mostrar(pagina, caixaId){
    document.getElementById("conteudo").src = pagina;

    // Remove a classe ativa de todas as caixas
    document.querySelectorAll('.caixa').forEach(function(el){
        el.classList.remove('caixa-ativa');
    });

    // Adiciona a classe ativa à caixa clicada
    document.getElementById(caixaId).classList.add('caixa-ativa');
}

