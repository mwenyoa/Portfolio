// mobile navigation popup
const navBars = document.querySelector('#menu-icon');
const navList = document.querySelector('.mobnav-menu');
const navItems = document.querySelectorAll('.mobnav-list');
const closeMenuBtn = document.querySelector('.closeBtn');
function menuToggler() {
  if (navList.classList.contains('show-menu')) {
    closeMenuBtn.style.display = 'none';
    navList.classList.remove('show-menu');
    navBars.style.display = 'block';
    navList.style.display = 'none';
  } else {
    closeMenuBtn.style.display = 'block';
    navList.classList.add('show-menu');
    navBars.style.display = 'none';
    navList.style.display = 'block';
  }
}
closeMenuBtn.addEventListener('click', menuToggler);
navBars.addEventListener('click', menuToggler);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', menuToggler);
});
// Deskstop Works section logic
const myworkDesk = [
  {
    projName: 'Tonic',
    projDetails: ['CANOPY', 'Back End Dev', '2015'],
    shortDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tonicImgUrl: 'desktop-images/Portfolio-card1.png',
    techlgsUsed: ['html', 'css', 'javascript'],
    desktopPopUpImgUrl: 'desktop-images/Portfolio-card1.png',
    techlgsPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    liveLink: '',
    sourceLink: '',
    imgPos: 'img-left',
    descPos: 'card-right-content card-content',
    deskSubHead: 'card-sub-head',
    cardDesk: 'card-desk',
    canopy: 'canopy2_face sub-text',
    subText: 'sub-text',
    faCircle: 'fa-circle',
    cardBtn: 'wBg',
  },

  {
    projName: 'Multi-Post Stories',
    projDetails: ['FACEBOOK', 'Full Stack Dev', '2015'],
    shortDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends..',
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tonicImgUrl: 'desktop-images/cardimg2.png',
    techlgsUsed: ['html', 'Ruby on rails', 'css', 'javaScript'],
    desktopPopUpImgUrl: 'desktop-images/cardimg2.png',
    techlgsPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    liveLink: '',
    sourceLink: '',
    imgPos: 'img-right',
    descPos: 'card-content card-left-content',
    cardDesk: 'card-desk',
    deskSubHead: 'card-sub-head',
    canopy: 'canopy2_face sub-text',
    subText: 'sub-text',
    faCircle: 'fa-circle',
    cardBtn: 'wBg',
  },

  {
    projName: 'Facebook 360',
    projDetails: ['FACEBOOK', 'Full Stack Dev', '2015'],
    shortDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tonicImgUrl: 'desktop-images/cardimg3.png',
    techlgsUsed: ['html', 'Ruby on rails', 'css', 'javaScript'],
    desktopPopUpImgUrl: 'desktop-images/cardimg3.png',
    techlgsPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    liveLink: '',
    sourceLink: '',
    imgPos: 'img-left',
    descPos: ' card-content card-right-content',
    cardDesk: 'card-desk',
    deskSubHead: 'card-sub-head',
    canopy: 'canopy2_face sub-text',
    subText: 'sub-text',
    faCircle: 'fa-circle',
    cardBtn: 'bBg',
  },

  {
    projName: 'Uber Navigation',
    projDetails: ['Uber', 'Lead Developer', '2018'],
    shortDesc: ' A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tonicImgUrl: './desktop-images/cardimg4.png',
    techlgsUsed: ['html', 'Ruby on rails', 'css', 'javaScript'],
    desktopPopUpImgUrl: './desktop-images/cardimg4.png',
    techlgsPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    liveLink: '',
    sourceLink: '',
    imgPos: 'img-right',
    descPos: 'card-left-content card-content',
    cardDesk: 'card-desk',
    deskSubHead: 'card-sub-head',
    canopy: 'canopy2_face sub-text',
    subText: 'sub-text',
    faCircle: 'fa-circle',
    cardBtn: 'wBg',
  },
];

function createTechList(technologies, className) {
  const langList = document.createElement('ul');
  langList.classList.add('lang-list');
  for (let i = 0; i < technologies.length; i += 1) {
    const element = document.createElement('li');
    element.classList.add(className);
    element.innerHTML = technologies[i];
    langList.appendChild(element);
  }
  return langList.innerHTML;
}
// Modal Pop Up
function gem(ex, isClass = false) {
  if (isClass) {
    return document.getElementsByClassName(ex)[0];
  }
  return document.getElementById(ex);
}

