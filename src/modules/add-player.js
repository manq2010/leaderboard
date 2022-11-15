import getPlayers from './get-players.js';

const KEY = 'Zl4d7IVkemOTTVg2fUdz';
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${KEY}/scores/`;


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

const addPlayer = (player) => {
  // addPlayerToLocalStorage(player);
  console.log(player)
  addPlayerToAPI(player);
};

export default addPlayer;