// import Leader from './player.js';

const playersContainer = document.querySelector('.player-scores-container');

const playerMarkUp = (leader) => {
    const liMarkup = `
          <li class="player-details">
          <p>${leader.name}: ${leader.score}</p>
          </li>
          `;
    playersContainer.appendChild(liMarkup);
};

const display = (players, leader, callback) => {
    player.forEach(() => {
        for (const player of players) {
            if (callback(player)) {
                playerMarkUp(leader);
            }
        }
    });
};

export default display;