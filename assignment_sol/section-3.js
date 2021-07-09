//Lecture - Functions
function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} million people and its capital city is ${capitalCity} .`;
}

const country1 = describeCountry('India', '1380', 'Delhi');
const country2 = describeCountry('United States of America', '332', 'Washington D.C.');
const country3 = describeCountry('Finland', '5.5', 'Helsinki');
console.log(country1);
console.log(country2);
console.log(country3);

//Lecture - Function Declarations vs. Expressions
//function declaration
function percentageOfWorld1(population) {
	return ((population / 7900) * 100).toPrecision(4) + " %";
}

const popPercent1 = percentageOfWorld1(5.5);
const popPercent2 = percentageOfWorld1(1380);
const popPercent3 = percentageOfWorld1(332);
console.log(popPercent1);
console.log(popPercent2);
console.log(popPercent3);

//funtion expression
const percentageOfWorld2 = function (population) {
	return ((population / 7900) * 100).toPrecision(4) + " %";
}
const popPercent1 = percentageOfWorld2(5.5);
const popPercent2 = percentageOfWorld2(1380);
const popPercent3 = percentageOfWorld2(332);
console.log(popPercent1);
console.log(popPercent2);
console.log(popPercent3);

//Lecture - Arrow Functions

//if more than one parameter and with >= 1 line of function Body

const percentageOfWorld3 = (population) => {
	return ((population / 7900) * 100).toPrecision(4) + " %";
}
//if only 1 parameter and only one line of code
const percentageOfWorld3 = population => ((population / 7900) * 100).toPrecision(4) + " %";

const popPercent1 = percentageOfWorld3(5.5);
const popPercent2 = percentageOfWorld3(1380);
const popPercent3 = percentageOfWorld3(332);
console.log(popPercent1);
console.log(popPercent2);
console.log(popPercent3);

//Lecture - Functions calling other functions
const percentageOfWorld3 = population => ((population / 7900) * 100).toPrecision(4) + "%";
const describePopulation = function (country, population) {
	return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} of the world`;
}
console.log(describePopulation("India", 1380));
console.log(describePopulation("United States of America", 332));
console.log(describePopulation("Finland", 5.5));
