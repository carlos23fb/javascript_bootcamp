const printGoals = function (...players) {
    let goal = 0;
    players.forEach(player => {
        goal++;
        console.log(`${player} goal: ${goal}`);
    });

}




// TODO  We're building a football betting app (soccer for my American friends �)!
// TODO  Suppose we get data from a web service about a certain game ('game' variable on
// TODO  next page). In this challenge we're gonna work with that data.
// TODO  Your tasks:






// TODO  7. The team with the lower odd is more likely to win. Print to the console which
// TODO  team is more likely to win, without using an if/else statement or the ternary
// TODO  operator.
// TODO  Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// TODO  Then, call the function again with players from game.scored


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
    printGoals
};


// TODO  1. Create one player array for each team (variables 'players1' and
// TODO  'players2')
const [players1, players2] = game.players
// console.log(`players team 1:\n${players1}`);

// TODO  2. The first player in any player array is the goalkeeper and the others are field
// TODO  players. For Bayern Munich (team 1) create one variable ('gk') with the
// TODO  goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// TODO  field players

const [gk, ...fieldplayers] = [...players1]

// TODO  3. Create an array 'allPlayers' containing all players of both teams (22
// TODO  players)


const allPlayers = [...players1, ...players2]
// console.log(allPlayers);


// TODO  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// TODO  new array ('players1Final') containing all the original team1 players plus
// TODO  'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]
// console.log(players1Final);

// TODO  5. Based on the game.odds object, create one variable for each odd (called
// TODO  'team1', 'draw' and 'team2')

const {odds:{team1, x: draw, team2}} = game
// console.log(team1, draw, team2);


// TODO  6. Write a function ('printGoals') that receives an arbitrary number of player
// TODO  names (not an array) and prints each of them to the console, along with the
// TODO  number of goals that were scored in total (number of player names passed in)



game.printGoals(...game.scored)