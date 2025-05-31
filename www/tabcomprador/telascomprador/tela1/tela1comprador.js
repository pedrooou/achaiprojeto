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
