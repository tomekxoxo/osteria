AOS.init({
  startEvent: 'DOMContentLoaded',
  once: true,
  delay:400
});

const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
burger.addEventListener('click', () => {
  
  navList.classList.toggle('open');
  burger.classList.toggle('open');
})
function tellTime() {
  const element = document.querySelector('.time-text');
  const date = new Date().toString();
  const hour = date.substring(16, 21);
  const checkIfOpen = hour.substring(0, 2);
  
  if (checkIfOpen >=10 && checkIfOpen < 22) {
    element.textContent = hour + ` we're open`;
  }
  else {
    element.textContent = hour + ` we're close`;
  }
  
}
tellTime();

window.addEventListener('scroll', () => {
  const height = window.innerHeight;
  const header = document.querySelector('.header');
  if (window.scrollY >= height) {
    header.classList.add('scroll');
  }
  else {
    header.classList.remove('scroll');
  }
})
