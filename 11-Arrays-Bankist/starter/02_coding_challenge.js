const julia = [5, 2, 4, 1, 15, 8, 3]
const kate = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge  = ages => {

    return ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((prev, curr, i, arr) => prev + (curr / arr.length), 0)
}

console.log(calcAverageHumanAge(julia))