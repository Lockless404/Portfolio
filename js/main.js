const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('.navLst');
const linkedWord = document.querySelectorAll('.navWord');

const navAppear = () => {

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    menuIcon.classList.toggle('turn');
  })
}


navAppear();
