const playersContainer = document.querySelector('.player-scores-container');

const getPlayers = () => {
  playersContainer.innerHTML = '';
  let players;
  if (localStorage.getItem('players') === null) players = [];
  else players = JSON.parse(localStorage.getItem('players'));
  return players;
};

export default getPlayers;