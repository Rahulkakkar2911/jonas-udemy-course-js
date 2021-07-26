const calcAverageHumanAge = function (dogAges) {
	let DogAgeinHumanYears = [];
	DogAgeinHumanYears = dogAges.map((age) => {
		if (age <= 2) {
			return 2 * age;
		}
		else {
			return 16 + (age * 4);
		}
	});
	DogAgeinHumanYears = DogAgeinHumanYears.filter((age) => {
		if (age >= 18) {
			return age;
		}
	});
	console.log(DogAgeinHumanYears);
	const sum = DogAgeinHumanYears.reduce((acc, val) => {
		acc = acc + val;
		return acc;
	}, 0);
	console.log(sum / (DogAgeinHumanYears.length))
}
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
//Test Data 1:
// 44
//Test Data 2:
// 47.333333333333336