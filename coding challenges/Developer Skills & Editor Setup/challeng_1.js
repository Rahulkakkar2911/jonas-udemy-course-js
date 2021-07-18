const printForecast = function (arr) {
	let result = "";
	for (let index = 0; index < arr.length; index++) {
		result = result + `${arr[index]}°C in ${index + 1} days...`;
	}

	return ' ...' + result;
}
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
//Test Data 1:
//...17°C in 1 days...21°C in 2 days...23°C in 3 days...
//Test Data 2:
//...12°C in 1 days...5°C in 2 days...-5°C in 3 days...0°C in 4 days...4°C in 5 days...
