const navAppear = () => {
  const menuIcon = document.querySelector('.menuIcon');
  const nav = document.querySelector('.navLst');

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    menuIcon.classList.toggle('turn');
  })
}

const navDisappear = () => {
  const linkedWord = document.querySelector('.aWord');
  const nav = document.querySelector('.navLst');

  linkedWord.addEventListener('click', () => {
    nav.classList.toggle('.nav-disapear');
  })
}


navDisappear();
navAppear();