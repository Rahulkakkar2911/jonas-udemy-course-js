const mark = {
  fullName: "Mark Miller",
  mass: 78,
  hieght: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.hieght ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  hieght: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.hieght ** 2;
    return this.BMI;
  },
};
john.calcBMI();
mark.calcBMI();

if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName} BMI (${john.BMI.toPrecision(5)}) is higher than ${
      mark.fullName
    } (${mark.BMI.toPrecision(5)})!`
  );
} else if (john.BMI < mark.BMI) {
  console.log(
    `${mark.fullName} BMI (${mark.BMI.toPrecision(5)}) is higher than ${
      john.fullName
    } (${john.BMI.toPrecision(5)})!`
  );
} else {
  console.log(`Both have same BMI :D`);
}

//Test Data: Mark Miller BMI (27.310) is higher than John Smith (24.195)!
