import Leader from './player.js';

const clearCompleted = document.querySelector('.clear-completed');

const addPlayer = () => {
    const liMarkup = `
          <li class="player-details">
          <p>${Leader.name}: ${Leader.score}</p>
          </li>
          `;

    clearCompleted.insertAdjacentHTML('beforebegin', liMarkup);
};

export default addPlayer;