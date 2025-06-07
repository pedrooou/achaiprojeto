document.addEventListener('DOMContentLoaded', function() {
    const btnDescarte = document.getElementById('descarte');
    if (btnDescarte) {
        btnDescarte.onclick = function() {
            window.location.href = 'ramificacoes/descarte.html';
        };
    }
});