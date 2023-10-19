const calculateFactors = (target) => {
  const factorsList = [];
  for (let i = 1; i <= Math.sqrt(target); i++) {
    if (target % i === 0) {
      factorsList.push([i, target / i]);
    }
  }

  console.log(
    "List of all possible products of two factors that add up to 900900:"
  );
  const results = factorsList.filter((factors) => factors[0] < factors[1]);
  results.forEach((factors) => {
    console.log(`${factors[0]} * ${factors[1]} = ${target}`);
  });
};

const target = 900900;

calculateFactors(target);
