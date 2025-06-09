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
  // --- SLIDER2: 6 slides, 3 visíveis, loop infinito real, snap centralizado ---
  const slider2 = document.getElementById('slider2');
  const slides2 = document.getElementById('slides2');
  let slides = Array.from(slides2.children);

  // Clona os 3 primeiros e 3 últimos para looping real
  for (let i = 0; i < 3; i++) {
    slides2.appendChild(slides[i].cloneNode(true)); // clones finais
    slides2.insertBefore(slides[slides.length - 1 - i].cloneNode(true), slides2.firstChild); // clones iniciais
  }

  let totalSlides = slides2.children.length;
  let currentIndex = 3; // começa no primeiro slide real
  let startX = 0;
  let isDragging = false;
  let currentTranslate = 0;
  let lastDelta = 0;

  function ajustarSlides() {
    const sliderWidth = slider2.offsetWidth;
    const slideWidth = sliderWidth / 3.5; // Agora cabem 3,5 slides
    Array.from(slides2.children).forEach(slide => {
      slide.style.width = slideWidth + 'px';
      slide.style.flex = '0 0 ' + slideWidth + 'px';
    });
    atualizarPosicao(true);
  }

  function atualizarPosicao(instant = false) {
    const slideWidth = slider2.offsetWidth / 3.08;
    currentTranslate = -currentIndex * slideWidth;
    slides2.style.transition = instant ? 'none' : 'transform 0.4s cubic-bezier(.25,.8,.25,1)';
    slides2.style.transform = `translateX(${currentTranslate}px)`;
  }

  function corrigirLoop() {
    // Se foi para os clones do início, volta para o slide real correspondente
    if (currentIndex < 3) {
      currentIndex += 6;
      atualizarPosicao(true);
    }
    // Se foi para os clones do final, volta para o slide real correspondente
    if (currentIndex >= 6 + 3) {
      currentIndex -= 6;
      atualizarPosicao(true);
    }
  }

  function snapToNearest() {
    const slideWidth = slider2.offsetWidth / 3;
    // Calcula o índice mais próximo do centro
    const nearest = Math.round(-parseFloat(slides2.style.transform.replace('translateX(', '').replace('px)', '')) / slideWidth);
    currentIndex = nearest;
    atualizarPosicao();
    slides2.addEventListener('transitionend', corrigirLoop, { once: true });
  }

  // ...código existente do slider2...

let inertiaTimerH = null;
let velocityH = 0;
let lastMoveTimeH = 0;
let lastXH = 0;

function onStartH(e) {
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
    if (!isDragging) return;
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
    if (!isDragging) return;
    isDragging = false;
    const slideWidth = slider2.offsetWidth / 3.5;
    let inertia = velocityH * 100; // quanto maior, mais "livre"
    let targetTranslate = currentTranslate + lastDelta + inertia;
    let minTranslate = -((slides2.children.length - 1) * slideWidth);
    let maxTranslate = 0;
    if (targetTranslate < minTranslate) targetTranslate = minTranslate;
    if (targetTranslate > maxTranslate) targetTranslate = maxTranslate;

    slides2.style.transition = 'transform 1s cubic-bezier(.25,.8,.25,1)';
    slides2.style.transform = `translateX(${targetTranslate}px)`;

    // Após 1s, faz o snap
    if (inertiaTimerH) clearTimeout(inertiaTimerH);
    inertiaTimerH = setTimeout(() => {
        // Calcula o índice mais próximo do centro
        const nearest = Math.round(-targetTranslate / slideWidth);
        currentIndex = nearest;
        atualizarPosicao();
        slides2.addEventListener('transitionend', corrigirLoop, { once: true });
    }, 1000);
}

// Troque os listeners do slider2 para usar as novas funções:
slides2.addEventListener('mousedown', onStartH);
slides2.addEventListener('mousemove', onMoveH);
slides2.addEventListener('mouseup', onEndH);
slides2.addEventListener('mouseleave', onEndH);

slides2.addEventListener('touchstart', onStartH);
slides2.addEventListener('touchmove', onMoveH);
slides2.addEventListener('touchend', onEndH);

  window.addEventListener('resize', ajustarSlides);

  ajustarSlides();
  setTimeout(() => atualizarPosicao(true), 10);
});

