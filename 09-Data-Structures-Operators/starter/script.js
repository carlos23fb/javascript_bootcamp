'use strict';

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
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery : function({time = '20:00', address, starterIndex = 1, mainIndex = 0}){
    console.log(`Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
};


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({address: 'Boulevard del Parque, 77', starterIndex: 1})


// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// console.log(typeof(main));

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);


// TODO Nested Destructuring
// const nested = [1 , 2 , [3, 4]];

// const [a, b, [c, d]] = nested;
// console.log(a, b, c, d);

// TODO Default values

// const [x=-1, y=-1, z=-1] = [1,2]

// console.log(x, y, z);

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

const { name: restaurantName,
  openingHours: hours,
  categories: tags }
  = restaurant;
// console.log(restaurantName, hours, tags);

const {menu: theMenu = [], starterMenu: starters = []} = restaurant;
// console.log(theMenu, starters);

const {fri : {open, close}} = hours;
// console.log(open, close);