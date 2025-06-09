document.addEventListener('DOMContentLoaded', function() {
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

    // Preenche os inputs com nome e email do localStorage
    const nome = localStorage.getItem('nomeConta') || '';
    const email = localStorage.getItem('emailConta') || '';
    const inputNome = document.getElementById('nome-loja');
    const inputEmail = document.getElementById('endereco-loja');
    if (inputNome) inputNome.value = nome;
    if (inputEmail) inputEmail.value = email;
});

const btnItens = document.getElementById('botao-itens');
if (btnItens) {
    btnItens.onclick = function() {
        window.location.href = 'telaitens/itensloja.html'; // ajuste o caminho se necessário
    };
}