function indiceDoMaior(array) {
  let maiorNumero = 0;
  for (index = 0; index < array.length; index += 1) {
    if (array[index] > array[index + 1]) {
      maiorNumero = index;
    }
  }
  return maiorNumero;
  console.log(maiorNumero)
}
indiceDoMaior([2, 3, 6, 7, 10, 1]);
