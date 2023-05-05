function indiceDoMenor(array) {
  let menorNumero = 0;
  for (index = 0; index <= array.length; index += 1) {
    if (array[index + 1] < array[index]) {
      menorNumero = index + 1;
    }
  }
  return menorNumero;
}
indiceDoMenor([2, 4, 6, 7, 10, 0, -3]);
