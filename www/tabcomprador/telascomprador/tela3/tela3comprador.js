document.querySelectorAll('.pedidos-tela').forEach((pedido) => {
    pedido.addEventListener('click', function (e) {
        e.stopPropagation();
        // Fecha todos os outros
        document.querySelectorAll('.infor-mais').forEach(div => div.classList.remove('aberta'));
        // Alterna o atual
        const mais = pedido.querySelector('.infor-mais');
        if (mais.classList.contains('aberta')) {
            mais.classList.remove('aberta');
        } else {
            mais.classList.add('aberta');
        }
    });
});

// Fecha ao clicar fora
document.addEventListener('click', function () {
    document.querySelectorAll('.infor-mais').forEach(div => div.classList.remove('aberta'));
});