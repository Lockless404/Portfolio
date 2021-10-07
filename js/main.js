const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('.navLst');
const linkedWord = document.querySelectorAll('.navWord');
const modal = document.querySelector('.modals');
const buttonOne = document.querySelector('.cardBtn.one');
const buttonTwo = document.querySelector('.cardBtn.two');
const buttonThree = document.querySelector('.cardBtn.three');
const buttonFour = document.querySelector('.cardBtn.four');
const buttonFive = document.querySelector('.cardBtn.five');
const buttonSix = document.querySelector('.cardBtn.six');
const projectButton = document.querySelector('.seeButton');
const modalCloseButton = document.querySelector('.modalButtonClose');
const form = document.getElementById('form');
let email = document.getElementById('email');
const error = document.querySelector('.error');


showError = () => {
    if ( !lower(email)) {
      error.innerHTML = 'Please ensure your Email address is in lowercase.';
      error.classList.add('error-active');
    }
};

email.addEventListener('input', function (event) {
  error.innerHTML = '';
  error.classList.remove('error-active');
})
submission = () => {
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

const popUp1 = () => {
  projectButton.addEventListener('click', () => {
    modal.classList.add('modal-appear');
  });
};

const projectCollection = {
  project1: {
    heading: 'Multi Post Stories',
    tag1: 'html',
    tag3: 'Bootstrap',
    tag2: 'Ruby on rails',
    imageLink: "<div class=\"modalImage\"><img class=\"noTenImg\" src=\"images/tenBig.png\" alt=\"Big Number 10\"></div>",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
  },
  project2: {
    heading: 'Empty',
    tag1: 'Empty',
    tag3: 'Empty',
    tag2: 'Empty',
    imageLink: "<div class=\"modalImage\"><img class=\"noTenImg\" src=\"images/tenBig.png\" alt=\"Big Number 10\"></div>",
    paragraph: "Empty"
  },
  project3: {
    heading: 'Blah',
    tag1: 'Blah',
    tag3: 'Blah',
    tag2: 'Blah',
    imageLink: "<div class=\"modalImage\"><img class=\"noTenImg\" src=\"images/tenBig.png\" alt=\"Big Number 10\"></div>",
    paragraph: "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah"
  },
  project4: {
    heading: 'Meh',
    tag1: 'Meh',
    tag3: 'Meh',
    tag2: 'Meh',
    imageLink: "<div class=\"modalImage\"><img class=\"noTenImg\" src=\"images/tenBig.png\" alt=\"Big Number 10\"></div>",
    paragraph: "Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh Meh"
  },
  project5: {
    heading: 'Boohoo',
    tag1: 'Boohoo',
    tag3: 'Boohoo',
    tag2: 'Boohoo',
    imageLink: "<div class=\"modalImage\"><img class=\"noTenImg\" src=\"images/tenBig.png\" alt=\"Big Number 10\"></div>",
    paragraph: "Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo Boohoo"
  },
  project6: {
    heading: 'Kak',
    tag1: 'Kak',
    tag3: 'Kak',
    tag2: 'Kak',
    imageLink: "<div class=\"modalImage\"><img class=\"noTenImg\" src=\"images/tenBig.png\" alt=\"Big Number 10\"></div>",
    paragraph: "Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak Kak"
  }
};
const popUpAppear = () => {
  buttonOne.addEventListener('click', () => {
    modal.classList.add('modal-appear');
    document.querySelector('.modalHeading').innerHTML = 'adadadaddad';
    document.querySelector('.modalbadge.one').innerHTML = projectCollection.project1.tag1;
    document.querySelector('.modalbadge.two').innerHTML = projectCollection.project1.tag2;
    document.querySelector('.modalbadge.three').innerHTML = projectCollection.project1.tag3;
    document.querySelector('.modalPara').innerHTML = projectCollection.project1.paragraph;
  });
  buttonTwo.addEventListener('click', () => {
    modal.classList.add('modal-appear');
    document.querySelector('.modalHeading').innerHTML = projectCollection.project2.heading;
    document.querySelector('.modalbadge.one').innerHTML = projectCollection.project2.tag1;
    document.querySelector('.modalbadge.two').innerHTML = projectCollection.project2.tag2;
    document.querySelector('.modalbadge.three').innerHTML = projectCollection.project2.tag3;
    document.querySelector('.modalPara').innerHTML = projectCollection.project2.paragraph;
  });

  buttonThree.addEventListener('click', () => {
    modal.classList.add('modal-appear');
    document.querySelector('.modalHeading').innerHTML = projectCollection.project3.heading;
    document.querySelector('.modalbadge.one').innerHTML = projectCollection.project3.tag1;
    document.querySelector('.modalbadge.two').innerHTML = projectCollection.project3.tag2;
    document.querySelector('.modalbadge.three').innerHTML = projectCollection.project3.tag3;
    document.querySelector('.modalPara').innerHTML = projectCollection.project3.paragraph;
  });

  buttonFour.addEventListener('click', () => {
    modal.classList.add('modal-appear');
    document.querySelector('.modalHeading').innerHTML = projectCollection.project4.heading;
    document.querySelector('.modalbadge.one').innerHTML = projectCollection.project4.tag1;
    document.querySelector('.modalbadge.two').innerHTML = projectCollection.project4.tag2;
    document.querySelector('.modalbadge.three').innerHTML = projectCollection.project4.tag3;
    document.querySelector('.modalPara').innerHTML = projectCollection.project4.paragraph;
  });

  buttonFive.addEventListener('click', () => {
    modal.classList.add('modal-appear');
    document.querySelector('.modalHeading').innerHTML = projectCollection.project5.heading;
    document.querySelector('.modalbadge.one').innerHTML = projectCollection.project5.tag1;
    document.querySelector('.modalbadge.two').innerHTML = projectCollection.project5.tag2;
    document.querySelector('.modalbadge.three').innerHTML = projectCollection.project5.tag3;
    document.querySelector('.modalPara').innerHTML = projectCollection.project5.paragraph;
  });

  buttonSix.addEventListener('click', () => {
    modal.classList.add('modal-appear');
    document.querySelector('.modalHeading').innerHTML = projectCollection.project6.heading;
    document.querySelector('.modalbadge.one').innerHTML = projectCollection.project6.tag1;
    document.querySelector('.modalbadge.two').innerHTML = projectCollection.project6.tag2;
    document.querySelector('.modalbadge.three').innerHTML = projectCollection.project6.tag3;
    document.querySelector('.modalPara').innerHTML = projectCollection.project6.paragraph;
  });
};

submission();
showError();
navDisappear();
navAppear();
popUpAppear();
popUp1();