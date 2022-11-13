import _ from 'lodash'; // eslint-disable-line
import './style.css';
import Leader from './modules/player.js';

const addBtn = document.querySelector('form');
const addName = document.getElementById('add-name');
const addScore = document.getElementById('add-score');
const regex = /^[0-9]+$/;

const clearScoresInputs = () => {
  const addName = document.getElementById('add-name');
  const addScore = document.getElementById('add-score');
  addName.value = '';
  addScore.value = '';
};

const inputMsg = document.querySelector('.input-msg');

// console.log(addBtn);
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

const addPlayer = (player) => {
  addPlayerToLocalStorage(player);
};

const addPlayerToLocalStorage = (player) => {
  const players = getPlayers();
  players.push(player);
  localStorage.setItem('players', JSON.stringify(players));
};

const playersContainer = document.querySelector('.player-scores-container');

const getPlayers = () => {
  playersContainer.innerHTML = '';
  let players;
  if (localStorage.getItem('players') === null) players = [];
  else players = JSON.parse(localStorage.getItem('players'));
  return players;
};

const playerMarkUp = (leader) => {
  const liMarkup = document.createElement('li');
  liMarkup.classList.add('player-details');
  liMarkup.innerHTML = `<p>${leader.name} : ${leader.score}</p>`;
  playersContainer.appendChild(liMarkup);
};

const display = () => {
  const players = getPlayers();
  players.forEach((player) => {
    playerMarkUp(player);
  });
};

// callback function
// display(getPlayers, Leader, (x) => x);

const refreshBtn = document.querySelector('.refresh-btn');
const displayStatus = document.querySelector('.display-status');

refreshBtn.addEventListener('click', () => {
  displayStatus.innerHTML = '';
  display();
});

// window.document.addEventListener('DOMContentLoaded', () => {
//     // display();
// });

const footerDate = document.querySelector('.footer-date');
const date = new Date();
footerDate.innerHTML = date.getFullYear();
