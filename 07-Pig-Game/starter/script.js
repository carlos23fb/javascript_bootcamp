'use strict';


document.addEventListener('DOMContentLoaded', () => {

    // Selecting elements
    const diceEl = document.querySelector('.dice');
    const score0EL = document.querySelector('#score--0');
    const score1El = document.querySelector('#score--1');
    const btnRoll = document.querySelector('.btn--roll');
    const btnNew = document.querySelector('.btn--new');
    const btnHold = document.querySelector('.btn--hold');
    const current0El = document.querySelector('#current--0');
    const current1El = document.querySelector('#current--1');
    const player0El = document.querySelector('.player--0');
    const player1El = document.querySelector('.player--1');

    diceEl.classList.add('hidden');
    score0EL.textContent = 0;
    score1El.textContent = 0;

    let currentScore = 0;
    let activePlayer = 0;



    const switchPlayer = function(){
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }


    // Rolling dice functionality
    const roll = function () {
        // Generating the random dice roll
        let dice = Math.trunc((Math.random() * 6) + 1);

        // Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // Check for rolled 1
        if (dice !==1){
            currentScore = currentScore + dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        }else{
            switchPlayer();
        };
    };


    btnRoll.onclick = roll;






});