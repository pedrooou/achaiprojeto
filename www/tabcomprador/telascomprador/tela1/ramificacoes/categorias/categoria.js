 const params = new URLSearchParams(window.location.search);
    const tela = params.get('tela');
    if (tela && document.getElementById(tela)) {
      document.getElementById(tela).style.display = 'block';
    }

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.slider').forEach(function(slider) {
    const slidesContainer = slider.querySelector('.slides');
    const slides = Array.from(slidesContainer.children);
    const pagination = slider.querySelector('.pagination');
    let currentIndex = 0;

    // Cria os bullets da paginação
    pagination.innerHTML = '';
    slides.forEach((_, idx) => {
      const span = document.createElement('span');
      if (idx === 0) span.classList.add('active');
      pagination.appendChild(span);
    });

    function updateSlider() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
      pagination.querySelectorAll('span').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    // Clique nos bullets
    pagination.querySelectorAll('span').forEach((dot, idx) => {
      dot.onclick = () => {
        currentIndex = idx;
        updateSlider();
      };
    });

    // Swipe simples (opcional)
    let startX = 0;
    slidesContainer.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });
    slidesContainer.addEventListener('touchend', e => {
      let endX = e.changedTouches[0].clientX;
      if (endX < startX - 30 && currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
      } else if (endX > startX + 30 && currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    // Inicializa
    updateSlider();
  });
    // Popup de construção SÓ na tela 3
  const popup = document.getElementById('popup-construcao');
  const btnFechar = document.getElementById('popup-fechar');
  // Seleciona só os cards da tela 3
  document.querySelectorAll('#tela3 .parte1-tela3 , #tela3 .parte2-tela3').forEach(function(div) {
    div.addEventListener('click', function() {
      popup.style.display = 'flex';
    });
  });
  btnFechar.addEventListener('click', function() {
    popup.style.display = 'none';
  });


});

  function voltar(){
    window.location.href = "../../tela1comprador.html";
}
