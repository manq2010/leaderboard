import playerMarkUp from './player-markup.js';
import getPlayers from './get-players.js';

// import { displayStatus, playersContainer } from './home.js';
// import { playersContainer } from './home.js';

const displayStatus = document.querySelector('.display-status');
const playersContainer = document.querySelector('.player-scores-container');

const display = async () => {
  displayStatus.innerHTML = '...loading';
  const players = await getPlayers();
  playersContainer.style.display = 'block';
  displayStatus.innerHTML = '';


  // console.log(players);
  players.forEach((player) => {
    playerMarkUp(player);
  });
};

export default display;