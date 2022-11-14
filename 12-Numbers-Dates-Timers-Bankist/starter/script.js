'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-11-12T01:36:17.929Z',
    '2022-11-12T01:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const interFormat = (locale, value, options) => new Intl.NumberFormat(locale, options).format(value)


const formatMovements = function (date, locale) {

  const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24))

  const daysPassed = Math.round(calcDaysPassed(new Date(), date))

  if (daysPassed === 0) return 'Today'
  if (daysPassed === 1) return 'Yesterday'
  if (daysPassed <= 7) return `${daysPassed} days ago`
  else {
    //   const day = `${date.getDate()}`.padStart(2, 0)
    //   const month = `${date.getMonth() + 1}`.padStart(2, 0)
    //   const year = date.getFullYear()
    //   return `${day}/${month}/${year}`

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short'
    }

    return Intl.DateTimeFormat(locale).format(date)
  }

}


const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i])


    const displayDate = formatMovements(date, acc.locale)

    const options = {
      style: 'currency',
      currency: acc.currency
    }

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${interFormat(acc.locale, mov, options)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {

  const options = {
    style: 'currency',
    currency: acc.currency
  }

  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${interFormat(acc.locale, acc.balance.toFixed(2), options)}`;
};

const calcDisplaySummary = function (acc) {
  const options = {
    style: 'currency',
    currency: acc.currency
  }
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${interFormat(acc.locale, incomes.toFixed(2), options)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${interFormat(acc.locale, Math.abs(out.toFixed(2)), options)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interFormat(acc.locale, interest.toFixed(2), options)}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;


currentAccount = account1
updateUI(currentAccount)
containerApp.style.opacity = 100;




btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();



  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short'
    }

    const locale = navigator.language


    // Experimenting API
    const now = new Date()
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)


    // const now = new Date()
    // const day = now.getDate()
    // const month = now.getMonth() + 1
    // const year = now.getFullYear()
    // const hour = now.getHours()
    // const minute = now.getMinutes()
    // labelDate.textContent = `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}, ${hour}:${minute}`

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// TODO Cheking and creating numbers

// console.log(23 === 23.0)

// console.log(0.1 + 0.2)

// Conversion
// console.log(Number('23'))
// console.log(+'23')

// Parsing

// console.log(Number.parseInt('30px'))

// console.log(Number.parseFloat('2.5.rem'))

// console.log(Number.isNaN('20'))
// console.log(Number.isNaN(20))

// Checking if value is a numbers
// console.log(Number.isFinite(20))
// console.log(Number.isFinite('20'))


// console.log(Math.sqrt(5))

// console.log(Math.max(5,18))


// console.log(Math.min(1, 2))


// console.log(Math.PI)


const randomInt = (min, max) => Math.flor(Math.random() * ((max - min) + 1) + min)

// console.log(randomInt(1, 3))

// * Rounding  integers

// console.log(Math.trunc(23.3))

// console.log(Math.round(23.4))


console.log('--------')


// console.log(Math.ceil(23.3))
// console.log(Math.ceil(23.9))


// Rounding decimals

// console.log((2.7).toFixed(0))


// console.log(5 % 2)


// TODO Remainder operator

const number_arr = [1, 2, 3, 4, 5, 6]

// number_arr.forEach(number => {
//   if (number % 2 === 0) { console.log(`${number}  is even`) } else console.log(`${number} is odd`)
// })


const any_even_number = number_arr.some(number => number % 2 === 0)
// console.log(any_even_number)

const { even, odds } = number_arr.reduce((lists, curr) => {
  curr % 2 === 0 ? lists.even.push(curr) : lists.odds.push(curr)
  return lists
}, { even: [], odds: [] })

// console.log(even)
// console.log(odds)





document.querySelector('.logo').addEventListener('click', e => {
  const allmovements = [...document.querySelectorAll(".movements__row")]

  allmovements.forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered'
  })
})

// TODO Numeric separators


// const diameter = 28_712_242_345_453;

// console.log(diameter)


// TODO BigInt

// console.log(123423545346456352532452346456n)
// console.log(BigInt(123123454523452345634563457))

//  TODO Dates


// * FIXME: Create a date


// const now = new Date()
// console.log(now)

// console.log(new Date('Nov 12 2022 19:43:04'))


// console.log(new Date('December 24, 2015'))

// console.log(new Date(account1.movementsDates[0]))

// console.log(new Date(2037, 10, 19, 15, 23, 51))

// ? Remember: like indexes months starts in 0 :) 

// console.log(new Date(2037, 10, 31))


// Working with dates

const future = new Date(2037, 10, 19, 15, 23)
// console.log(future)
// console.log(future.getFullYear())
// console.log(future.getMonth() + 1)
// console.log(future.getTime())

// console.log(new Date(2142282180000))

// console.log(Date.now())

// future.setFullYear(2040)
// console.log(future)

// TODO Operations with dates

// console.log(Number(future))
// console.log(+future)


const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24))
const days1 = calcDaysPassed(new Date(2037, 4, 14), new Date(2037, 3, 14))

// console.log(days1)

// Internationalizing numbers





const number1 = interFormat('es-MX', 13.5)


const numberOptions = {
  style: "currency",
  unit: 'celsius',
  currency: "MXN",
  useGrouping: false

}

console.log(interFormat(navigator.language, 1000000, numberOptions))