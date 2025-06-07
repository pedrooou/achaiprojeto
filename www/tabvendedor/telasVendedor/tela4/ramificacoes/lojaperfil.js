document.addEventListener('DOMContentLoaded', function() {
    // Auto-resize da textarea
    const textarea = document.getElementById('descricao-loja');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    }

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
});

const btnItens = document.getElementById('botao-itens');
if (btnItens) {
    btnItens.onclick = function() {
        window.location.href = 'telaitens/itensloja.html'; // ajuste o caminho se necessário
    };
}