import _ from 'lodash'; // eslint-disable-line
import './style.css';
import Leader from './modules/player.js';
import display from './modules/display.js';
import clearScoresInputs from './modules/clear-inputs.js';
import addPlayer from './modules/add-player.js';
import renderNavigation from './modules/nav.js';
import renderHome from './modules/home.js';
import renderContact from './modules/contact.js';
import renderFooter from './modules/footer.js';

const addBtn = document.querySelector('form');
const addName = document.getElementById('add-name');
const addScore = document.getElementById('add-score');
const regex = /^[0-9]+$/;
const refreshBtn = document.querySelector('.refresh-btn');
const inputMsg = document.querySelector('.input-msg');

renderNavigation();
renderHome();
renderFooter();

const navLinks = document.querySelectorAll('.nav-link');
const mainContainer = document.querySelector('.m-container');

const renderPage = (location, page) => {
  location.innerHTML = '';
  page();
};

const removeActive = () => {
  navLinks.forEach((link) => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.target.textContent === 'Home') {
      removeActive();
      e.target.classList.add('active');
      renderPage(mainContainer, renderHome);
    }

    if (e.target.textContent === 'Contact') {
      removeActive();
      e.target.classList.add('active');
      renderPage(mainContainer, renderContact);
    }
  });
});

addBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = addName.value;
  const score = addScore.value;
  if (name && score) {
    if (regex.test(score)) {
      const player = new Leader(name, score);
      addPlayer(player);
      clearScoresInputs();
      display();
    } else {
      clearScoresInputs();
      inputMsg.innerHTML = 'Score should be a number';
    }
  } else {
    inputMsg.innerHTML = 'Inputs can not be empty';
  }
  setTimeout(() => {
    inputMsg.innerHTML = '';
  }, 2000);
});

refreshBtn.addEventListener('click', () => {
  display();
});
