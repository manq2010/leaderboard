const playersList = document.querySelector('.player-scores-container');

const getPlayers = () => {
    playersList.innerHTML = '';
    let players;
    if (localStorage.getItem('players') === null) players = [];
    else players = JSON.parse(localStorage.getItem('players'));


    return 'test';
};

export default getPlayers;