const calcAverage = (score1, score2, score3) => {
	return ((score1 + score2 + score3) / 3).toPrecision(5);
}
const dolphinAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);

const checkWinner = (avgDolphin, avgKoalas) => {
	if (avgDolphin > avgKoalas) {
		return `Dolphins win (${avgDolphin} vs. ${avgKoalas})`;
	}
	else if (avgDolphin < avgKoalas) {
		return `Koalas win (${avgKoalas} vs. ${avgDolphin})`;
	}
}

const dolphinAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);


console.log(checkWinner(dolphinAverage1, koalasAverage1));//Test Data 1
console.log(checkWinner(dolphinAverage2, koalasAverage2));//Test Data 2

//Test Data 1: Koalas win (56.000 vs. 46.000)
//Test Data 2: Dolphins win (60.000 vs. 28.000)