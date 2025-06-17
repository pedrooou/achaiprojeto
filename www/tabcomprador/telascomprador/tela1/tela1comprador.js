const slider = document.getElementById('slider');
const slidesContainer = document.getElementById('slides');
const pagination = document.querySelector('.pagination');

let currentIndex = 1;
let autoplayTimer;
const autoplayInterval = 3000;

function setupClones() {
  const slides = slidesContainer.children;
  if (slides.length === 0) return;

  const firstSlide = slides[0].cloneNode(true);
  const lastSlide = slides[slides.length - 1].cloneNode(true);

  slidesContainer.appendChild(firstSlide);
  slidesContainer.insertBefore(lastSlide, slidesContainer.firstChild);
}

function createPagination() {
  pagination.innerHTML = "";
  const slidesCount = slidesContainer.children.length - 2;

  for (let i = 0; i < slidesCount; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i + 1));
    pagination.appendChild(dot);
  }
}

function updatePagination() {
  const slidesCount = slidesContainer.children.length - 2;
  let realIndex = currentIndex - 1;
  if (realIndex < 0) realIndex = slidesCount - 1;
  if (realIndex >= slidesCount) realIndex = 0;

  document.querySelectorAll(".pagination span").forEach((dot, i) => {
    dot.classList.toggle("active", i === realIndex);
  });
}

