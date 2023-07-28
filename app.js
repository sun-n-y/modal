const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});
