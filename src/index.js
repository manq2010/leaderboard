import _ from 'lodash'; // eslint-disable-line
import './style.css';
import Leader from './modules/player.js';
import getPlayers from './modules/get-player';
import display from './modules/display';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack', 'testin'], ' ');
//     element.classList.add('hello');

//     return element;
// }

// document.body.appendChild(component());

const addBtn = document.querySelector('form');
const addName = document.getElementById('add-name');
const addScore = document.getElementById('add-score');
const regex = /^[0-9]+$/;

console.log(addBtn);
addBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = addName.value.trim();
    const score = addScore.value.trim();
    console.log(name)
    console.log(score)
    console.log(regex.test(score))
});


// callback function
display(getPlayers, (x) => x);



