'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const number = Math.trunc(Math.random() *20) + 1;
    document.querySelector('.number').textContent = number;
    document.querySelector('.check').addEventListener('click', () => {
    const number = Number(document.querySelector('.guess').value)
        console.log(number);
    });
    

})