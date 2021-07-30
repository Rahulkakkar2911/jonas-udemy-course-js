class Carcl {
	constructor(name, speed = 0) {
		this.name = name;
		this.speed = speed;
	}
	accelerate() {
		this.speed += 10;
		console.log(`'${this.name}' going at ${this.speed} km/h`);
	}
	brake() {
		this.speed -= 5;
		console.log(`'${this.name}' going at ${this.speed} km/h`);
	}
	get getSpeedUs() {
		return this.speed / 1.6;
	}
	set setSpeedUs(speedinUs) {
		this.speed = speedinUs * 1.6;
	}
}
class EVCl extends Carcl {
	#charge;
	constructor(name, speed, charge) {
		super(name, speed);
		this.#charge = charge;
	}
	chargeBattery(chargeTo) {
		this.#charge = chargeTo;
		return this;
	}
	accelerate() {
		this.speed += 20;
		this.#charge--;
		console.log(`'${this.name}' going at ${this.speed} km/h, with a charge of ${this.#charge}`);
		return this;

	}
}

const tesla = new EVCl('Tesla', 120, 23);
console.log(tesla);