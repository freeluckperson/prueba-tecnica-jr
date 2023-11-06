// Dado un array de numeros devolver la suma de numeros pares

function sumaDePares(array) {
  const pares = array.filter((num) => num % 2 === 0);
  let suma = 0;
  for (const num of pares) {
    suma = suma + num;
  }
  return suma;
}

// console.log(sumaDePares([1, 2, 3, 4, 5, 6]));

module.exports = sumaDePares;
