// import Leader from './player.js';
import Players from './get-player.js';

// const clearCompleted = document.querySelector('.clear-completed');



const addPlayerToLocalStorage = (player) => {
    console.log(player, 'local storage');
    const players = Players.getPlayers();
    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));
};

const addPlayer = (player) => {
    // const player = new Leader(name, score);
    console.log(player);
    // addPlayerToLocalStorage(player);
    // return name;
};



export { addPlayer };
export default addPlayerToLocalStorage;