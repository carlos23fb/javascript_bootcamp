const julia = [5, 2, 4, 1, 15, 8, 3]
const kate = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {

    const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
    console.log(humanAge)

    const adults = humanAge.filter(age => age >= 18)

    console.log(adults)

    const avg = adults.reduce((prev, curr) => prev + curr, 0) / adults.length

    return avg

}

console.log(calcAverageHumanAge(julia))