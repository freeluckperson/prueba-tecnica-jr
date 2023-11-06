/*Dado un string comprobar si es PALINDROMO. Palindromo: son palabras que se leen de izquierda a derecha y viceversa ejemplo => ana */

function espalindromo(palabras) {
  let palabraInvertida = "";
  for (let letter of palabras) {
    palabraInvertida = letter + palabraInvertida;
  }
  if (palabraInvertida === palabras) {
    return true;
  }
  return false;
}

module.exports = espalindromo;


