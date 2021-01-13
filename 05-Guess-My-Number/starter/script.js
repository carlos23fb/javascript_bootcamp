'use strict';




// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('.check').onclick = () => {
//         document.querySelector('.message').textContent = 'Correct Number';
//         console.log(document.querySelector('.guess').value);
//     };
// })


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.check').addEventListener('click', () => {
        document.querySelector('.message').textContent = 'Correct!';
    })
})