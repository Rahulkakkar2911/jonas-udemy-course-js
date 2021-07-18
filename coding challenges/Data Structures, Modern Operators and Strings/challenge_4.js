

const textAreaEL = document.createElement('textarea')
document.body.append(textAreaEL);

const buttonEl = document.createElement('button');
document.body.append(buttonEl);
let string1 = "";
let arrayOfwords = [];

buttonEl.addEventListener('click', function () {
	textContent = textAreaEL.value;
	string1 += textContent
	arrayOfwords = Arrayfromstring(string1);
	arrayOfwords = convertUndercaseToCamelCase(arrayOfwords);
	console.log(arrayOfwords);
});

const Arrayfromstring = function (string3) {
	arrayOfwords = string3.split(' ')
	return arrayOfwords;
};

const convertUndercaseToCamelCase = function (array) {
	for (let index = 0; index < array.length; index++) {
		let [word1, word2] = array[index].toLowerCase().split('_');
		word2 = word2.charAt(0).toUpperCase() + word2.slice(1);
		array[index] = word1 + word2;
	}
	return array;
};

// Test Data :
// (5)["underscoreCase", "firstName", "someVariable", "calculateAge", "delayedDeparture"]
// underscore_case first_name Some_Variable calculate_AGE delayed_departure