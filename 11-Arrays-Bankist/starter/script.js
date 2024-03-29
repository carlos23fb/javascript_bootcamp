'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements
  movs.forEach((mov, i) => {

    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type.toUpperCase()}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>
        `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}




const calcDisplaySummary = function (acc) {


  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((prev, current) => prev + current)
  labelSumIn.textContent = `${incomes}$`


  const withdrawals = acc.movements
    .filter(mov => mov < 0)
    .reduce((prev, current) => prev + current)
  labelSumOut.textContent = `${Math.abs(withdrawals)}$`


  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((prev, curr) => prev + curr)

  labelSumInterest.textContent = `${interest}$`

}



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// TODO: Sort movements


let sorted = false

btnSort.addEventListener('click', (e) => {
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})


// TODO: Some and every


btnLoan.addEventListener('click', (e) => {
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    currentAccount.movements.push(amount)
    updateUi(currentAccount)
    inputLoanAmount.value = ''
    inputLoanAmount.blur()
  }
})


// TODO: The findIndex method (Delete account)

btnClose.addEventListener('click', (e) => {
  e.preventDefault()

  if (currentAccount.username === inputCloseUsername.value && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)

    accounts.splice(index, 1)
    containerApp.style.opacity = 0;
    console.log(accounts)

  }
  inputClosePin.value = inputCloseUsername.value = ''
  inputClosePin.blur()
  inputCloseUsername.blur()

})


// TODO: Implementing login

let currentAccount;

btnLogin.addEventListener('click', (event) => {

  // ? Prevent from for submiting

  event.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {

    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`


    containerApp.style.opacity = 100;

    // TODO: Clear input fields

    inputLoginUsername.value = inputLoginPin.value = ''

    inputLoginPin.blur();
    inputLoginUsername.blur();

    // * FIXME: Display balance, movements and summary of the current user

    updateUi(currentAccount)


  }


})

// TODO: Display Info

const updateUi = function (acc) {

  calcDisplayBalance(acc)

  displayMovements(acc.movements)

  calcDisplaySummary(acc)

}


// TODO: Implementing Transfers

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value)

  const reciverAcc = accounts.find(acc => acc.username === inputTransferTo.value)

  inputTransferAmount.value = ''
  inputTransferTo.value = ''

  inputTransferAmount.blur()
  inputTransferTo.blur()

  if (amount > 0 && amount
    <= currentAccount.balance
    && reciverAcc
    && reciverAcc.username !== currentAccount.username) {
    console.log(amount, reciverAcc)

    currentAccount.movements.push(-amount)
    reciverAcc.movements.push(amount)

    updateUi(currentAccount)

    console.log(currentAccount.balance)

  }

})



// TODO Calculating balance


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((prev, curr) => prev + curr)
  labelBalance.textContent = `${acc.balance}$`

}


// TODO Computing usernames

const user = 'Steven Thomas Williams'; // stw

const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('')
  })
}

createUserName(accounts)

// console.log(account1.username)

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ! LECTURES Section 11

// TODO Array methods practice

// * TODO: num 1

const bankDepositsum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((prev, curr) => prev + curr)

// console.log(bankDepositsum)

// * TODO: num 2

// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length

// console.log(numDeposits1000)


const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) =>
  (cur >= 1000 ? count + 1 : count), 0)

// console.log(numDeposits1000)


// * TODO: num 3

const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
  return sums
}, { deposits: 0, withdrawals: 0 })

// console.log(deposits, withdrawals)

// * TODO: num 4

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

  const capitalize = str =>  str[0].toUpperCase() + str.slice(1);

  const titleCase = title.toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ')
  return capitalize(titleCase)

}

console.log(convertTitleCase('this is A nice title'))
console.log(convertTitleCase('And here is another title with an example'))



// TODO More ways of creating and filling arrays

const arr = [1, 2, 3, 4, 5, 6, 7]

// console.log(new Array(1, 2, 3, 4, 5, 6, 7))

// * Empty arrays + fill method

const x = new Array(7)

// console.log(x)

// console.log(x.map(() => 5))

x.fill(1, 3, 5)
x.fill(1)
// console.log(x)


arr.fill(23, 2, 6)

// console.log(arr)

// * Array.from

const y = Array.from({ length: 7 }, () => 1)
// console.log(y)

const z = Array.from({ length: 7 }, (_, i) => i + 1)
// console.log(z)

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent));

  console.log(movementsUI)
})



// TODO Sorting Arrays

const owners = ['Jonas', 'Zach', 'Adam', 'Martha']

// console.log(owners.sort())

// ? Sort method also mutates the array
// console.log(owners)

// Sorting numbers

// console.log(movements)

// * Ascending
movements.sort((a, b) => {
  if (a > b) return 1
  if (b > a) return -1
})

// console.log(movements)

// * Descending
movements.sort((a, b) => {
  if (a > b) return -1
  if (b > a) return 1
})

// console.log(movements)

// TODO flat and flatMap


// * FIXME: flat

const my_arr = [[1, 2, 3], [4, 5, 6], 7, 8]

// console.log(arr.flat())

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]



const flatten = function (items) {

  const arr = []

  items.forEach(item => {
    if (Array.isArray(item)) {
      arr.push(...flatten(item))
    } else {
      arr.push(item)
    }
  })
  return arr
}


