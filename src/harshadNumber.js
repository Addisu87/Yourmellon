const harshadNumber = (number) => {
  const sumOfDigits = number
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, digit) => acc + digit, 0);

  return number % sumOfDigits === 0;
};

const calculate = () => {
  let readline = require("readline-sync");
  const number = parseInt(readline.question("Enter an integer: "));

  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid integer.");
  } else {
    const isNiven = harshadNumber(number);
    if (isNiven) {
      console.log(`{number} is a Harshad number.`);
    } else {
      console.log(`{number} is not a Harshad number.`);
    }
  }
};

calculate();
