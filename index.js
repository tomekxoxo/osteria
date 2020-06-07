const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
burger.addEventListener('click', () => {
  navList.classList.toggle('open');
  burger.classList.toggle('open');
})