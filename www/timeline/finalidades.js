// Script para toggle accordion dos itens da timeline
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    const header = item.querySelector('.timeline-header');
    header.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
  });
});