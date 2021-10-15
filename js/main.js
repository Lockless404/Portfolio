const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('.navList');
const linkedWord = document.querySelectorAll('.navWord');
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.querySelector('.error');

function lower(email) {
  const words = email.value.toLowerCase();
  return words === email.value;
}

const showError = () => {
  if (!lower(email)) {
    error.innerHTML = 'Please ensure your Email address is in lowercase.';
    error.classList.add('error-active');
  }
};

email.addEventListener('input', () => {
  error.innerHTML = '';
  error.classList.remove('error-active');
});
const submission = () => {
  form.addEventListener('submit', (event) => {
    if (!lower(email)) {
      showError();
      event.preventDefault();
    }
  });
};

const navAppear = () => {
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    menuIcon.classList.toggle('turn');
  });
};

const navDisappear = () => {
  for (let i = 0; i < linkedWord.length; i += 1) {
    linkedWord[i].addEventListener('click', () => {
      nav.classList.remove('nav-active');
      menuIcon.classList.remove('turn');
    });
  }
};

const addData = (formName, formEmail, formMsg) => {
  const myStorage = { formName, formEmail, formMsg };
  localStorage.setItem('myStorage', JSON.stringify(myStorage));
};

form.addEventListener('input', () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const msg = document.getElementById('msg');
  const formInput = {
    formName: name.value,
    formEmail: email.value,
    formMsg: msg.value,
  };
  addData(formInput.formName, formInput.formEmail, formInput.formMsg);
});

const displayData = () => {
  const data = JSON.parse(localStorage.getItem('myStorage'));
  document.getElementById('name').value = data.formName;
  document.getElementById('email').value = data.formEmail;
  document.getElementById('msg').value = data.formMsg;
};

displayData();
submission();
showError();
navAppear();
navDisappear();