// console.log(flatten(arrDeep))

// const accountsMovements = accounts.map(acc => acc.movements)

// console.log(accountsMovements.flat().reduce((prev, curr) => prev + curr))
// console.log(accountsMovements.flat().reduce((prev, curr) => prev + curr))

const accountsMovements = accounts.map(acc => acc.movements).flat().reduce((prev, curr) => prev + curr)

// console.log(accountsMovements)

const overalBalance = accounts.flatMap(acc => acc.movements).reduce((prev, curr) => prev + curr)

// console.log(overalBalance)

// console.log(flatten(accountsMovements).reduce((prev, curr) => prev + curr))


// TODO some and every

// * some

// console.log(movements)

// * FIXME: EQUALITY

// console.log(movements.includes(-130))

// * FIXME: CONDITION

const anyDepostis = movements.some(mov => mov === -130)

// console.log(movements.some(mov=> mov > 0))

// console.log(anyDepostis)

// * every

// ? Every element in the array needs to fullfill the condtion in order to return true

// console.log(movements.every(mov => typeof (mov) === 'number'))
// console.log(movements.every(mov => typeof (mov) === 'string'))

// console.log(account4)
// console.log(account4.movements.every(mov => mov > 0))


// TODO Separate callback

const deposit = mov => mov > 0;

// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))


// TODO The find method

const firstWithdrawal = movements.find(mov => mov < 0)

// console.log(movements)
// console.log(firstWithdrawal)

// console.log(accounts.find(acc => acc.username === 'jd'))

// let account

// for (const acc of accounts) {
//   if (acc.username === 'jd') { 

//     account = acc 
//   }
// }

// console.log(account)

// TODO Chaining methods

const euroToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => mov * euroToUsd)
  .reduce((prev, curr) => prev + curr)


// TODO The Reduce method

const balance = movements.reduce((prev, current) => prev + current)

// console.log(balance)


// * FIXME: Maximum value


const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0])

// console.log(max)



// TODO The Filter method


// const deposits = movements.filter(movement => movement > 0)

// const withdrawals = movements.filter(movement => movement < 0)

// console.log(deposits)

// console.log(withdrawals)




// TODO The Map method


// const euroToUsd = 1.1;

// const eurConversion = movements.map(movement => Math.fround(movement * euroToUsd))

// console.log(eurConversion)


const movementsDescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1} You deposited ${mov}`
  } else {
    return `Movement ${i} You withdrew ${Math.abs(mov)}`
  }
})

// console.log(movementsDescription)

// TODO Data transormation: map, filter, reduce

// ? FIXME: Map method returns an array of results

const mapResult = [3, 1, 4, 3, 2].map(current => current * 2)

// console.log(mapResult)


// ? FIXME: Filter method returns a new array contains the array elements that passed a specified test condition

const filterResult = [3, 1, 4, 3, 2].filter(current => current > 2)

// console.log(filterResult)

// ? FIXME: Boils 'reduces' all array elements down to one single value

const reduceResult = [3, 1, 4, 3, 2].reduce((prev, current) => prev + current)

// console.log(reduceResult)


// TODO forEach on Maps and Sets

// * FIXME: With Maps

// currencies.forEach((value, key, map)=>{
//   console.log(value, key)
// })

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

// console.log(currenciesUnique)

// currenciesUnique.forEach((value, key, set)=>{
//   console.log(value, key)
// })


// TODO Looping Arrays: forEach

// for(const movement of movements){
//   if(movement > 0){
//     console.log(`You deposited ${movement}`)
//   }else{
//     console.log(`You withdrew ${Math.abs(movement)}`)
//   }
// }

// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movement ${i} You deposited ${mov}`)
//   } else {
//     console.log(`Movement ${i} You withdrew ${Math.abs(mov)}`)
//   }
// })

// console.log(Object.entries(movements))


// Object.entries(movements).forEach(([index, value]) =>{
//   console.log(index, value)
// })

// ? 'break' and 'continue' doesnt work in forEach loops




// TODO New at method

// const arr = [23, 11, 64];

// console.log(arr[0])

// console.log(arr.at(0))

// ? Get the least element from an array with traditional logic

// console.log(arr[arr.length - 1])

// console.log(arr.slice(-1)[0])


// ? Example with at method

// console.log(arr.at(-1))


// TODO Simple Array functions

// * FIXME: Slice Method

// let arr = 'a,b,c,d,e'.split(',')

// ? It return a new array, arguments(start, end)
// ? The end element d

// console.log(arr.slice(0, arr.indexOf('c')+1))

// console.log(arr.slice())

// * FIXME: Splice Method

// ? Very similar to slice method but instead of return a new array, mutate the actual array

// console.log(arr.splice(2))
// console.log(arr)

// * FIXME: Reverse

// const arr = 'a,b,c,d,e'.split(',')
// const arr2 = 'j,i,h,g,f'.split(',')


// ? The reverse method mutates the array

// console.log(arr2.reverse())
// console.log(arr2)

// * FIXME: Concat method

// const letters = arr.concat(arr2)

// console.log(letters)

// console.log(arr)

// * FIXME: Join method

// console.log(letters.join(' - '))

