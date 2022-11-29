'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


let map, mapEvent;

navigator.geolocation.getCurrentPosition(
    function (position) {
        const { latitude } = position.coords
        const { longitude } = position.coords
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`)


        const coords = [latitude, longitude]

        map = L.map('map')
        map.setView(coords, 17);
        // console.log(map)

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();

        map.on('click', function (mapE) {

            mapEvent = mapE

            form.classList.remove('hidden')
            inputDistance.focus()

            // TODO Set popup when submit





            // const { lat, lng } = mapEvent.latlng
            // const newCoords = [lat, lng]

            // L.marker(newCoords).addTo(map)
            //     .bindPopup(L.popup({
            //         keepInView: true,
            //         maxWidth: 250,
            //         minWidth: 100,
            //         autoClose: false,
            //         closeOnClick: false,
            //         className: 'running-popup'
            //     }))
            //     .setPopupContent('Workout')
            //     .openPopup();

        })

    },
    function () {
        alert('Could not get your posotion')
    })

form.addEventListener('submit', function (e) {


    e.preventDefault()


    // TODO Clear input fields

    inputDistance.value = ''
    inputDuration.value = ''
    inputCadence.value = ''
    inputElevation.value = ''
    form.classList.add('hidden')

     // Display marker

    const { lat, lng } = mapEvent.latlng
    const newCoords = [lat, lng]

    L.marker(newCoords).addTo(map)
        .bindPopup(L.popup({
            keepInView: true,
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup'
        }))
        .setPopupContent('Workout')
        .openPopup();
})


inputType.addEventListener('change', function(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})
