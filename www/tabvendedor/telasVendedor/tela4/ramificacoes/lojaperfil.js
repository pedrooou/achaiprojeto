document.addEventListener('DOMContentLoaded', function() {
    // Auto-resize da textarea
    const textarea = document.getElementById('descricao-loja');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    }

    // Botão Ver Loja
document.getElementById('botao-ver-loja').onclick = function() {
    // Troque o caminho abaixo pelo caminho da tela que você irá criar
    window.location.href = "../../../../tabcomprador/telascomprador/tela1/ramificacoes/produtos/perfilDaLoja/perfildaloja.html";
};

    // Troca do banner
    const bannerInput = document.getElementById('input-banner-loja');
    const bannerDiv = document.getElementById('banner-loja');
    if (bannerInput && bannerDiv) {
        bannerInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    bannerDiv.style.background = `url('${evt.target.result}') center center/cover no-repeat`;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Troca da foto da loja
    const fotoInput = document.getElementById('input-foto-loja');
    const fotoImg = document.getElementById('fotoloja');
    if (fotoInput && fotoImg) {
        fotoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    fotoImg.src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Botão Itens
    const btnItens = document.getElementById('botao-itens');
    if (btnItens) {
        btnItens.onclick = function() {
            window.location.href = 'telaitens/itensloja.html'; // ajuste o caminho se necessário
        };
    }
});

// Função global para abrir o seletor de foto
function mostrarFile (){
    const fileInput = document.getElementById('input-foto-loja');
    fileInput.click();
}
