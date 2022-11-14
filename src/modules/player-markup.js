const playersContainer = document.querySelector('.player-scores-container');

const playerMarkUp = (leader) => {
  const liMarkup = document.createElement('li');
  liMarkup.classList.add('player-details');
  liMarkup.innerHTML = `<p>${leader.name} : ${leader.score}</p>`;
  playersContainer.appendChild(liMarkup);
};

export default playerMarkUp;