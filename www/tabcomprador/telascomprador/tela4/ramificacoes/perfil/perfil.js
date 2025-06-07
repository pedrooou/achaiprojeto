document.addEventListener('DOMContentLoaded', function() {
    // ...código existente...

    // Troca da foto de perfil
    const fotoInput = document.getElementById('input-banner-loja');
    const fotoPerfil = document.getElementById('foto-perfil');
    if (fotoInput && fotoPerfil) {
        fotoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                   fotoPerfil.style.background = `url('${evt.target.result}') center center/cover no-repeat`;
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