document.addEventListener('DOMContentLoaded', function () {
  // --- SLIDER VERTICAL: 6 slides, 3.5 visíveis, loop infinito real, snap centralizado ---
  const sliderV = document.getElementById('sliderVertical');
  const slidesV = document.getElementById('slidesVertical');
  if (!sliderV || !slidesV) return;
  let slides = Array.from(slidesV.children);

  // Clona os 3 primeiros e 3 últimos para looping real
  for (let i = 0; i < 3; i++) {
    slidesV.appendChild(slides[i].cloneNode(true)); // clones finais
    slidesV.insertBefore(slides[slides.length - 1 - i].cloneNode(true), slidesV.firstChild); // clones iniciais
  }

  let totalSlides = slidesV.children.length;
  let currentIndex = 3; // começa no primeiro slide real
  let startY = 0;
  let isDragging = false;
  let currentTranslate = 0;
  let lastDelta = 0;

  function ajustarSlidesV() {
    const sliderHeight = sliderV.offsetHeight;
    const slideHeight = sliderHeight / 4.6; // 3,5 slides visíveis
    Array.from(slidesV.children).forEach(slide => {
      slide.style.height = slideHeight + 'px';
      slide.style.flex = '0 0 ' + slideHeight + 'px';
    });
    atualizarPosicaoV(true);
  }

  function atualizarPosicaoV(instant = false) {
    const slideHeight = sliderV.offsetHeight / 4.1;
    currentTranslate = -currentIndex * slideHeight;
    slidesV.style.transition = instant ? 'none' : 'transform 0.4s cubic-bezier(.25,.8,.25,1)';
    slidesV.style.transform = `translateY(${currentTranslate}px)`;
  }

  function corrigirLoopV() {
    if (currentIndex < 3) {
      currentIndex += 6;
      atualizarPosicaoV(true);
    }
    if (currentIndex >= 6 + 3) {
      currentIndex -= 6;
      atualizarPosicaoV(true);
    }
  }

  function snapToNearestV() {
    const slideHeight = sliderV.offsetHeight / 3.5;
    const nearest = Math.round(-parseFloat(slidesV.style.transform.replace('translateY(', '').replace('px)', '')) / slideHeight);
    currentIndex = nearest;
    atualizarPosicaoV();
    slidesV.addEventListener('transitionend', corrigirLoopV, { once: true });
  }

  let inertiaTimerV = null;
  let velocityV = 0;
  let lastMoveTimeV = 0;
  let lastYV = 0;

  function onStartV(e) {
    isDragging = true;
    startY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    lastYV = startY;
    slidesV.style.transition = 'none';
    lastDelta = 0;
    velocityV = 0;
    lastMoveTimeV = Date.now();
    if (inertiaTimerV) clearInterval(inertiaTimerV);
  }
  function onMoveV(e) {
    if (!isDragging) return;
    const y = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    const delta = y - startY;
    lastDelta = delta;
    slidesV.style.transform = `translateY(${currentTranslate + delta}px)`;

    // Calcula velocidade
    const now = Date.now();
    velocityV = (y - lastYV) / (now - lastMoveTimeV + 1);
    lastMoveTimeV = now;
    lastYV = y;
  }
  function onEndV(e) {
    if (!isDragging) return;
    isDragging = false;
    const slideHeight = sliderV.offsetHeight / 3.5;
    let inertia = velocityV * 100; // quanto maior, mais "livre"
    let targetTranslate = currentTranslate + lastDelta + inertia;
    let minTranslate = -((slidesV.children.length - 1) * slideHeight);
    let maxTranslate = 0;
    if (targetTranslate < minTranslate) targetTranslate = minTranslate;
    if (targetTranslate > maxTranslate) targetTranslate = maxTranslate;

    slidesV.style.transition = 'transform 1s cubic-bezier(.25,.8,.25,1)';
    slidesV.style.transform = `translateY(${targetTranslate}px)`;

    // Após 1s, faz o snap
    if (inertiaTimerV) clearTimeout(inertiaTimerV);
    inertiaTimerV = setTimeout(() => {
      // Calcula o índice mais próximo do centro
      const nearest = Math.round(-targetTranslate / slideHeight);
      currentIndex = nearest;
      atualizarPosicaoV();
      slidesV.addEventListener('transitionend', corrigirLoopV, { once: true });
    }, 1000);
  }

  slidesV.addEventListener('mousedown', onStartV);
  slidesV.addEventListener('mousemove', onMoveV);
  slidesV.addEventListener('mouseup', onEndV);
  slidesV.addEventListener('mouseleave', onEndV);

  slidesV.addEventListener('touchstart', onStartV);
  slidesV.addEventListener('touchmove', onMoveV);
  slidesV.addEventListener('touchend', onEndV);

  window.addEventListener('resize', ajustarSlidesV);

  ajustarSlidesV();
  setTimeout(() => atualizarPosicaoV(true), 10);
});