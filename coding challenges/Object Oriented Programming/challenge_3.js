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

//EV
function EV(name, speed, charge) {
	Car.call(this, name, speed);
	this.charge = charge;
}
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
	return this;
}
EV.prototype.accelerate = function () {
	this.speed += 20;
	this.charge--;
	console.log(`'${this.name}' going at ${this.speed} km/h, with a charge of ${this.charge}`);
	return this;
}

const tesla = new EV('Tesla', 120, 23);
console.table(tesla);