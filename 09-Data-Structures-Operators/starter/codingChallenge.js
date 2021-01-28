// TODO  We're building a football betting app (soccer for my American friends �)!
// TODO  Suppose we get data from a web service about a certain game ('game' variable on
// TODO  next page). In this challenge we're gonna work with that data.
// TODO  Your tasks:
// TODO  1. Create one player array for each team (variables 'players1' and
// TODO  'players2')
// TODO  2. The first player in any player array is the goalkeeper and the others are field
// TODO  players. For Bayern Munich (team 1) create one variable ('gk') with the
// TODO  goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// TODO  field players
// TODO  3. Create an array 'allPlayers' containing all players of both teams (22
// TODO  players)
// TODO  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// TODO  new array ('players1Final') containing all the original team1 players plus
// TODO  'Thiago', 'Coutinho' and 'Perisic'
// TODO  5. Based on the game.odds object, create one variable for each odd (called
// TODO  'team1', 'draw' and 'team2')
// TODO  6. Write a function ('printGoals') that receives an arbitrary number of player
// TODO  names (not an array) and prints each of them to the console, along with the
// TODO  number of goals that were scored in total (number of player names passed in)
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
    printGoals: function(...players){
        let goal = 0;
        players.forEach(player => {
            goal ++;
            console.log(`${player} total score: ${goal}`);
        });
    }
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];

const players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const {odds : odds} = game
// const {team1: team1, x: draw, team2: team2} = odds
const {odds : {team1 : team1, x: draw, team2: team2 }} = game;


// game.printGoals('Pele', 'Maradona', 'Hugo Sanchez');
// game.printGoals(...game.scored);
console.log(team1);
console.log(team2);
let winner = team1<team2 && 'team 1 win' ||  team2<team1 && 'team 2 win'; 
console.log(winner);

console.log(players1);