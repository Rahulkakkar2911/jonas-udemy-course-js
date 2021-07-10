const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
for (let index = 0; index < bills.length; index++) {
	tips.push(calcTip(bills[index]));
	totals.push(bills[index] + tips[index]);
}
console.log(bills);
console.log(tips);
console.log(totals);

/*
Test Data 1:
[22, 295, 176,  440, 37, 105,  10, 1100, 86,  52]
[4.4, 44.25,  26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8]
[26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]
*/

//BONUS
function calcAverage(arr) {
	let sum = 0;
	for (let index = 0; index < arr.length; index++) {
		sum = sum + arr[index];
	}
	return (sum / (arr.length));
}
const totalAverage = calcAverage(totals);
console.log(totalAverage);