// eslint-disable-next-line no-unused-vars
function popupDesk(proIndx) {
  const project = myworkDesk[proIndx];
  gem('hd').innerText = project.projName;
  gem('mImageDsk', true).src = project.tonicImgUrl;
  gem('modalText', true).innerText = project.longDesc;
  gem('modalTextMobile', true).innerText = project.shortDesc;
  // desktop heading
  const deskPopid = document.getElementById('mycv');
  const listId = document.querySelector('.lang-list2');
  const deskPop = document.createElement('deskPop');
  deskPop.innerHTML = `<ul class="cards-container">
              <li class="card-detail dcanopy2_face">${project.projDetails[0]}</li>
              <li class="card-detail optiond2_full">
                <i class="fa fa-fw fa-circle"></i>
                ${project.projDetails[1]}
              </li>
              <li class="card-detail optiond2_full">
                <i class="fa fa-fw fa-circle"></i>
                ${project.projDetails[2]}
              </li>
            </ul>`;
  deskPopid.innerHTML = deskPop.innerHTML;
  listId.innerHTML = createTechList(project.techlgsPopup, 'langu2');
  gem('myModal').style.display = 'block';
}

function displayProject() {
  const deskId = document.getElementById('desktop-works');
  for (let i = 0; i < myworkDesk.length; i += 1) {
    const tecArr = myworkDesk[i];
    const workSec = document.createElement('workSec');
    const techUsed = tecArr.techlgsUsed.map((e) => `<li class="techUsed">${e}</li>`);
    workSec.innerHTML = `<div class="${tecArr.cardDesk}">
  <div class="${tecArr.descPos}">
    <h2 class="project-title">${tecArr.projName}</h2>
    <div class="${tecArr.deskSubHead}">
    <span class="${tecArr.canopy}">${tecArr.projDetails[0]}</span>
    <i class="fa fa-fw ${tecArr.faCircle}"></i>
    <span class="${tecArr.subText}">${tecArr.projDetails[1]}</span>
    <i class="fa fa-fw ${tecArr.faCircle}"></i>
    <span class="${tecArr.subText}">${tecArr.projDetails[2]}</span>
  </div>
    <p class="card-text-desc">
     ${tecArr.shortDesc}
    </p>
    <ul class="card-lang-lft">${techUsed.join('')}</ul>
      <button type="button" class="desk-pro-btn ${tecArr.cardBtn}" onclick="popupDesk(${i})">See Project</button>
  </div>
  <div class="${myworkDesk[i].imgPos}">
    <img src=${myworkDesk[i].tonicImgUrl} alt="image1">
  </div>
  </div>`;
    deskId.appendChild(workSec.firstChild);
  }
}

// mobile works section works-section

const myworkMobile = [
  {
    mobprojName: 'Tonic',
    mobprojDetails: ['CANOPY', 'Back End Dev', '2015'],
    mobshortDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    moblongDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobtonicImgUrl: 'mobile-images/works/SnapshootPortfolio.png',
    mobtechlgsUsed: ['html', 'css', 'javascript'],
    mobPopUpImgUrl: 'mobile-images/works/SnapshootPortfolio.png',
    mobtechlgsPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    mobliveLink: '',
    mobsourceLink: '',
    mobimgPos: 'img-center',
    mobSubHead: 'card-sub-head',
    cardMob: 'card',
    mobcanopy: 'canopy',
    mobsubText: 'sub-text',
    mobfaCircle: 'fa-circle',
    mobAlt: 'Project 1',
  },

  {
    mobprojName: 'Multi-Post Stories',
    mobprojDetails: ['CANOPY', 'Back End Dev', '2015'],
    mobshortDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    moblongDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobtonicImgUrl: 'mobile-images/works/Portfolio4.png',
    mobtechlgsUsed: ['html', 'css', 'javascript'],
    mobPopUpImgUrl: 'mobile-images/works/Portfolio4.png',
    mobtechlgsPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    mobliveLink: '',
    mobsourceLink: '',
    mobimgPos: 'img-center',
    mobSubHead: 'card-sub-head',
    cardMob: 'card',
    mobcanopy: 'canopy',
    mobsubText: 'sub-text',
    mobfaCircle: 'fa-circle',
    mobAlt: 'Project 2',
  },

  {
    mobprojName: 'Tonic',
    mobprojDetails: ['CANOPY', 'Back End Dev', '2015'],
    mobshortDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    moblongDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobtonicImgUrl: 'mobile-images/works/Portfolio3.png',
    mobtechlgsUsed: ['html', 'css', 'javascript'],
    mobPopUpImgUrl: 'mobile-images/works/Portfolio3.png',
    mobtechlgsPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    mobliveLink: '',
    mobsourceLink: '',
    mobimgPos: 'img-center',
    mobSubHead: 'card-sub-head',
    cardMob: 'card',
    mobcanopy: 'canopy',
    mobsubText: 'sub-text',
    mobfaCircle: 'fa-circle',
    mobAlt: 'Project 3',
  },

  {
    mobprojName: 'Multi-Post Stories',
    mobprojDetails: ['CANOPY', 'Back End Dev', '2015'],
    mobshortDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    moblongDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    mobtonicImgUrl: 'mobile-images/works/Portfolio2.png',
    mobtechlgsUsed: ['html', 'css', 'javascript'],
    mobtechlgsPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    mobPopUpImgUrl: 'mobile-images/works/Portfolio2.png',
    mobliveLink: '',
    mobsourceLink: 'https://github.com/mwenyoa/Portfolio',
    mobimgPos: 'img-center',
    mobSubHead: 'card-sub-head',
    cardMob: 'card',
    mobcanopy: 'canopy',
    mobsubText: 'sub-text',
    mobfaCircle: 'fa-circle',
    mobAlt: 'Project 4',
  },
];

