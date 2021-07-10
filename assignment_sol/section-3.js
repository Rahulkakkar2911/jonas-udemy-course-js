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

//Lecture - Introduction to Arrays
function percentageOfWorld1(population) {
	return ((population / 7900) * 100).toPrecision(4) + " %";
}
const populations = [1380, 332, 5.5, 1440]
//	or
//const populations = new Array(1380, 332, 5.5, 1440); -> array constructor function
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

//Lecture - Basic Array Operations (Methods)
const neighbours = ["Sri Lanka", "Pakistan", "China", "Nepal", "Bhutan"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) {
	console.log(`Probably not a central European country :D`);
}

const countryToBeChanged = "Pakistan";
const indexOfCC = neighbours.indexOf(countryToBeChanged);
const countryToBeChangedWith = "Bangladesh";
neighbours[indexOfCC] = countryToBeChangedWith;

//Lecture - Introduction to Objects
const myCountry = {
	country: "India",
	capital: "Delhi",
	language: "Hindi",
	population: 1380,
	neighbours: ["Bhutan", "Myanmar", "Nepal", "Sri Lanka", "China", "Pakistan"]
}

//Lecture - Dot vs. Bracket Notation
const myCountry = {
	country: "India",
	capital: "Delhi",
	language: "Hindi",
	population: 1380,
	neighbours: ["Bhutan", "Myanmar", "Nepal", "Sri Lanka", "China", "Pakistan"]
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
myCountry["population"] = myCountry["population"] - 2;

//Lecture - Object Methods
const myCountry = {
	country: "India",
	capital: "Delhi",
	language: "Hindi",
	population: 1380,
	neighbours: ["Bhutan", "Myanmar", "Nepal", "Sri Lanka", "China", "Pakistan"],
	describe: function () {
		return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
	},
	checkIsland: function () {
		this.isIsland = this.neighbours.length === 0 ? true : false;
		return;
	}
}
myCountry.checkIsland();
console.log(myCountry.isIsland);
console.log(myCountry.describe());

//Lecture - Iteration: The for Loop
for (let voters = 1; voters <= 50; voters++) {
	console.log(`Voter number ${voters} is currently voting!`);

}

//Lecture - Looping Arrays, Breaking and continuing
const populations = [1380, 332, 5.5, 1440];
function percentageOfWorld1(population) {
	return ((population / 7900) * 100).toPrecision(4) + " %";
}
const percentages2 = []
for (let index = 0; index < populations.length; index++) {
	percentages2.push(percentageOfWorld1(populations[index]));
}
//previously created..
const percentages1 = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

let isEqual = true;
for (let index = 0; index < percentages1.length; index++) {
	if (percentages1[index] !== percentages2[index]) {
		isEqual = false;
		break;
	}
}
if (isEqual) {
	console.log(`Equal Values`);
}
else {
	console.log(`Not Equal Values`);
}

//Lecture - Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let index = 0; index < listOfNeighbours.length; index++) {
	let innerArray = listOfNeighbours[index];
	for (let index2 = 0; index2 < innerArray.length; index2++) {
		console.log(`Neighbour: ${innerArray[index2]}`);
	}

}
//Lecture - The while Loop
const populations = [1380, 332, 5.5, 1440];
function percentageOfWorld1(population) {
	return ((population / 7900) * 100).toPrecision(4) + " %";
}
const percentages2 = []
let index = 0;
while (index < populations.length) {
	percentages2.push(percentageOfWorld1(populations[index]));
	index++;
}

//previously created..
const percentages1 = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

let isEqual = true;
index = 0;
while (index < populations.length) {
	if (percentages1[index] !== percentages2[index]) {
		isEqual = false;
		break;
	}
	index++;
}
if (isEqual) {
	console.log(`Equal Values`);
}
else {
	console.log(`Not Equal Values`);
}