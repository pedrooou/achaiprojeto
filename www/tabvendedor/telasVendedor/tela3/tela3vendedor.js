document.querySelectorAll('.aceitar').forEach(btn => {
    btn.onclick = function(e) {
        e.stopPropagation();
        document.getElementById('popup-aceitar').style.display = 'flex';
    };
});
document.querySelectorAll('.cancelar').forEach(btn => {
    btn.onclick = function(e) {
        e.stopPropagation();
        alert('Pedido cancelado!');
    };
});
document.getElementById('fechar-popup-aceitar').onclick = function() {
    document.getElementById('popup-aceitar').style.display = 'none';
};