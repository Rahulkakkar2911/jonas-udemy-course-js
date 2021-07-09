const billValue = 430;
const tip = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.2;

const totalTip = billValue * tip;
console.log(`The Bill was ${billValue}, the tip was ${totalTip.toPrecision(4)}, and the total value is ${(billValue + totalTip).toPrecision(5)}`);

//bill value 275: The Bill was 275, the tip was 41.25, and the total value is 316.3
//bill value 40: The Bill was 40, the tip was 8.000, and the total value is 48.000
//bill value 430: The Bill was 430, the tip was 86.00, and the total value is 516.00 