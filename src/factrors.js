const getFactors = (target) => {
  const factorsList = [];
  for (let i = 1; i <= Math.sqrt(target); i++) {
    if (target % i === 0) {
      factorsList.push([i, target / i]);
    }
  }
  return factorsList;
};

const calculate = () => {
  const target = 900900;
  const factorsList = getFactors(target);

  const results = [];
  factorsList.forEach((factors) => {
    if (factors[0] < factors[1]) {
      results.push(factors);
    }
  });

  console.log(
    "List of all possible products of two factors that add up to 900900:"
  );
  results.forEach((factors) => {
    console.log(`${factors[0]} * ${factors[1]} = ${target}`);
  });
};

calculate();
