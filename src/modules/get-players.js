const KEY = 'Zl4d7IVkemOTTVg2fUdz';
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const URL = `${BASE_URL}/games/${KEY}/scores/`;

// URL = https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/

const playersContainer = document.querySelector('.player-scores-container');

// const getPlayers = () => {
//   playersContainer.innerHTML = '';
//   let players;
//   if (localStorage.getItem('players') === null) players = [];
//   else players = JSON.parse(localStorage.getItem('players'));
//   return players;
// };

const getPlayers = async () => {
  playersContainer.innerHTML = '';
  const response = await fetch(URL);
  const players = await response.json();
  return players;
};

getPlayers().catch(() => {

});

export default getPlayers;