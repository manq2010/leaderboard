import getPlayers from './get-players.js';

const addPlayerToLocalStorage = (player) => {
  const players = getPlayers();
  players.push(player);
  localStorage.setItem('players', JSON.stringify(players));
};

const addPlayer = (player) => {
  addPlayerToLocalStorage(player);
};

export default addPlayer;