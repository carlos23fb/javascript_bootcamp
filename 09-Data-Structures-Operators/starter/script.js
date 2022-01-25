'use strict';




const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  openingHours: {
    thus: {
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
    }
  },
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Address: ${address}, time: ${time}, main: ${this.mainMenu[mainIndex]} starter: ${this.starterMenu[starterIndex]}`);
  }
};


restaurant.orderDelivery({
  address: "Mariano Escobedo #112"
})


// * Destructuring Objects

let { name: name_res, openingHours, categories } = restaurant;

// console.log(name_res, openingHours, categories);

// * Default Values
const { menu = [], starterMenu: stater = [] } = restaurant;


// * Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

// * Nested Objects

// let {thus, fri, sat} = restaurant.openingHours

let { fri: { open: o, close: c } } = restaurant.openingHours


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
})





// TODO Destructuring Arrays

// let [first, ,second] = restaurant.categories;

// [first, second] = [second, first]

// let [starter, main] = restaurant.order(2, 0);

// const nested = [2, 4, [5, 6]];

// const [i, j, [k, l]] = nested;

// console.log(restaurant.openingHours);

