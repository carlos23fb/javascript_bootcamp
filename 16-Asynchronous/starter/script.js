'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// https://restcountries.com/v2/

///////////////////////////////////////


// const getCountryData = function (name) {
//     console.log(name)
//     let data;

//     const request = new XMLHttpRequest();

//     request.open('GET', `https://restcountries.com/v3.1/name/${name}`)

//     request.send();

//     request.addEventListener('load', function () {

//         [data] = JSON.parse(this.responseText)

//         console.log(data)

//         const language = Object.entries(data.languages)
//         const currency = Object.entries(data.currencies)



//         let html = `
//         <article class="country">
//             <img class="country__img" src="${data.flags.png}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${+data.population / 1000000} people</p>

//             </div>
//         </article>`

//         countriesContainer.insertAdjacentHTML('afterend', html)

//     })
// }

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg)
    countriesContainer.style.opacity = 1
}



const renderCountry = function (data, className = '') {
    let html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}"/>
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${+data.population / 1000000} people</p>
            </div>
        </article>`

    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
}


// const getCountryAndNeighbour = function (name) {
//     console.log(name)
//     let data;

//     // * AJAX call country one

//     const request = new XMLHttpRequest();

//     request.open('GET', `https://restcountries.com/v3.1/name/${name}`)

//     request.send();

//     request.addEventListener('load', function () {

//         [data] = JSON.parse(this.responseText)

//         console.log(data)

//         // * Render country

//         renderCountry(data)

//         // * Render neighbours

//         const neighbour = data.borders?.[0]

//         if (!neighbour) return



//         const request2 = new XMLHttpRequest();

//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)

//         request2.send();


//         request2.addEventListener('load', function () {

//             [data] = JSON.parse(this.responseText)

//             console.log(data)

//             // * Render country

//             renderCountry(data, 'neighbour')

//         })

//     })
// }



const getCountryData = function (name) {

    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response =>
            response.json()
        ).then((data) => {
            const [result] = data
            console.log(result)

            renderCountry(result)

            const neighbour = result.borders?.[0]

            if (!neighbour) return


            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)

        }).then(response =>
            response.json()
        ).then(data => {
            const [result] = data

            renderCountry(result, 'neighbour')
        }).catch(err => renderError(`${err}`))
        .finally(() => {
            
        })

}


btn.addEventListener('click', function () {
    getCountryData('germany')
})