import _ from 'lodash'; // eslint-disable-line
import './style.css';
import Leader from './modules/player.js';
import display from './modules/display.js';
import clearScoresInputs from './modules/clear-inputs.js';
import addPlayer from './modules/add-player.js';

const addBtn = document.querySelector('form');
const addName = document.getElementById('add-name');
const addScore = document.getElementById('add-score');
const regex = /^[0-9]+$/;
const refreshBtn = document.querySelector('.refresh-btn');
const inputMsg = document.querySelector('.input-msg');

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

const footerDate = document.querySelector('.footer-date');
const date = new Date();
footerDate.innerHTML = date.getFullYear();
