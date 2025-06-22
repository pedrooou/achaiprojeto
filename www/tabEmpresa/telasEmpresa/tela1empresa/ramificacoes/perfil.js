document.getElementById('input-foto').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      document.getElementById('img-perfil').src = evt.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('form-perfil').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('popup-confirmacao').classList.add('show');
});

document.getElementById('fecharPopupConfirmacao').onclick = function() {
  document.getElementById('popup-confirmacao').classList.remove('show');
  window.location.href = '../tela1.html';
};
