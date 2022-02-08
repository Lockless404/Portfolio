const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('.navList');
const linkedWord = document.querySelectorAll('.navWord');
const modal = document.querySelector('.modals');
const button = document.querySelectorAll('.cardBtn');
const projectButton = document.querySelector('.seeButton');

const projectCollection = [
  {
    heading: 'Multi Post Stories',
    tag1: 'html',
    tag3: 'Bootstrap',
    tag2: 'Ruby on rails',
    imageLink: '<div class="modalImage"><img class="noTenImg" src="images/tenBig.png" alt="Big Number 10"></div>',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveLink: '',
    gitLink: '',
  },
  {
    heading: 'Empty',
    tag1: 'Empty',
    tag3: 'Empty',
    tag2: 'Empty',
    imageLink: '<div class="modalImage"><img class="noTenImg" src="imagestenBig.png" alt="Big Number 10"></div>',
    paragraph: 'Empty',
    liveLink: '',
    gitLink: '',
  },
  {
    heading: 'Blah',
    tag1: 'Blah',
    tag3: 'Blah',
    tag2: 'Blah',
    imageLink: '<div class="modalImage"><img class="noTenImg" src="images/tenBig.png" alt="Big Number 10"></div>',
    paragraph: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
    liveLink: '',
    gitLink: '',
  },
  {
    heading: 'Meh',
    tag1: 'Meh',
    tag3: 'Meh',
    tag2: 'Meh',
    imageLink: '<div class="modalImage"><img class="noTenImg" src="images/tenBig.png" alt="Big Number 10"></div>',
    paragraph: 'Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh',
    liveLink: '',
    gitLink: '',
  },
  {
    heading: 'Boohoo',
    tag1: 'Boohoo',
    tag3: 'Boohoo',
    tag2: 'Boohoo',
    imageLink: '<div class="modalImage"><img class="noTenImg" src="images/tenBig.png" alt="Big Number 10"></div>',
    paragraph: 'Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo',
    liveLink: '',
    gitLink: '',
  },
  {
    heading: 'Kak',
    tag1: 'Kak',
    tag3: 'Kak',
    tag2: 'Kak',
    imageLink: '<div class="modalImage"><img class="noTenImg" src="images/tenBig.png" alt="Big Number 10"></div>',
    paragraph: 'Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak',
    liveLink: '',
    gitLink: '',
  },
];

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

function render(n) {
  modal.innerHTML = `
    <div class="modal1" id="modal1">  
        <div class="modalHeader">
          <div class="modalHeading">${projectCollection[n].heading}</div>
          <button class="modalButtonClose" onclick="modalClose()" >&times;</button>
        </div>
        <div class="modalBadges">
          <ul>
            <li class="modalbadge one">${projectCollection[n].tag1}</li>
            <li class="modalbadge two">${projectCollection[n].tag2}</li>
            <li class="modalbadge three">${projectCollection[n].tag3}</li>
          </ul>
        </div>
        <div class="modalImage"><img class= "noTenImg" src="images/tenBig.png" alt="Big Number 10"></div>
        <div class="modalPara">${projectCollection[n].paragraph}</div>
        <div class="modalButtons">
            <button class="modalButton Live">
              See Live
              <img class= "buttonIcons live" src="images/liveIcon.png" alt="Live Icon">
            </button>
            <button class="modalButton Source">
              See Source
              <img class="buttonIcons Source" src="images/IconGitHubWhite.png" alt = "Github Icon">
            </button>
        </div>
      </div>
    </section>
  `;
}

projectButton.addEventListener('click', () => {
  modal.classList.add('modal-appear');
  render(0);
});

for (let i = 0; i < button.length; i += 1) {
  button[i].addEventListener('click', () => {
    modal.classList.add('modal-appear');
    render(i);
  });
}

function modalClose() {
  modal.classList.remove('modal-appear');
}

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
modalClose();
