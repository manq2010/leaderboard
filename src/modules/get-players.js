const KEY = 'Zl4d7IVkemOTTVg2fUdz';

// const KEY = 'CHyVgSSlCdeVKzppH4U1';
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const URL = `${BASE_URL}/games/${KEY}/scores/`;

const playersContainer = document.querySelector('.player-scores-container');

const getPlayers = async () => {
  playersContainer.innerHTML = '';
  const response = await fetch(URL);
  const players = await response.json();
  players.result.sort((a, b) => b.score - a.score);
  return players.result;
};

getPlayers().catch(() => {

});

export default getPlayers;