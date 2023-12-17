//Max sum
const highestSum = (array) => {
  let menorSuma = array[0] + array[1];
  for (let i = 0; i < array.length - 1; i++) {
    const mayorSuma = array[i] + array[i + 1];
    if (mayorSuma > menorSuma) {
      menorSuma = mayorSuma;
    }
  }
  return menorSuma;
};

const arr = [0, 1, 5, 8];
const arr1 = [5, 9, 10, 15, 4];

console.log(highestSum(arr));
module.exports = highestSum;
