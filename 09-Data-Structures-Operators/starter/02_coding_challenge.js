const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// FIXME:  1. Loop over the game.scored array and print each player name to the console,
//     along with the goal number(Example: "Goal 1: Lewandowski")

// console.log(Object.entries(game.scored))

// Object.entries(game.scored).forEach(([index, player]) => console.log(`Goal ${Number(index) + 1}: ${player}`))

// FIXME: 2. Use a loop to calculate the average odd and log it to the console(We already
// studied how to calculate averages, you can go check if you don't remember)

/*
let avg_odds = Object.values(game.odds).reduce((el1, el2) => el1+el2) / Object.values(game.odds).length
console.log(avg_odds)*/

//Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them
//(except for "draw"). Hint: Note how the odds and the game objects have the

//Object.entries(game.odds).forEach(([key, odd])=>{
//    let team_name = game?.[key] ?? 'draw'
//    let message = game?.[key] && 'Odd of victory' || 'Odd of'
//    console.log(`${message} ${team_name}: ${odd}`);
//})

//Bonus: Create an object called 'scorers' which contains the names of the
//players who scored as properties, and the number of goals as the value. In this
//game, it will look like this:


// 


let scorers = {}

const players = game.scored

players.forEach(element=>{
    scorers[element] ? scorers[element] ++ : (scorers[element] = 1)
})


console.log(scorers)