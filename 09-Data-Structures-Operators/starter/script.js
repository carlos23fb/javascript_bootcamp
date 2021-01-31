'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


const openingHours = {
  [weekdays[3]]: {
    open: 12,
      close: 22,
    },
  [weekdays[4]]: {
    open: 11,
      close: 23,
    },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
      close: 24,
    }
}


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

 
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ time = '20:00', address, starterIndex = 1, mainIndex = 0 }) {
    console.log(`Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
  openingHours,
 
};

const orderSet = new Set('Pasta Pizza Pizza Risotto Pasta Pizza'.split(' '));

// console.log(orderSet);

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Garlic Bread'));
orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Risotto');
// console.log(orderSet);

// orderSet.clear();
// console.log(orderSet);


// for(const order of orderSet){
//   console.log(order);
// }


const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];


const stafUnique = [...new Set(staff)];
// console.log(stafUnique);

// console.log(new Set(staff).size);












// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({address: 'Boulevard del Parque, 77', starterIndex: 1})


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

const { menu: theMenu = [], starterMenu: starters = [] } = restaurant;
// console.log(theMenu, starters);

const { fri: { open, close } } = hours;
// console.log(open, close);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// console.log(...newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];


const myName = 'Juan';

const letters = [...myName, "'", 'S'];
// console.log(...letters);


// const ingredients = [prompt('ingredients1'), prompt('ingredients2'), prompt('ingredients3'),];

// restaurant.orderPasta(...ingredients);


const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function(...numbers){
//   let cumulative = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     cumulative += numbers[i];
//   }
//   console.log(cumulative);
// };


// const numbers = [3,3,3]


// add(...numbers);

let pizzaOrder = ['peperoni', 'aceitunas negras', 'chorizo', 'barbacoa'];

// restaurant.orderPizza(...pizzaOrder);

// restaurant.orderPizza && restaurant.orderPizza(...pizzaOrder);


// const guest = restaurant.guest || 10;
// console.log(guest);


// console.log('' || null);
// console.log('Juan' || null);
// console.log(null || undefined);
// const {openingHours} = restaurant;

// console.table(openingHours);



// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const days = 'mon tue wed thu fri sat sun'.split(' ');


// days.foreach(day => {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we are open at ${open}`);
// })

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we are open at ${open}`);
// }


// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Mehtod does not exist');


const users = [
  {
    name: 'Juan',
    email: 'juan@curso.com',
  }
]

// console.log(users[0]?.name ?? 'User array empty');


const properties = Object.keys(openingHours);
// console.log(properties);


// console.log(`We are open on ${properties.length}`);


const entries = Object.entries(openingHours);
// console.log(entries);

// console.table(entries)

// for(const x of entries){
//   console.log(x);
// }


// for(const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }


var lol = 0;
const lel = 1 ;


const myNumbers = [1,2,3,4,5,6,7,8];

const xnumbers = myNumbers.map(x => x * 2);

console.log(xnumbers);


const filterNumbers = myNumbers.filter(x => x%2 == 0).reduce((a, b) => a+b)
console.log(filterNumbers);



const fNumbers = myNumbers.reduce((a, b)  => a+b);
console.log(fNumbers);