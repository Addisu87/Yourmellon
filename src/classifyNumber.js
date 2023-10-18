const classifyNumber = (number) => {
  let sum = 0;
  for (let i = 1; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  if (sum < number) {
    return "Deficient Number";
  } else if (sum === number) {
    return "Perfect Number";
  } else {
    return "Abundant Number";
  }
};

const NumberTheory = () => {
  const readline = require("readline-sync");
  const number = parseInt(readline.question("Enter an integer: "));
  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid integer.");
  } else {
    const classification = classifyNumber(number);
    console.log(`${number} is a ${classification}.`);
  }
};

NumberTheory();
