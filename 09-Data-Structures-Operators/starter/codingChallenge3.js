'use strict';


const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '🔶 Yellow card'],
]);


// TODO Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())]

// TODO After the game has finished, is was found that the yellow card from minute 64
// TODO was unfair.So remove this event from the game events log.


for(const [minute, event] of gameEvents.entries()){
	if(minute >= 45){
		console.log(`[SECOND FALF] ${minute}: ${event}`);
	}else{
		console.log(`[FIRST FALF] ${minute}: ${event}`);
	}
}