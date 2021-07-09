const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;
const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;

const dolphinAverage = (dolphins1 + dolphins2 + dolphins3) / 3;
const koalaAverage = (koalas1 + koalas2 + koalas3) / 3;
const minScore = 100;

if (dolphinAverage > koalaAverage && (dolphinAverage >= minScore)) {

	console.log(`Team Dolphins Wins the Trophy by ${((dolphinAverage - koalaAverage) * 3).toPrecision(4)}`);

}
else if (dolphinAverage < koalaAverage && (koalaAverage >= minScore)) {
	console.log(`Team koalas Wins the Trophy by ${((koalaAverage - dolphinAverage) * 3).toPrecision(4)}`);
}
else {
	if (koalaAverage >= minScore && dolphinAverage >= minScore) {
		console.log(`Its a Draw!`);
	}
	else
		console.log(`No one wins the game`);
}
//TEST DATA: No one wins the game
//TEST DATA BONUS 1: Team koalas Wins the Trophy by 17.00
//TEST DATA BONUS 2: Its a Draw!


