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

	console.log(`${playerNames.length} goals were scored`);
	for (const player of playerNames) {
		console.log(`Scored by ${player}`)
	}
}
printGoals(...game.scored);
team1 < team2 && console.log('Team 1 is more likely to Win');
team2 < team1 && console.log(`Team 2 is more likely to Win`);
//Test Data :
/*
4 goals were scored
Scored by Lewandowski
Scored by Gnarby
Scored by Lewandowski
Scored by Hummels
Team 1 is more likely to Win
*/