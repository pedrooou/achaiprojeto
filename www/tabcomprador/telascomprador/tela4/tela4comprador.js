function sairParaPerfil() {
   window.parent.document.getElementById('conteudo').src = '../telascomprador/tela4/ramificacoes/perfil/perfil.html';
}

function sairDaConta() {
    localStorage.removeItem('tipoConta');
    window.top.location.href = "../../../index.html";
}

function sairParaSeusPontos() {
   window.parent.document.getElementById('conteudo').src = '../telascomprador/tela4/ramificacoes/seusPontos/seusPontos.html';
}
function sairParaCentralVerde() {
   window.parent.document.getElementById('conteudo').src = '../telascomprador/tela4/ramificacoes/centralVerde/centralVerde.html';
}
function sairParaNossoProjeto() {
   window.parent.document.getElementById('conteudo').src = '../telascomprador/tela4/ramificacoes/nossoProjeto/nossoprojeto.html';
}

// Exibe nome e email nos spans ao carregar a tela
document.addEventListener('DOMContentLoaded', function() {
    const nome = localStorage.getItem('nomeConta') || '';
    const email = localStorage.getItem('emailConta') || '';
    const spanNome = document.getElementById('nome');
    const spanEmail = document.getElementById('email');

    function aplicarTruncamento(span, valor) {
        // Se passar de 13, fonte pequena
        if (valor.length > 13) {
            span.classList.add('pequeno');
        } else {
            span.classList.remove('pequeno');
        }

        // Se passar de 25, mostra 3 pontinhos e eventos de pressionar
        if (valor.length > 23) {
            span.textContent = valor.slice(0, 22) + '...';
            let timer;
            span.onmousedown = function() {
                timer = setTimeout(function() {
                    alert(valor);
                }, 1000);
            };
            span.onmouseup = function() {
                clearTimeout(timer);
            };
            span.onmouseleave = function() {
                clearTimeout(timer);
            };
            span.onclick = function(e) {
                e.preventDefault();
                return false;
            };
        } else {
            span.textContent = valor;
            span.onmousedown = null;
            span.onmouseup = null;
            span.onmouseleave = null;
            span.onclick = null;
        }
    }

    if (spanNome) aplicarTruncamento(spanNome, nome);
    if (spanEmail) aplicarTruncamento(spanEmail, email);
});