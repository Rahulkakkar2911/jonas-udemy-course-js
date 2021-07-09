// Lecture - Values and Varaibles
let country = "India";
let continent = "Asia";
let population = 140;
console.log(country, continent, population);


//Lecture - Data Types
let country = "India";
let population = 140;
let isIsland = false;
let language = "Hindi";
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);
console.log(typeof isIsland);

//Lecture - let,const and var
const language = 'hindi';
const country = "India";
let population = 140;
const isIsland = false;
const continent = 'Asia';
continent = "europe";

//Lecture - Basic Operators
const language = 'hindi';
const continent = 'Asia';
const country = "India";
let population = 140;
const noOfPeopleInHalf = population / 2;
console.log(noOfPeopleInHalf);
population++;
console.log(population);
console.log(6 < population);
console.log(33 > population);
const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

//Lecture - Strings and Template Literals
let population = 140;
const country = 'India';
const continent = 'Asia';
const language = 'Hindi';
const description = `${country} is in ${continent}, its ${population} million people speak ${language}`;
console.log(description);

//Lecture - Taking decisions: is/else Statements
let population = 140;
const country = 'India';

if (population > 33) {
	console.log(`${country}'s population is above average`);
}
else {
	console.log(`${country}'s population is ${33 - population} millions below the average`);
}

// Lecture - type conversion and type coercion 
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//lecture - Equality Operators == vs. ===
//->html page is neccesory

//Test Case 1
const numNeighbours = prompt("How many neighbour countries does your country have?");
if (numNeighbours == 1) {
	console.log(`Only 1 border!`);
}
else if (numNeighbours > 1) {
	console.log(`More than 1 border`);
}
else {
	console.log(`No borders`);
}
//Test Case 2
const numNeighbours = prompt("How many neighbour countries does your country have?");
if (numNeighbours === 1) {
	console.log(`Only 1 border!`);
}
else if (numNeighbours > 1) {
	console.log(`More than 1 border`);
}
else {
	console.log(`No borders`);
}
//Test case 3
const numNeighbours = prompt("How many neighbour countries does your country have?");
numNeighbours = Number(numNeighbours);
if (numNeighbours === 1) {
	console.log(`Only 1 border!`);
}
else if (numNeighbours > 1) {
	console.log(`More than 1 border`);
}
else {
	console.log(`No borders`);
}
//Test Case 4
const numNeighbours = prompt("How many neighbour countries does your country have?");
numNeighbours = Number(numNeighbours);
if (numNeighbours == 1) {
	console.log(`Only 1 border!`);
}
else if (numNeighbours > 1) {
	console.log(`More than 1 border`);
}
else {
	console.log(`No borders`);
}

//lecture - Logical Operators
let population = 40;
const language = 'Hindi';
const country = "India";

if (language === "English" && population < 50) {
	console.log(`You Should Live in ${country} :)`);
}
else {
	console.log(`${country} does not meet your criteria :(`);
}

//Lecture - The Switch Statement
const language = "chinese";
switch (language) {
	case "mandarin":
	case "chinese":
		console.log(`MOST number of native speakers!`);
		break;
	case "spanish":
		console.log(`2nd place in number of native speakers!`);
		break;
	case "english":
		console.log(`3rd place`);
		break;
	case "hindi":
		console.log(`Number 4`);
		break;
	case "arabic":
		console.log(`5th most spoken language`);
		break;
	default:
		console.log(`Great language too :D`);
}

//Lecture - The Conditional (Ternary) Operator
const population = 140;
const country = "India"
population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);