'use strict';

document.addEventListener('DOMContentLoaded', function(){

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.close-modal');
    const btnsOpenModal = document.querySelectorAll('.show-modal');

    function close(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    function open(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    }

    
    btnsOpenModal.forEach(element => {
        element.addEventListener('click', open)
    });

    btnCloseModal.addEventListener('click', close);
    overlay.addEventListener('click', close);


    document.addEventListener('keydown', function(e){
        if (e.key === 'Escape' && !modal.classList.contains('hidden')){
            close()
        }
    })
})