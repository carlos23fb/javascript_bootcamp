'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function ({ starterIndex=1, mainIndex=0, time='20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },
};

// * Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
})


restaurant.orderDelivery({
  address: 'Via del Sol, 21'
})





// ? The order of the elements doesn't matter
const { name, categories, openingHours } = restaurant


// * New value name
const { name: restaurantName, openingHours: hours, categories: cat } = restaurant

// console.log(restaurantName, hours, cat)

// * Default Values

const { menu = ['no menu'], starterMenu: starters = [] } = restaurant

// console.log(menu, starters)

// * Mutating variables

let a = 111;
let b = 999;

// console.log(a,b)

const obj = { a: 23, b: 7, c: 14 };


({ a, b } = obj);

// console.log(a, b);

// * Nested objects

const { fri: { open, close } } = restaurant.openingHours

// console.log(open, close)



// * Destructuring Arrays

// const arr = [2, 3, 4]

// const [a, b, c] = arr

// console.log(a)

//* Switching variables

// let [main, ,secondary] = restaurant.categories;

// console.log(main, secondary);

// [main, secondary] = [secondary, main]

// console.log(main, secondary)


//* Receive 2 Values from a function 

// const [starter, mainCourse] = restaurant.order(2, 0)

// console.log(starter, mainCourse)

// const nested = [2, 3, [4, 5, 6]]

// const [i , , g] = nested

// console.log(i,g)

// const [i, ,[j, k]] = nested
// console.log(i,j,k)


//* Default Values

// const[p=1,q=1, r=1] = [8, 9]

// console.log(p, q, r)