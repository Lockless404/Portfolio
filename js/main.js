const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('.navLst');
const linkedWord = document.querySelectorAll('.navWord');

const navAppear = () => {
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    menuIcon.classList.toggle('turn');
  })
}

const navDisappear = () => { 
  for (let i = 0; i < linkedWord.length; i++) { 
    linkedWord[i].addEventListener('click', () => {
       nav.classList.remove('nav-active'); 
      menuIcon.classList.remove('turn'); 
    }) 
  } 
} 
navDisappear(); 
navAppear();