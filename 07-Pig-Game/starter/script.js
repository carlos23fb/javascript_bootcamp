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

    let scores;
    let currentScore;
    let activePlayer;
    let playing ;

    const reset = function () {

        scores = [0, 0];
        currentScore = 0;
        score1El.textContent = 0;
        activePlayer = 0;
        playing = true;
        score0EL.textContent = 0;
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');
        player0El.classList.remove('player--winner');
        player1El.classList.remove('player--winner');
        diceEl.classList.add('hidden');
        current0El.textContent = 0;
        current1El.textContent = 0;
    }
    reset();
    

    const switchPlayer = function () {
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
        if (dice !== 1) {
            currentScore = currentScore + dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        };
    };

    const win = function () {
        playing = false;
        console.log(playing);
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        diceEl.classList.add('hidden');
    }

    const hold = function () {
        // TODO 1. Add current score to active player's score
        scores[activePlayer] += currentScore;

        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // TODO 2. Check if player's score >= 100
        if (scores[activePlayer] >= 20) {
            win();
        } else {
            switchPlayer();
        }

    }

    btnRoll.addEventListener('click', () => {
        if (playing) {
            roll();
        }
    })
    btnHold.addEventListener('click', () => {
        if (playing) {
            hold();
        }
    })

    btnNew.onclick = reset;

});
