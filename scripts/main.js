// Код только для упрощения проверки

const modal = document.querySelector('.modal');
const open = document.querySelector('.js-modal-open');
const close = document.querySelector('.js-modal-close');

open.addEventListener('click', () => {
  modal.classList.add('visible');
});

close.addEventListener('click', () => {
  modal.classList.remove('visible');
});
