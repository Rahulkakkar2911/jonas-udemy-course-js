const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(function (obj) {
	obj.recommendedFood = Math.trunc(obj.weight ** 0.75 * 28);
});
dogs.forEach(function (obj) {
	if (obj.owners.includes('Sarah')) {
		if (obj.curFood > obj.recommendedFood) {
			console.log(`Sarah Dog Eats Too Much`);
		} else {
			console.log(`Sarah Dog Eats Too Little`);
		}

	}
});
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach(function (obj) {
	//Too much
	if (obj.curFood > obj.recommendedFood) {
		obj.owners.forEach(name => {
			ownersEatTooMuch.push(name);
		})
	}
	else {
		obj.owners.forEach(name => {
			ownersEatTooLittle.push(name);
		})
	}
});
let str1 = '';
str1 = ownersEatTooMuch.join(' and ');

let str2 = '';
str2 = ownersEatTooLittle.join(' and ');

console.log(`${str1}'s dogs eat too much!`);
console.log(`${str2}'s dogs eat too little!`);
let isRecFoodEqCurFood = false;
let isOkayDietOfADog = false;
for (const obj of dogs) {
	if (obj.curFood === obj.recommendedFood) {
		isRecFoodEqCurFood = true;
		break;
	}

}

const dogsOkayDiet = []

for (const obj of dogs) {
	if (obj.curFood > (obj.recommendedFood * 0.90) && obj.curFood < (obj.recommendedFood *
		1.10)) {
		isOkayDietOfADog = true;
		break;
	}
}
for (const obj of dogs) {
	if (obj.curFood > (obj.recommendedFood * 0.90) && obj.curFood < (obj.recommendedFood *
		1.10)) {
		dogsOkayDiet.push(...obj.owners)

	}
}
console.log(`Is a Dog is eating as, CurrentFood = Recommended Food : ${isRecFoodEqCurFood}`);
console.log(`Is a Dog is Eating an Okay Diet : ${isOkayDietOfADog}`);
console.log(dogsOkayDiet);
const shallowDogs = [...dogs]
shallowDogs.sort(function (x, y) {
	return x.recommendedFood - y.recommendedFood
}
)
console.log(shallowDogs);