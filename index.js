const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

function calculateBMI(mass, height) {
  return mass / height ** 2;
}

console.log(calculateBMI(markMass, markHeight));
console.log(calculateBMI(johnMass, johnHeight));

// create a boolean variable MarkHigherBMI

const markHigherBMI =
  calculateBMI(markMass, markHeight) > calculateBMI(johnMass, johnHeight);

// challenge 2
if (markHigherBMI) {
  console.log(
    `mark BMI ${calculateBMI(markMass, markHeight).toFixed(
      3
    )} is higher than jonh ${calculateBMI(johnMass, johnHeight).toFixed(3)}`
  );
} else {
  console.log(
    `jonhBMI${calculateBMI(johnMass, johnHeight).toFixed(
      3
    )}is higher than mark${calculateBMI(markMass, markHeight).toFixed(3)}`
  );
}

//challengue 3
const dolphinsScore = [96, 108, 89];
const koalasScore = [88, 91, 110];

// OG mode
// function getAverageScore(score) {
//   let sum = 0;

//   for (let i = 0; i < score.length; i++) {
//     sum += score[i];
//   }
//   return sum / score.length;
// }

// medium lever

const getAverageScore = (score) => {
  const sum = score.reduce((acc, val) => acc + val);
  return sum / score.length;
};

const dolphinsAverage = getAverageScore(dolphinsScore);
const koalasAverage = getAverageScore(koalasScore);

console.log(dolphinsAverage, koalasAverage);