// eslint-disable-next-line no-unused-vars
function popUpF(proIdx) {
  const projectMob = myworkMobile[proIdx];
  const techUsId = document.querySelector('.lang-list');
  gem('hd').innerText = projectMob.mobprojName;
  gem('mImage', true).src = projectMob.mobPopUpImgUrl;
  gem('modalText', true).innerText = projectMob.moblongDesc;
  gem('modalTextMobile', true).innerText = projectMob.moblongDesc;
  gem('langu2', true).innerText = projectMob.mobtechlgsUsed;
  gem('myModal').style.display = 'block';
  // mobile template
  const mobPopid = document.querySelector('#mycv');
  const PopMob = document.createElement('PopMob');
  PopMob.innerHTML = `<ul class="cards-container">
    <li class="card-detail canopy">${projectMob.mobprojDetails[0]}</li>
    <li class="card-detail option">
    <i class=" fa fa-fw fa-circle grey-cirlce"></i>
      ${projectMob.mobprojDetails[1]}
    </li>
    <li class="card-detail option">
      <i class=" fa fa-fw fa-circle grey-cirlce"></i>
      ${projectMob.mobprojDetails[2]}
    </li>
    </ul>`;
  mobPopid.innerHTML = PopMob.innerHTML;
  techUsId.innerHTML = createTechList(projectMob.mobtechlgsUsed, 'langu2');
  gem('myModal').style.display = 'block';
}

function showProject() {
  for (let n = 0; n < myworkMobile.length; n += 1) {
    const tecArrMob = myworkMobile[n];
    //  technologies used
    const mobworkSec = document.createElement('mobworkSec');
    const mobtechUsed = tecArrMob.mobtechlgsUsed.map((el) => `<li class="techUsed">${el}</li>`);
    const mobId = document.getElementById('works-section');
    mobworkSec.innerHTML = `<div class="${myworkMobile[n].cardMob}">
     <img src="${myworkMobile[n].mobtonicImgUrl}" 
    alt="${myworkMobile[n].mobAlt}" class="${myworkMobile[n].mobimgPos}">
    <h2 class="project-title">${myworkMobile[n].mobprojName}</h2>
    <div class="${myworkMobile[n].mobSubHead}">
      <span class="${myworkMobile[n].mobcanopy}">${myworkMobile[n].mobprojDetails[0]}</span>
      <i class="fa fa-fw ${myworkMobile[n].mobfaCircle}"></i>
      <span class="sub-text">${myworkMobile[n].mobprojDetails[1]}</span>
      <i class="fa fa-fw ${myworkMobile[n].mobfaCircle}"></i>
      <span class="sub-text"> ${myworkMobile[n].mobprojDetails[2]}</span>
  </div>
    <p>${myworkMobile[n].mobshortDesc}</p>
    <ul>${mobtechUsed.join('')}</ul>
    <button type="button" class="viewpro-btn" onclick="popUpF(${n})">See Project</button>
</div>`;
    mobId.appendChild(mobworkSec.firstChild);
  }
}
// Show previous works
window.onload = displayProject();
window.onload = showProject();
// Popups
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

// eslint-disable-next-line func-names
span.onclick = function () {
  modal.style.display = 'none';
};

// eslint-disable-next-line func-names
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'block';
  }
};