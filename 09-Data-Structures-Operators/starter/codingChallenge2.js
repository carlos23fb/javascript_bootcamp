// TODO  1. Loop over the game.scored array and print each player name to the console,
// TODO      along with the goal number(Example: "Goal 1: Lewandowski")
// TODO  2. Use a loop to calculate the average odd and log it to the console(We already
// TODO  studied how to calculate averages, you can go check if you don't remember)
// TODO  3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// TODO  Odd of victory Bayern Munich: 1.33
// TODO  Odd of draw: 3.25
// TODO  Odd of victory Borrussia Dortmund: 6.5
// TODO  Get the team names directly from the game object, don't hardcode them
// TODO      (except for "draw").Hint: Note how the odds and the game objects have the
// TODO  same property names
// TODO  4. Bonus: Create an object called 'scorers' which contains the names of the
// TODO  TODO  players who scored as properties, and the number of goals as the value.In this
// TODO  game, it will look like this:
// TODO  {
// TODO      Gnarby: 1,
// TODO      Hummels: 1,
// TODO      Lewandowski: 2
// TODO  }
// TODO  GOOD LUCK

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


// for(const [goal, player] of Object.entries(game.scored)){
	
// 	console.log(`Goal ${Number(goal) + 1} of ${player}`);
// }
let total = 0;

for(const [key, odd] of Object.entries(game.odds)){
	total = total + odd;
}

// let averageOdd = total / Object.values(game.odds).length;
// console.log(averageOdd);



for(const [key, odd] of Object.entries(game.odds)){
	console.log(`Odd of ${game[key]} ${odd}`);
}

const scorers = {

};




const [team1, team2] = game.players;
const [...allPlayers] = [...team1, ...team2]



for(const player of allPlayers){
	const score = 
}