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


class Workout {

    id = Date.now() + ''.slice(-10)
    date = new Date();

    constructor(coords, distance, duration) {
        this.distance = distance
        this.duration = duration
        this.coords = coords
    }
}


class Running extends Workout {

    type = 'running';

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration)
        this.cadence = cadence
        this.calcPace()
    }

    calcPace() {
        this.pace = this.duration / this.distance
        return this.pace
    }

}

class Cycling extends Workout {

    type = 'cycling';

    constructor(coords, distance, duration, ElevationGain) {
        super(coords, distance, duration)
        this.ElevationGain = ElevationGain;
        this.calcSpeed()

    }

    calcSpeed() {
        this.speed = this.distance / (this.duration / 60)
        return this.speed
    }
}




class App {

    #map;
    #mapEvent;

    #workouts = [];

    constructor() {

        this._getPosition()
        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleElevationField)

    }

    _getPosition() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
                function () {
                    alert('Could not get your posotion')
                })
        }

        return this

    }

    _loadMap(position) {

        const { latitude } = position.coords
        const { longitude } = position.coords
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`)


        const coords = [latitude, longitude]

        this.#map = L.map('map')
        this.#map.setView(coords, 17);
        // console.log(map)

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        L.marker(coords).addTo(this.#map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();

        this.#map.on('click', this._showForm.bind(this))

        return this

    }

    _showForm(mapE) {

        this.#mapEvent = mapE

        form.classList.remove('hidden')
        inputDistance.focus()

    }

    _toggleElevationField() {

        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')

    }

    _newWorkout(e) {

        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));

        const allPositive = (...inputs) => inputs.every(inp => inp > 0);


        e.preventDefault()

        // TODO Get data from form

        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng

        let workout;


        // TODO Check if data is valid



        if (type === 'running') {

            const cadence = +inputCadence.value

            // TODO Check if data is valid

            if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)) {
                return alert('Inputs have to be positive numbers!')
            }

            // TODO If workout running, create running object

            workout = new Running([lat, lng], distance, duration, cadence);


        };




        if (type === 'cycling') {
            const elevation = +inputElevation.value

            // TODO Check if data is valid

            if (!validInputs(distance, duration, elevation) || !allPositive(distance, duration)) {
                return alert('Inputs have to be positive numbers!')
            }

            // TODO If workout cycling, create cycling object

            workout = new Cycling([lat, lng], distance, duration, elevation)


        };

        // TODO Add new object to workout array
        this.#workouts.push(workout)

        console.log(workout)


        // TODO Render workout on map as marker

        // * Display marker



        // TODO Render workout on list

        this.renderWorkoutMarker(workout)



        // TODO Clear input fields

        inputDistance.value = ''
        inputDuration.value = ''
        inputCadence.value = ''
        inputElevation.value = ''
        form.classList.add('hidden')



    }

    renderWorkoutMarker(workout) {



        L.marker(workout.coords).addTo(this.#map)
            .bindPopup(L.popup({
                keepInView: true,
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`
            }))
            .setPopupContent(`${workout.distance}`)
            .openPopup();

    }

}

const app = new App();
