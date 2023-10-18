const rings = ["agate", "diamond", "diamond", "citrine"];
const hands = ["right", "left"];
const validCombinations = [];

const isValid = (comb) => {
  const fingerCounts = {
    right: 0,
    left: 0,
  };

  for (const [ring, hand] of comb) {
    if (hand === "right" && fingerCounts["right"] < 2) {
      fingerCounts["right"]++;
    } else if (hand === "left" && fingerCounts["left"] < 2) {
      fingerCounts["left"]++;
    } else {
      return false;
    }
  }

  return true;
};

const ringCombinations = (comb, ringIndex, handIndex) => {
  if (comb.length === 4) {
    if (isValid(comb)) {
      validCombinations.push([...comb]);
    }
    return;
  }

  for (let i = ringIndex; i < rings.length; i++) {
    for (let j = handIndex; j < hands.length; j++) {
      comb.push([rings[i], hands[j]]);
      ringCombinations(comb, i, j);
      comb.pop();
    }
  }
};

ringCombinations([], 0, 0);

console.log("365 Possible Combinations:");
validCombinations.slice(0, 365).forEach((comb, index) => {
  console.log(`Combination ${index + 1}: ${comb.join(", ")}`);
});

console.log(`Total number of valid Combinations: ${validCombinations.length}`);
