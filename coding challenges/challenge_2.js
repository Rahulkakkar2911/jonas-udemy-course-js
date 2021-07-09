const markHieght = 1.88;
const markWieght = 95;

const johnHieght = 1.76;
const johnWieght = 85;

const markBMI = markWieght / markHieght ** 2;
const johnBMI = johnWieght / johnHieght ** 2;

if (markBMI > johnBMI) {
	console.log(`Mark's BMI (${markBMI.toPrecision(3)}) is higher than John's (${johnBMI.toPrecision(3)})`);
}
else {
	console.log(`John's BMI (${johnBMI.toPrecision(3)}) is higher than Mark's (${markBMI.toPrecision(3)})`);
}

// data 1 -> true
// data 2 -> false



