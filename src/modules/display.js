import playerMarkUp from './player-markup.js';
import getPlayers from './get-players.js';

// import { displayStatus, playersContainer } from './home.js';
// import { playersContainer } from './home.js';

const displayStatus = document.querySelector('.display-status');
const playersContainer = document.querySelector('.player-scores-container');

const display = () => {
  playersContainer.style.display = 'block';
  displayStatus.innerHTML = '';
  const players = getPlayers();
  players.forEach((player) => {
    playerMarkUp(player);
  });
  console.log('test');
};

export default display;