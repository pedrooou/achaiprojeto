// Exemplo de dados fictícios para demonstração
const coletas = [
    { id: 1, data: "14/06/2025", obs: "Coleta realizada sem problemas.", avaliacao: 4 },
    { id: 2, data: "10/06/2025", obs: "Motorista atrasou 10 minutos.", avaliacao: 3 }
];

// Função para abrir popup e preencher dados
function abrirDetalhesColeta(id) {
    const coleta = coletas.find(c => c.id === id);
    document.getElementById('data-coleta').textContent = coleta.data;
    document.getElementById('obs-coleta').value = coleta.obs;
    // Reset estrelas
    document.querySelectorAll('.estrela').forEach((star, i) => {
        star.className = i < coleta.avaliacao ? 'mdi mdi-star estrela' : 'mdi mdi-star-outline estrela';
    });
    document.getElementById('popup-detalhes-coleta').classList.add('show');
}

// Fechar popup
document.getElementById('fecharPopupDetalhesColeta').onclick = function() {
    document.getElementById('popup-detalhes-coleta').classList.remove('show');
};

// Estrelas de avaliação
document.querySelectorAll('.estrela').forEach(star => {
    star.onclick = function() {
        let val = parseInt(this.getAttribute('data-valor'));
        document.querySelectorAll('.estrela').forEach((s, i) => {
            s.className = i < val ? 'mdi mdi-star estrela' : 'mdi mdi-star-outline estrela';
        });
    };
});

// Botão enviar (exemplo)
document.getElementById('btnEnviarAvaliacao').onclick = function() {
    alert('Avaliação enviada!');
    document.getElementById('popup-detalhes-coleta').classList.remove('show');
};