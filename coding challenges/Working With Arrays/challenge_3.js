const dogAges = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAgeHumanAge = (dogAges) => {
	let dogAgeinHumans = dogAges.map((age) => {
		if (age <= 2) {
			return 2 * age;
		}
		else {
			return 16 + (age * 4);
		}
	}).filter((age) => {
		if (age >= 18) {
			return age;
		}
	});
	console.log(dogAgeinHumans);
	const sum = dogAgeinHumans.reduce((acc, age) => {
		acc = acc + age;
		return acc;
	}, 0)

	const length = dogAgeinHumans.length;
	console.log(sum / length);
}
calcAverageHumanAgeHumanAge(dogAges);
//Test Data 1 :
// 44
//Test Data 2 :
// 47.333333333333336