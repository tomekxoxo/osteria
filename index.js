
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
burger.addEventListener('click', () => {
  navList.classList.toggle('open');
  burger.classList.toggle('open');
})
function tellTime() {
  const element = document.querySelector('.time-text');
  const date = new Date().toString();
  const hour = date.substring(16,21);
  console.log(hour);
  element.textContent = hour + ` we're close`;
}
tellTime();