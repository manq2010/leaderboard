import playerMarkUp from './player-markup.js';
import getPlayers from './get-players.js';

const displayStatus = document.querySelector('.display-status');
const playersContainer = document.querySelector('.player-scores-container');

const display = () => {
  playersContainer.style.display = 'block';
  displayStatus.innerHTML = '';
  const players = getPlayers();
  players.forEach((player) => {
    playerMarkUp(player);
  });
};

export default display;