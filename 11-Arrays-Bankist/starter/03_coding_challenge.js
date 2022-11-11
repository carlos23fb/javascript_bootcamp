// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10 % below the recommended portion(see hint).
// Your tasks:








// 25Hints:
// §
//     Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉

// Test data:
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];


// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property.Do
// not create a new array, simply loop over the array.Forumla:
// recommendedFood = weight ** 0.75 * 28.(The result is in grams of
// food, and the weight needs to be in kg)


dogs.forEach(dog => dog.recommendedFood = dog.weight ** 0.75 * 28)

// console.log(dogs)



// §
//     Being within a range 10 % above and below the recommended portion means:
//     current > (recommended * 0.90) && current < (recommended *
//         1.10).Basically, the current portion should be between 90 % and 110 % of the
// recommended portion.


const okAmount = function (dog) {
    return (dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10))
}

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little.Hint: Some dogs have multiple owners, so you first need to find Sarah in
//     the owners array, and so this one is a bit tricky(on purpose) 🤓



const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'))


// console.log(sarahDog.curFood > sarahDog.recommendedFood ? 'Is eating to much' : 'Is eating to little')



// 3. Create an array containing all owners of dogs who eat too much
//     ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
//         ('ownersEatTooLittle').

const {ownersEatTooMuch, ownersEatTooLittle} = dogs.reduce((owners, curr) => {
    curr.curFood > curr.recommendedFood ? owners.ownersEatTooMuch.push(curr.owners) : owners.ownersEatTooLittle.push(curr.owners)
    return owners
}, { ownersEatTooMuch: [], ownersEatTooLittle: [] })


// console.log(dogs)

// console.log(ownersEatTooMuch.flat())
// console.log(ownersEatTooLittle.flat())


// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

// console.log(`${ownersEatTooLittle.flat().join(' and ')} dogs eat to little!`)
// console.log(`${ownersEatTooMuch.flat().join(' and ')} dogs eat to much!`)


// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended(just true or false)

const anyHealtiDogo = dogs.map(dog => dog.curFood === dog.recommendedFood).some(dog => dog === true)

// console.log(anyHealtiDogo)

// 6. Log to the console whether there is any dog eating an okay amount of food
//     (just true or false)

const anykindOfHealtyDogo = dogs.map(dog => okAmount(dog)).some(dog => dog === true)

// console.log(anykindOfHealtyDogo)




// 7. Create an array containing the dogs that are eating an okay amount of food(try
// to reuse the condition used in 6.)


const healtyDogos = dogs.reduce((dogs, curr) => {
    if(okAmount(curr)){
        dogs.healty.push(curr)
    }
    return dogs
}, {healty: []})

console.log([...healtyDogos.healty])

const healty = healtyDogos.healty

console.log(healty)


// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order(keep in mind that the portions are inside the
// array's objects 😉)
// The Complete JavaScript Course

// console.log(dogs.flatMap(dog => dog.recommendedFood).sort((a,b) => a-b))


console.log(dogs.some(dog => okAmount(dog)))

console.log(dogs.filter(okAmount))