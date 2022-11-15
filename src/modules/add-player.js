const KEY = 'Zl4d7IVkemOTTVg2fUdz';

// const KEY = 'CHyVgSSlCdeVKzppH4U1';
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const URL = `${BASE_URL}/games/${KEY}/scores/`;

// const addPlayerToLocalStorage = (player) => {
//   const players = getPlayers();
//   players.push(player);
//   localStorage.setItem('players', JSON.stringify(players));
// };

const addPlayerToAPI = (player) => {
  fetch(URL, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: player.user,
      score: player.score,
    }),
  })
    .then((response) => {
      const players = response.json();
      return players;
    })
    .then((player) => {
      console.log('Success:', player.result);
    })
    .catch((player) => {
      console.error('Error:', player);
    });
}

const addPlayer = (player) => addPlayerToAPI(player);

export default addPlayer;