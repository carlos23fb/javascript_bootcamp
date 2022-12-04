'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// https://restcountries.com/v2/

///////////////////////////////////////
const getCountryData = function (name) {
    console.log(name)
    let data;

    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/name/${name}`)

    request.send();

    request.addEventListener('load', function () {

        [data] = JSON.parse(this.responseText)

        console.log(data)

        const language = Object.entries(data.languages)
        const currency = Object.entries(data.currencies)

       

        let html = `
    <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.spa}</p>
            <p class="country__row"><span>💰</span>${data.currencies.MXN.name}</p>
          </div>
    </article>`

        countriesContainer.insertAdjacentHTML('afterend', html)

    })
}

getCountryData('mexico')
getCountryData('')