'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let number = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
    document.querySelector('.score').textContent = score;
    console.log(number);
   
    

    const wrong = () => {
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }


    const again = () => {
        document.querySelector('h1').textContent = 'Guess My Number!';
        number = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = number;
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('body').style = 'background-color: black'
        document.querySelector('.number').textContent = '?';
    }


    const win = () => {
        document.querySelector('.message').textContent = 'Correct';
        document.querySelector('h1').textContent = 'you Win!';
        document.querySelector('body').style = 'background-color: green'
        document.querySelector('.number').textContent = number;
    }


    document.querySelector('.again').addEventListener('click', () => {
        again();
    })


    document.querySelector('.check').addEventListener('click', () => {

        const value = Number(document.querySelector('.guess').value)
        if(score > 0){
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
        }else{
            document.querySelector('h1').textContent = 'Game Over!';
        }


    });






})