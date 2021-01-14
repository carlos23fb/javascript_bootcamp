'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let highScore = 0;
    let number = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
    document.querySelector('.score').textContent = score;
    console.log(number);
    document.querySelector('.highscore').textContent = highScore;



    const wrong = () => {
        score = score - 1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
    }


    const again = () => {
        document.querySelector('h1').textContent = 'Guess My Number!';
        number = Math.trunc(Math.random() * 20) + 1;
        console.log(number);
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = number;
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('body').style = 'background-color: black'
        document.querySelector('.number').textContent = '?';
    }


    function win(){
        document.querySelector('.message').textContent = 'Correct';
        document.querySelector('h1').textContent = 'you Win!';
        document.querySelector('body').style = 'background-color: green'
        document.querySelector('.number').textContent = number;
        score = Number(document.querySelector('.score').textContent);
        document.querySelector('.guess').value = '';
        console.log(score);
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }


    document.querySelector('.again').addEventListener('click', () => {
        again();
    })


    document.querySelector('.check').addEventListener('click', () => {

        const value = Number(document.querySelector('.guess').value)
        if (score > 0) {
            if (!value) {
                document.querySelector('.message').textContent = 'Invalid';
                wrong();
            } else if (value === number) {
                win();

            } else if (value > number) {
                document.querySelector('.message').textContent = 'To high!';
                wrong()
            } else if (value < number) {
                document.querySelector('.message').textContent = 'To low!';
                wrong()
            }
        } else {
            document.querySelector('h1').textContent = 'Game Over!';
        }
    });
})