'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to')

const section1 = document.querySelector('#section--1')


const tabs = document.querySelectorAll('.operations__tab')

const tabsContainer = document.querySelector('.operations__tab-container')

const tabsContent = document.querySelectorAll('.operations__content')


const nav = document.querySelector('.nav')

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


// TODO: Implementing Smooth Scrolling




btnScrollTo.addEventListener('click', e => {
  e.preventDefault()
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords)
  // console.log(e.target.getBoundingClientRect())

  // console.log('Current Scrool (X/Y)', window.pageXOffset, window.pageYOffset)

  // console.log('Height widht',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth)


  // * Smoot Scroolling  in the old way
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })


  // * Smoot Scroolling in modern way
  section1.scrollIntoView({
    behavior: 'smooth'
  })
})


// TODO: Page Navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     })
//   })
// })

// * Event delegation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()

  // ? Matching strategy

  if (e.target.classList.contains('nav__link')) {
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  }
})


// TODO: Tabbed component


tabsContainer.addEventListener('click', function (e) {
  e.preventDefault()

  // ? Matching strategy
  const clicked = e.target.closest('.operations__tab')
  // console.log(clicked)

  // Guard clause
  if (!clicked) return;

  // TODO Active tab

  tabs.forEach(t => t.classList.remove('operations__tab--active'))

  clicked.classList.add('operations__tab--active')

  // TODO Active content area

  // document.querySelector(`operations${}`)

  const id = clicked.getAttribute('data-tab')
  // console.log(id)

  const content = document.querySelector(`.operations__content--${id}`)

  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  content.classList.add('operations__content--active')


})

// TODO Passing arguments to event handlers
// TODO Menu fade animation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')


    siblings.forEach(el => {
      if (el !== link) {

        el.style.opacity = this;

      }
      logo.style.opacity = this;
    })


  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))


// TODO: Implementing a Sticky Navigation: The Scroll Event

// const inintialCoords = section1.getBoundingClientRect()

// console.log(inintialCoords)

// window.addEventListener('scroll', function () {

//   if (window.scrollY > inintialCoords.top) nav.classList.add('sticky'); else nav.classList.remove('sticky');

// })

// TODO: A Better Way: The Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry))
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 0, 0.2]
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions)

// observer.observe(section1)


const header = document.querySelector('.header')
const height = nav.getBoundingClientRect().height


const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${height}px`
});

headerObserver.observe(header)


// TODO: Reveal sections

const allSelections = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {

  const [entry] = entries

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)


}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})


allSelections.forEach(section => {
  // section.classList.add('section--hidden')
  sectionObserver.observe(section);
})

// TODO: Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]')


const loadImg = function (entries, observer) {

  const [entry] = entries

  if (!entry.isIntersecting) return;
  const imgSrc = entry.target.dataset.src
  const img = entry.target
  img.src = imgSrc

  img.addEventListener('load', function () {
    img.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)

}

const imgOberver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px'

})

imgTargets.forEach(img => imgOberver.observe(img))

// TODO: Building a Slider component

const slide = function () {

  let curSlide = 0

  const maxSlide = document.querySelectorAll('.slide').length - 1

  const slides = document.querySelectorAll('.slide');

  const slider = document.querySelector('.slider')

  const btnLeft = document.querySelector('.slider__btn--left')

  const btnRight = document.querySelector('.slider__btn--right')

  const dotContainer = document.querySelector('.dots')

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }



  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }


  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`
    })
  }



  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0
    } else {
      curSlide++
    }

    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const prevSlide = function () {
    if (curSlide > 0) curSlide--
    goToSlide(curSlide)
    activateDot(curSlide)
  }


  const init = function () {

    createDots()
    goToSlide(0)
    activateDot(0)

  }

  init()


  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      console.log('Arrow right')
      nextSlide()
    }

    if (e.key === 'ArrowLeft') {
      prevSlide()
    }
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const element = e.target
      const id = element.dataset.slide
      console.log(id)
      goToSlide(id)

      activateDot(id)

    }
  })

}

slide()

// TODO Selecting elements

// console.log(document.head)

// const header = document.querySelector('.header')

// const allSelections = document.querySelectorAll('.section')

// console.log(allSelections)

const firstSection = document.getElementById('section--1')

const allbuttons = document.getElementsByTagName('button')

// console.log(allbuttons)

// console.log(document.getElementsByClassName('btn'))

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

document.querySelector('.btn--close-cookie').addEventListener('click', (e) => {
  e.preventDefault()
  message.remove()
})

// TODO Styles, Attributes and Classes


// * Styles

message.style.backgroundColor = '#37383d'
message.style.width = '120%'

// ? You can only read style properties from a inline style 

// console.log(message.style.backgroundColor)

// ? Get all computed styles with the getComputedStyle method

// console.log(getComputedStyle(message).width)

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'

// console.log(message.style)


// document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes 

const logo = document.querySelector('.nav__logo')
// console.log(logo.alt)
// console.log(logo.src)
// console.log(logo.className)

// ? unable to read custonm prperties

// console.log(logo.designer) // return undefined

// ? Reading custom propertie from a html element


// console.log(logo.getAttribute('designer'))


logo.alt = 'Beautiful minimalist logo'

// * Set atrribute

logo.setAttribute('company', 'Bankist')


// * Get relative path to element FIXME:

// console.log(logo.getAttribute('src'))

const link = document.querySelector('.nav__link--btn');
// console.log(link.href)
// console.log(link.getAttribute('href'))

// TODO Data Attributes

// console.log(logo.dataset.versionNumber)


// TODO Classes

// logo.classList.add('c', 'j')
// logo.classList.remove('c', 'j')
// logo.classList.toggle('c')
// logo.classList.contains('c')

// logo.clasName = 'Jonas'



// const alertH1 = e => {
//   alert('addEventListener: You are reading the heading')


// }

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseleave', alertH1)

// // * Removing event listener after 3 seconds

// setTimeout(() => h1.removeEventListener('mouseleave', alertH1), 3000)

// h1.onmouseenter = e => {
//   alert('addEventListener: Great')
// }

// TODO Event propagation un practice

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   console.log('LINK', e.target, e.currentTarget)
//   // e.stopPropagation()
// })

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   console.log('CONTAINER', e.target, e.currentTarget)
// })

// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor()
//   console.log('NAV', e.target, e.currentTarget)
// }, false)

// TODO: DOM Traversing

const h1 = document.querySelector('h1')


// * Going down

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes)
// console.log(h1.children)
// h1.firstElementChild.style.color  ='white'
// h1.lastElementChild.style.color = 'black'

// * Going upwards

// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('.header').style.background= 'var(--gradient-secondary)'

// h1.closest('h1').style.background = 'var(--gradient-primary)'



// * TODO: Going sideways: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

// console.log(h1.parentElement.children);


// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)'
// })

// TODO Lifecycle DOM Events

// * DOm content loaded

document.addEventListener('DOMContentLoaded', function(e){
  console.log('HTML parsed and DOM tree built!!', e)
})

window.addEventListener('load', function(e){
  console.log('Page fully loaded', e)
})


// window.addEventListener('beforeunload', function(e){

//   console.log(e)
//   e.returnValue = ''
// })


