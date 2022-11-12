import Leader from './player.js';

const playersContainer = document.querySelector('.player-scores-container');

const playerMarkUp = () => {
    const liMarkup = `
          <li class="player-details">
          <p>${Leader.name}: ${Leader.score}</p>
          </li>
          `;
    playersContainer.appendChild(liMarkup);
};

const display = (players, callback) => {
    player.forEach(() => {
        for (const player of players) {
            if (callback(player)) {
                playerMarkUp()
            }
        }
    });
};

export default display;