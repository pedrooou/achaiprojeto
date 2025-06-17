document.addEventListener('DOMContentLoaded', function() {
    const btnDescarte = document.getElementById('descarte');
    if (btnDescarte) {
        btnDescarte.onclick = function() {
            window.location.href = 'ramificacoes/descarte.html';
        };
    }
});

// ...existing code...
document.getElementById('selo').onclick = function() {
    window.location.href = 'ramificacoes/selos.html';
};
// ...existing code...
