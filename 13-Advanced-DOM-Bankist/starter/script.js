'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(button => button.addEventListener('click', openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// TODO Selecting elements

// console.log(document.head)

const header = document.querySelector('.header')

const allSelections = document.querySelectorAll('.section')

// console.log(allSelections)

const firstSection = document.getElementById('section--1')

const allbuttons = document.getElementsByTagName('button')

console.log(allbuttons)

console.log(document.getElementsByClassName('btn'))

// * Creating and inserting elements

// .insertAdjacentHTML

// Crear elemento

const message = document.createElement('div')

// Add  clases

message.classList.add('cookie-message');


// Add text

// message.textContent = 'We use cookies for improved functionality and analytics'

message.innerHTML = 'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie"> Got it! </button>'

// * Insert as the first child

// header.prepend(message)

//  * Insert as the last child

header.append(message)

// ? 'message is a live element' so is only posible to be in one place at one time

// ? Cloning a message element still no te same object now is posible to show in diferent places at the same time

// header.append(message.cloneNode(true))


// ? Inserting message before header element

// header.before(message)

// ? Insertign message after header element

// header.after(message)

// * Removing element

document.querySelector('.btn--close-cookie').addEventListener('click', (e)=>{
  e.preventDefault()
  message.remove()
})