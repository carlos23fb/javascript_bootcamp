'use strict';

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
        team2: 1,
    },
};


// FIXME: Create one player array for each team (variables 'players1' and 'players2')

const [players1, players2] = game.players

// console.log(players1)
// console.log(players2)

// FIXME: The first player in any player array is the goalkeeper and the others are field
// players.For Bayern Munich(team 1) create one variable('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players


const [pk, ...fieldPlayers] = players1

// console.log(pk, fieldPlayers)

// 3 . FIXME: Create an array 'allPlayers' containing all players of both teams(22
// players)

const allPlayers = [...players1, ...players2]
// console.log(allPlayers ,allPlayers.length)

// FIXME: 4. During the game, Bayern Munich(team 1) used 3 substitute players.So create a
// new array('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutnho', 'Perisic']
// console.log(players1Final)

// FIXME: 5 . Based on the game.odds object, create one variable for each odd(called
// 'team1', 'draw' and 'team2')

const { team1, x: drawn, team2 } = game.odds

// console.log(team1, drawn, team2)

// FIXME: 6 . Write a function ('printGoals') that receives an arbitrary number of player
// names(not an array) and prints each of them to the console, along with the
// number of goals that were scored in total(number of player names passed in)


const printGoals = function(...players){
    players.forEach(player=>console.log(player))
    console.log(`Total Goals: ${players.length}`)
}

// printGoals('Jugador numero 1', 'Jugador numero 2')

// FIXME: 7. The team with the lower odd is more likely to win.Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

const winner_odd = game.odds.team1 < game.odds.team2 && 'Team 1' || 'Team 2'

console.log(winner_odd)