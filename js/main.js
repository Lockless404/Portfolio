const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('.navLst');
const linkedWord = document.querySelectorAll('.navWord');
const modal = document.querySelector('.modals');
const button = document.querySelectorAll('.cardBtn')
const buttonOne = document.querySelector('.cardBtn.one');
const buttonTwo = document.querySelector('.cardBtn.two');
const buttonThree = document.querySelector('.cardBtn.three');
const buttonFour = document.querySelector('.cardBtn.four');
const buttonFive = document.querySelector('.cardBtn.five');
const buttonSix = document.querySelector('.cardBtn.six');
const projectButton = document.querySelector('.seeButton');
const modalCloseButton = document.querySelector('.modalButtonClose');

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

for ( let n = 0; n < button.length; n += 1) {
  let projects = projectCollection[n];
  const index = n;
  modal.innerHTML = `
  <div class="modal1" id="modal1">  
      <div class="modalHeader">
        <div class="modalHeading">${projects.heading}</div>
        <button class="modalButtonClose">&times;</button>
      </div>
      <div class="modalBadges">
        <ul>
          <li class="modalbadge one">${projects.tag1}</li>
          <li class="modalbadge two">${projects.tag2}</li>
          <li class="modalbadge three">${projects.tag3}</li>
        </ul>
      </div>
      <div class="modalImage"><img class= "noTenImg" src="images/tenBig.png" alt="Big Number 10"></div>
      <div class="modalPara">${projects.paragraph}</div>
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

  
  function objDisplay(index) {
    const modalHeading = document.querySelector('.modalHeading');
    const modalTag1 = document.querySelector('.modalbadge.one');
    const modalTag2 = document.querySelector('.modalbadge.two');
    const modalTag3 = document.querySelector('.modalbadge.three');
    const modalParagraph = document.querySelector('.modalPara');
    const imgLink = document.querySelector('.modalImage');
    const dataObj = projectCollection[index];

    modalHeading.innerHTML = dataObj.heading;
    modalTag1.innerHTML = dataObj.tag1;
    modalTag2.innerHTML = dataObj.tag2;
    modalTag3.innerHTML = dataObj.tag3;
    modalParagraph.innerHTML = dataObj.paragraph;
    imgLink.outerHTML = dataObj.imageLink;
    modal.classList.add('modal-appear');
    }


  const popUp1 = () => {
    projectButton.addEventListener('click', objDisplay);
  };

  const popUpAppear = () => {
    button[0].addEventListener('click',objDisplay);
  };
  
  // const popUpDisappear = () => {
  //   modalCloseButton.addEventListener('click', () => {
  //     modal.classList.remove('modal-appear');
  //   });
  // };
  
  //popUpDisappear();
  popUpAppear()
  popUp1();  





// const popUpAppear = () => {
//   buttonOne.addEventListener('click', () => {
//     modal.classList.add('modal-appear');
//     const heading = document.querySelector('.modalHeading');
//     const tag1 = document.querySelector('.modalbadge.one');
//     const tag2 = document.querySelector('.modalbadge.two');
//     const tag3 = document.querySelector('.modalbadge.three');
//     const paragraph = document.querySelector('.modalPara');
//     const imgLink = document.querySelector('.modalImage');
//     const btnSource = document.querySelector('.buttonIcons.Source')
//     const btnLive = document.querySelector('.buttonIcons.live')
// //   });
//   buttonTwo.addEventListener('click', () => {
//     modal.classList.add('modal-appear');
//     document.querySelector('.modalHeading').innerHTML = projectCollection.project2.heading;
//     document.querySelector('.modalbadge.one').innerHTML = projectCollection.project2.tag1;
//     document.querySelector('.modalbadge.two').innerHTML = projectCollection.project2.tag2;
//     document.querySelector('.modalbadge.three').innerHTML = projectCollection.project2.tag3;
//     document.querySelector('.modalPara').innerHTML = projectCollection.project2.paragraph;
//   });

//   buttonThree.addEventListener('click', () => {
//     modal.classList.add('modal-appear');
//     document.querySelector('.modalHeading').innerHTML = projectCollection.project3.heading;
//     document.querySelector('.modalbadge.one').innerHTML = projectCollection.project3.tag1;
//     document.querySelector('.modalbadge.two').innerHTML = projectCollection.project3.tag2;
//     document.querySelector('.modalbadge.three').innerHTML = projectCollection.project3.tag3;
//     document.querySelector('.modalPara').innerHTML = projectCollection.project3.paragraph;
//   });

//   buttonFour.addEventListener('click', () => {
//     modal.classList.add('modal-appear');
//     document.querySelector('.modalHeading').innerHTML = projectCollection.project4.heading;
//     document.querySelector('.modalbadge.one').innerHTML = projectCollection.project4.tag1;
//     document.querySelector('.modalbadge.two').innerHTML = projectCollection.project4.tag2;
//     document.querySelector('.modalbadge.three').innerHTML = projectCollection.project4.tag3;
//     document.querySelector('.modalPara').innerHTML = projectCollection.project4.paragraph;
//   });

//   buttonFive.addEventListener('click', () => {
//     modal.classList.add('modal-appear');
//     document.querySelector('.modalHeading').innerHTML = projectCollection.project5.heading;
//     document.querySelector('.modalbadge.one').innerHTML = projectCollection.project5.tag1;
//     document.querySelector('.modalbadge.two').innerHTML = projectCollection.project5.tag2;
//     document.querySelector('.modalbadge.three').innerHTML = projectCollection.project5.tag3;
//     document.querySelector('.modalPara').innerHTML = projectCollection.project5.paragraph;
//   });

//   buttonSix.addEventListener('click', () => {
//     modal.classList.add('modal-appear');
//     document.querySelector('.modalHeading').innerHTML = projectCollection.project6.heading;
//     document.querySelector('.modalbadge.one').innerHTML = projectCollection.project6.tag1;
//     document.querySelector('.modalbadge.two').innerHTML = projectCollection.project6.tag2;
//     document.querySelector('.modalbadge.three').innerHTML = projectCollection.project6.tag3;
//     document.querySelector('.modalPara').innerHTML = projectCollection.project6.paragraph;
//   });
// };


navDisappear();
navAppear();
