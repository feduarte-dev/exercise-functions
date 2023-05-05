function maisRepetido(array) {
  let repetido = array[0];

  for (index = 0; index < array.length; index += 1) {
    repetido = 0;
    for (index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index2] === array[index]) {
        repetido += 1;
      }
    }
  }
  console.log(repetido);
  return repetido;
}
function repeticoes(repetido) {
  let repeticoes = 0;
  if (repetido > repeticoes) {
    repeticoes = repetido;
    repetido = array[index];
  }
}

maisRepetido([2, 3, -2, 3, -2, 2, 3]);
