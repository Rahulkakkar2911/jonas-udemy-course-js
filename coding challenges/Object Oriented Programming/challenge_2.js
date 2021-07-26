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

const ford = new Carcl('Ford', 120);
console.log(ford.getSpeedUs);
ford.setSpeedUs = 130;
ford.brake();
ford.accelerate();
ford.accelerate();

//Test Data :
// 75
// 'Ford' going at 203 km/h
// 'Ford' going at 213 km/h
// 'Ford' going at 223 km/h