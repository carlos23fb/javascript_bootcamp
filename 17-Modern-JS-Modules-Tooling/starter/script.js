// Importing module

// import { addToCart, totalPrice as price, totalQuantity, cart } from './shoopingCart.js'

// import add, {cart}  from './shoopingCart.js'


// console.log('Importing module')

// addToCart('Llave nuda 5"', 13)


// console.log(price, totalQuantity)


// ShoopingCart.addToCart('Lonche de carne asada', 2)


// TODO Export default

// import add from './shoopingCart.js'

// add('Queso', 6)

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
};

// const lastPost = getLastPost();
// console.log(lastPost)


// Not very clean

// lastPost.then(res => {
//     console.log(res)
// })


// TODO Implementing Top level await

// const lastPost2 = await getLastPost()

// console.log(lastPost2)


// TODO The Module Pattern

const shoopingCart2 = (function () {
    const cart = []
    const shippingCost = 237
    const totalQuantity = 23
    const addToCart = function (product, quantity) {
        cart.push({ product: product, quantity: quantity })
        console.log(`${quantity} ${product} added to cart`)
    }

    return { shippingCost, addToCart, cart }
})();

// shoopingCart2.addToCart('Teclado gaymer', 23)

// console.log(shoopingCart2.cart)

// shoopingCart2.addToCart('Teclado gaymer', 23)

// TODO: CommonJs Modules

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

import { cloneDeep } from 'lodash-es';

const carlos = {
    name: 'Carlos',
    edad: 28,
    logginInfo: {
        current: true,
        isAdmin: false
    }
}

const newCarlos = cloneDeep(carlos)

newCarlos.name = 'Juan Carlos'

newCarlos.logginInfo.isAdmin = true

console.log(carlos)

console.log(newCarlos)

if(module.hot){
    module.hot.accept()
}