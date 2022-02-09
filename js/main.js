const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('.navList');
const linkedWord = document.querySelectorAll('.navWord');
const modal = document.querySelector('.modals');
const button = document.querySelectorAll('.cardBtn');
const projectButton = document.querySelector('.seeButton');

const projectCollection = [
  {
    heading: 'Football Standings',
    tag1: 'Javascript',
    tag3: 'React',
    tag2: 'Redux',
    imageLink: 'images/portfolio/footballStandings.png',
    paragraph: "'Football Standings' is a website for Football fans. It is a fairly simple website which displays the fooball standings of a number of leagues over a number of Years By building this project, I build on my experiance with React, React-Redux, jest, React-routers and Middleware such as Thunk.",
    liveLink: 'https://football-standings-lockless404.netlify.app/',
    gitLink: 'https://github.com/Lockless404/footballStandings',
  },
  {
    heading: 'Art Exhibition',
    tag1: 'Javascript',
    tag3: 'Jest',
    tag2: 'Kanban',
    imageLink: 'images/portfolio/webApiHome.png',
    paragraph: 'This project is about an exhibition app used to display, comment on and reserve art. The page was built using JavaScript and bundled with Webpack and uses API calls. The webapp has 3 user interfaces: Homepage made by Molnar Emese, Comments pop-up Made by Jeff Kayombo and Reservation pop-up Made by Hamza Tarar',
    liveLink: 'https://cocky-shockley-f14242.netlify.app/',
    gitLink: 'https://github.com/Lockless404/api-Webapp',
  },
  {
    heading: 'Leaderboard',
    tag1: 'Javascript',
    tag3: 'Api',
    tag2: 'Webpack',
    imageLink: 'images/portfolio/Leaderboard.png',
    paragraph: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    liveLink: 'https://naughty-payne-dd348d.netlify.app/',
    gitLink: 'https://github.com/Lockless404/Leaderboard',
  },
  {
    heading: 'Fantasy Bookstore',
    tag1: 'Javascript',
    tag3: 'React',
    tag2: 'Redux',
    imageLink: 'images/portfolio/app_screenshot.png',
    paragraph: '"Fantasy Bookstore" is a website for Fantasy book fans. It is a bookstore that allows the user to interact with it in the following manner: Add Books to a list, remove selected book, use API to store the given response.',
    liveLink: 'https://fantasy-bookstore.netlify.app/',
    gitLink: 'https://github.com/Lockless404/BookStore',
  },
  {
    heading: 'Math Calculator',
    tag1: 'Javascript',
    tag3: 'React',
    tag2: 'Router',
    imageLink: 'images/portfolio/calculator.png',
    paragraph: 'Calculator app created using React. Capable of doing all basic mathematics functions.',
    liveLink: 'https://compassionate-beaver-6b1347.netlify.app/',
    gitLink: 'https://github.com/Lockless404/magicMath',
  },
  {
    heading: 'Space Traveller',
    tag1: 'Javascript',
    tag3: 'React',
    tag2: 'Redux',
    imageLink: 'images/portfolio/spacetrarveller.png',
    paragraph: 'Space Traveller hub is a web application that works with the real live data from the SpaceX API. Its a web application for a company that provides commercial and scientific space travel services.',
    liveLink: 'https://hzrspacetraveller.netlify.app/',
    gitLink: 'https://github.com/RolandM99/SpaceTraveller',
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
        <div class="modalImage"><img class= "noTenImg" src="${projectCollection[n].imageLink}" alt="Big Number 10"></div>
        <div class="modalPara">${projectCollection[n].paragraph}</div>
        <div class="modalButtons">
            <button class="modalButton Live">
              <a href="${projectCollection[n].liveLink}">See Live</a>
              <img class= "buttonIcons live" src="images/liveIcon.png" alt="Live Icon">
            </button>
            <button class="modalButton Source">
              <a href="${projectCollection[n].gitLink}">See Source</a>
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
