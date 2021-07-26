'use strict';
//Starting Data
const btnPoll = document.querySelector('.poll');
const poll = {
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
	// This generates [0, 0, 0, 0]. More in the next section!
	answers: new Array(4).fill(0),
	registerNewAnswer() {
		const inputNumber = Number(prompt(`What is your favourite programming language?
		0: JavaScript
		1: Python
		2: Rust
		3: C++
		(Write option number)`));
		if (inputNumber < this.answers.length) {
			console.log(`Valid Option!`);

		}
		else {
			console.log(`Invalid Option`);
			return;
		}
		this.answers[inputNumber]++;
		this.displayResults('string');

	},
	displayResults(type = 'array') {
		if (type === 'array') {
			console.log(this.answers);
		}
		else {
			let [a, b, c, d] = this.answers;
			console.log(`Poll Results are : ${this.answers.join(', ')}`);
		}
	}


}
btnPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

//Bonus Solution
const answersGlobal = {
	answers: [1, 5, 3, 9, 6, 1]
}
poll.displayResults.call(answersGlobal, 'string');
// Result:
// Poll Results are : 5, 2, 3
poll.displayResults.call(answersGlobal)
//Result:
//(6) [1, 5, 3, 9, 6, 1]
//Bonus Test Data:
// Data 1: [5, 2, 3]
//  Data 2: [1, 5, 3, 9, 6, 1]
