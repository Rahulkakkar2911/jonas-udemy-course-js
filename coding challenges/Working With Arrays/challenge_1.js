const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (julia, kate) {
	const juliaCorrected = [...julia];
	juliaCorrected.splice(-2);
	juliaCorrected.splice(0, 1);
	const mergedArray = [...juliaCorrected, ...kate];
	mergedArray.forEach((ele, index) => {
		if (ele >= 3) {
			console.log(`Dog number ${index + 1} is an adult, and is ${ele} years old`);
		}
		else {
			console.log(`Dog number ${index + 1} is still a puppy 🐶`);
		}
	})
}
checkDogs(dogsJulia, dogsKate);
//Test Data 1:
// Dog number 1 is an adult, and is 5 years old
// Dog number 2 is still a puppy 🐶
// Dog number 3 is an adult, and is 4 years old
// Dog number 4 is still a puppy 🐶
// Dog number 5 is an adult, and is 15 years old
// Dog number 6 is an adult, and is 8 years old
// Dog number 7 is an adult, and is 3 years old
//Test Data 2:
// Dog number 1 is an adult, and is 16 years old
// Dog number 2 is an adult, and is 6 years old
// Dog number 3 is an adult, and is 10 years old
// Dog number 4 is an adult, and is 5 years old
// Dog number 5 is an adult, and is 6 years old
// Dog number 6 is still a puppy 🐶
// Dog number 7 is an adult, and is 4 years old