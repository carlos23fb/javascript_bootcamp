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

const getJSON = function (url, errorMessage = 'Something went wrong') {
    return fetch(url)
        .then(response => {

            console.log(response)

            if (!response.ok)
                throw new Error(errorMessage)

            return response.json()
        }
        )
}

const getCountryData = function (name) {

    getJSON(`https://restcountries.com/v3.1/name/${name}`, 'Country not found').then((data) => {
        const [result] = data
        console.log(result)

        renderCountry(result)

        const neighbour = result.borders?.[0]

        if (!neighbour) throw new Error('No neighbour found')


        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)

    }).then(response =>
        response.json()
    ).then(data => {
        const [result] = data

        renderCountry(result, 'neighbour')
    }).catch(err => renderError(`Somethingwent wrong ${err.message}`))
        .finally(() => {

        })

}

btn.addEventListener('click', function () {
    getCountryData('mexico')
})

// TODO Coding Challenge #1



// 1. Create a function 'whereAmI' which takes as inputs a latitude value('lat')
// and a longitude value('lng')(these are GPS coordinates, examples are in test
// data below)


// 128698846499758126653x30944

// const whereAmI = function (lat, lng) {

//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(response => {
//             console.log(response)
//             if (!response.ok) 
//                 throw new Error('Usage Limit Error')
//             return response.json()
//         })
//         .then(data => {

//             if(data.error) throw new Error(`${data.error.description}`)
//             console.log(data)
//             console.log(`You are in ${data.country}`)
//             const countryName = data.country.toLowerCase()

//             getCountryData(countryName)

//         }).catch(err => console.log(err.message))
// }
// whereAmI(-33.933, 18.474)


console.log('Test start');

setTimeout(() => console.log('0 sec Timer'), 0);

Promise.resolve('Resolve Promise 1').then(res => console.log(res))


Promise.resolve('Resolve Promise 2').then(res => {
    for (let i = 0; i< 1000000000; i++) { }

    console.log(res)
})

console.log('Test end')

