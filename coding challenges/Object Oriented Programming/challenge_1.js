function Car(name, speed = 0) {
	this.name = name;
	this.speed = speed;
}

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`'${this.name}' going at ${this.speed} km/h`);
	return this;
}
Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`'${this.name}' going at ${this.speed} km/h`);
	return this;
}

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();

//Test Data : 
// 'BMW' going at 130 km/h
// 'BMW' going at 140 km/h     
// 'BMW' going at 150 km/h     
// 'BMW' going at 145 km/h     
// 'BMW' going at 140 km/h     
// 'Mercedes' going at 105 km/h
// 'Mercedes' going at 115 km/h
// 'Mercedes' going at 110 km/h
// 'Mercedes' going at 105 km/h