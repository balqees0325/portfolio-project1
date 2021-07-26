const hamburgerMenu =document.querySelector('.menu-icon');
const navMenu =document.querySelector('.header-nav');

hamburgerMenu.addEventListener('click', ()=>{
  navMenu.classList.add('menu');
})
