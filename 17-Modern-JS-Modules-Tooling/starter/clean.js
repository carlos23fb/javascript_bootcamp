'stric mode'
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

let spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});




// const getLimit = function (user) {
//   return 
// }

const getLimit = (user, limits) => limits?.[user] ?? 0




// TODO Pure function
const addExpense = function (state, limits, value, description, user = 'jonas') {

  const cleanUser = user.toLowerCase();

  return value <= getLimit(cleanUser, limits) ? [...state, { value: -value, description, user: cleanUser }] : state

};



const newBudget1 = addExpense(budget, spendingLimits, 100, 'Pizza 🍕');


const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');



// const checkExpenses = function () {
//   budget.forEach(entry => { if (entry.value < -getLimit(entry.user)) { entry.flag = 'limit' } })
// }



// const checkExpenses = function (state, limits) {
//   return state.map((entry)=>{
//     return entry.value < -getLimit(entry.user, limits) ? {...entry, flag: 'limit'} : entry 
//   })
// }

const checkExpenses = (state, limits) => state.map(entry => entry.value < -getLimit(entry.user, limits) ? { ...entry, flag: 'limit' } : entry)


const expenses1 = checkExpenses(newBudget2, spendingLimits)

console.log(expenses1)


const logbigExpenses = function (limit, state) {
  let output = '';
  for (let el of state) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logbigExpenses(100, newBudget2)



const logbigExpenses2 = function (limit, state) {
  return state.reduce((output, el) => {
    el.value <= -limit ? output += el.description.slice(-2) + ' / ' : ''
    return output
  }, '').slice(0, -2)
}

const result = logbigExpenses2(100, newBudget2)

console.log(result)