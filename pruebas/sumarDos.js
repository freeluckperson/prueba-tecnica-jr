//
//Crea una funcion que reciba como primer parametro un array
// y como segundo parametro un numero que sera el resultado de sumar
// dos valores del array

//Ejemplo
// sumarDos([1, 3, 9, 8, 2], 10)  [8, 2] --> resultado

// function sumarDos(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return "No Hay elementos que cumplan la condicion";
// }

function sumarDos(arr, num) {
  for (const num1 of arr) {
    for (const num2 of arr) {
      if (num1 + num2 === num) {
        return [num1, num2];
      }
    }
  }
  return "No Hay elementos que cumplan la condicion";
}

const resultado = sumarDos([1, 3, 9, 8, 2], 10);
console.log(resultado);


