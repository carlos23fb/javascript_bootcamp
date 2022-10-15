'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
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
};


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,




  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
};

// TODO Looping Objects

const props = Object.keys(openingHours)
// console.log(props)
let openStr = `We are open on ${props.length} days: `

props.forEach(day => {
  openStr += `${day}, `
})

// console.log(openStr)


// console.log(Object.values(openingHours))


// FIXME: Loop boot keys and values

Object.entries(openingHours).forEach(([key, {open, close}]) => {
  console.log(`Day ${key}, open: ${open}, closed: ${close}`)
})


// TODO Optional Chaining

// console.log(restaurant.openingHours.mon && restaurant.openingHours.mon.open || 'Closed in mondays')


// FIXME: With optional Chaining

// console.log(restaurant.openingHours?.mon?.open)


// TODO Loop days array and check if is open that day

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']


// days.forEach(day=>{

//   const opening_hour = restaurant.openingHours[day]?.open ?? 'Closed'

//   console.log(opening_hour)

// })

// FIXME: Optional Chaining with methods

// console.log(restaurant.order?.(0,1) ?? "Method doest exist")
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doest exist")

// FIXME: Arrays with optional Chaining

const users = [{ name: 'Juan', email: 'carlos@email.com' }]

// console.log(users[0]?.name ?? 'User Doesnt exist')
// console.log(users[1]?.name ?? 'User Doesnt exist')




// TODO Enhaced Object Literals

// console.log(restaurant.openingHours)

// TODO Looping Arrays

let info_array = []

for (const word of "Juan Carlos Flores Becerra".split(" ").entries()) {

  info_array.push({ index: word[0], value: word[1], length: word[1].length })

};


// const all_menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for(const [i, element] of all_menu.entries() ){
//   console.log(`${i+1}. ${element}`)
// };



// TODO Logical assignmet operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};


// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests ||10;

// * Or assignmet operator

rest1.numGuests ??= 30;
rest2.numGuests ||= 30;


// console.log(rest1)
// console.log(rest2)

// rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= "<ANONYMOUS>"
rest2.owner &&= "<ANONYMOUS>"

// console.log(rest1)
// console.log(rest2)


// TODO Nullish Coalescing Operator

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;

// console.log(guests)

// ? Nullish values are: null and undefined (not "" or 0 )
const guestCorrect = restaurant.numGuests ?? 11;
// console.log(guestCorrect)


// TODO Short Circuiting (&& and ||)

// FIXME: Short Circuiting with functions example

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms', 'spinach', 'onions')

// }

// restaurant.orderPizza && restaurant.orderPizza('Pepperoni', 'Sauce')


// ? Logic operators can USE and RETURN any data type, short-circuiting

// FIXME: OR 

// console.log(false || null)

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1)


// console.log(guests2)


// FIXME: AND

// console.log(0 && 'Jonas')
// console.log(7 && 'Jonas')
// console.log(7 && 'Jonas' && null && 1)


// TODO Rest pattern

// FIXME: Using rest pattern in the restaurant object 


// restaurant.orderPizza('Pinaple', 'Jam', 'Cheese')

// FIXME: 1) Destructuring 

// ? Spread, because on the RiGHT side of =
const arr = [1, 2, ...[3, 4]];


// ? Rest, because on the LEFT side of =

const [a, b, ...others] = [1, 2, 3, 4, 5]

// console.log(a, b, others)

const [pizza, , rissotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]


// console.log(pizza, rissotto, otherFood)

// * Rest pattern with objects


// const { fri, ...weekDays } = restaurant.openingHours

// console.log(fri, weekDays)

// FIXME: 2) functions

const add = function (...numbers) {
  let cumulative_sum = numbers.reduce((a, b) => a + b)
  console.log(cumulative_sum)
}

// add(2, 3)
// add(5, 3, 7, 2)
// const x = [1, 2, 4]

// add(...x)



// TODO * Spread Operator

// * Real world example with objects

// const newRestaurantObj = {restaurant}

// newRestaurantObj.name = "Classico Italiano 2"


// console.log(newRestaurantObj.name)

// console.log(restaurant.name)



// * restaurant function with spread operator
// const ingridients = [prompt('Let\'s make pasta! Ingridient 1?'), prompt('Ingridient 2?'), prompt('Ingridient 3?')]

// restaurant.orderPasta(...ingridients)

// const arr = [7, 8, 9]

// const newARR = [5, 6, ...arr]

// console.log(newARR)

// console.log(...newARR)

const newMenu = [...restaurant.mainMenu, 'Gnocci']

// console.log(newMenu)

// Copy Arrays
const mainMenuCopy = [...restaurant.mainMenu]


//* Join 2 arrays

const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]

//* console.log(allMenu)
let myName = 'Juan'
const arrName = [..."Juan"]
// console.log(arrName)





// TODO Destructuring Objects

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sol, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })


// restaurant.orderDelivery({
//   address: 'Via del Sol, 21'
// })





// ? The order of the elements doesn't matter
// const { name, categories, openingHours } = restaurant


// * New value name
// const { name: restaurantName, openingHours: hours, categories: cat } = restaurant

// console.log(restaurantName, hours, cat)

// * Default Values

const { menu = ['no menu'], starterMenu: starters = [] } = restaurant

// console.log(menu, starters)

// * Mutating variables

// let a = 111;
// let b = 999;

// console.log(a,b)

// const obj = { a: 23, b: 7, c: 14 };


// ({ a, b } = obj);

// console.log(a, b);

// * Nested objects

// const { fri: { open, close } } = restaurant.openingHours

// console.log(open, close)



// TODO Destructuring Arrays

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