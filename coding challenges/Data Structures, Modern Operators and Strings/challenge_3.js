//data
const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '� Substitution'],
	[47, '⚽ GOAL'],
	[61, '� Substitution'],
	[64, '� Yellow card'],
	[69, '� Red card'],
	[70, '� Substitution'],
	[72, '� Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '� Yellow card'],
]);

const [...events] = new Set(gameEvents.values());
gameEvents.delete(64);
const computeLog = function (events) {
	for (const event of events) {
		console.log(`An ${event} happened, on average, every 9 minutes`);
	}
}
const computeLogAdvanced = function (map) {
	for (const [time, event] of map) {
		if (time <= 45) {
			console.log(`[FIRST HALF] ${time}: ${event}`);
		}
		else {
			console.log(`[SECOND HALF] ${time}: ${event}`);
		}
	}
}
computeLog(events);
computeLogAdvanced(gameEvents)
/*
An ⚽ GOAL happened, on average, every 9 minutes
An � Substitution happened, on average, every 9 minutes
An � Yellow card happened, on average, every 9 minutes
An � Red card happened, on average, every 9 minutes
[FIRST HALF] 17: ⚽ GOAL
[SECOND HALF] 47: ⚽ GOAL
[SECOND HALF] 61: � Substitution
[SECOND HALF] 69: � Red card
[SECOND HALF] 70: � Substitution
[SECOND HALF] 72: � Substitution
[SECOND HALF] 76: ⚽ GOAL
[SECOND HALF] 80: ⚽ GOAL
[SECOND HALF] 92: � Yellow card
*/