function goToSlide(index, instant = false) {
  const slide = slidesContainer.children[index];
  const slideWidth = slide.offsetWidth;
  const slideMarginRight = parseInt(getComputedStyle(slide).marginRight) || 0;

  const containerWidth = slider.offsetWidth;
  const offset = (slideWidth + slideMarginRight) * index;

  const centerOffset = (containerWidth - slideWidth) / 2;
  const translateX = -(offset - centerOffset);

  if (instant) {
    slidesContainer.style.transition = "none";
    slidesContainer.style.transform = `translateX(${translateX}px)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slidesContainer.style.transition = "transform 0.5s ease-in-out";
      });
    });
  } else {
    slidesContainer.style.transition = "transform 0.5s ease-in-out";
    slidesContainer.style.transform = `translateX(${translateX}px)`;
  }

  currentIndex = index;
  updatePagination();
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

function startAutoplay() {
  autoplayTimer = setInterval(() => {
    nextSlide();
  }, autoplayInterval);
}

function resetAutoplay() {
  clearInterval(autoplayTimer);
  startAutoplay();
}

let startX = 0;
let isDragging = false;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const diff = e.touches[0].clientX - startX;
  if (Math.abs(diff) > 50) {
    isDragging = false;
    if (diff < 0) nextSlide();
    else prevSlide();
    resetAutoplay();
  }
});

slider.addEventListener('touchend', () => {
  isDragging = false;
});

slidesContainer.addEventListener("transitionend", () => {
  const slidesCount = slidesContainer.children.length - 2;

  // Loop para clone do primeiro e último
  if (currentIndex === slidesCount + 1) {
    currentIndex = 1;
    requestAnimationFrame(() => {
      goToSlide(currentIndex, true);
    });
  }
  if (currentIndex === 0) {
    currentIndex = slidesCount;
    requestAnimationFrame(() => {
      goToSlide(currentIndex, true);
    });
  }
});

// Forçar redraw inicial para evitar delay no primeiro render
window.onload = () => {
  goToSlide(currentIndex, true);
};

setupClones();
createPagination();
startAutoplay();


document.addEventListener('DOMContentLoaded', function () {
  // --- SLIDER2: 3, 4-6 ou mais de 6 slides ---
  const slider2 = document.getElementById('slider2');
  const slides2 = document.getElementById('slides2');
  let slides = Array.from(slides2.children);

  let totalSlidesOriginais = slides.length;
  let totalSlides = slides.length;
  let currentIndex = 0; 
  let startX = 0;
  let isDragging = false;
  let currentTranslate = 0;
  let lastDelta = 0;
  let infinito = false;

  // Limpa clones antigos se houver
  function limparClones() {
    while (slides2.children.length > totalSlidesOriginais) {
      slides2.removeChild(slides2.lastChild);
    }
    while (slides2.children.length > totalSlidesOriginais) {
      slides2.removeChild(slides2.firstChild);
    }
  }

  // Ajusta o modo do carrossel conforme a quantidade de slides
  function configurarSlider2() {
    slides = Array.from(slides2.children);
    totalSlidesOriginais = slides.length;

    // Limpa clones antigos
    limparClones();

if (totalSlidesOriginais <= 3) {
  // Fixo, sem movimentação
  slides2.style.transform = 'translateX(0)';
  slides2.style.transition = 'none';
  infinito = false;
  currentIndex = 0; // <-- Adicione isso!
} else if (totalSlidesOriginais > 6) {
      // Loop infinito: clona 3 primeiros e 3 últimos
      for (let i = 0; i < 3; i++) {
        slides2.appendChild(slides[i].cloneNode(true)); // clones finais
        slides2.insertBefore(slides[slides.length - 1 - i].cloneNode(true), slides2.firstChild); // clones iniciais
      }
      totalSlides = slides2.children.length;
      currentIndex = 3;
      infinito = true;
      slider2.style.pointerEvents = 'auto';
    } else {
      // Entre 4 e 6: movimentação normal, sem looping
      currentIndex = 0;
      infinito = false;
      slider2.style.pointerEvents = 'auto';
    }
    ajustarSlides();
    atualizarPosicao(true);
  }

  function ajustarSlides() {
    const sliderWidth = slider2.offsetWidth;
    const slideWidth = sliderWidth / 3.5; // 3,5 slides visíveis
    Array.from(slides2.children).forEach(slide => {
      slide.style.width = slideWidth + 'px';
      slide.style.flex = '0 0 ' + slideWidth + 'px';
    });
    atualizarPosicao(true);
  }

  function atualizarPosicao(instant = false) {
    const slideWidth = slider2.offsetWidth / 3.08;
    let translateIndex = currentIndex;
    if (!infinito && totalSlidesOriginais > 3 && totalSlidesOriginais <= 6) {
      // Não deixa passar do primeiro ou último
      if (currentIndex < 0) translateIndex = 0;
      if (currentIndex > totalSlidesOriginais - 3) translateIndex = totalSlidesOriginais - 3;
    }
    currentTranslate = -translateIndex * slideWidth;
    slides2.style.transition = instant ? 'none' : 'transform 0.4s cubic-bezier(.25,.8,.25,1)';
    slides2.style.transform = `translateX(${currentTranslate}px)`;
  }

  function corrigirLoop() {
    if (!infinito) return;
    // Se foi para os clones do início, volta para o slide real correspondente
    if (currentIndex < 3) {
      currentIndex += totalSlidesOriginais;
      atualizarPosicao(true);
    }
    // Se foi para os clones do final, volta para o slide real correspondente
    if (currentIndex >= totalSlidesOriginais + 3) {
      currentIndex -= totalSlidesOriginais;
      atualizarPosicao(true);
    }
  }

  function snapToNearest() {
    const slideWidth = slider2.offsetWidth / 3;
    const nearest = Math.round(-parseFloat(slides2.style.transform.replace('translateX(', '').replace('px)', '')) / slideWidth);
    currentIndex = nearest;
    atualizarPosicao();
    slides2.addEventListener('transitionend', corrigirLoop, { once: true });
  }

  // --- Inércia e movimentação ---
  let inertiaTimerH = null;
  let velocityH = 0;
  let lastMoveTimeH = 0;
  let lastXH = 0;

  function onStartH(e) {
    if (totalSlidesOriginais <= 3) return; // Não movimenta
    isDragging = true;
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    lastXH = startX;
    slides2.style.transition = 'none';
    lastDelta = 0;
    velocityH = 0;
    lastMoveTimeH = Date.now();
    if (inertiaTimerH) clearTimeout(inertiaTimerH);
  }
  function onMoveH(e) {
    if (!isDragging || totalSlidesOriginais <= 3) return;
    const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const delta = x - startX;
    lastDelta = delta;
    slides2.style.transform = `translateX(${currentTranslate + delta}px)`;

    // Calcula velocidade
    const now = Date.now();
    velocityH = (x - lastXH) / (now - lastMoveTimeH + 1);
    lastMoveTimeH = now;
    lastXH = x;
  }
  function onEndH(e) {
    if (!isDragging || totalSlidesOriginais <= 3) return;
    isDragging = false;
    const slideWidth = slider2.offsetWidth / 3.5;
    let inertia = velocityH * 100;
    let targetTranslate = currentTranslate + lastDelta + inertia;
    let minTranslate, maxTranslate;
    if (infinito) {
      minTranslate = -((slides2.children.length - 1) * slideWidth);
      maxTranslate = 0;
    } else {
      minTranslate = -((totalSlidesOriginais - 3) * slideWidth);
      maxTranslate = 0;
    }
    if (targetTranslate < minTranslate) targetTranslate = minTranslate;
    if (targetTranslate > maxTranslate) targetTranslate = maxTranslate;

    slides2.style.transition = 'transform 1s cubic-bezier(.25,.8,.25,1)';
    slides2.style.transform = `translateX(${targetTranslate}px)`;

    // Após 1s, faz o snap
    if (inertiaTimerH) clearTimeout(inertiaTimerH);
    inertiaTimerH = setTimeout(() => {
      const nearest = Math.round(-targetTranslate / slideWidth);
      currentIndex = nearest;
      atualizarPosicao();
      slides2.addEventListener('transitionend', corrigirLoop, { once: true });
    }, 1000);
  }

  // Listeners
  slides2.addEventListener('mousedown', onStartH);
  slides2.addEventListener('mousemove', onMoveH);
  slides2.addEventListener('mouseup', onEndH);
  slides2.addEventListener('mouseleave', onEndH);

  slides2.addEventListener('touchstart', onStartH);
  slides2.addEventListener('touchmove', onMoveH);
  slides2.addEventListener('touchend', onEndH);

  window.addEventListener('resize', ajustarSlides);

  // Inicialização dinâmica
  configurarSlider2();
  setTimeout(() => atualizarPosicao(true), 10);
});

function centralizarSlides2() {
  const slides2 = document.getElementById('slides2');
  const qtd = slides2.children.length;
  if (qtd <= 3) {
    slides2.classList.add('centralizar');
  } else {
    slides2.classList.remove('centralizar');
  }
}

// Chame após montar/adicionar/remover slides2 ou no final do DOMContentLoaded:
centralizarSlides2();

function abrirProdutoTela(tela) {
  // Abre produto.html em um novo contexto (iframe ou janela)
 window.location.href = "ramificacoes/categorias/categoria.html?tela=" + tela;
}

document.getElementById('slide2-tela1').onclick = function() {
  abrirProdutoTela('tela1');
};
document.getElementById('slide2-tela2').onclick = function() {
  abrirProdutoTela('tela2');
};
document.getElementById('slide2-tela3').onclick = function() {
  abrirProdutoTela('tela3');
};
