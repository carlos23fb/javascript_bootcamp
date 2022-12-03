'use strict';




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
    clicks = 0;

    constructor(coords, distance, duration) {
        this.distance = distance
        this.duration = duration
        this.coords = coords
    }


    _setDescription() {

        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const month = months[this.date.getMonth()]
        const date = this.date.getDate()

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1).toLowerCase()} on ${month} ${date}`
        

    }

    click(){
        this.clicks++;
    }
}


class Running extends Workout {

    type = 'running';

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration)
        this.cadence = cadence
        this.calcPace()
        this._setDescription()
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
        this._setDescription()

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
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this))

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

    _hideForm() {

        inputDistance.value = ''
        inputDuration.value = ''
        inputCadence.value = ''
        inputElevation.value = ''

        form.style.display = 'none'
        form.classList.add('hidden')
        setTimeout(() => form.style.display = 'grid', 1000)

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





        this._renderWorkoutMarker(workout)

        this._renderWorkout(workout)



        // TODO Clear input fields

        this._hideForm()



    }

    _renderWorkoutMarker(workout) {



        L.marker(workout.coords).addTo(this.#map)
            .bindPopup(L.popup({
                keepInView: true,
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`
            }))
            .setPopupContent(`${workout.type === 'running' ? '🏃' : '🚴'} ${workout.description}`)
            .openPopup();

    }

    // TODO Render workout on list

    _renderWorkout(workout) {


        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃' : '🚴'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`


        if (workout.type === 'running') {

            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
            </li>`
        }

        if (workout.type === 'cycling') {

            html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed.toFixed(1)}</span>
                <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.ElevationGain}</span>
                <span class="workout__unit">m</span>
            </div>
        </li> 
            `
        }

        form.insertAdjacentHTML('afterend', html)

    }

    _moveToPopup(e) {

        const workoutEl = e.target.closest('.workout')

        if (!workoutEl) return;

        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id)


        workout.click()
        console.log(workout)


        this.#map.setView(workout.coords, 17, {
            animate : true,
            pan: {
                duration: 1
            },

        })

    }

}

const app = new App();
