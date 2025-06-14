

document.querySelectorAll('.pedidos-tela').forEach((pedido) => {
    pedido.addEventListener('click', function (e) {
        e.stopPropagation();

        const icone = document.getElementById("icone-mais");
        const atual = pedido.querySelector('.infor-mais');
        const estaAberta = atual.classList.contains('aberta');

        document.querySelectorAll('.infor-mais').forEach(div => {
            if (div !== atual && div.classList.contains('aberta')) {
                icone.classList.remove('mdi-chevron-up');
                div.classList.remove('aberta'); // fecha outros com transição 0.3s
            }
        });

        // Alterna o estado da atual
        if (estaAberta) {
            icone.classList.remove('mdi-chevron-up');
            atual.classList.remove('aberta'); // fecha com transição curta
        } else {
            icone.classList.add('mdi-chevron-up');
            atual.classList.add('aberta'); // abre com transição longa
        }
    });
});

// Fecha ao clicar fora
document.addEventListener('click', function () {
    document.querySelectorAll('.infor-mais').forEach(div => {
        icone.classList.remove('mdi-chevron-up');
        div.classList.remove('aberta'); // usa a transição curta
    });
});

document.querySelectorAll('.pedidos-tela').forEach((pedido) => {
    pedido.addEventListener('click', function (e) {
        e.stopPropagation();

        const atual = pedido.querySelector('.infor-mais');
        const icone = pedido.querySelector('.icone-mais');
        const estaAberta = atual.classList.contains('aberta');

        // Fecha outros abertos
        document.querySelectorAll('.infor-mais').forEach(div => {
            if (div !== atual && div.classList.contains('aberta')) {
                const outroIcone = div.parentElement.querySelector('.icone-mais');
                if (outroIcone) {
                    outroIcone.classList.remove('mdi-chevron-up');
                    outroIcone.classList.add('mdi-chevron-down');
                }
                div.classList.remove('aberta');
            }
        });

        // Alterna o estado do atual
        if (estaAberta) {
            icone.classList.remove('mdi-chevron-up');
            icone.classList.add('mdi-chevron-down');
            atual.classList.remove('aberta');
        } else {
            icone.classList.remove('mdi-chevron-down');
            icone.classList.add('mdi-chevron-up');
            atual.classList.add('aberta');
        }
    });
});

// Fecha ao clicar fora
document.addEventListener('click', function () {
    document.querySelectorAll('.infor-mais').forEach(div => {
        const icone = div.parentElement.querySelector('.icone-mais');
        if (icone) {
            icone.classList.remove('mdi-chevron-up');
            icone.classList.add('mdi-chevron-down');
        }
        div.classList.remove('aberta');
    });
});