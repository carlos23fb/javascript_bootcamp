// Importing module

import { addToCart, totalPrice as price, totalQuantity, cart } from './shoopingCart.js'

import * as ShoopingCart from './shoopingCart.js'

console.log('Importing module')

addToCart('Llave nuda 5"', 13)


console.log(price, totalQuantity)


ShoopingCart.addToCart('Lonche de carne asada', 2)


// TODO Export default

import add from './shoopingCart.js'

add('Queso', 6)

console.log(cart)
