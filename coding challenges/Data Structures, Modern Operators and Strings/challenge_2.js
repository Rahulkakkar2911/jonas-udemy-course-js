//Data
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
const [players1, players2] = game.players;
const [gk, ...fieldPlayers1] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { odds: { team1, x: draw, team2 } } = game;
const printGoals = function (...playerNames) {
	for (const [index, playerName] of playerNames.entries()) {
		console.log(`Goal ${index + 1}: ${playerName}`);
	}
}
const printAvgOdds = function (odds) {
	let sum = 0
	for (const [key, value] of Object.entries(odds)) {
		sum = sum + value;
	}
	return (sum / 3).toPrecision(4);
}
const printOdds = function (game) {
	const { team1, team2, odds: { team1: team1odd, x: draw, team2: team2odd } } = game;
	console.log(`Odd of victory ${team1}: ${team1odd}`);
	console.log(`Odd of draw : ${draw}`);
	console.log(`Odd of victory ${team2}: ${team2odd}`);


}

const scorers = {
	[game.scored[1]]: 1,
	[game.scored[3]]: 1,
	[game.scored[0]]: 2,
}
console.log(scorers);
printGoals(...game.scored);
printAvgOdds(game.odds);
printOdds(game);
//Test Data :
/*
Goal 1: Lewandowski
Goal 2: Gnarby
Goal 3: Lewandowski
Goal 4: Hummels
Odd of victory Bayern Munich: 1.33
Odd of draw : 3.25
Odd of victory Borrussia Dortmund: 6.5
*/
//BONUS
// { Gnarby: 1, Hummels: 1, Lewandowski: 2 }