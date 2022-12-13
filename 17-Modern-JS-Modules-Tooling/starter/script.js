// Importing module

import { addToCart, totalPrice as price, totalQuantity, cart } from './shoopingCart.js'

import * as ShoopingCart from './shoopingCart.js'

// console.log('Importing module')

addToCart('Llave nuda 5"', 13)


// console.log(price, totalQuantity)


ShoopingCart.addToCart('Lonche de carne asada', 2)


// TODO Export default

import add from './shoopingCart.js'

add('Queso', 6)

// console.log(cart)

// TODO Top level await

// const res = await fetch('https://jsonplaceholder.typicode.com/posts')

// const data = await res.json();

// console.log(data)

// console.log('Last line of code')

const getLastPost = async function () {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await res.json();

    return { title: data.at(-1).title, text: data.at(-1).body }
}

const lastPost = getLastPost();
console.log(lastPost)


// Not very clean

// lastPost.then(res => {
//     console.log(res)
// })

const lastPost2 = await getLastPost()
console.log(lastPost2)