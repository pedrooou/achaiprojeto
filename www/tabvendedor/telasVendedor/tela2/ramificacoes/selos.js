document.getElementById('voltar').onclick = () => window.history.back();

const beneficios = {
    bronze: {
        titulo: "Benefícios do Selo Bronze",
        lista: [
            "Nível inicial: comece a construir sua reputação.",
            "Sua loja aparece nas buscas com destaque básico.",
            "Acesso a dicas para melhorar sua performance."
        ]
    },
    prata: {
        titulo: "Benefícios do Selo Prata",
        lista: [
            "Destaque maior nas buscas em relação ao Bronze.",
            "Prioridade em promoções e campanhas do app.",
            "Acesso antecipado a novidades da plataforma."
        ]
    },
    ouro: {
        titulo: "Benefícios do Selo Ouro",
        lista: [
            "Destaque premium nas buscas e recomendações.",
            "Desconto de 10% em anúncios personalizados.",
            "Suporte prioritário para dúvidas e sugestões."
        ]
    },
    diamante: {
        titulo: "Benefícios do Selo Diamante",
        lista: [
            "Máximo destaque em todas as buscas do app.",
            "Desconto de 20% nas taxas de uso da plataforma.",
            "Convites para eventos e parcerias exclusivas.",
            "Consultoria gratuita para impulsionar suas vendas."
        ]
    }
};

document.querySelectorAll('.selo-item').forEach(function(item) {
    item.onclick = function() {
        const nivel = item.getAttribute('data-nivel');
        document.getElementById('titulo-beneficio').innerText = beneficios[nivel].titulo;
        document.getElementById('lista-beneficios').innerHTML = beneficios[nivel].lista.map(b => `<li>${b}</li>`).join('');
        document.getElementById('popup-beneficios').style.display = "flex";
    };
});

document.getElementById('closePopupBeneficios').onclick = function() {
    document.getElementById('popup-beneficios').style.display = "none";
};
document.getElementById('popup-beneficios').onclick = function(e) {
    if (e.target === this) this.style.display = "none";
};