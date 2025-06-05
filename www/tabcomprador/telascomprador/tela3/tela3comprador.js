document.querySelectorAll('.pedidos-tela').forEach((pedido) => {
    pedido.addEventListener('click', function (e) {
        e.stopPropagation();

        const atual = pedido.querySelector('.infor-mais');
        const estaAberta = atual.classList.contains('aberta');

        document.querySelectorAll('.infor-mais').forEach(div => {
            if (div !== atual && div.classList.contains('aberta')) {
                div.classList.remove('aberta'); // fecha outros com transição 0.3s
            }
        });

        // Alterna o estado da atual
        if (estaAberta) {
            atual.classList.remove('aberta'); // fecha com transição curta
        } else {
            atual.classList.add('aberta'); // abre com transição longa
        }
    });
});

// Fecha ao clicar fora
document.addEventListener('click', function () {
    document.querySelectorAll('.infor-mais').forEach(div => {
        div.classList.remove('aberta'); // usa a transição curta
    });
});