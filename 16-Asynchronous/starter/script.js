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

// btn.addEventListener('click', function () {
//     getCountryData('mexico')
// })

// TODO Coding Challenge #1



// 1. Create a function 'whereAmI' which takes as inputs a latitude value('lat')
// and a longitude value('lng')(these are GPS coordinates, examples are in test
// data below)


// 128698846499758126653x30944





// // TODO The Event Loop in Practice

// console.log('Test start');

// setTimeout(() => console.log('0 sec Timer'), 0);

// Promise.resolve('Resolve Promise 1').then(res => console.log(res))


// Promise.resolve('Resolve Promise 2').then(res => {
//     for (let i = 0; i< 1000000000; i++) { }

//     console.log(res)
// })

// console.log('Test end')


// const lotteryPromise = new Promise(function (resolve, reject) {

//     console.log('Lotter draw is happening')
//     setTimeout(() => {
//         if (Math.random() >= 0.5) {
//             resolve('You win 🤑')
//         } else {
//             reject(new Error('You lost your money 💩').message)
//         }
//     }, 2000)
// })


// lotteryPromise.then(response => {
//     console.log(response)
// }).catch(err => console.log(err))


// TODO Promisifying setTimeout

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}

// wait(2).then(() => {
//     console.log('I waited 2 seconds')

//     wait(1)
// }).then(() => {
//     console.log('I waited 1 second')
// })


// wait(1)
//     .then(() => {
//         console.log('1 second')
//         return wait(1)
//     })
//     .then(() => {
//         console.log('2 second')
//         return wait(1)
//     })
//     .then(() => {
//         console.log('3 second')
//         return wait(1)
//     })
//     .then(() => {
//         console.log('4 second')
//         return wait(1)
//     })
//     .then(() => {
//         console.log('5 second')
//         return wait(1)
//     })
//     .then(() => {
//         console.log('6 second')
//         return wait(1)
//     })


// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position), err => console.log(err)
// })


const getPostion = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(new Error('Error country not found', err)))
    })
}


// const whereAmI = function () {

//     getPostion().then(position => {
//         const { latitude: lat, longitude: lng } = position.coords

//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//     .then(response => {
//         console.log(response)
//         if (!response.ok)
//             throw new Error('Usage Limit Error')
//         return response.json()
//     })
//     .then(data => {
//         if (data.error) throw new Error(`${data.error.description}`)
//         console.log(data)
//         console.log(`You are in ${data.country}`)
//         const countryName = data.country.toLowerCase()

//         getCountryData(countryName)

//     })
//     .catch(err => console.log(err.message))
// }



// TODO: Consuming Promises with Async/Await

const whereAmI = async function () {

    try {

        const pos = await getPostion();

        const { latitude: lat, longitude: lng } = pos.coords

        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)

        if (!resGeo.ok) throw new Error('Couldnt get geo code')

        const dataGeo = await resGeo.json()

        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`)

        if (!res.ok) throw new Error('Problem getting country data')

        const [data] = await res.json()

        renderCountry(data)

        return `You are in ${dataGeo.city}, ${dataGeo.country}`
    } catch (err) {
        console.log(`${err.message} 💥`)
        renderError(`Something went worng 💥`)


        //* Reject promise returned from async function
        throw err


    }
};


// (async function () {
//     try {
//         const city = await whereAmI();

//         console.log(`2: ${city}`);
//     } catch (err) {
//         console.log(`2: ${err.message}`);
//     };

//     console.log(`3: Finished`)
// })();


const get3Countries = async function (c1, c2, c3) {
    try {
        // const [res1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`)
        // const [res2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`)
        // const [res3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`)

        const country_promises = await Promise.all([getJSON(`https://restcountries.com/v3.1/name/${c1}`),
        getJSON(`https://restcountries.com/v3.1/name/${c2}`),
        getJSON(`https://restcountries.com/v3.1/name/${c3}`)]);

        // ; (await country_promises).forEach(res => {
        //     const [country] = res
        //     console.log(country)
        // })

        // country_promises.forEach(res => { 
        //     const [country] = res
        //     console.log(country)
        // })

        const capitals = country_promises.flatMap(res => res[0].capital)
        console.log(capitals)



    } catch (err) {
        console.log(err)
    };
};


// get3Countries('mexico', 'portugal', 'belize')


// TODO: Other Promise Combinators: race, allSettled and any

// ? Promise.race return a promise no matter if the promise got rejected or fullfilled


// (async function () {
//     const res = await Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),]);

//     console.log(res[0])
// })();


// TODO: Other Promise Combinators: race, allSettled and any


const timeot = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took to loong'))
        }, s * 1000)
    })
};


Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeot(2)])
    .then(res => console.log(res))
    .catch(err => {
        console.log(err.message)
    })


// TODO Promise.allSettled

// const getAsyncRes = async function () {
//     const valuesRes = await Promise.allSettled([
//         Promise.resolve('Resolve'),
//         Promise.reject('Reject'),
//         Promise.resolve('Another succes')]);
//     const values = valuesRes.map(element => element.status)
//     return values
// }


// TODO Promise.any

Promise.any([
    Promise.resolve('Resolve'),
    Promise.reject('Rejected'),
    Promise.resolve('Another succes')
])
    .then(res => console.log(res))
    .catch(err=> console.log(err.message))
